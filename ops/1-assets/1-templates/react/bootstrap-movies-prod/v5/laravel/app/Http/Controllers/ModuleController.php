<?php

namespace App\Http\Controllers;

use App\Models\Modules;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Yajra\DataTables\DataTables;

class ModuleController extends Controller
{
    public function __construct()
    {
        // Page Title
        $this->module_title = 'Modules';

        // module name
        $this->module_name = 'module';
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $module_title = $this->module_title;

        $module_name = 'module';

        $module_action = 'List';

        return view('backend.module.index', compact('module_action', 'module_title', 'module_name'));
    }

    public function index_data(Datatables $datatable, Request $request)
    {
        $module_name = 'module';

        $query = Modules::query();

        $filter = $request->filter;

        if (isset($filter)) {
            if (isset($filter['column_status'])) {
                $query->where('status', $filter['column_status']);
            }
        }

        $datatable = $datatable->eloquent($query)
            ->addColumn('check', function ($row) {
                return '<input type="checkbox" class="form-check-input select-table-row"  id="datatable-row-'.$row->id.'"  name="datatable_ids[]" value="'.$row->id.'" onclick="dataTableRowCheck('.$row->id.')">';
            })

            ->addColumn('action', function ($data) use ($module_name) {
                return view('backend.module.action_column', compact('module_name', 'data'));
            })

            ->editColumn('status', function ($row) {
                $checked = '';
                if ($row->status) {
                    $checked = 'checked="checked"';
                }

                return '
                <div class="form-check form-switch ">
                    <input type="checkbox" data-url="'.route('backend.module.update_status', $row->id).'" data-token="'.csrf_token().'" class="switch-status-change form-check-input"  id="datatable-row-'.$row->id.'"  name="status" value="'.$row->id.'" '.$checked.'>
                </div>
               ';
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

        return $datatable->rawColumns(array_merge(['action', 'status', 'check']))
            ->toJson();
    }

    public function update_status(Request $request, Modules $id)
    {
        $id->update(['status' => $request->status]);

        return response()->json(['status' => true, 'message' => __('branch.status_update')]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $data['module_name'] = $data['name'];

        $permissions = [];

        foreach ($data['more_permission'] as $permissionValue) {
            $lowercase = Str::lower($permissionValue);
            $slug = Str::slug($lowercase, '_');

            $permissions[] = $slug;
        }

        $data['more_permission'] = json_encode($permissions);

        Modules::create($data);

        $message = __('messages.create_form', ['form' => __($this->module_title)]);

        return response()->json(['message' => $message, 'status' => true], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Modules::findOrFail($id);

        $data['name'] = $data['module_name'];

        $data['more_permission'] = json_decode($data['more_permission'], true);

        return response()->json(['data' => $data, 'status' => true]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = Modules::findOrFail($id);

        $module_data = $request->all();

        $module_data['module_name'] = $module_data['name'];

        $permissions = [];

        foreach ($module_data['more_permission'] as $permissionValue) {
            $lowercase = Str::lower($permissionValue);
            $slug = Str::slug($lowercase, '_');

            $permissions[] = $slug;
        }

        $module_data['more_permission'] = json_encode($permissions);

        $data->update($module_data);

        $message = __('messages.update_form', ['form' => __($this->module_title)]);

        return response()->json(['message' => $message, 'status' => true], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Modules::findOrFail($id);

        $data->delete();

        $message = __('messages.delete_form', ['form' => __($this->module_title)]);

        return response()->json(['message' => $message, 'status' => true], 200);
    }
}
