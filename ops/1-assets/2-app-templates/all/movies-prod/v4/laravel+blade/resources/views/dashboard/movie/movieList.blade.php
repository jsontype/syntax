<x-layouts.dashboard>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="iq-card">
                    <div class="iq-card-header d-flex justify-content-between">
                        <div class="iq-header-title">
                        <h4 class="card-title">Movie Lists</h4>
                        </div>
                        <div class="iq-card-header-toolbar d-flex align-items-center">
                        <a href="{{ route('dashboard.addMovie') }}" class="btn btn-primary">Add movie</a>
                        </div>
                    </div>
                    <div class="iq-card-body">
                        <div class="table-view">
                            <table class="data-tables table movie_table " style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Movie</th>
                                        <th>Quality</th>
                                        <th>Category</th>
                                        <th>Release Year</th>
                                        <th>Language</th>
                                        <th style="width: 20%;">Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        <div class="media align-items-center">
                                            <div class="iq-movie">
                                                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/movie-thumb/06.jpg') }}" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                            </div>
                                            <div class="media-body text-white text-left ml-3">
                                                <p class="mb-0">Champions</p>
                                                <small>2h 15m</small>
                                            </div>
                                        </div>
                                        </td>
                                        <td>Full HD</td>
                                        <td>Drama</td>
                                        <td>2019</td>
                                        <td>English</td>
                                        <td>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                            a scelerisque. Etiam feugiat luctus est,
                                            vel commodo odio rhoncus sit amet
                                        </p>
                                        </td>
                                        <td>
                                        <div class="flex align-items-center list-user-action">
                                            <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                            <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                            <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div class="media align-items-center">
                                            <div class="iq-movie">
                                                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/movie-thumb/05.jpg') }}" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                            </div>
                                            <div class="media-body text-white text-left ml-3">
                                                <p class="mb-0">Last Race</p>
                                                <small>2h 20m</small>
                                            </div>
                                        </div>
                                        </td>
                                        <td>HD</td>
                                        <td>Action</td>
                                        <td>2020</td>
                                        <td>Hindi</td>
                                        <td>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                            a scelerisque. Etiam feugiat luctus
                                            est, vel commodo odio rhoncus sit amet
                                        </p>
                                        </td>
                                        <td>
                                        <div class="flex align-items-center list-user-action">
                                            <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                            <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                            <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td>
                                    <div class="media align-items-center">
                                        <div class="iq-movie">
                                            <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/movie-thumb/08.jpg') }}" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                        </div>
                                        <div class="media-body text-white text-left ml-3">
                                            <p class="mb-0">Boop Bitty</p>
                                            <small>2h 40m</small>
                                        </div>
                                    </div>
                                    </td>
                                    <td>Full HD</td>
                                    <td>Thriller</td>
                                    <td>2017</td>
                                    <td>English</td>
                                    <td>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                        a scelerisque. Etiam feugiat luctus
                                        est, vel commodo odio rhoncus sit amet
                                    </p>
                                    </td>
                                    <td>
                                    <div class="flex align-items-center list-user-action">
                                        <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                        <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                        <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div class="media align-items-center">
                                        <div class="iq-movie">
                                            <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/movie-thumb/04.jpg') }}" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                        </div>
                                        <div class="media-body text-white text-left ml-3">
                                            <p class="mb-0">Dino Land</p>
                                            <small>1h 40m</small>
                                        </div>
                                    </div>
                                    </td>
                                    <td>HD</td>
                                    <td>Thriller</td>
                                    <td>2015</td>
                                    <td>English</td>
                                    <td>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                        a scelerisque. Etiam feugiat
                                        luctus est,
                                        vel commodo odio rhoncus sit amet
                                    </p>
                                    </td>
                                    <td>
                                    <div class="flex align-items-center list-user-action">
                                        <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                        <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                        <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div class="media align-items-center">
                                        <div class="iq-movie">
                                            <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/movie-thumb/09.jpg') }}" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                        </div>
                                        <div class="media-body text-white text-left ml-3">
                                            <p class="mb-0">The Last Breath</p>
                                            <small>2h 30m</small>
                                        </div>
                                    </div>
                                    </td>
                                    <td>FUll HD</td>
                                    <td>Action</td>
                                    <td>2013</td>
                                    <td>Hindi</td>
                                    <td>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                        a scelerisque. Etiam feugiat
                                        luctus
                                        est, vel commodo odio rhoncus sit amet
                                    </p>
                                    </td>
                                    <td>
                                    <div class="flex align-items-center list-user-action">
                                        <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                        <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                        <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div class="media align-items-center">
                                        <div class="iq-movie">
                                            <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/movie-thumb/01.jpg') }}" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                        </div>
                                        <div class="media-body text-white text-left ml-3">
                                            <p class="mb-0">Last Night</p>
                                            <small>3h 15m</small>
                                        </div>
                                    </div>
                                    </td>
                                    <td>Full HD</td>
                                    <td>Horror</td>
                                    <td>2019</td>
                                    <td>English</td>
                                    <td>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                        a scelerisque. Etiam feugiat
                                        luctus
                                        est, vel commodo odio rhoncus sit amet
                                    </p>
                                    </td>
                                    <td>
                                    <div class="flex align-items-center list-user-action">
                                        <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                        <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                        <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div class="media align-items-center">
                                        <div class="iq-movie">
                                            <a href="javascript:void(0);"><img
                                                src="{{ asset('dashboard/images/movie-thumb/02.jpg') }}"
                                                class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                        </div>
                                        <div class="media-body text-white text-left ml-3">
                                            <p class="mb-0">1980</p>
                                            <small>2h 15m</small>
                                        </div>
                                    </div>
                                    </td>
                                    <td>HD</td>
                                    <td>Action</td>
                                    <td>2010</td>
                                    <td>Hndi</td>
                                    <td>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                        a scelerisque. Etiam feugiat
                                        luctus est,
                                        vel commodo odio rhoncus sit amet
                                    </p>
                                    </td>
                                    <td>
                                    <div class="flex align-items-center list-user-action">
                                        <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                        <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                        <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""  data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div class="media align-items-center">
                                        <div class="iq-movie">
                                            <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/movie-thumb/07.jpg') }}" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                        </div>
                                        <div class="media-body text-white text-left ml-3">
                                            <p class="mb-0">Looters</p>
                                            <small>2h 30m</small>
                                        </div>
                                    </div>
                                    </td>
                                    <td>Full HD</td>
                                    <td>Drama</td>
                                    <td>2014</td>
                                    <td>English</td>
                                    <td>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                        a scelerisque. Etiam feugiat
                                        luctus
                                        est, vel commodo odio rhoncus sit amet
                                    </p>
                                    </td>
                                    <td>
                                    <div class="flex align-items-center list-user-action">
                                        <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                        <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                        <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div class="media align-items-center">
                                        <div class="iq-movie">
                                            <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/movie-thumb/10.jpg') }}" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                        </div>
                                        <div class="media-body text-white text-left ml-3">
                                            <p class="mb-0">The Illusion</p>
                                            <small>2h 30m</small>
                                        </div>
                                    </div>
                                    </td>
                                    <td>Full HD</td>
                                    <td>Drama</td>
                                    <td>2018</td>
                                    <td>English</td>
                                    <td>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                        a scelerisque. Etiam feugiat
                                        luctus
                                        est, vel commodo odio rhoncus sit amet
                                    </p>
                                    </td>
                                    <td>
                                    <div class="flex align-items-center list-user-action">
                                        <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                        <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                        <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <div class="media align-items-center">
                                        <div class="iq-movie">
                                            <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/movie-thumb/03.jpg') }}" class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                        </div>
                                        <div class="media-body text-white text-left ml-3">
                                            <p class="mb-0">Burning</p>
                                            <small>3h</small>
                                        </div>
                                    </div>
                                    </td>
                                    <td>HD</td>
                                    <td>Horror</td>
                                    <td>2020</td>
                                    <td>Hindi</td>
                                    <td>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                        a scelerisque. Etiam feugiat
                                        luctus
                                        est, vel commodo odio rhoncus sit amet
                                    </p>
                                    </td>
                                    <td>
                                    <div class="flex align-items-center list-user-action">
                                        <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                        <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                        <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
                                    </div>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-layouts.dashboard>