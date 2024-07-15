@extends('layouts.app')

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
                </div>
                <div class="card-body">
                    @foreach ($roles as $role)
                        {{ Form::open(['route' => ['backend.permission-role.store', $role->id], 'method' => 'post']) }}

                        <div class="permission-collapse border rounded p-3 mb-3" id="permission_{{ $role->id }}">
                            <div class="d-flex align-items-center justify-content-between">
                                <h6>{{ ucfirst($role->title) }}</h6>
                                <div class="toggle-btn-groups">
                                    @if ($role->is_fixed == 0)
                                        <button class="btn btn-danger" type="button"
                                            onclick="delete_role({{ $role->id }})">
                                            Delete
                                        </button>
                                    @endif
                                    <button class="btn btn-primary ms-2" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseBox1_{{ $role->id }}" aria-expanded="false"
                                        aria-controls="collapseExample_{{ $role->id }}">
                                        Permission
                                    </button>
                                </div>
                            </div>
                            <div class="collapse pt-3" id="collapseBox1_{{ $role->id }}">
                                <div class="table-responsive">
                                    <table class="table table-condensed table-striped mb-0">
                                        <thead class="sticky-top">
                                            <tr>
                                                <th>Modules</th>
                                                <th>View</th>
                                                <th>Add</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                                <th class="text-end">
                                                    {{ Form::submit(__('save'), ['class' => 'btn btn-md btn-secondary']) }}
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            @foreach ($modules as $mKey => $module)
                                                <tr>
                                                    <td>{{ ucwords($module['module_name']) }}</td>
                                                    <td>
                                                        @if (isset($module['is_custom_permission']) && !$module['is_custom_permission'])
                                                            <span><input type="checkbox"
                                                                    id="role-{{ $role->name }}-permission-view_{{ strtolower(str_replace(' ', '_', $module['module_name'])) }}"
                                                                    name="permission[view_{{ strtolower(str_replace(' ', '_', $module['module_name'])) }}][]"
                                                                    value="{{ $role->name }}" class="form-check-input"
                                                                    {{ AuthHelper::checkRolePermission($role, 'view_' . strtolower(str_replace(' ', '_', $module['module_name']))) ? 'checked' : '' }}></span>
                                                        @endif
                                                    </td>
                                                    <td>
                                                        @if (isset($module['is_custom_permission']) && !$module['is_custom_permission'])
                                                            <span><input type="checkbox"
                                                                    id="role-{{ $role->name }}-permission-add_{{ strtolower(str_replace(' ', '_', $module['module_name'])) }}"
                                                                    name="permission[add_{{ strtolower(str_replace(' ', '_', $module['module_name'])) }}][]"
                                                                    value="{{ $role->name }}" class="form-check-input"
                                                                    {{ AuthHelper::checkRolePermission($role, 'add_' . strtolower(str_replace(' ', '_', $module['module_name']))) ? 'checked' : '' }}></span>
                                                        @endif
                                                    </td>
                                                    <td>
                                                        @if (isset($module['is_custom_permission']) && !$module['is_custom_permission'])
                                                            <span><input type="checkbox"
                                                                    id="role-{{ $role->name }}-permission-edit_{{ strtolower(str_replace(' ', '_', $module['module_name'])) }}"
                                                                    name="permission[edit_{{ strtolower(str_replace(' ', '_', $module['module_name'])) }}][]"
                                                                    value="{{ $role->name }}" class="form-check-input"
                                                                    {{ AuthHelper::checkRolePermission($role, 'edit_' . strtolower(str_replace(' ', '_', str_replace(' ', '_', $module['module_name'])))) ? 'checked' : '' }}></span>
                                                        @endif
                                                    </td>
                                                    <td>
                                                        @if (isset($module['is_custom_permission']) && !$module['is_custom_permission'])
                                                            <span><input type="checkbox"
                                                                    id="role-{{ $role->name }}-permission-delete_{{ strtolower(str_replace(' ', '_', $module['module_name'])) }}"
                                                                    name="permission[delete_{{ strtolower(str_replace(' ', '_', $module['module_name'])) }}][]"
                                                                    value="{{ $role->name }}" class="form-check-input"
                                                                    {{ AuthHelper::checkRolePermission($role, 'delete_' . strtolower(str_replace(' ', '_', $module['module_name']))) ? 'checked' : '' }}></span>
                                                        @endif
                                                    </td>

                                                    @if (isset($module['more_permission']) && is_array($module['more_permission']))
                                                        <td class="text-end">

                                                            <a data-bs-toggle="collapse"
                                                                data-bs-target="#demo_{{ $mKey }}"
                                                                class="accordion-toggle  btn btn-primary btn-xs"><i
                                                                    class="fa-solid fa-chevron-down me-2"> </i>More</a>
                                                        </td>
                                                    @else
                                                        <td>

                                                        </td>
                                                    @endif
                                                </tr>

                                                <tr>
                                                    <td colspan="12" class="hiddenRow">
                                                        <div class="accordian-body collapse" id="demo_{{ $mKey }}">
                                                            <table class="table table-striped mb-0">
                                                                <tbody>
                                                                    @if (isset($module['more_permission']) && is_array($module['more_permission']))
                                                                        @foreach ($module['more_permission'] as $permission_data)
                                                                            <tr>
                                                                                <td class="text-center">
                                                                                    {{ ucwords($module['module_name']) }}
                                                                                    {{ ucwords(str_replace('_', ' ', $permission_data)) }}

                                                                                    <span class="ms-5"><input
                                                                                            type="checkbox"
                                                                                            id="role-{{ $role->name }}-permission-{{ strtolower(str_replace(' ', '_', $module['module_name'])) }}_{{ strtolower(str_replace(' ', '_', $permission_data)) }}"
                                                                                            name="permission[{{ strtolower(str_replace(' ', '_', $module['module_name'])) }}_{{ strtolower(str_replace(' ', '_', $permission_data)) }}][]"
                                                                                            value="{{ $role->name }}"
                                                                                            class="form-check-input"
                                                                                            {{ AuthHelper::checkRolePermission($role, strtolower(str_replace(' ', '_', $module['module_name']) . '_' . strtolower(str_replace(' ', '_', $permission_data)))) ? 'checked' : '' }}></span>
                                                                                </td>
                                                                            </tr>
                                                                        @endforeach
                                                                    @endif

                                                                    <div>
                                                                        Some text as placeholder. In real life you can
                                                                        have the elements you have chosen. Like,
                                                                        text, images, lists, etc.
                                                                    </div>
                                                                    <div class="dropdown mt-3">
                                                                        <button class="btn btn-secondary dropdown-toggle"
                                                                            type="button" data-bs-toggle="dropdown">
                                                                            Dropdown button
                                                                        </button>
                                                                        <ul class="dropdown-menu">
                                                                            <li><a class="dropdown-item"
                                                                                    href="#">Action</a></li>
                                                                            <li><a class="dropdown-item"<div>
                                                                                    Some text as placeholder. In real
                                                                                    life you can have the elements you
                                                                                    have chosen. Like,
                                                                                    text, images, lists, etc.
                                                                    </div>
                                                                    <div class="dropdown mt-3">
                                                                        <button class="btn btn-secondary dropdown-toggle"
                                                                            type="button" data-bs-toggle="dropdown">
                                                                            Dropdown button
                                                                        </button>
                                                                        <ul class="dropdown-menu">
                                                                            <li><a class="dropdown-item"
                                                                                    href="#">Action</a></li>
                                                                            <li><a class="dropdown-item"
                                                                                    href="#">Another action</a>
                                                                            </li>
                                                                            <li><a class="dropdown-item"
                                                                                    href="#">Something else
                                                                                    here</a></li>
                                                                        </ul>
                                                                    </div> href="#">Another action</a></li>
                                                                    <li><a class="dropdown-item" href="#">Something
                                                                            else here</a></li>
                                                                    </ul>
                                                        </div>
                                        </tbody>
                                    </table>
                                </div>
                                </td>
                                </tr>
                    @endforeach
                    </tbody>

                    </table>
                </div>
            </div>
        </div>


        {{ Form::close() }}
        @endforeach




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
                    window.location.reload();
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

    <style>
        .permission-collapse table tr td.hiddenRow {
            padding: 0;
        }

        .permission-collapse table tr td.hiddenRow table td {
            padding: 20px;
        }

        .permission-collapse table tr td.hiddenRow table tr:last-child td {
            border: none;
        }
    </style>
@endsection
