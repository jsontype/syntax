@php
    $route = 'role.store';
    $method = 'post';
    if(isset($data->id)) {
        $route = ['role.update', $data->id];
        $method = 'put';
    }
@endphp

{{ Form::model($data,['route' => $route]) }}
    @method($method)
    

    <div class="form-group">
        <label class="form-label">{{trans('permission-role.role_label_title')}} <span class="text-danger">*</span></label>
        {{ Form::text('title', old('title'), ['class' => 'form-control','id' => 'role-title', 'placeholder' => 'Role Title', 'required']) }}
    </div>
    <label class="form-check">{{trans('permission-role.role_status')}}</label>
    <div class="custom-control custom-radio custom-control-inline">
        {{ Form::radio('status', '1',old('status'), ['class' => 'custom-control-input', 'id' => 'roleassigned']); }}
        <label class="custom-control-label" for="roleassigned">Yes</label>
    </div>


    <div class="mb-3  ">
         <div class="custom-control custom-radio custom-control-inline">
        {{ Form::radio('status', '0',old('status'), ['class' => 'custom-control-input', 'id' => 'roleassigned']); }}
        <label class="custom-control-label" for="roleassigned">Nolabel>
    </div>
    </div>
    {{ Form::submit( __('global-message.save'), ['class'=>'btn btn-primary']) }}
    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">{{ __('global-message.close') }}</button>
{{ Form::close() }}
