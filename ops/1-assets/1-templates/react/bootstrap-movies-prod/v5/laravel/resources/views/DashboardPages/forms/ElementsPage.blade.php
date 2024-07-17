@extends('layouts.app')

@section('content')
<div>
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">{{__('form.Basic_Form')}}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label class="form-label" for="email">{{__('form.Email_address')}}:</label>
                            <input type="email" class="form-control" id="email1">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="pwd">{{__('form.Password')}}:</label>
                            <input type="password" class="form-control" id="pwd">
                        </div>
                        <div class="checkbox mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3">
                                <label class="form-check-label" for="flexCheckDefault3">
                                    {{__('form.Remember_me')}}
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">{{__('form.Submit')}}</button>
                        <button type="submit" class="btn btn-danger">{{__('form.Cancel')}}</button>
                    </form>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">{{__('form.Form_Grid')}}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <form>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="{{__('form.First_name')}}">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="{{__('form.Last_name')}}">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">{{__('form.Input')}}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label class="form-label" for="exampleInputText1">{{__('form.Input_Text')}}</label>
                            <input type="text" class="form-control" id="exampleInputText1"
                                value="{{__('form.Mark_Jhon')}}" placeholder="Enter Name">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="exampleInputEmail3">{{__('form.Email_Input')}}</label>
                            <input type="email" class="form-control" id="exampleInputEmail3" value="markjhon@gmail.com"
                                placeholder="Enter Email">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="exampleInputurl">{{__('form.Url_Input')}}</label>
                            <input type="url" class="form-control" id="exampleInputurl" value="https://getbootstrap.com"
                                placeholder="Enter Url">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="exampleInputphone">{{__('form.Teliphone_Input')}}</label>
                            <input type="tel" class="form-control" id="exampleInputphone" value="1-(555)-555-5555">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="exampleInputNumber1">{{__('form.Number_Input')}}</label>
                            <input type="number" class="form-control" id="exampleInputNumber1" value="2356">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="exampleInputPassword3">{{__('form.Password_Input')}}</label>
                            <input type="password" class="form-control" id="exampleInputPassword3" value="markjhon123"
                                placeholder="Enter Password">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="exampleInputdate">{{__('form.Date_Input')}}</label>
                            <input type="date" class="form-control" id="exampleInputdate" value="2019-12-18">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="exampleInputmonth">{{__('form.Month_Input')}}</label>
                            <input type="month" class="form-control" id="exampleInputmonth" value="2019-12">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="exampleInputweek">{{__('form.Week_Input')}}</label>
                            <input type="week" class="form-control" id="exampleInputweek" value="2019-W46">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="exampleInputtime">{{__('form.Time_Input')}}</label>
                            <input type="time" class="form-control" id="exampleInputtime" value="13:45">
                        </div>
                        <div class="form-group">
                            <label class="form-label"
                                for="exampleInputdatetime">{{__('form.Date_and_Time_Input')}}</label>
                            <input type="datetime-local" class="form-control" id="exampleInputdatetime"
                                value="2019-12-19T13:45:00">
                        </div>
                        <div class="form-group">
                            <label class="form-label"
                                for="exampleFormControlTextarea1">{{__('form.Example_textarea')}}</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">{{__('form.Submit')}}</button>
                        <button type="submit" class="btn btn-danger">{{__('form.Cancel')}}</button>
                    </form>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">{{__('form.Input_Size')}}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label class="form-label" for="colFormLabelSm">{{__('form.Small')}}</label>
                            <input type="email" class="form-control form-control-sm" id="colFormLabelSm"
                                placeholder="form-control-sm">
                        </div>
                        <div class="form-group">
                            <label class="form-label" for="colFormLabel">{{__('form.Default')}}</label>
                            <input type="email" class="form-control" id="colFormLabel" placeholder="form-control">
                        </div>
                        <div class="form-group mb-0">
                            <label class="form-label pb-0" for="colFormLabelLg">{{__('form.Large')}}</label>
                            <input type="email" class="form-control form-control-lg" id="colFormLabelLg"
                                placeholder="form-control-lg">
                        </div>
                    </form>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">{{__('form.Select_Size')}}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label class="form-label">{{__('form.Small')}}</label>
                        <select class="form-select form-select-sm mb-3 shadow-none">
                            <option selected="">{{__('form.Open_this_select_menu')}}</option>
                            <option value="1">{{__('form.One')}}</option>
                            <option value="2">{{__('form.Two')}}</option>
                            <option value="3">{{__('form.Three')}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{__('form.Default')}}</label>
                        <select class="form-select mb-3 shadow-none">
                            <option selected="">{{__('form.Open_this_select_menu')}}</option>
                            <option value="1">{{__('form.One')}}</option>
                            <option value="2">{{__('form.Two')}}</option>
                            <option value="3">{{__('form.Three')}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{__('form.Large')}}</label>
                        <select class="form-select form-select-lg shadow-none">
                            <option selected="">{{__('form.Open_this_select_menu')}}</option>
                            <option value="1">{{__('form.One')}}</option>
                            <option value="2">{{__('form.Two')}}</option>
                            <option value="3">{{__('form.Three')}}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">{{__('form.Horizontal_Form')}}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <form class="form-horizontal">
                        <div class="form-group row">
                            <label class="control-label col-sm-3 align-self-center mb-0"
                                for="email11">{{__('form.Email')}}:</label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control" id="email11"
                                    placeholder="{{__('form.Enter_Your_email')}}">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-sm-3 align-self-center mb-0"
                                for="pwd2">{{__('form.Password')}}:</label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control" id="pwd2"
                                    placeholder="{{__('form.Enter_Your_password')}}">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="remembercheck">
                                <label class="form-check-label" for="remembercheck">
                                    {{__('form.Remember_me')}}
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">{{__('form.Submit')}}</button>
                            <button type="submit" class="btn btn-danger">{{__('form.Cancel')}}</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">{{__('form.Input')}}</h4>
                    </div>
                </div>

                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label class="form-label" for="exampleInputDisabled1">{{__('form.Disabled_Input')}}</label>
                            <input type="text" class="form-control" id="exampleInputDisabled1" disabled=""
                                value="{{__('form.Mark_Jhon')}}">
                        </div>
                    </form>
                    <div class="card-body">
                        <form class="form-horizontal">
                            <div class="form-group row">
                                <label class="control-label col-sm-3 align-self-center mb-0"
                                    for="email">{{__('form.Email')}}:</label>
                                <div class="col-sm-9">
                                    <input type="email" class="form-control" id="email"
                                        placeholder="{{__('form.Enter_Your_email')}}">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="control-label col-sm-3 align-self-center mb-0"
                                    for="pwd1">{{__('form.Password')}}:</label>
                                <div class="col-sm-9">
                                    <input type="password" class="form-control" id="pwd1"
                                        placeholder="{{__('form.Enter_Your_password')}}">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="remebercheck2">
                                    <label class="form-check-label" for="remebercheck2">
                                        {{__('form.Remember_me')}}
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">{{__('form.Submit')}}</button>
                                <button type="submit" class="btn btn-danger">{{__('form.Cancel')}}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">{{__('form.Form_row')}}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label class="form-label" for="exampleInputReadonly">{{__('form.Readonly')}}</label>
                        <input type="text" class="form-control" id="exampleInputReadonly" readonly=""
                            value="{{__('form.Mark_Jhon')}}">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="exampleInputcolor">{{__('form.Input_Color')}}</label>
                        <input type="color" class="form-control" id="exampleInputcolor" value="#50b5ff">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="exampleFormControlSelect1">{{__('form.Select_Input')}}</label>
                        <select class="form-select" id="exampleFormControlSelect1">
                            <option selected="" disabled="">{{__('form.Select_your_age')}}</option>
                            <option>0-18</option>
                            <option>18-26</option>
                            <option>26-46</option>
                            <option>46-60</option>
                            <option>Above 60</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="choices-single-default">{{__('form.Select_Input_New')}}</label>
                        <select class="form-select" data-trigger name="choices-single-default"
                            id="choices-single-default">
                            <option value="">{{__('form.This_is_a_placeholder')}}</option>
                            <option value="Choice 1">{{__('form.Choice_1')}}</option>
                            <option value="Choice 2">{{__('form.Choice_2')}}</option>
                            <option value="Choice 3">{{__('form.Choice_3')}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="choices-multiple-default">{{__('form.Default')}}</label>
                        <select class="form-select" data-trigger name="choices-multiple-default"
                            id="choices-multiple-default" multiple>
                            <option value="Choice 1" selected>{{__('form.Choice_1')}}</option>
                            <option value="Choice 2">{{__('form.Choice_2')}}</option>
                            <option value="Choice 3">{{__('form.Choice_3')}}</option>
                            <option value="Choice 4" disabled>{{__('form.Choice_4')}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label"
                            for="exampleFormControlSelect2">{{__('form.Example_multiple_select')}}</label>
                        <select multiple="" class="form-select" id="exampleFormControlSelect2">
                            <option>{{__('form.select')}}-1</option>
                            <option>{{__('form.select')}}-2</option>
                            <option>{{__('form.select')}}-3</option>
                            <option>{{__('form.select')}}-4</option>
                            <option>{{__('form.select')}}-5</option>
                            <option>{{__('form.select')}}-6</option>
                            <option>{{__('form.select')}}-7</option>
                            <option>{{__('form.select')}}-8</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="customRange1">{{__('form.Range_Input')}}</label>
                        <input type="range" class="form-range" id="customRange1">
                    </div>
                    <div class="form-group">
                        <div class="form-check d-block">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11">
                            <label class="form-check-label" for="flexCheckDefault11">
                                {{__('form.Default_checkbox')}}
                            </label>
                        </div>
                        <div class="form-check d-block">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked11" checked>
                            <label class="form-check-label" for="flexCheckChecked11">
                                {{__('form.Checked_checkbox')}}
                            </label>
                        </div>
                        <div class="form-check d-block">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
                            <label class="form-check-label" for="flexCheckDisabled">
                                {{__('form.Disabled_checkbox')}}
                            </label>
                        </div>
                        <div class="form-check d-block">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled"
                                checked disabled>
                            <label class="form-check-label" for="flexCheckCheckedDisabled">
                                {{__('form.Disabled_checked_checkbox')}}
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check d-block">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                {{__('form.Default_radio')}}
                            </label>
                        </div>
                        <div class="form-check d-block">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                checked>
                            <label class="form-check-label" for="flexRadioDefault2">
                                {{__('form.Default_checked_radio')}}
                            </label>
                        </div>
                        <div class="form-check d-block">
                            <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled"
                                disabled>
                            <label class="form-check-label" for="flexRadioDisabled">
                                {{__('form.Disabled_radio')}}
                            </label>
                        </div>
                        <div class="form-check d-block">
                            <input class="form-check-input" type="radio" name="flexRadioDisabled"
                                id="flexRadioCheckedDisabled" checked disabled>
                            <label class="form-check-label" for="flexRadioCheckedDisabled">
                                {{__('form.Disabled_checked_radio')}}
                            </label>
                        </div>
                        <div class="form-check form-radio">
                            <input type="radio" id="customRadio5" name="customRadio5" class="form-check-input"
                                disabled="" checked="">
                            <label class="form-check-label" for="customRadio5">
                                {{__('form.Selected_and_disabled_radio')}}</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadio6" name="customRadio1" class="custom-control-input">
                            <label class="custom-control-label" for="customRadio6">{{__('form.Default_radio')}}</label>
                        </div>
                        <div class="form-group">
                            <div class="form-check d-block">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
                                <label class="form-check-label" for="flexCheckDefault2">
                                    {{__('form.Default_checkbox')}}
                                </label>
                            </div>
                            <div class="form-check d-block">
                                <input class="form-check-input" type="checkbox" value="" id="checkedcheck" checked>
                                <label class="form-check-label" for="checkedcheck">
                                    {{__('form.Checked_checkbox')}}
                                </label>
                            </div>
                            <div class="form-check d-block">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled1"
                                    disabled>
                                <label class="form-check-label" for="flexCheckDisabled1">
                                    {{__('form.Disabled_checkbox')}}
                                </label>
                            </div>
                            <div class="form-check d-block">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled11"
                                    checked disabled>
                                <label class="form-check-label" for="flexCheckCheckedDisabled11">
                                    {{__('form.Disabled_checked_checkbox')}}
                                </label>
                            </div>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadio8" name="customRadio6" class="custom-control-input"
                                checked="">
                            <label class="custom-control-label" for="customRadio8">{{__('form.Selected_radio')}}</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadio9" name="customRadio7" class="custom-control-input"
                                disabled="">
                            <label class="custom-control-label" for="customRadio9">{{__('form.disabled_radio')}}</label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadio10" name="customRadio8" class="custom-control-input"
                                disabled="" checked="">
                            <label class="custom-control-label"
                                for="customRadio10">{{__('form.Selected_and_disabled_radio')}}</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                            <label class="form-check-label"
                                for="flexSwitchCheckDefault">{{__('form.Default_switch_checkbox_input')}}</label>
                        </div>
                        <div class="form-group">
                            <label for="customFile1"
                                class="form-label custom-file-input">{{__('form.Choose_file')}}</label>
                            <input class="form-control" type="file" id="customFile1">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="customFile" class="form-label custom-file-input">Example file input</label>
                        <input class="form-control" type="file" id="customFile">
                    </div>
                    <div class="form-group">
                        <label for="customFile2" class="form-label custom-file-input">{{__('form.Choose_file')}}</label>
                        <input class="form-control" type="file" id="customFile2">
                    </div>
                    <button type="submit" class="btn btn-primary">{{__('form.Submit')}}</button>
                    <button type="submit" class="btn btn-danger">{{__('form.Cancel')}}</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
@endsection