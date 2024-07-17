@php
    $route = 'permission.store';
    $method = 'post';
    if(isset($data->id)) {
        $route = ['permission.update', $data->id];
        $method = 'put';
    }
@endphp

{{ Form::model($data,['route' => $route]) }}
    @method($method)
    <div class="form-group">
        <label class="form-label">{{trans('permission-role.permission_label_title')}} <span class="text-danger">*</span></label>
        {{ Form::text('title', old('title'), ['class' => 'form-control','id' => 'permission-title', 'placeholder' => 'Permission Title', 'required']) }}
    </div>
    {{ Form::submit( __('global-message.save'), ['class'=>'btn btn-primary']) }}
    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">{{ __('global-message.close') }}</button>
{{ Form::close() }}
