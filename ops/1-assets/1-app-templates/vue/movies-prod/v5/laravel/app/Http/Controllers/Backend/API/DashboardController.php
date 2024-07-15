<?php

namespace App\Http\Controllers\Backend\API;

use App\Http\Controllers\Controller;
use App\Models\Branch;
use App\Models\BranchGallery;
use App\Models\User;
use Illuminate\Http\Request;
use Modules\Booking\Models\Booking;
use Modules\Category\Models\Category;
use Modules\Category\Transformers\CategoryResource;
use Modules\Employee\Transformers\EmployeeResource;
use Modules\Product\Models\Cart;
use Modules\Service\Models\Service;
use Modules\Service\Models\ServiceGallery;
use Modules\Service\Transformers\ServiceResource;
use Modules\Slider\Models\Slider;
use Modules\Slider\Transformers\SliderResource;

class DashboardController extends Controller
{
    public function dashboardDetail(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $branchId = $request->input('branch_id'); // Assuming the branch ID is passed in the request
        $user_id = $request->input('user_id');
        $branch = Branch::find($branchId);

        if (! $branch) {
            return response()->json(['status' => false, 'message' => __('branch.branch_notfound')], 404);
        }

        $categories = Category::with('media')->where('status', 1)->whereNull('parent_id')
            ->whereHas('branches', function ($query) use ($branchId) {
                $query->where('branch_id', $branchId);
            })
            ->paginate($perPage)
            ->forPage(1, 6);
        $services = Service::with(['media', 'branches' => function ($query) use ($branchId) {
            $query->where('branch_id', $branchId);
        }])->paginate($perPage)->forPage(1, 6);

        $employees = User::with('media')->withCount(['branches', 'services'])
            ->whereHas('branches', function ($query) use ($branchId) {
                $query->where('branch_id', $branchId);
            })
            ->orderByDesc('services_count')
            ->paginate($perPage)
            ->forPage(1, 6);

        $slider = SliderResource::collection(Slider::where('status', 1)->paginate($perPage));

        $cartCount = 0;
        if ($user_id) {
            $cartCount = Cart::where('user_id', $user_id)->count();
        }

        $responseData = [
            'category' => CategoryResource::collection($categories)->toArray(request()),
            'service' => ServiceResource::collection($services)->toArray(request()),
            'top_experts' => EmployeeResource::collection($employees)->toArray(request()),
            'slider' => $slider,
            'cart_count' => $cartCount,
        ];

        return response()->json([
            'status' => true,
            'data' => $responseData,
            'message' => __('messages.dashboard_detail'),
        ], 200);
    }

    public function searchList(Request $request)
    {
        $query = $request->input('query');
        $results = [];

        // Search in Branches
        $branches = Branch::where('name', 'like', "%{$query}%")->get();
        $results['branches'] = $branches;

        // Search in Employees // Need To Add Role Base
        $employees = User::role('employee')->where(function ($queryBuilder) use ($query) {
            $queryBuilder->where('first_name', 'like', "%{$query}%")
                ->orWhere('last_name', 'like', "%{$query}%");
        })->get();
        $results['employees'] = $employees;

        // Search in Categories
        $categories = Category::where('name', 'like', "%{$query}%")->get();
        $results['categories'] = $categories;

        $subcategories = Category::where('name', 'like', "%{$query}%")
            ->orWhere('parent_id', 'like', "%{$query}%")
            ->get();
        $results['subcategory'] = $subcategories;

        // Search in Bookings
        $bookings = Booking::where('note', 'like', "%{$query}%")->get();
        $results['bookings'] = $bookings;

        // Search in Services
        $services = Service::where('name', 'like', "%{$query}%")->get();
        $results['services'] = $services;

        return response()->json($results);
    }

    public function globalGallery(Request $request)
    {
        $galleryId = $request->input('gallery_id');

        // Retrieve branch gallery
        $branchGallery = BranchGallery::find($galleryId);
        if ($branchGallery) {
            $branch = Branch::find($branchGallery->branch_id);

            if ($branch) {
                return response()->json([
                    'status' => true,
                    'data' => [
                        'gallery' => $branchGallery,
                        'branch' => $branch,
                    ],
                    'message' => __('branch.branch_gal_retrived'),
                ], 200);
            }
        }

        // Retrieve service gallery
        $serviceGallery = ServiceGallery::find($galleryId);
        if ($serviceGallery) {
            $service = Service::find($serviceGallery->service_id);

            if ($service) {
                return response()->json([
                    'status' => true,
                    'data' => [
                        'gallery' => $serviceGallery,
                        'service' => $service,
                    ],
                    'message' => __('service.service_gal_retrived'),
                ], 200);
            }
        }

        // Gallery not found
        return response()->json([
            'status' => false,
            'message' => __('messages.gallery_notfound'),
        ], 404);
    }
}
