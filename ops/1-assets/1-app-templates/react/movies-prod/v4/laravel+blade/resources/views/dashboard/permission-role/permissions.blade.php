<x-layouts.dashboard :assets="$assets ?? []" :modalJs="true">
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title mb-0">Permission & Role</h4>
                    </div>
                    <div>
                        <a href="#" class="btn btn-primary" data-bs-toggle="tooltip" data-placement="top"
                            title="{{ trans('global-message.add_form_title',['form' => trans('permission-role.permission_title')] ) }}"
                            data-iq-modal="open"
                            data-iq-modal-size="small"
                            data-iq-modal-url="{{ route('permission.create') }}"
                            data-iq-modal-title="{{ trans('global-message.add_form_title',['form' => trans('permission-role.permission_title')] ) }}">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span>{{ trans('permission-role.permission_title') }}</span>
                        </a>
                        <a href="#" class="btn btn-primary ms-2" data-bs-toggle="tooltip"  data-placement="top"
                            title="{{ trans('global-message.add_form_title',['form' => trans('permission-role.role_title')] ) }}"
                            data-iq-modal="open"
                            data-iq-modal-size="small"
                            data-iq-modal-url="{{ route('role.create') }}"
                            data-iq-modal-title="{{ trans('global-message.add_form_title',['form' => trans('permission-role.role_title')] ) }}">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span>{{trans('permission-role.role_title')}}</span>
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        {{ Form::open(['route' => 'permission-role.store','method' => 'post']) }}
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th></th>
                                        @foreach ($roles as $role)
                                            <th class="text-center">{{ $role->title }}
                                            <div style="float:right;">
                                            <a href="#" class="btn btn-sm btn-icon text-primary flex-end" data-bs-toggle="tooltip"
                                                title="{{ trans('global-message.edit_form_title',['form' => trans('permission-role.role_title')] ) }}"
                                                data-iq-modal="open"
                                                data-iq-modal-size="small"
                                                data-iq-modal-url="{{ route('role.edit', $role->id) }}"
                                                data-iq-modal-title="{{ trans('global-message.edit_form_title',['form' => trans('permission-role.role_title')] ) }}">
                                                <span class="btn-inner">
                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                        <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            @php
                                                $message = __('global-message.delete_alert', ['form' => __('permission-role.role_title')]);
                                            @endphp

                                            <a class="btn btn-sm btn-icon text-primary flex-end"  data-bs-toggle="tooltip"
                                            title="{{ trans('global-message.delete_form_title',['form' => trans('permission-role.role_title')] ) }}" href="#" onclick="return confirm('{{$message ?? ''}}') ? document.getElementById('role-delete-{{$role->id}}').submit() : false">
                                                <span class="btn-inner">
                                                    <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                        <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M20.708 6.23975H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                            </div>
                                            </th>
                                        @endforeach
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($permissions as $permission)
                                    <tr class="{{ !isset($permission->parent_id) ? 'bg-body' : '' }}">
                                        <td>{{ $permission->title }}
                                        <div style="float:right;">
                                        <a href="#" class="btn btn-sm btn-icon text-primary flex-end" data-bs-toggle="tooltip"
                                        title="{{ trans('global-message.edit_form_title',['form' => trans('permission-role.permission_title')] ) }}"
                                            data-iq-modal="open"
                                            data-iq-modal-size="small"
                                            data-iq-modal-url="{{ route('permission.edit', [$permission->id]) }}"
                                            data-iq-modal-title="{{ trans('global-message.edit_form_title',['form' => trans('permission-role.permission_title')] ) }}">
                                            <span class="btn-inner">
                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                    <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </a>
                                        @php
                                            $message = __('global-message.delete_alert', ['form' => __('permission-role.permission_title')]);
                                        @endphp

                                        <a class="btn btn-sm btn-icon text-primary flex-end"  data-bs-toggle="tooltip"
                                        title="{{ trans('global-message.delete_form_title',['form' => trans('permission-role.permission_title')] ) }}" href="#" onclick="return confirm('{{$message ?? ''}}') ? document.getElementById('permission-delete-{{$permission->id}}').submit() : false">
                                            <span class="btn-inner">
                                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                                    <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M20.708 6.23975H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </span>
                                        </a>
                                        </div>
                                        </td>
                                        @foreach ($roles as $role)
                                            <td class="text-center">
                                            <div class="custom-control custom-checkbox custom-control-inline">
                                                <input class="custom-control-input" type="checkbox" id="role-{{$role->id}}-permission-{{$permission->id}}" name="permission[{{$permission->name}}][]" value='{{$role->name}}'
                                                {{ (AuthHelper::checkRolePermission($role,$permission->name)) ? 'checked' : '' }}>
                                                <label class="custom-control-label" for="role-{{$role->id}}-permission-{{$permission->id}}"></label>
                                            </div>
                                            </td>
                                        @endforeach
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                            <div class="text-center">
                            {{ Form::submit( __('global-message.save'), ['class'=>'btn btn-md btn-primary']) }}
                        </div>
                        {{ Form::close() }}
                        @foreach($permissions as $permission)
                        
                            <form action="{{route('permission.destroy',$permission->id)}}" id="permission-delete-{{$permission->id}}" method="post">
                                @method('delete')
                                @csrf()
                            </form>
                        @endforeach
                        @foreach ($roles as $role)
                            <form action="{{route('role.destroy',$role->id)}}" id="role-delete-{{$role->id}}" method="post">
                                @method('delete')
                                @csrf()
                            </form>

                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
