<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Modules\Booking\Models\Booking;
use Modules\Booking\Models\BookingService;
use Modules\Booking\Models\BookingTransaction;
use Modules\Product\Models\Order;
use Modules\Product\Models\OrderGroup;

class BackendController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (auth()->user()->hasRole('employee')) {
            return redirect(RouteServiceProvider::EMPLOYEE_LOGIN_REDIRECT);
        }
        $global_booking = false;
        $today = Carbon::today();
        $action = $request->action ?? 'reset';
        if (isset($request->date_range) && count(explode(' to ', $request->date_range)) > 0 && $action !== 'reset') {
            $startDate = explode(' to ', $request->date_range)[0] ?? date('Y-m-d');
            $endDate = explode(' to ', $request->date_range)[1] ?? date('Y-m-d');
        } else {
            $startDate = Carbon::now()->subDays(10)->toDateString();
            $endDate = Carbon::now()->toDateString();
        }
        $date_range = $startDate.' to '.$endDate;

        $data = [
            'total_appointments' => 0,
            'total_commission' => 0,
            'total_revenue' => 0,
            'total_new_customers' => 0,
            'upcomming_appointments' => [],
            'top_services' => [],
            'revenue_chart' => [],
            'total_orders' => 0,
            'product_sales' => 0,
        ];

        $totalServices = BookingService::whereHas('booking', function ($query) use ($startDate, $endDate) {
            $query->where(function ($query) use ($startDate, $endDate) {
                $query->whereDate('start_date_time', '>=', $startDate)
                    ->whereDate('start_date_time', '<=', $endDate);
            })->branch();
        });
        $data['total_appointments'] = Booking::where(function ($query) use ($startDate, $endDate) {
            $query->where(function ($query) use ($startDate, $endDate) {
                $query->whereDate('start_date_time', '>=', $startDate)
                    ->whereDate('start_date_time', '<=', $endDate);
            });
        })->where('status', 'completed')->branch()->count();
        $data['total_commission'] = Booking::with('commission')->branch()->whereDate('start_date_time', '>=', $startDate)
            ->whereDate('start_date_time', '<=', $endDate)->get();

        $data['total_commission'] = \Currency::format($data['total_commission']->sum(function ($booking) {
            return $booking->commission->commission_amount ?? 0;
        }));

        $bookings = BookingTransaction::with('booking')->whereHas('booking', function ($query) use ($startDate, $endDate) {
            $query->where(function ($query) use ($startDate, $endDate) {
                $query->whereDate('start_date_time', '>=', $startDate)
                    ->whereDate('start_date_time', '<=', $endDate)
                    ->where('status', 'completed');
            })->branch();
        })->pluck('booking_id')->toArray();

        $data['total_revenue'] = \Currency::format(BookingService::whereIn('booking_id', $bookings)->sum('service_price'));

        $data['total_new_customers'] = User::where('created_at', '>=', $startDate)
            ->whereDate('created_at', '<=', $endDate)
            ->whereHas('roles', function ($query) {
                $query->where('name', 'user');
            })
            ->count();

        $data['upcomming_appointments'] = Booking::with('branch', 'user', 'services')->whereDate('start_date_time', '>=', $today)
            ->orderBy('start_date_time')
            ->whereHas('user', function ($q) {
                $q->whereNull('deleted_at');
            })
            ->whereHas('branch', function ($q) {
                $q->whereNull('deleted_at');
            })
            ->where('status', '!=', 'completed')
            ->branch()
            ->take(10)
            ->get();

        $data['top_services'] = $totalServices->with('service')->select(
            'service_id',
            \DB::raw('COUNT(*) as total_service_count'),
            \DB::raw('SUM(service_price) as total_service_price')
        )
            ->groupBy('service_id')
            ->orderByDesc('total_service_price')
            ->limit(5)
            ->get();

        $chartBookingRevenue = Booking::select(
            \DB::raw('DATE(bookings.start_date_time) AS booking_date'),
            \DB::raw('SUM(booking_services.service_price) AS total_price'),
            \DB::raw('COUNT(DISTINCT booking_services.booking_id) AS total_booking')
        )
            ->leftJoin('booking_services', 'bookings.id', '=', 'booking_services.booking_id')
            ->whereDate('bookings.start_date_time', '>=', $startDate)
            ->whereDate('bookings.start_date_time', '<=', $endDate)
            ->where('status', 'completed')
            ->branch()
            ->groupBy(\DB::raw('DATE(bookings.start_date_time)'))
            ->get();

        $data['revenue_chart']['xaxis'] = $chartBookingRevenue?->pluck('booking_date')->toArray() ?? [];
        $data['revenue_chart']['total_bookings'] = $chartBookingRevenue?->pluck('total_booking')->toArray() ?? [];
        $data['revenue_chart']['total_price'] = $chartBookingRevenue?->pluck('total_price')->toArray() ?? [];

        $orders = Order::where(function ($q) {
            $q->orWhereIn('order_group_id', OrderGroup::pluck('id'));
        });

        $data['total_orders'] = $orders->count();

        $data['product_sales'] = \Currency::format($orders->sum('total_admin_earnings'));

        return view('backend.index', compact('data', 'date_range', 'global_booking'));
    }

    public function setCurrentBranch($branch_id)
    {
        request()->session()->forget('selected_branch');

        request()->session()->put('selected_branch', $branch_id);

        return redirect()->back()->with('success', 'Current Branch Has Been Changes')->withInput();
    }

    public function resetBranch()
    {
        request()->session()->forget('selected_branch');

        return redirect()->back()->with('success', 'Show All Branch Content')->withInput();
    }

    public function setUserSetting(Request $request)
    {
        auth()->user()->update(['user_setting' => $request->settings]);

        return response()->json(['status' => true]);
    }
}
