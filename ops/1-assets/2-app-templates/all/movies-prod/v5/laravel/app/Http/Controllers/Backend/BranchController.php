<?php

namespace App\Http\Controllers\Backend;

use App\Authorizable;
use App\Http\Controllers\Controller;
use App\Http\Requests\BranchRequest;
use App\Models\Address;
use App\Models\Branch;
use App\Models\BranchGallery;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Modules\BussinessHour\Models\BussinessHour;
use Modules\Constant\Models\Constant;
use Modules\CustomField\Models\CustomField;
use Modules\CustomField\Models\CustomFieldGroup;
use Modules\Employee\Models\BranchEmployee;
use Modules\Service\Models\Service;
use Modules\Service\Models\ServiceBranches;
use Yajra\DataTables\DataTables;

class BranchController extends Controller
{
    // use Authorizable;

    public function __construct()
    {
        // Page Title
        $this->module_title = 'branch.title';

        // module name
        $this->module_name = 'branch';

        // module icon
        $this->module_icon = 'fa-solid fa-building';

        view()->share([
            'module_title' => $this->module_title,
            'module_name' => $this->module_name,
            'module_icon' => $this->module_icon,
        ]);

        $this->middleware(['permission:view_branch'])->only('index');
        $this->middleware(['permission:edit_branch'])->only('edit', 'update');
        $this->middleware(['permission:add_branch'])->only('store');
        $this->middleware(['permission:delete_branch'])->only('destroy');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $module_action = 'List';

        $filter = [
            'status' => $request->status,
        ];

        $select_data = [
            'BRANCH_FOR' => Constant::getTypeDataObject('BRANCH_SERVICE_GENDER'),
            'PAYMENT_METHODS' => Constant::getTypeDataObject('PAYMENT_METHODS'),
        ];

        $assets = ['select-picker'];
        $columns = CustomFieldGroup::columnJsonValues(new Branch());
        $customefield = CustomField::exportCustomFields(new Branch());

        return view('backend.branch.index_datatable', compact('module_action', 'filter', 'select_data', 'assets', 'columns', 'customefield'));
    }

    /**
     * Select Options for Select 2 Request/ Response.
     *
     * @return Response
     */
    public function index_list(Request $request)
    {
        $query = Branch::with('media')->get();

        return response()->json($query);
    }

    public function bulk_action(Request $request)
    {
        $ids = explode(',', $request->rowIds);

        $actionType = $request->action_type;

        $message = __('messages.bulk_update');

        // dd($actionType, $ids, $request->status);
        switch ($actionType) {
            case 'change-status':
                $branches = Branch::whereIn('id', $ids)->update(['status' => $request->status]);
                $message = __('messages.bulk_status_update');
                break;

            case 'delete':
                if (env('IS_DEMO')) {
                    return response()->json(['message' => __('messages.permission_denied'), 'status' => false], 200);
                }
                $branches = Branch::with('bookings')->whereIn('id', $ids)->get();

                foreach ($branches as $branch) {
                    $branch->bookings()->delete();
                    $branch->branchServices()->delete();
                    $branch->delete();
                }
                $message = __('messages.bulk_status_delete');
                break;

            default:
                return response()->json(['status' => false, 'message' => __('branch.invalid_action')]);
                break;
        }

        return response()->json(['status' => true, 'message' => __('messages.bulk_update')]);
    }

    public function update_status(Request $request, Branch $id)
    {
        $id->update(['status' => $request->status]);

        return response()->json(['status' => true, 'message' => __('branch.status_update')]);
    }

    public function update_select(Request $request, Branch $id)
    {
        $actionType = $request->action_type;
        switch ($actionType) {
            case 'update-branch-for':
                $id->update(['branch_for' => $request->value]);

                return response()->json(['status' => true, 'message' => __('branch.branch_update')]);
                break;
        }
    }

    public function index_data(Datatables $datatable, Request $request)
    {
        $module_name = $this->module_name;

        $query = Branch::withCount('branchEmployee')->with('media', 'address', 'employee');

        $filter = $request->filter;

        if (isset($filter)) {
            if (isset($filter['column_status'])) {
                $query->where('status', $filter['column_status']);
            }
        }

        $branch_for_list = Constant::getTypeDataKeyValue('BRANCH_SERVICE_GENDER');

        $datatable = $datatable->eloquent($query)
            ->addColumn('check', function ($row) {
                return '<input type="checkbox" class="form-check-input select-table-row "  id="datatable-row-'.$row->id.'"  name="datatable_ids[]" value="'.$row->id.'" onclick="dataTableRowCheck('.$row->id.')">';
            })
            ->addColumn('action', function ($data) use ($module_name) {
                return view('backend.branch.action_column', compact('module_name', 'data'));
            })
            ->filterColumn('address.city', function ($query, $keyword) {
                if (! empty($keyword)) {
                    $query->whereHas('address', function ($q) use ($keyword) {
                        $q->where('city', 'like', '%'.$keyword.'%');
                    });
                }
            })
            ->filterColumn('address.postal_code', function ($query, $keyword) {
                if (! empty($keyword)) {
                    $query->whereHas('address', function ($q) use ($keyword) {
                        $q->where('postal_code', 'like', '%'.$keyword.'%');
                    });
                }
            })
            ->filterColumn('manager_id', function ($query, $keyword) {
                if (! empty($keyword)) {
                    $query->whereHas('employee', function ($q) use ($keyword) {
                        $q->where('first_name', 'like', '%'.$keyword.'%');
                        $q->orWhere('last_name', 'like', '%'.$keyword.'%');
                    });
                }
            })
            ->filterColumn('branch_for', function ($query, $keyword) {
                if (! empty($keyword)) {
                    $query->where('branch_for', 'like', $keyword.'%');
                }
            })
            ->editColumn('status', function ($row) {
                $checked = '';
                if ($row->status) {
                    $checked = 'checked="checked"';
                }

                return '
             <div class="form-check form-switch  ">
                 <input type="checkbox" data-url="'.route('backend.branch.update_status', $row->id).'" data-token="'.csrf_token().'" class="switch-status-change form-check-input"  id="datatable-row-'.$row->id.'"  name="status" value="'.$row->id.'" '.$checked.'>
             </div>
            ';
            })
            ->addColumn('image', function ($data) {
                return '<img src='.$data->feature_image." class='avatar avatar-50 rounded-pill'>";
            })
            ->editColumn('address.city', function ($data) {
                return $data->address->city ?? '';
            })
            ->editColumn('address.postal_code', function ($data) {
                return $data->address->postal_code ?? '-';
            })
            ->editColumn('manager_id', function ($data) {
                return $data->employee->full_name ?? '-';
            })
            ->editColumn('branch_for', function ($data) use ($branch_for_list) {
                return view('backend.branch.select_column', compact('data', 'branch_for_list'));
            })
            ->addColumn('assign', function ($data) {
                return "<div class='d-flex align-items-center'>
            <div class='mr-2' style='width: 20px;'><b>$data->branch_employee_count</b></div>
            <div>
                <button type='button' data-assign-module='$data->id' data-assign-target='#staff-assign-form' data-assign-event='staff_assign' class='btn btn-primary btn-sm rounded btn-icon'>
                    <i class='fa-solid fa-plus'></i>
                </button>
            </div>
             </div>";
            })

            ->editColumn('updated_at', function ($data) {
                $diff = Carbon::now()->diffInHours($data->updated_at);

                if ($diff < 25) {
                    return $data->updated_at->diffForHumans();
                } else {
                    return $data->updated_at->isoFormat('llll');
                }
            })
            ->orderColumns(['id'], '-:column $1');

        // Custom Fields For export
        $customFieldColumns = CustomField::customFieldData($datatable, Branch::CUSTOM_FIELD_MODEL, null);

        return $datatable->rawColumns(array_merge(['action', 'status', 'branch_for', 'check', 'image', 'assign'], $customFieldColumns))
            ->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(BranchRequest $request)
    {
        $data = $request->except('feature_image');
        if (is_string($request->payment_method)) {
            $data['payment_method'] = explode(',', $request->payment_method);
        }

        $query = Branch::create($data);

        $days = [
            ['day' => 'monday', 'start_time' => '09:00:00', 'end_time' => '18:00:00', 'is_holiday' => false, 'breaks' => []],
            ['day' => 'tuesday', 'start_time' => '09:00:00', 'end_time' => '18:00:00', 'is_holiday' => false, 'breaks' => []],
            ['day' => 'wednesday', 'start_time' => '09:00:00', 'end_time' => '18:00:00', 'is_holiday' => false, 'breaks' => []],
            ['day' => 'thursday', 'start_time' => '09:00:00', 'end_time' => '18:00:00', 'is_holiday' => false, 'breaks' => []],
            ['day' => 'friday', 'start_time' => '09:00:00', 'end_time' => '18:00:00', 'is_holiday' => false, 'breaks' => []],
            ['day' => 'saturday', 'start_time' => '09:00:00', 'end_time' => '18:00:00', 'is_holiday' => false, 'breaks' => []],
            ['day' => 'sunday', 'start_time' => '09:00:00', 'end_time' => '18:00:00', 'is_holiday' => true, 'breaks' => []],
        ];

        foreach ($days as $key => $val) {
            $val['branch_id'] = $query->id;
            BussinessHour::create($val);
        }

        if (! empty($request->address) && is_string($data['address'])) {
            $request->address = json_decode($data['address'], true);
            $query->address()->save(new Address($request->address));
        }

        if ($request->custom_fields_data) {
            $query->updateCustomFieldData(json_decode($request->custom_fields_data));
        }

        if ($request->hasFile('feature_image')) {
            storeMediaFile($query, $request->file('feature_image'));
        }

        $branch_id = $query->id;

        $manager_id = $request->manager_id;

        BranchEmployee::where('employee_id', $manager_id)->delete();

        $user = User::find($manager_id);

        $user->syncRoles(['employee', 'manager']);

        \Artisan::call('cache:clear');

        BranchEmployee::create([
            'branch_id' => $query->id,
            'employee_id' => $manager_id,
            'is_primary' => true,
        ]);

        $service_id = $request->service_id;

        $this->assign_service_branch($service_id, $branch_id);

        $message = __('messages.create_form', ['form' => __('branch.singular_title')]);

        return response()->json(['message' => $message, 'status' => true], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $data = Branch::with('address')->findOrFail($id);

        $service_id = ServiceBranches::where('branch_id', $data->id)->get()->pluck('service_id');

        $data['service_id'] = $service_id;

        if (! is_null($data)) {
            $custom_field_data = $data->withCustomFields();
            $data['custom_field_data'] = $custom_field_data->custom_fields_data->toArray();
        }

        return response()->json(['data' => $data, 'status' => true]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(BranchRequest $request, $id)
    {
        $query = Branch::findOrFail($id);
        // $data = $request->except('feature_image');
        if (is_string($request->payment_method)) {
            $data['payment_method'] = explode(',', $request->payment_method);
        }

        $query->update($data);

        if (! empty($request->address) && is_string($request['address'])) {
            $request->address = json_decode($request['address'], true);
            $query->address()->update($request->address);
        }

        if ($request->custom_fields_data) {
            $query->updateCustomFieldData(json_decode($request->custom_fields_data));
        }

        if ($request->feature_image == null) {
            $query->clearMediaCollection('feature_image');
        }

        if ($request->hasFile('feature_image')) {
            storeMediaFile($query, $request->file('feature_image'));
        }

        if ($request->custom_fields_data) {
            $query->updateCustomFieldData(json_decode($request->custom_fields_data));
        }

        $branch_id = $query->id;

        $manager_id = $request->manager_id;

        BranchEmployee::where('employee_id', $manager_id)->delete();

        $user = User::find($manager_id);

        $user->syncRoles(['employee', 'manager']);

        \Artisan::call('cache:clear');

        BranchEmployee::create([
            'branch_id' => $query->id,
            'employee_id' => $manager_id,
            'is_primary' => true,
        ]);

        $service_id = $request->service_id;

        $this->assign_service_branch($service_id, $branch_id);

        $message = __('messages.update_form', ['form' => __('branch.singular_title')]);

        return response()->json(['message' => $message, 'status' => true], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        if (env('IS_DEMO')) {
            return response()->json(['message' => __('messages.permission_denied'), 'status' => false], 200);
        }
        $data = Branch::findOrFail($id);

        $data->bookings()->delete();

        $data->branchServices()->delete();

        $data->branchEmployee()->delete();

        $data->delete();

        $message = __('messages.delete_form', ['form' => __('branch.singular_title')]);

        return response()->json(['message' => $message, 'status' => true], 200);
    }

    public function assign_list($id)
    {
        $branch_user = BranchEmployee::with('employee')->where('branch_id', $id)->get();
        $branch_user = $branch_user->each(function ($data) {
            $data['name'] = $data->employee->full_name;
            $data['avatar'] = $data->employee->profile_image;

            return $data;
        });

        return response()->json(['status' => true, 'data' => $branch_user]);
    }

    public function assign_update(Branch $id, Request $request)
    {
        $id->branchEmployee()->delete();

        $employees = [];

        foreach ($request->users as $emp_id) {
            $branchEmployee = BranchEmployee::where('employee_id', $emp_id)->get();
            if(count($branchEmployee) > 0) {
                BranchEmployee::where('employee_id', $emp_id)->delete();
            } else {
                $branchEmployee = BranchEmployee::where('employee_id', $emp_id)->first();
                if(isset($branchEmployee)) {
                    $branchEmployee->update(['branch_id' => $id->id]);
                    continue;
                }
            }
            $employees[] = ['employee_id' => $emp_id];
        }

        $id->branchEmployee()->createMany($employees);

        return response()->json(['status' => true, 'message' => __('branch.branch_successfull')]);
    }

    public function branch_list(Request $request)
    {
        $term = $request->q;
        $role = $request->role;
        $query_data = BranchEmployee::select('*', 'id as employee_id')->where(function ($q) use ($term, $role) {
            if (! empty($term)) {
                $q->orWhere('name', 'LIKE', "%$term%");
            }
            if (! empty($role)) {
                $q->role($role);
            }
        })->get();

        return response()->json($query_data);
    }

    public function getGalleryImages($id)
    {
        $branch = Branch::findOrFail($id);

        $data = BranchGallery::where('branch_id', $id)->get();

        return response()->json(['data' => $data, 'branch' => $branch, 'status' => true]);
    }

    public function uploadGalleryImages(Request $request, $id)
    {
        $gallery = collect($request->gallery, true);

        $images = BranchGallery::where('branch_id', $id)->whereNotIn('id', $gallery->pluck('id'))->get();

        foreach ($images as $key => $value) {
            $value->clearMediaCollection('gallery_images');
            $value->delete();
        }

        foreach ($gallery as $key => $value) {
            if ($value['id'] == 'null') {
                $branchGallery = BranchGallery::create([
                    'branch_id' => $id,
                ]);

                $branchGallery->addMedia($value['file'])->toMediaCollection('gallery_images');

                $branchGallery->full_url = $branchGallery->getFirstMediaUrl('gallery_images');
                $branchGallery->save();
            }
        }

        return response()->json(['message' => __('branch.update_branch_gallery'), 'status' => true]);
    }

    protected function assign_service_branch($service_id, $branch_id)
    {
        $service_id = is_string($service_id) ? explode(',', $service_id) : $service_id;
        if (isset($service_id) && count($service_id)) {
            $services = Service::whereIn('id', $service_id)->get();
            ServiceBranches::where('branch_id', $branch_id)->delete();
            foreach ($service_id as $key => $value) {
                $service = $services->where('id', $value)->first();
                ServiceBranches::create([
                    'service_id' => $value,
                    'branch_id' => $branch_id,
                    'service_price' => $service->default_price ?? 0,
                    'duration_min' => $service->duration_min,
                ]);
            }
        }
    }

    public function branchData()
    {
        if (Auth::user()->hasRole('manager')) {
            $data = Branch::where('id', auth()->user()->branch->branch_id)->with('address')->first();

            $service_id = ServiceBranches::where('branch_id', $data->id)->get()->pluck('service_id');

            $data['service_id'] = $service_id;

            if (! is_null($data)) {
                $custom_field_data = $data->withCustomFields();
                $data['custom_field_data'] = $custom_field_data->custom_fields_data->toArray();
            }

            return response()->json(['data' => $data, 'status' => true]);
        } else {
            return response()->json(['message' => 'You are not authorized to access this data.', 'status' => false]);
        }
    }

    public function UpdateBranchSetting(Request $request)
    {
        $query = Branch::findOrFail(auth()->user()->branch->branch_id);

        $data = $request->except('feature_image');
        if (is_string($request->payment_method)) {
            $data['payment_method'] = explode(',', $request->payment_method);
        }

        $query->update($data);

        if (! empty($request->address) && is_string($request['address'])) {
            $request->address = json_decode($request['address'], true);
            $query->address()->update($request->address);
        }

        if ($request->hasFile('feature_image')) {
            storeMediaFile($query, $request->file('feature_image'));
        }

        $branch_id = $query->id;

        $manager_id = $request->manager_id;

        BranchEmployee::where('employee_id', $manager_id)->delete();

        $user = User::find($manager_id);

        if ($user) {
            $user->syncRoles(['employee', 'manager']);
        }

        \Artisan::call('cache:clear');

        BranchEmployee::create([
            'branch_id' => $query->id,
            'employee_id' => $manager_id,
            'is_primary' => true,
        ]);

        $service_id = $request->service_id;

        $this->assign_service_branch($service_id, $branch_id);

        $message = __('messages.update_form', ['form' => __('branch.branch_setting')]);

        return response()->json(['message' => $message, 'status' => true], 200);
    }
}
