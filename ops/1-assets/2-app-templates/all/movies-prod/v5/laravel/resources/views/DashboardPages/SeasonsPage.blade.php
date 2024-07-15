@extends('layouts.app', ['module_title' => 'Seasons','isSweetalert'=>true,'Activelink'=>'Tvshow'])
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
                    <i class="fa-solid fa-plus me-2"></i>{{ __('dashboard.Add_Seasaon') }}
                </button>
            </div>
            <div class="card-body">
                <div class="table-view table-responsive pt-3 table-space">
                    <table id="seasonTable" class="data-tables table custom-table movie_table" data-toggle="data-table">
                        <thead>
                            <tr class="text-uppercase">
                                <th class="text-center">
                                    <input type="checkbox" class="form-check-input" />
                                </th>
                                <th>Show</th>
                                <th>Quality</th>
                                <th>Category</th>
                                <th>Publish Date</th>
                                <th>Show Access</th>
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
                            'value'=>true
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
                            ])
                            @include('components/datatable/DataTable', [
                            'name' => 'night mare',
                            'thumbnail' => asset('dashboard/images/movie-thumb/08.jpg'),
                            'quality' => '480/720/1080',
                            'duration' => '2h 21m',
                            'genres' => ['Hello'],
                            'date' => '2010',
                            'subtitles' => 'english, hindi',
                            'value'=>true
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
                            'value'=>true
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
        <div class="offcanvas offcanvas-end offcanvas-width-80" tabindex="-1" id="season-offcanvas"
            aria-labelledby="season-offcanvas-lable">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel1">{{__('movielist.add_new_season')}}</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form action="" class="section-form">
                    <fieldset>
                        <legend>{{__('movielist.seasons')}}</legend>
                        <div class="form-group ">
                            <div class="form-group px-3 ">
                                <label class="form-label flex-grow-1" for="Seasons">
                                    <strong>{{__('movielist.seasons')}}</strong> :
                                </label>

                                <!-- textarea input -->
                                <!-- toggle switch -->
                                <!-- common inputs -->
                                <input id="Seasons" type="number" class="form-control " placeholder="1" min="1"
                                    multiple="" />
                            </div>
                            <div class="form-group px-3 ">
                                <label class="form-label flex-grow-1" for="Description">
                                    <strong>{{__('movielist.description')}}</strong> :
                                </label>

                                <!-- textarea input -->
                                <textarea id="Description" class="form-control"
                                    placeholder="{{__('movielist.description')}}"></textarea>
                            </div>
                            <div class="form-group px-3">
                                <label class="form-label flex-grow-1"
                                    for="shows"><strong>{{__('movielist.shows')}}:</strong></label>
                                <select id="shows" type="select" class="form-control select2-basic-multiple">
                                    <option>{{__('movielist.abc')}}</option>
                                    <option>{{__('movielist.xyz')}}</option>
                                    <option>{{__('movielist.mno')}}</option>
                                    <option>{{__('movielist.stu')}}</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>
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
                <h5 id="offcanvasRightLabel1">{{__('movielist.edit_season')}}</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <form action="" class="section-form">
                    <fieldset>
                        <legend>{{__('movielist.seasons')}}</legend>
                        <div class="form-group">
                            @include('DashboardPages.partials.input-field',[
                            'label'=>__('movielist.seasons'),
                            'isRequied'=>true,
                            'type'=>"text",
                            'placeholder'=>__('movielist.Rating'),
                            'placeholder'=>__('movielist.1'),
                            'min'=>"1" ,
                            'value'=>"07"

                            ])
                            @include('DashboardPages.partials.input-field',[
                            'label'=>__('movielist.description'),
                            'isRequied'=>true,
                            'type'=>"textarea",
                            'placeholder'=>__('movielist.description'),

                            'value'=>"Lorem Ipsum is simply dummy text of the printing and typesetting industry"

                            ])
                            {{-- {{> components/partials/input-field label="Seasons" isRequied="true" type="number"
                         placeholder="1" min="1" value="07"}}
                            {{> components/partials/input-field label="Description" type="textarea"
                         placeholder="Description" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry" }}
                            --}}
<div class="form-group px-3 ">
                            <label class="form-label flex-grow-1" for="show"><strong>Show:</strong></label>
                            <select id="show" type="select" class="form-control select2-basic-multiple">
                                <option>{{__('movielist.abc')}}</option>
                                <option selected>{{__('movielist.xyz')}}</option>
                                <option>{{__('movielist.mno')}}</option>
                                <option>{{__('movielist.stu')}}</option>
                            </select>
</div>
                        </div>
                    </fieldset>
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
