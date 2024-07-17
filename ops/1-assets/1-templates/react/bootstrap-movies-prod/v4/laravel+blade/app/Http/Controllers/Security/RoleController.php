<?php

namespace App\Http\Controllers\Security;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Requests\RoleRequest;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Role::all();
        if(request()->wantsJson()) {
            return response()->json(['data' => $data, 'status' => true]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        if(env('IS_DEMO')==true) {
            return redirect()->back()->with('error', 'Permission denied.');
        }
        $data = new Role;
        $view = view('dashboard.permission-role.form-role', ['data' => $data])->render();
        return response()->json(['data' =>  $view, 'status'=> true]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        
        $data = $this->setRoleArray($data);
        
        Role::create($data);
        return redirect()->route('permission-role.list')->withSuccess(__('global-message.create_form',['form' => __('permission-role.role_title')]));
       
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
        $data = Role::find($id);
        $view = view('dashboard.permission-role.form-role', ['data' => $data])->render();
        return response()->json(['data' =>  $view, 'status'=> true]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RoleRequest $request, $id)
    {
        $role = Role::find($id);
        if(env('IS_DEMO')==true) {
            return redirect()->back()->with('error', 'Permission denied.');
        }

        $data = $request->all();

        $data = $this->setRoleArray($data);

        $role->update($data);

        return redirect()->route('permission-role.list')->withSuccess(__('global-message.update_form',['form' => __('permission-role.role_title')]));
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(RoleRequest $request, $id)
    {
        $role = Role::findOrFail($id);
        if(env('IS_DEMO')==true) {
            return redirect()->back()->with('error', 'Permission denied.');
        }
        $status = 'errors';
        $message= __('global-message.delete_form', ['form' => __('permission-role.role_title')]);

        if(isset($role->id)) {
            $role->delete();
            $status = 'success';
            $message= __('global-message.delete_form', ['form' => __('permission-role.role_title')]);
        }

        if(request()->wantsJson()) {
            return response()->json(['status' => true, 'message' => $message]);
        }

        return redirect()->back()->with($status,$message);
    }

    protected function setRoleArray(array $data): array {

        $data['name'] = strtolower(str_replace(' ', '_', preg_replace('/[^a-zA-Z0-9_.]/', '', $data['title'])));

        $data['guard_name'] = 'web';

        $data['title'] = str_replace(' ', '_', preg_replace('/[^a-zA-Z0-9_.]/', '', $data['title']));

       

        return $data;
    }
}
