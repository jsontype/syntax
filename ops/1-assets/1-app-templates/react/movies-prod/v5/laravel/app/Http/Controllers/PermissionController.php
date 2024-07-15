<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PermissionRequest;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        $data = Permission::all();

        if (request()->wantsJson()) {
            return response()->json(['data' => $data, 'status' => true]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data = new Permission;

        $view = view('permission-role.form-permission', ['data' => $data])->render();

        return response()->json(['data' => $view, 'status' => true]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PermissionRequest $request)
    {
        if (env('IS_DEMO') == true) {
            return redirect()->back()->with('error', __('messages.permission_denied'));
        }

        $data = $request->all();

        $data = $this->setPermissionArray($data);

        Permission::create($data);

        return redirect()->route('backend.permission-role.list')->withSuccess(__('messages.create_form', ['form' => __('permission-role.permission_title')]));
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
        $data = Permission::find($id);
        $view = view('permission-role.form-permission', ['data' => $data])->render();

        return response()->json(['data' => $view, 'status' => true]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PermissionRequest $request, $id)
    {
        if (env('IS_DEMO') == true) {
            return redirect()->back()->with('error', __('messages.permission_denied'));
        }

        $permission = Permission::find($id);

        $data = $request->all();

        $data = $this->setPermissionArray($data);

        $permission->update($data);

        return redirect()->route('backend.permission-role.list')->withSuccess(__('messages.update_form', ['form' => __('permission-role.permission_title')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (env('IS_DEMO') == true) {
            return redirect()->back()->with('error', __('messages.permission_denied'));
        }
        $permission = Permission::findOrFail($id);
        $status = 'errors';
        $message = __('messages.delete_form', ['form' => __('permission-role.permission_title')]);

        if (isset($permission->id)) {
            $permission->delete();
            $status = 'success';
            $message = __('messages.delete_form', ['form' => __('permission-role.permission_title')]);
        }

        if (request()->wantsJson()) {
            return response()->json(['status' => true, 'message' => $message]);
        }

        return redirect()->back()->with($status, $message);
    }

    protected function setPermissionArray(array $data): array
    {
        $data['name'] = strtolower(str_replace(' ', '_', preg_replace('/[^a-zA-Z0-9_.]/', '', $data['title'])));

        $data['title'] = str_replace(' ', '_', preg_replace('/[^a-zA-Z0-9_.]/', '', $data['title']));

        $data['parent_id'] = $data['parent_id'] ?? null;

        return $data;
    }
}
