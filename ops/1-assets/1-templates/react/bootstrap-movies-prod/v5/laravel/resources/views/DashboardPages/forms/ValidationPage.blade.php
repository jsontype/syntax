@extends('layouts.app')
@section('content')
<div>
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">{{__('form.default_validation')}}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>{{__('form.lorem_ipsum')}}</p>
                    <form>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label" for="validationDefault01">{{__('form.First_name')}}</label>
                                <input type="text" class="form-control" id="validationDefault01" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label" for="validationDefault02">{{__('form.Last_name')}}</label>
                                <input type="text" class="form-control" id="validationDefault02" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="validationCustomUsername" class="form-label">{{__('form.username')}}</label>
                                <div class="form-group input-group">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" id="validationCustomUsername"
                                        aria-label="Username" aria-describedby="basic-addon1" required>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label" for="validationDefault03">{{__('form.city')}}</label>
                                <input type="text" class="form-control" id="validationDefault03" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label" for="validationDefault04">{{__('form.state')}}</label>
                                <select class="form-select" id="validationDefault04" required>
                                    <option selected disabled value="">{{__('form.choose...')}}</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label" for="validationDefault05">{{__('form.zip')}}</label>
                                <input type="text" class="form-control" id="validationDefault05" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                                <label class="form-check-label" for="invalidCheck2">
                                    {{__('form.Agree_to')}}
                                </label>
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-primary" type="submit">{{__('form.Submit_form')}}</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title"> {{__('form.supportedel_ements')}}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>{{__('form.lorem_ipsum')}}</p>
                    <form class="was-validated">
                        <div class="form-group">
                            <label for="validationTextarea" class="form-label">{{__('form.textarea')}}</label>
                            <textarea class="form-control is-invalid" id="validationTextarea"
                                placeholder="{{__('form.required_example')}}" required></textarea>
                            <div class="invalid-feedback">
                                {{__('form.Please_enter.')}}
                            </div>
                        </div>
                        <div class="form-check form-group">
                            <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
                            <label class="form-check-label" for="validationFormCheck1">{{__('form.check_this')}}</label>
                            <div class="invalid-feedback">{{__('form.invalid _feedback')}}</div>
                        </div>
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked"
                                required>
                            <label class="form-check-label"
                                for="validationFormCheck2">{{__('form.toggle_this')}}</label>
                        </div>
                        <div class="form-check form-group">
                            <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked"
                                required>
                            <label class="form-check-label" for="validationFormCheck3">{{__('form.Or_toggle')}}</label>
                            <div class="invalid-feedback">{{__('form.example_invalid')}}</div>
                        </div>
                        <div class="form-group">
                            <select class="form-select" required aria-label="select example">
                                <option value="">{{__('form.Open_this_select_menu')}}</option>
                                <option value="1">{{__('form.One')}}</option>
                                <option value="2">{{__('form.Two')}}</option>
                                <option value="3">{{__('form.Three')}}</option>
                            </select>
                            <div class="invalid-feedback">{{__('form.example_invalid_select')}}</div>
                        </div>
                        <div class="form-group mb-0">
                            <input type="file" class="form-control" aria-label="file example" required>
                            <div class="invalid-feedback">{{__('form.Example_invalid_feedback')}}</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">{{__('form.custom_validation')}}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>{{__('form.lorem_ipsum')}}</p>
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-6">
                            <label for="validationCustom01" class="form-label">{{__('form.First_name')}}</label>
                            <input type="text" class="form-control" id="validationCustom01" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustom02" class="form-label">{{__('form.Last_name')}}</label>
                            <input type="text" class="form-control" id="validationCustom02" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustomUsername01" class="form-label">{{__('form.username')}}</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" class="form-control" id="validationCustomUsername01"
                                    aria-describedby="inputGroupPrepend" required>
                                <div class="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustom03" class="form-label">{{__('form.city')}}</label>
                            <input type="text" class="form-control" id="validationCustom03" required>
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustom04" class="form-label">{{__('form.state')}}</label>
                            <select class="form-select" id="validationCustom04" required>
                                <option selected disabled value="">{{__('form.choose...')}}</option>
                                <option>...</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustom05" class="form-label">{{__('form.zip')}}</label>
                            <input type="text" class="form-control" id="validationCustom05" required>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                                <label class="form-check-label" for="invalidCheck">
                                    {{__('form.Agree_to')}}
                                </label>
                                <div class="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">{{__('form.Submit_form')}}</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">{{__('form.tooltips')}}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>{{__('form.lorem_ipsum')}}</p>
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-6 position-relative">
                            <label for="validationTooltip01" class="form-label">{{__('form.First_name')}}</label>
                            <input type="text" class="form-control" id="validationTooltip01" value="Mark" required>
                            <div class="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-6 position-relative">
                            <label for="validationTooltip02" class="form-label">{{__('form.Last_name')}}</label>
                            <input type="text" class="form-control" id="validationTooltip02" value="Otto" required>
                            <div class="valid-tooltip">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-6 position-relative">
                            <label for="validationTooltipUsername" class="form-label">{{__('form.username')}}</label>
                            <div class="input-group has-validation">
                                <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                <input type="text" class="form-control" id="validationTooltipUsername"
                                    aria-describedby="validationTooltipUsernamePrepend" required>
                                <div class="invalid-tooltip">
                                    Please choose a unique and valid username.
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 position-relative">
                            <label for="validationTooltip03" class="form-label">{{__('form.city')}}</label>
                            <input type="text" class="form-control" id="validationTooltip03" required>
                            <div class="invalid-tooltip">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div class="col-md-6 position-relative">
                            <label for="validationTooltip04" class="form-label">{{__('form.state')}}</label>
                            <select class="form-select" id="validationTooltip04" required>
                                <option selected disabled value="">{{__('form.choose...')}}</option>
                                <option>...</option>
                            </select>
                            <div class="invalid-tooltip">
                                Please select a valid state.
                            </div>
                        </div>
                        <div class="col-md-6 position-relative">
                            <label for="validationTooltip05" class="form-label">{{__('form.zip')}}</label>
                            <input type="text" class="form-control" id="validationTooltip05" required>
                            <div class="invalid-tooltip">
                                Please provide a valid zip.
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="submit">{{__('form.Submit_form')}}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection