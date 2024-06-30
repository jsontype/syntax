@php
    $route = 'backend.role.store';
    $method = 'post';
    if(isset($data->id)) {
        $route = ['backend.role.update', $data->id];
        $method = 'put';
    }
@endphp

{{ Form::model($data,['route' => $route]) }}
    @method($method)


    <div class="form-group">
        <label class="form-label">{{trans('permission-role.role_label_title')}} <span class="text-danger">*</span></label>
        {{ Form::text('title', old('title'), ['class' => 'form-control','id' => 'role-title', 'placeholder' => 'Role Title', 'required']) }}
    </div>
    {{ Form::submit( __('messages.save'), ['class'=>'btn btn-primary']) }}
    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">{{ __('messages.close') }}</button>
{{ Form::close() }}
