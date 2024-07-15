@extends('layouts.app', ['module_title' => 'Show List','isSweetalert'=>true,'isFlatpickr'=>true,'Activelink'=>'Tvshow'])
@section('content')
<div class="row">
    <div class="col-sm-12">
        <div class="card pb-3">
            <div class="card-header border-bottom d-flex justify-content-between align-items-center py-3">
                <div class="d-flex align-items-center pt-3 gap-2">
                    <div class="form-group mb-0">
                        <select type="select" class="form-control select2-basic-multiple" placeholder="No Action">
                            <option>{{ __('dashboard.no_action') }}</option>
                            <option>{{ __('dashboard.status') }}</option>
                            <option>{{ __('dashboard.delete') }}</option>
                        </select>

                    </div>
                    <button class="btn btn-primary ">{{ __('dashboard.apply') }}</button>
                </div>
                <button class="btn btn-primary mt-3" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#season-offcanvas" aria-controls="season-offcanvas">
                    <i class="fa-solid fa-plus me-2"></i>{{ __('dashboard.Add_Show') }}
                </button>
            </div>
            <div class="card-body">
                <div class="table-view table-responsive table-space">
                    <table id="seasonTable" class="data-tables table custom-table movie_table" data-toggle="data-table">
                        <thead>
                            <tr class="text-uppercase">
                                <th class="text-center">
                                    <input type="checkbox" class="form-check-input" />
                                </th>
                                <th>Movie</th>
                                <th>Quality</th>
                                <th>Category</th>
                                <th>Publish Date</th>
                                <th>Movie Access</th>
                                <th>Seo</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @include('components/datatable/DataTable', [
                            'name' => 'arrival 1999',
                            'thumbnail' => asset('dashboard/images/movie-thumb/03.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 21m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            'value'=>true
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'day of darkness',
                            'thumbnail' => asset('dashboard/images/movie-thumb/04.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 40m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'don jon',
                            'thumbnail' => asset('dashboard/images/movie-thumb/05.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '3h',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'mega fun',
                            'thumbnail' => asset('dashboard/images/movie-thumb/06.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 21m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'my true friends',
                            'thumbnail' => asset('dashboard/images/movie-thumb/07.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 21m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            'value'=>true
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'night mare',
                            'thumbnail' => asset('dashboard/images/movie-thumb/08.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 21m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'portable',
                            'thumbnail' => asset('dashboard/images/movie-thumb/09.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 21m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'suffered',
                            'thumbnail' => asset('dashboard/images/movie-thumb/10.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 21m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            'value'=>true
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'the witcher',
                            'thumbnail' => asset('dashboard/images/movie-thumb/02.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 21m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'troll hunter',
                            'thumbnail' => asset('dashboard/images/movie-thumb/01.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 21m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'troll hunter',
                            'thumbnail' => asset('dashboard/images/movie-thumb/01.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 21m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'troll hunter',
                            'thumbnail' => asset('dashboard/images/movie-thumb/01.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 21m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            ])

                        </tbody>
                    </table>
                </div>
            </div>

        </div>

        <!-- Offcanvas Form -->
        <div class="offcanvas offcanvas-end offcanvas-width-80 on-rtl end" tabindex="-1" id="season-offcanvas"
            aria-labelledby="season-offcanvas-lable">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel1">{{__('movielist.show_list')}}</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form>
                    <div class="section-form">
                        <fieldset>
                            <legend>{{__('movielist.shows')}}</legend>

                            <div class="row mt-3">
                                <div class="col-sm-12">
                                    <div class="form-group px-3 ">
                                        <label class="form-label flex-grow-1" for="Show Name">
                                            <strong>{{__('movielist.show_name')}}</strong> <span
                                                class="text-danger">*</span>:
                                        </label>

                                        <!-- textarea input -->
                                        <!-- toggle switch -->
                                        <!-- common inputs -->
                                        <input id="Show Name" type="text" class="form-control "
                                            placeholder="{{__('movielist.enter_show_name')}}" value="" min=""
                                            multiple="">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group px-3 ">
                                        <label class="form-label flex-grow-1" for="Description">
                                            <strong>{{__('movielist.description')}}</strong> :
                                        </label>

                                        <!-- textarea input -->
                                        <textarea id="Description" class="form-control"
                                            placeholder="{{__('movielist.description')}}"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3 px-3">
                                <div class="col-lg-6">
                                    <label class="form-label flex-grow-1"
                                        for="access"><strong>{{__('movielist.Show_Access')}}:</strong></label>
                                    <div class="form-group">
                                        <select id="access" type="select" class="form-control select2-basic-multiple">
                                            <option>{{__('movielist.free')}}</option>
                                            <option>{{__('movielist.standard')}}</option>
                                            <option>{{__('movielist.premium')}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label flex-grow-1"
                                        for="language"><strong>{{__('movielist.language')}}:</strong></label>
                                    <div class="form-group">
                                        <select id="language" type="select" class="form-control select2-basic-multiple">
                                            <option>{{__('movielist.english')}}</option>
                                            <option>{{__('movielist.hindi')}}</option>
                                            <option>{{__('movielist.french')}}</option>
                                            <option>{{__('movielist.marathi')}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <label class="form-label flex-grow-1" for="Genres"><strong>genres:</strong></label>
                                    <div class="form-group">
                                        <select id="Genres" type="select" class="form-control select2-basic-multiple">
                                            <option>{{__('movielist.action')}}</option>
                                            <option>{{__('movielist.adventure')}}</option>
                                            <option>{{__('movielist.Comedy')}}</option>
                                            <option>{{__('movielist.animation')}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center my-4 px-3">
                                <h5 class="mb-0">
                                    <strong>{{__('movielist.cast_creaw')}}</strong>
                                </h5>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#cast-modal">
                                    <i class="fa-solid fa-square-plus me-2"></i>{{__('movielist.add_cast_button')}}
                                </button>

                                <div class="modal fade" id="cast-modal" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="cast-modal-label">
                                                    {{__('movielist.add_cast_title')}}
                                                </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close">
                                                </button>
                                            </div>
                                            <div class="modal-body">

                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <div class="form-group px-3 ">
                                                            <label class="form-label flex-grow-1" for="Person">
                                                                <strong> {{__('movielist.person')}}</strong> :
                                                            </label>

                                                            <!-- textarea input -->
                                                            <!-- toggle switch -->
                                                            <!-- common inputs -->
                                                            <input id="Person" type="text" class="form-control "
                                                                placeholder="{{__('movielist.Enter_Name')}}" value=""
                                                                min="" multiple="">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="form-group px-3 d-flex flex-column">
                                                            <label class="form-label flex-grow-1"
                                                                for="occupation1"><strong>{{__('movielist.occupation')}}:</strong></label>
                                                            <select id="occupation1" type="select"
                                                                class="form-control select2-basic-multiple "
                                                                placeholder="{{__('movielist.Select_Occupation')}}"
                                                                >
                                                                <option>{{__('movielist.cast')}}</option>
                                                                <option>{{__('movielist.crew')}}</option>
                                                                <option>{{__('movielist.production')}}</option>
                                                                <option>{{__('movielist.director')}}</option>
                                                                <option>{{__('movielist.actor')}}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="form-group px-3 ">
                                                            <label class="form-label flex-grow-1" for="As">
                                                                <strong>{{__('movielist.as')}}</strong> :
                                                            </label>

                                                            <!-- textarea input -->
                                                            <!-- toggle switch -->
                                                            <!-- common inputs -->
                                                            <input id="As" type="text" class="form-control "
                                                                placeholder="{{__('movielist.played_as')}}" value=""
                                                                min="" multiple="">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="form-group px-3 d-flex justify-content-between">
                                                            <label class="form-label flex-grow-1" for="Status">
                                                                <strong>{{__('movielist.status')}}</strong> :
                                                            </label>

                                                            <!-- textarea input -->
                                                            <!-- toggle switch -->
                                                            <div class="form-check form-switch ms-2">
                                                                <input id="Status" class="form-check-input"
                                                                    type="checkbox">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">{{__('movielist.Close')}}</button>
                                                <button type="button"
                                                    class="btn btn-primary">{{__('movielist.Save_changes')}}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row px-3">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-strip">
                                        <thead>
                                            <tr class="text-center">
                                                <th>{{__('movielist.cast__crewss')}}</th>
                                                <th>{{__('movielist.name')}}</th>
                                                <th>{{__('movielist.Role')}}</th>
                                                <th>{{__('movielist.action')}}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-center">
                                                <td>{{__('movielist.cast')}}</td>
                                                <td>{{__('movielist.ABC')}}</td>
                                                <td>{{__('movielist.james')}}</td>
                                                <td>
                                                    <div class="d-flex align-items-center justify-content-center">

                                                        <a aria-current="page" href="#" class="active text-success"
                                                            title="Edit">
                                                            <i class="fa-solid fa-pen mx-4"></i>
                                                        </a>


                                                        <a aria-current="page" href="#" class="active text-danger"
                                                            title="Delete">
                                                            <i class="fa-solid fa-trash me-4"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="text-center">
                                                <td>{{__('movielist.crew')}}</td>
                                                <td>{{__('movielist.XYZ')}}</td>
                                                <td>{{__('movielist.producer')}}</td>
                                                <td>
                                                    <div class="d-flex align-items-center justify-content-center">

                                                        <a aria-current="page" href="#" class="active text-success"
                                                            title="Edit">
                                                            <i class="fa-solid fa-pen mx-4"></i>
                                                        </a>


                                                        <a aria-current="page" href="#" class="active text-danger"
                                                            title="Delete">
                                                            <i class="fa-solid fa-trash me-4"></i>
                                                        </a>

                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col-lg-3">
                                    <div class="form-group px-3 ">
                                        <label class="form-label flex-grow-1" for="Content Rating">
                                            <strong>{{__('movielist.Content_Rating')}}</strong> :
                                        </label>

                                        <!-- textarea input -->
                                        <!-- toggle switch -->
                                        <!-- common inputs -->
                                        <input id="Content Rating" type="text" class="form-control "
                                            placeholder="{{__('movielist.Rating')}}" value="" min="" multiple="">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group px-5">
                                        <label class="form-label flex-grow-1"
                                            for="genres"><strong>{{__('movielist.Release_Date')}}:</strong></label>
                                        <input class="form-control flatpickr_humandate flatpickr-input" type="hidden"
                                            placeholder="{{__('movielist.release_datess')}}" data-id="multiple">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group px-5">
                                        <label class="form-label flex-grow-1"
                                            for="genres"><strong>{{__('movielist.Publice_Date')}}:</strong></label>
                                        <input class="form-control flatpickr_humandate flatpickr-input" type="hidden"
                                            placeholder="{{__('movielist.publice_date..')}}" data-id="multiple">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group px-3 ">
                                        <label class="form-label flex-grow-1" for="Duration">
                                            <strong>{{__('movielist.Duration')}}</strong> :
                                        </label>

                                        <!-- textarea input -->
                                        <!-- toggle switch -->
                                        <!-- common inputs -->
                                        <input id="Duration" type="text" class="form-control "
                                            placeholder="{{__('movielist.Duration_in_mins')}}" value="" min=""
                                            multiple="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 mt-4 px-3">
                                <div class="form-group  d-flex align-self-start justify-content-between" name="status">
                                    <label class="form-label flex-grow-1"
                                        for="Status"><strong>{{__('movielist.status')}}</strong>
                                        <!--v-if-->:
                                    </label><!-- textarea input -->
                                    <!-- toggle switch -->
                                    <div class="d-flex justify-content-between">
                                        <div class="form-check form-switch ms-2"><input id="Status"
                                                class="form-check-input" type="checkbox"></div>
                                    </div><span class="text-danger"></span>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </form>

            </div>
            <div class="offcanvas-footer border-top">
                <div class="d-grid d-flex gap-3 p-3">
                    <button type="submit" class="btn btn-primary d-block">
                        <i class="fa-solid fa-floppy-disk me-2"></i>{{__('movielist.Save')}}
                    </button>
                    <button type="button" class="btn btn-outline-primary d-block" data-bs-dismiss="offcanvas"
                        aria-label="Close">
                        <i class="fa-solid fa-angles-left me-2"></i>{{__('movielist.Close')}}
                    </button>
                </div>
            </div>
        </div>

        <!-- Edit Form -->
        <div class="offcanvas offcanvas-end offcanvas-width-80" tabindex="-1" id="season-offcanvas-edit"
            aria-labelledby="season-offcanvas-lable">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel1">{{__('movielist.Edit_Show_List')}}</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form>
                    <div class="section-form">
                        <fieldset>
                            <legend>{{__('movielist.shows')}}</legend>

                            <div class="row mt-3">
                                <div class="col-sm-12">
                                    @include('DashboardPages.partials.input-field',[
                                    'label'=>__('movielist.show_name'),
                                    'isRequired'=>true,
                                    'type'=>"text",
                                    'placeholder'=>__('movielist.enter_show_name') ,
                                    'value'=>__('movielist.Day_Of_Darkness'),

                                    ])
                                    {{-- {{> components/partials/input-field label="Show Name" isRequired="true"
                                    type="text"
                                    placeholder="Enter Show Name" value="Day Of Darkness"}} --}}
                                </div>
                                <div class="col-sm-12">
                                    @include('DashboardPages.partials.input-field',[
                                    'label'=>__('movielist.description'),
                                    'isRequired'=>'',
                                    'type'=>"textarea",
                                    'placeholder'=>__('movielist.description'),
                                    'value'=>"Lorem Ipsum is simply dummy text of the printing and typesetting industry"

                                    ])
                                    {{-- {{> components/partials/input-field label="Description" type="textarea"
                                    placeholder="Description" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" }}
                                    --}}
                                </div>
                            </div>
                            <div class="row mt-3 px-5">
                                <div class="col-lg-6">
                                    <label class="form-label flex-grow-1"
                                        for="access1"><strong>{{__('movielist.Show_Access')}}:</strong></label>
                                    <div class="form-group px-3">
                                        <select id="access1" type="select" class="form-control select2-basic-multiple">
                                            <option>{{__('movielist.free')}}</option>
                                            <option>{{__('movielist.standard')}}</option>
                                            <option selected>{{__('movielist.premiums')}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <label class="form-label flex-grow-1"
                                        for="language1"><strong>{{__('movielist.language')}}:</strong></label>
                                    <div class="form-group px-3">
                                        <select id="language1" type="select" class="form-control select2-basic-multiple">
                                            <option>{{__('movielist.english')}}</option>
                                            <option>{{__('movielist.hindi')}}</option>
                                            <option selected>{{__('movielist.french')}}</option>
                                            <option>{{__('movielist.marathi')}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <label class="form-label flex-grow-1" for="show"><strong>genres:</strong></label>
                                    <div class="form-group px-3">
                                        <select id="show" type="select" class="form-control select2-basic-multiple">
                                            <option>{{__('movielist.action')}}</option>
                                            <option selected>{{__('movielist.adventure')}}</option>
                                            <option>{{__('movielist.Comedy')}}</option>
                                            <option>{{__('movielist.animation')}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center my-4 px-3">
                                <h5 class="mb-0">
                                    <strong>{{__('movielist.cast_creaw')}}</strong>
                                </h5>
                                @include('DashboardPages.widgets.model.cast-modal-edit')
                                {{-- {{> components/widgets/modals/cast-modal-edit }} --}}
                            </div>
                            <div class="row px-3">
                                <div>
                                    <table class="table table-bordered table-strip">
                                        <thead>
                                            <tr class="text-center">
                                                <th>{{__('movielist.cast__crewss')}}</th>
                                                <th>{{__('movielist.name')}}</th>
                                                <th>{{__('movielist.Role')}}</th>
                                                <th>{{__('movielist.action')}}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-center">
                                                <td>{{__('movielist.cast')}}</td>
                                                <td>{{__('movielist.ABC')}}</td>
                                                <td>{{__('movielist.james')}}</td>
                                                <td>
                                                    <div class="d-flex align-items-center justify-content-center">
                                                        <a aria-current="page" href="#" class="active text-success"
                                                            title="Edit">
                                                            <i class="fa-solid fa-pen mx-4"></i>
                                                        </a>
                                                        <a aria-current="page" href="#" class="active text-danger"
                                                            title="Delete">
                                                            <i class="fa-solid fa-trash me-4"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="text-center">
                                                <td>{{__('movielist.crew')}}</td>
                                                <td>{{__('movielist.XYZ')}}</td>
                                                <td>{{__('movielist.producer')}}</td>
                                                <td>
                                                    <div class="d-flex align-items-center justify-content-center">
                                                        <a aria-current="page" href="#" class="active text-success"
                                                            title="Edit">
                                                            <i class="fa-solid fa-pen mx-4"></i>
                                                        </a>
                                                        <a aria-current="page" href="#" class="active text-danger"
                                                            title="Delete">
                                                            <i class="fa-solid fa-trash me-4"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col-lg-3">
                                    @include('DashboardPages.partials.input-field',[
                                    'label'=>__('movielist.Content_Rating'),
                                    'isRequired'=>'',
                                    'type'=>"text",
                                    'placeholder'=>__('movielist.Rating'),
                                    'value'=>"4.5",
                                    ])
                                    {{-- {{> components/partials/input-field label="Content Rating" type="text"
                                    placeholder="Rating" value="4.54.5"}} --}}
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group px-5">
                                        <label class="form-label flex-grow-1"
                                            for="genres"><strong>{{__('movielist.Release_Date')}}:</strong></label>
                                        <input class="form-control flatpickr_humandate" type="text"
                                            placeholder="{{__('movielist.release_datess')}}" data-id="multiple"
                                            readonly="readonly">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group px-5">
                                        <label class="form-label flex-grow-1"
                                            for="genres"><strong>{{__('movielist.Publice_Date')}}:</strong></label>
                                        <input class="form-control flatpickr_humandate" type="text"
                                            placeholder="{{__('movielist.publice_date..')}}" data-id="multiple"
                                            readonly="readonly">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    @include('DashboardPages.partials.input-field',[
                                    'label'=>__('movielist.Duration'),
                                    'isRequired'=>'',
                                    'type'=>"text",
                                    'placeholder'=>__('movielist.Duration_in_mins') ,
                                    'value'=>"45",
                                    ])
                                    {{-- {{> components/partials/input-field label="Duration" type="text"
                                    placeholder="Duration in mins" value="45"}} --}}
                                </div>
                            </div>
                            <div class="col-lg-12 mt-4 px-3">
                                <div class="form-group d-flex align-self-start justify-content-between" name="status">
                                    <label class="form-label flex-grow-1"
                                        for="Status"><strong>{{__('movielist.status')}}</strong>
                                        <!--v-if-->:
                                    </label><!-- textarea input -->
                                    <!-- toggle switch -->
                                    <div class="d-flex justify-content-between">
                                        <div class="form-check form-switch ms-2"><input id="Status"
                                                class="form-check-input" type="checkbox" checked></div>
                                    </div><span class="text-danger"></span>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
            <div class="offcanvas-footer border-top">
                <div class="d-grid d-flex gap-3 p-3">
                    <button type="submit" class="btn btn-primary d-block">
                        <i class="fa-solid fa-floppy-disk me-2"></i>{{__('movielist.Save')}}
                    </button>
                    <button type="button" class="btn btn-outline-primary d-block" data-bs-dismiss="offcanvas"
                        aria-label="Close">
                        <i class="fa-solid fa-angles-left me-2"></i>{{__('movielist.Close')}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
