@extends('layouts.app', ['module_title' => 'Episodes','isSweetalert'=>true,'Activelink'=>'Tvshow','isFlatpickr'=>true])
@section('content')
<div class="row">
    <div class="col-sm-12">
        <div class="card pb-3">
            <div class="card-header border-bottom d-flex justify-content-between align-items-center py-3">
                <div class="d-flex align-items-center pt-3 gap-2">
                    <div class="form-group mb-0">
                        <select type="select" class="form-control select2-basic-multiple" placeholder="No Action">
                            <option>{{__('dashboard.no_action')}}</option>
                            <option>{{__('dashboard.status')}}</option>
                            <option>{{__('dashboard.delete')}}</option>
                        </select>

                    </div>
                    <button class="btn btn-primary ">{{__('dashboard.apply')}}</button>
                </div>
                <button class="btn btn-primary mt-3 px-2 px-lg-3" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#season-offcanvas" aria-controls="season-offcanvas">
                    <i class="fa-solid fa-plus me-2"></i>{{__('dashboard.Add_Episodes') }}
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
                            'value' => true,
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
                            'value' => true,
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
                            'value' => true,
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
                            'value' => true,
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'suffered',
                            'thumbnail' => asset('dashboard/images/movie-thumb/10.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 21m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
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
                            'value' => 'checked',
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
        <div class="offcanvas offcanvas-end offcanvas-width-80" tabindex="-1" id="season-offcanvas"
            aria-labelledby="season-offcanvas-lable">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel1">{{__('movielist.Add_New_Episodes')}}</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form>
                    <div class="section-form">
                        <fieldset data-select2-id="select2-data-101-q8a8">
                            <legend>{{__('movielist.episodes')}}</legend>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group px-3">
                                        <label class="form-label flex-grow-1"
                                            for="movie-access1"><strong>{{__('movielist.shows')}}:</strong></label>
                                        <select id="movie-access1" type="select"
                                            class="form-select select2-basic-multiple"
                                            placeholder="{{__('movielist.select_movie_access')}}" tabindex="0"
                                            aria-hidden="false">
                                            <option>{{__('movielist.zombie_island')}}</option>
                                            <option>{{__('movielist.folke_the_fat')}}</option>
                                            <option>{{__('movielist.the_mandalorian')}}</option>
                                            <option>{{__('movielist.criminals_and_agents')}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group px-3">
                                        <label class="form-label flex-grow-1"
                                            for="language1"><strong>{{__('movielist.seasons')}}:</strong></label>
                                        <select id="language1" type="select" class="form-select select2-basic-multiple"
                                            placeholder="{{__('movielist.select_language')}}" tabindex="0"
                                            aria-hidden="false">
                                            <option>{{__('movielist.season_1')}}</option>
                                            <option>{{__('movielist.season_2')}}</option>
                                            <option>{{__('movielist.season_3')}}</option>
                                            <option>{{__('movielist.season_4')}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group px-3 ">
                                        <label class="form-label flex-grow-1" for="Episode Name">
                                            <strong>{{__('movielist.episode_name')}}</strong>
                                            <span class="text-danger">*</span>:
                                        </label>

                                        <!-- textarea input -->
                                        <!-- toggle switch -->
                                        <!-- common inputs -->
                                        <input id="Episode Name" type="text" class="form-control "
                                            placeholder="{{__('movielist.enter_movie_name')}}" min="" multiple="">
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
                            <div class="d-flex justify-content-between align-items-center my-4 px-3">
                                <h5 class="mb-0">
                                    <strong>{{__('movielist.cast_creaw')}}</strong>
                                </h5>
                                <button type="button" class="btn btn-primary " data-bs-toggle="modal"
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
                                                                <strong>{{__('movielist.person')}}</strong> :
                                                            </label>

                                                            <!-- textarea input -->
                                                            <!-- toggle switch -->
                                                            <!-- common inputs -->
                                                            <input id="Person" type="text" class="form-control "
                                                                placeholder="{{__('movielist.Enter_Name')}}" min=""
                                                                multiple="">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="form-group px-3 d-flex flex-column">
                                                            <label class="form-label flex-grow-1"
                                                                for="occupation1"><strong>{{__('movielist.occupation')}}:</strong></label>
                                                            <select id="occupation1" type="select"
                                                                class="form-select select2-basic-multiple"
                                                                placeholder="{{__('movielist.Select_Occupation')}}"
                                                                tabindex="0" aria-hidden="false">
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
                                                                placeholder="{{__('movielist.played_as')}}" min=""
                                                                multiple="">
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
                                                        <a aria-current="page" href="#" class="acselect2-hidden-accessibletive text-success"
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
                                            placeholder="{{__('movielist.Rating')}}" min="" multiple="">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group px-3">
                                        <label class="form-label flex-grow-1"
                                            for="genres"><strong>{{__('movielist.Release_Date')}}:</strong></label>
                                        <input class="form-control flatpickr_humandate flatpickr-input" type="hidden"
                                            placeholder="{{__('movielist.release_datess')}}" data-id="multiple">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group px-3">
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
                                            placeholder="{{__('movielist.Duration_in_mins')}}" min="" multiple="">
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
                        <fieldset>
                            <legend>{{__('movielist.Media')}}</legend>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group px-3 ">
                                        <label class="form-label flex-grow-1" for="Thumbnail">
                                            <strong>{{__('movielist.Thumbnail')}}</strong> <span
                                                class="text-danger">*</span>:
                                        </label>

                                        <!-- textarea input -->
                                        <!-- toggle switch -->
                                        <!-- common inputs -->
                                        <input id="Thumbnail" type="file" class="form-control " placeholder="" min=""
                                            multiple="">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group px-3 ">
                                        <label class="form-label flex-grow-1" for="poster">
                                            <strong>{{__('movielist.poster')}}</strong> <spanselect2-hidden-accessible
                                                class="text-danger">*</spanselect2-hidden-accessible>:
                                        </label>

                                        <!-- textarea input -->
                                        <!-- toggle switch -->
                                        <!-- common inputs -->
                                        <input id="poster" type="file" class="form-control " placeholder="" min=""
                                            multiple="">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group px-3 ">
                                        <label class="form-label flex-grow-1" for="Trailer Url">
                                            <strong>{{__('movielist.Trailer_Url')}}</strong> <span
                                                class="text-danger">*</span>:
                                        </label>

                                        <!-- textarea input -->
                                        <!-- toggle switch -->
                                        <!-- common inputs -->
                                        <input id="Trailer Url" type="text" class="form-control "
                                            placeholder="{{__('movielist.trailer_link')}}" min="" multiple="">
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center my-4 px-3">
                                <h5 class="mb-0">
                                    <strong>{{__('movielist.Video_Quality')}}</strong>
                                </h5>
                                <button type="button" class="btn btn-primary " data-bs-toggle="modal"
                                    data-bs-target="#video-modal">
                                    <i class="fa-solid fa-square-plus me-2"></i>{{__('movielist.Add_Video')}}
                                </button>

                                <div class="modal fade" id="video-modal" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="video-modal-label">
                                                    {{__('movielist.Add_Video')}}
                                                </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close">
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form action="" class="section-form">
                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                            <div class="form-group px-3 d-flex flex-column">
                                                                <label class="form-label flex-grow-1"
                                                                    for="quality-edit1"><strong>Quality:</strong></label>
                                                                <select id="quality-edit1" type="select"
                                                                    class="form-control select2-basic-multiple"
                                                                    placeholder="Select Quality">
                                                                    <option >
                                                                        {{__('movielist.480p')}}
                                                                    </option>
                                                                    <option>{{__('movielist.720p')}}</option>
                                                                    <option>{{__('movielist.1080p')}}</option>
                                                                </select>

                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12">
                                                            <div class="form-group px-3 ">
                                                                <label class="form-label flex-grow-1" for="Video">
                                                                    <strong>{{__('movielist.video')}}</strong> :
                                                                </label>

                                                                <!-- textarea input -->
                                                                <!-- toggle switch -->
                                                                <!-- common inputs -->
                                                                <input id="Video" type="file" class="form-control "
                                                                    placeholder="" min="" multiple="">
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12">
                                                            <div class="form-group px-3 d-flex justify-content-between">
                                                                <label class="form-label flex-grow-1"
                                                                    for="Download Link">
                                                                    <strong>{{__('movielist.Download_Link')}}</strong> :
                                                                </label>

                                                                <!-- textarea input -->
                                                                <!-- toggle switch -->
                                                                <div class="form-check form-switch ms-2">
                                                                    <input id="Download Link" class="form-check-input"
                                                                        type="checkbox">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
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
                            <div class="row px-5">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                            <tr class="text-center">
                                                <th>{{__('movielist.Quality')}}</th>
                                                <th>{{__('movielist.Video_URL')}}</th>
                                                <th>{{__('movielist.action')}}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-center">
                                                <td>{{__('movielist.720P')}}</td>
                                                <td>{{__('movielist.video_720')}}</td>
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
                            <div class="d-flex justify-content-between align-items-center my-4 px-3">
                                <h5 class="mb-0">
                                    <strong>{{__('movielist.Subtitles')}}</strong>
                                </h5>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#subtitle-modal">
                                    <i class="fa-solid fa-square-plus me-2"></i>{{__('movielist.add_Subtitles')}}
                                </button>

                                <div class="modal fade" id="subtitle-modal" tabindex="-1" role="dialog"
                                    aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="subtitle-modal-label">
                                                    {{__('movielist.add_Subtitles')}}
                                                </h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close">
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form action="" class="section-form">
                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                            <div class="form-group px-3 d-flex flex-column">
                                                                <label class="form-label flex-grow-1"
                                                                    for="subtitle1"><strong>{{__('movielist.Subtitle')}}:</strong></label>
                                                                <select id="subtitle1" type="select"
                                                                    class="form-select select2-basic-multiple "
                                                                    placeholder="{{__('movielist.select_subtitle')}}"  >
                                                                    <option >
                                                                        {{__('movielist.hindi')}}
                                                                    </option>
                                                                    <option> {{__('movielist.english')}}</option>
                                                                    <option> {{__('movielist.french')}}</option>
                                                                    <option> {{__('movielist.marathi')}}</option>
                                                                    <option> {{__('movielist.gujarati')}}</option>
                                                                </select>
                                                                <!-- <span
                                                                    class="select2 select2-container select2-container--default"
                                                                    dir="ltr" data-select2-id="select2-data-12-zm7w"
                                                                    style="width: auto;"><span class="selection"><span
                                                                            class="select2-selection select2-selection--single"
                                                                            role="combobox" aria-haspopup="true"
                                                                            aria-expanded="false" tabindex="0"
                                                                            aria-disabled="false"
                                                                            aria-labelledby="select2-subtitle-container"
                                                                            aria-controls="select2-subtitle-container"><span
                                                                                class="select2-selection__rendered"
                                                                                id="select2-subtitle-container"
                                                                                role="textbox" aria-readonly="true"
                                                                                title="Hindi">
                                                                                {{__('movielist.hindi')}}</span><span
                                                                                class="select2-selection__arrow"
                                                                                role="presentation"><b
                                                                                    role="presentation"></b></span></span></span><span
                                                                        class="dropdown-wrapper"
                                                                        aria-hidden="true"></span></span> -->
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-12">
                                                            <div class="form-group px-3 ">
                                                                <label class="form-label flex-grow-1" for="File">
                                                                    <strong>{{__('movielist.File')}}</strong> :
                                                                </label>

                                                                <!-- textarea input -->
                                                                <!-- toggle switch -->
                                                                <!-- common inputs -->
                                                                <input id="File" type="file" class="form-control "
                                                                    placeholder="" min="" multiple="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
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
                            <div class="row px-5">
                                <div>
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                            <tr class="text-center">
                                                <th>{{__('movielist.language')}}</th>
                                                <th>{{__('movielist.url')}}</th>
                                                <th>{{__('movielist.action')}}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class=" text-center">
                                                <td>{{__('movielist.english')}}</td>
                                                <td>{{__('movielist.english')}}.txt</td>
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
        <!-- edit Form -->
        <div class="offcanvas offcanvas-end offcanvas-width-80" tabindex="-1" id="season-offcanvas-edit"
            aria-labelledby="season-offcanvas-lable">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel1">{{__('movielist.edit_episodes')}}</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form>
                    <div class="section-form">
                        <fieldset>
                            <legend>{{__('movielist.episodes')}}</legend>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group px-3">
                                        <label class="form-label flex-grow-1"
                                            for="movie-access"><strong>{{__('movielist.shows')}}:</strong></label>
                                        <select id="movie-access" type="select"
                                            class="form-control select2-basic-multiple"
                                            placeholder="{{__('movielist.select_movie_access')}}">
                                            <option>{{__('movielist.zombie_island')}}</option>
                                            <option>{{__('movielist.folke_the_fat')}}</option>
                                            <option selected>{{__('movielist.the_mandalorian')}}</option>
                                            <option>{{__('movielist.criminals_and_agents')}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group px-3">
                                        <label class="form-label flex-grow-1"
                                            for="language"><strong>{{__('movielist.seasons')}}:</strong></label>
                                        <select id="language" type="select" class="form-control select2-basic-multiple"
                                            placeholder="{{__('movielist.select_language')}}">
                                            <option>{{__('movielist.season_1')}}</option>
                                            <option selected>{{__('movielist.season_2')}}</option>
                                            <option>{{__('movielist.season_3')}}</option>
                                            <option>{{__('movielist.season_4')}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    @include('DashboardPages.partials.input-field',[
                                    'label'=>__('movielist.episode_name'),
                                    'isRequired'=>true,
                                    'type'=>"text",
                                    'placeholder'=>__('movielist.enter_movie_name'),
                                    'value'=>"Don Jon"
                                    ])
                                    {{-- {{> components/partials/input-field label="Episode Name" isRequired="true"
                                      type="text"
                                      placeholder="Enter Movie Name" value="Don Jon"}} --}}
                                </div>
                                <div class="col-sm-12">
                                    @include('DashboardPages.partials.input-field',[
                                    'label'=>__('movielist.description'),
                                    'isRequied'=>true,
                                    'type'=>"textarea",
                                    'placeholder'=>__('movielist.description'),
                                    'value'=>"Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                                    ])
                                    {{-- {{> components/partials/input-field label="Description" type="textarea"
                                      placeholder="Description" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" }}
                                    --}}
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
                                    @include('DashboardPages.partials.input-field',[
                                    'label'=>__('movielist.Content_Rating'),
                                    'isRequied'=>true,
                                    'type'=>"text",
                                    'placeholder'=>__('movielist.Rating') ,
                                    'value'=>"4.5"
                                    ])
                                    {{-- {{> components/partials/input-field label="Content Rating" type="text"
                                      placeholder="Rating" value="4.5"}} --}}
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group px-3">
                                        <label class="form-label flex-grow-1"
                                            for="genres"><strong>{{__('movielist.Release_Date')}}:</strong></label>
                                        <input class="form-control flatpickr_humandate" type="text"
                                            placeholder="{{__('movielist.release_datess')}}" data-id="multiple"
                                            readonly="readonly">
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="form-group px-3">
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
                                    'isRequied'=>true,
                                    'type'=>"text",
                                    'placeholder'=>__('movielist.Duration_in_mins'),
                                    'value'=>"2.45"
                                    ])
                                    {{-- {{> components/partials/input-field label="Duration" type="text"
                                      placeholder="Duration in mins" value="2.45"}} --}}
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
                                                class="form-check-input" type="checkbox" checked></div>
                                    </div><span class="text-danger"></span>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>{{__('movielist.Media')}}</legend>
                            <div class="row">
                                <div class="col-sm-6">
                                    @include('DashboardPages.partials.input-field',[
                                    'label'=>__('movielist.Thumbnail'),
                                    'isRequired'=>true,
                                    'type'=>"file",

                                    ])
                                    {{-- {{> components/partials/input-field label="Thumbnail" isRequired="true"
                                      type="file"}} --}}
                                </div>
                                <div class="col-sm-6">
                                    @include('DashboardPages.partials.input-field',[
                                    'label'=>__('movielist.poster'),
                                    'isRequired'=>true,
                                    'type'=>"file",

                                    ])
                                    {{-- {{> components/partials/input-field label="poster" isRequired="true" type="file"}}
                                    --}}
                                </div>
                                <div class="col-sm-12">
                                    @include('DashboardPages.partials.input-field',[
                                    'label'=>__('movielist.Trailer_Url'),
                                    'isRequired'=>true,
                                    'type'=>"text",
                                    'placeholder'=>__('movielist.trailer_link'),

                                    ])
                                    {{-- {{> components/partials/input-field label="Trailer Url" isRequired="true"
                                      type="text"
                                      placeholder="Trailer Link"}} --}}
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center my-4 px-3">
                                <h5 class="mb-0">
                                    <strong>{{__('movielist.Video_Quality')}}</strong>
                                </h5>
                                @include('DashboardPages.widgets.model.video-modal-edit')
                                {{-- {{> components/widgets/modals/video-modal-edit }} --}}
                            </div>
                            <div class="row px-5">
                                <div>
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                            <tr class="text-center">
                                                <th>{{__('movielist.Quality')}}</th>
                                                <th>{{__('movielist.Video_URL')}}</th>
                                                <th>{{__('movielist.action')}}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-center">
                                                <td>{{__('movielist.720P')}}</td>
                                                <td>{{__('movielist.video_720')}}</td>
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
                            <div class="d-flex justify-content-between align-items-center my-4 px-3">
                                <h5 class="mb-0">
                                    <strong>{{__('movielist.Subtitles')}}</strong>
                                </h5>
                                @include('DashboardPages.widgets.model.subtitle-modal-edit')
                                {{-- {{> components/widgets/modals/subtitle-modal-edit }} --}}
                            </div>
                            <div class="row px-5">
                                <div>
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                            <tr class="text-center">
                                                <th>{{__('movielist.language')}}</th>
                                                <th>{{__('movielist.url')}}</th>
                                                <th>{{__('movielist.action')}}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-center">
                                                <td>{{__('movielist.english')}}</td>
                                                <td>{{__('movielist.english')}}.txt</td>
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
