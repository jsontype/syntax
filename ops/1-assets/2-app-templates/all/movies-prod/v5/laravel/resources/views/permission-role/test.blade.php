@extends('backend.layouts.app')

@section('title')
{{ __($module_action) }} {{ __($module_title) }}
@endsection
@section('content')
<div class="row">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <div class="header-title">
                    <h4 class="card-title mb-0">Permission & Role</h4>
                </div>
                <div>
                    <x-backend.section-header>
                        <div>

                        </div>
                        <x-slot name="toolbar">


                            <div class="input-group flex-nowrap">
                            </div>

                            @hasPermission('add_page')
                            <x-buttons.offcanvas target='#form-offcanvas'
                                title="{{ __('messages.create') }}  {{ __('page.lbl_role') }}">{{ __('messages.create') }} 
                                {{ __('page.lbl_role') }}</x-buttons.offcanvas>
                            @endhasPermission
                        </x-slot>
                    </x-backend.section-header>


                </div>
            </div>
            <div class="card-body">

                <div class="accordion accordion-flush" id="accordionFlushExample">
                    @foreach ($roles as $role)
                    @if($role->name !== 'admin' )
                    {{ Form::open(['route' => ['backend.permission-role.store', $role->id],'method' => 'post']) }}
                    <div class="accordion-item" id="permission_{{$role->id}}">
                        <h2 class="accordion-header d-flex" id="flush-headingOne">
                            <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne_{{$role->id}}" aria-expanded="false"
                                aria-controls="flush-collapseOne">
                                <h5>{{ ucfirst($role->title) }}</h5>
                            </button>

                        </h2>
                        @if($role->is_fixed ==0)
                        <a class="btn btn-soft-danger btn-sm" onclick="delete_role({{$role->id}})"
                            data-bs-toggle="tooltip" title="{{__('messages.delete')}}"> <i class="fa-solid fa-trash"></i>
                            Delete</a>
                        @endif

                        <a class="btn btn-soft-info btn-sm" onclick="reset_permission({{$role->id}})"
                            data-bs-toggle="tooltip" title="{{__('Reset Permission')}}"> <i class="fas fa-undo"></i>
                            Reset</a>
                        <div id="flush-collapseOne_{{$role->id}}" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">

                            <div class="container">
                                <div class="row m-3 py-3 heading">
                                    <div class="col-sm">
                                        <h6>Modules</h6>
                                    </div>
                                    <div class="col-sm">
                                        <h6>View</h6>
                                    </div>
                                    <div class="col-sm">
                                        <h6>Add</h6>
                                    </div>
                                    <div class="col-sm">
                                        <h6>Edit</h6>
                                    </div>
                                    <div class="col-sm">
                                        <h6>Delete</h6>
                                    </div>
                                    <div class="col-sm">
                                        {{ Form::submit( __('messages.save'), ['class'=>'btn btn-md btn-primary']) }}
                                    </div>
                                </div>
                                @foreach($modules as $module)
                                <div class="row  m-3   align-items-center permission_data">
                                    <div class="col-md-2">
                                        <span>{{ucwords($module->module_name)}}</span>
                                    </div>
                                    <div class="col-md-2">
                                        <span><input type="checkbox"
                                                id="role-{{$role->name}}-permission-view_{{strtolower(str_replace(' ', '_', $module->module_name))}}"
                                                name="permission[view_{{strtolower(str_replace(' ', '_', $module->module_name))}}][]"
                                                value="{{$role->name}}" class="form-check-input"
                                                {{ (AuthHelper::checkRolePermission($role, 'view_'.strtolower(str_replace(' ', '_', $module->module_name)))) ? 'checked' : '' }}></span>
                                    </div>
                                    <div class="col-md-2">
                                        <span><input type="checkbox"
                                                id="role-{{$role->name}}-permission-add_{{strtolower(str_replace(' ', '_', $module->module_name))}}"
                                                name="permission[add_{{strtolower(str_replace(' ', '_', $module->module_name))}}][]"
                                                value="{{$role->name}}" class="form-check-input"
                                                {{ (AuthHelper::checkRolePermission($role, 'add_'.strtolower(str_replace(' ', '_', $module->module_name)))) ? 'checked' : '' }}></span>
                                    </div>
                                    <div class="col-md-2">
                                        <span><input type="checkbox"
                                                id="role-{{$role->name}}-permission-edit_{{strtolower(str_replace(' ', '_', $module->module_name))}}"
                                                name="permission[edit_{{strtolower(str_replace(' ', '_', $module->module_name))}}][]"
                                                value="{{$role->name}}" class="form-check-input"
                                                {{ (AuthHelper::checkRolePermission($role, 'edit_'.strtolower(str_replace(' ', '_', str_replace(' ', '_', $module->module_name))))) ? 'checked' : '' }}></span>
                                    </div>
                                    <div class="col-md-2">
                                        <span><input type="checkbox"
                                                id="role-{{$role->name}}-permission-delete_{{strtolower(str_replace(' ', '_', $module->module_name))}}"
                                                name="permission[delete_{{strtolower(str_replace(' ', '_', $module->module_name))}}][]"
                                                value="{{$role->name}}" class="form-check-input"
                                                {{ (AuthHelper::checkRolePermission($role, 'delete_'.strtolower(str_replace(' ', '_', $module->module_name)))) ? 'checked' : '' }}></span>
                                    </div>

                                    @php
                                    $decodedData = json_decode($module->more_permission,true);
                                    @endphp

                                    <div class="col-md-2 more_field">
                                        <button class="accordion-button {{ $decodedData != '' ? '' : 'accordion_btn' }}"
                                            type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne_{{ $module->id }}"
                                            aria-expanded="{{ $decodedData != '' ? 'true' : 'false' }}"
                                            aria-controls="collapseOne">
                                            {{ $decodedData != '' ? 'More' : '-' }}
                                        </button>
                                    </div>

                                    <div id="collapseOne_{{$module->id}}" class="accordion-collapse collapse "
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            @if($decodedData !='')

                                            @foreach($decodedData as $permission_data)

                                            <div class="heading  py-3">


                                                <div class="row  m-3   align-items-center  ">
                                                    <div class="col-md-3">
                                                        <span>{{ucwords($module->module_name)}}
                                                            {{ ucwords(str_replace('_', ' ', $permission_data))}}</span>
                                                    </div>
                                                    <div class="col-md-2">

                                                        <span><input type="checkbox"
                                                                id="role-{{$role->name}}-permission-{{strtolower(str_replace(' ', '_', $module->module_name))}}_{{strtolower(str_replace(' ', '_', $permission_data))}}"
                                                                name="permission[{{strtolower(str_replace(' ', '_', $module->module_name))}}_{{strtolower(str_replace(' ', '_', $permission_data))}}][]"
                                                                value="{{$role->name}}" class="form-check-input"
                                                                {{ (AuthHelper::checkRolePermission($role, strtolower(str_replace(' ', '_', $module->module_name).'_'.strtolower(str_replace(' ', '_', $permission_data))))) ? 'checked' : '' }}></span>
                                                    </div>



                                                </div>
                                            </div>
                                            @endforeach
                                            @endif


                                        </div>
                                    </div>
                                </div>
                                @endforeach

                            </div>
                        </div>
                    </div>

                    {{ Form::close() }}

                    @endif
                    @endforeach

                </div>

             


            </div>
        </div>

        <div data-render="app">
    <manage-role-form create-title="{{ __('messages.create') }}  {{ __('page.lbl_role') }}">
    </manage-role-form>

</div>

    </div>
</div>



<script>

function reset_permission(role_id) {

    var url = "/app/permission-role/reset/" + role_id;

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(response) {

            successSnackbar(response.message);
        },
        error: function(response) {
            alert('error');
        }
    });
}



function delete_role(role_id) {
    var url = "{{ route('backend.role.destroy', ['role' => ':role_id']) }}";
    url = url.replace(':role_id', role_id);

    $.ajax({
        url: url,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function(response) {
            $('#permission_' + role_id).hide();
            successSnackbar(response.message);
        },
        error: function(response) {
            alert('error');
        }
    });
}


</script>



@push('after-scripts')
<script src="{{ mix('js/vue.min.js') }}"></script>
<script src="{{ asset('js/form-offcanvas/index.js') }}" defer></script>

@endpush

<style>
.heading {
    background-color: #c3c3c330;
}

.heading h6 {
    color: #898688 !important;
}

.permission_data {

    border-bottom: 1px solid;
    border-bottom-color: #80808014;

}

.accordion_btn {

    background-color: transparent !important;

}

.accordion_btn::after {

    height: 0 !important;
}

h2#flush-headingOne {
    width: 98% !important;
}
</style>


@endsection