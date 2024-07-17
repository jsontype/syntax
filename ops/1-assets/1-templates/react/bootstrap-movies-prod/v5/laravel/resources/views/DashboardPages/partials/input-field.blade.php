<div class="form-group px-3 {{ isset($class) ? $class : '' }}">
    <label class="form-label flex-grow-1" for="{{$label}}">
        <strong>{{$label}}</strong> @if(isset($isRequired) && $isRequired == 'true')<span class="text-danger">*</span>@endif:
    </label>

    <!-- textarea input -->
    @if($type == "textarea")

    <textarea id="{{$label}}" class="form-control" placeholder="{{$placeholder}}">{{$value}}</textarea>
    @else
    <!-- toggle switch -->
    @if($type == "toggle")

        <div class="form-check form-switch ms-2">
            <input id="{{$label}}" class="form-check-input" type="checkbox" {{$value}} />
        </div>
        @else
    <!-- common inputs -->
    <input id="{{$label}}" type="{{$type}}" class="form-control {{ isset($className) ? $className : '' }}" placeholder="{{ isset($placeholder) ? $placeholder : ''}}" value="{{isset($value) ? $value : ''}}" min="{{ isset($min) ? $min : ''}}"
       multiple="{{ isset($isMulti) ? $isMulti : ''}}" />
       @endif
     @endif

</div>
