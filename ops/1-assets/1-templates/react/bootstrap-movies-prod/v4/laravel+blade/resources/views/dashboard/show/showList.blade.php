<x-layouts.dashboard>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="iq-card">
                    <div class="iq-card-header d-flex justify-content-between">
                        <div class="iq-header-title">
                        <h4 class="card-title">Show Lists</h4>
                        </div>
                        <div class="iq-card-header-toolbar d-flex align-items-center">
                        <a href="{{ route('dashboard.addShow') }}" class="btn btn-primary">Add Show</a>
                        </div>
                    </div>
                    <div class="iq-card-body">
                        <div class="table-view">
                            <table class="data-tables table movie_table " style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Show</th>
                                        <th>Quality</th>
                                        <th>Category</th>
                                        <th>Seasons</th>
                                        <th>Language</th>
                                        <th style="width:20%">Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        <div class="media align-items-center">
                                            <div class="iq-movie">
                                                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/show-thumb/08.jpg') }}"
                                                    class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                            </div>
                                            <div class="media-body text-white text-left ml-3">
                                                <p class="mb-0">Day of Darkness</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td>Full HD</td>
                                        <td>Drama</td>
                                        <td>3 Seasons</td>
                                        <td>English</td>
                                        <td>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                            a scelerisque. Etiam feugiat luctus est,
                                            vel commodo odio rhoncus sit amet
                                        </p>
                                        </td>
                                        <td>
                                        <div class="flex align-items-center list-user-action">
                                            <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                            <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                            <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Delete" href="#"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div class="media align-items-center">
                                            <div class="iq-movie">
                                                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/show-thumb/10.jpg') }}"
                                                    class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                            </div>
                                            <div class="media-body text-white text-left ml-3">
                                                <p class="mb-0">My True Friends</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td>HD</td>
                                        <td>Action</td>
                                        <td>1 Season</td>
                                        <td>Hindi</td>
                                        <td>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                            a scelerisque. Etiam feugiat luctus
                                            est, vel commodo odio rhoncus sit amet
                                        </p>
                                        </td>
                                        <td>
                                        <div class="flex align-items-center list-user-action">
                                            <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                            <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                            <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Delete" href="#"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div class="media align-items-center">
                                            <div class="iq-movie">
                                                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/show-thumb/07.jpg') }}"
                                                    class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                            </div>
                                            <div class="media-body text-white text-left ml-3">
                                                <p class="mb-0">Arrival 1999</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td>Full HD</td>
                                        <td>Thriller</td>
                                        <td>2 Seasons</td>
                                        <td>English</td>
                                        <td>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit
                                            a scelerisque. Etiam feugiat luctus
                                            est, vel commodo odio rhoncus sit amet
                                        </p>
                                        </td>
                                        <td>
                                        <div class="flex align-items-center list-user-action">
                                            <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                            <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                            <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Delete" href="#"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div class="media align-items-center">
                                            <div class="iq-movie">
                                                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/show-thumb/01.jpg') }}"
                                                    class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                            </div>
                                            <div class="media-body text-white text-left ml-3">
                                                <p class="mb-0">Night Mare</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td>HD</td>
                                        <td>Thriller</td>
                                        <td>2 Seasons</td>
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
                                            <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                            <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                            <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Delete" href="#"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div class="media align-items-center">
                                            <div class="iq-movie">
                                                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/show-thumb/03.jpg') }}"
                                                    class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                            </div>
                                            <div class="media-body text-white text-left ml-3">
                                                <p class="mb-0">The Witcher</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td>FUll HD</td>
                                        <td>Action</td>
                                        <td>3 Seasons</td>
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
                                            <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                            <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                            <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Delete" href="#"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div class="media align-items-center">
                                            <div class="iq-movie">
                                                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/show-thumb/09.jpg') }}"
                                                    class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                            </div>
                                            <div class="media-body text-white text-left ml-3">
                                                <p class="mb-0">Troll Hunters</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td>Full HD</td>
                                        <td>Horror</td>
                                        <td>1 Season</td>
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
                                            <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                            <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                            <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Delete" href="#"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div class="media align-items-center">
                                            <div class="iq-movie">
                                                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/show-thumb/06.jpg') }}"
                                                    class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                            </div>
                                            <div class="media-body text-white text-left ml-3">
                                                <p class="mb-0">Don Jon</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td>HD</td>
                                        <td>Action</td>
                                        <td>3 Seasons</td>
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
                                            <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                            <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                            <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Delete" href="#"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div class="media align-items-center">
                                            <div class="iq-movie">
                                                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/show-thumb/02.jpg') }}"
                                                    class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                            </div>
                                            <div class="media-body text-white text-left ml-3">
                                                <p class="mb-0">Suffered</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td>Full HD</td>
                                        <td>Drama</td>
                                        <td>4 Seasons</td>
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
                                            <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                            <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                            <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Delete" href="#"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div class="media align-items-center">
                                            <div class="iq-movie">
                                                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/show-thumb/04.jpg') }}"
                                                    class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                            </div>
                                            <div class="media-body text-white text-left ml-3">
                                                <p class="mb-0">Megafun</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td>Full HD</td>
                                        <td>Horror</td>
                                        <td>3 Seasons</td>
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
                                            <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                            <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                            <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Delete" href="#"><i
                                                    class="ri-delete-bin-line"></i></a>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div class="media align-items-center">
                                            <div class="iq-movie">
                                                <a href="javascript:void(0);"><img src="{{ asset('dashboard/images/show-thumb/05.jpg') }}"
                                                    class="img-border-radius avatar-40 img-fluid" alt=""></a>
                                            </div>
                                            <div class="media-body text-white text-left ml-3">
                                                <p class="mb-0">Portable</p>
                                            </div>
                                        </div>
                                        </td>
                                        <td>HD</td>
                                        <td>Horror</td>
                                        <td>1 Season</td>
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
                                            <a class="iq-bg-warning" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="View" href="#"><i class="lar la-eye"></i></a>
                                            <a class="iq-bg-success" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Edit" href="#"><i class="ri-pencil-line"></i></a>
                                            <a class="iq-bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                                data-original-title="Delete" href="#"><i
                                                    class="ri-delete-bin-line"></i></a>
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