@extends('layouts.app', ['module_title' => 'Rating Lists','isSelect2'=>true, 'isSweetalert'=>true, 'isFlatpickr'=>true, 'isBanner'=>false])

@section('content')
<div class="row">
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header border-bottom d-flex justify-content-between align-items-center py-3">
                <div class="card-title">
                    <h4 class="m-0">{{__('dashboard.Rating_List')}}</h4>
                </div>
            </div>
            <div class="card-body">
                <div class="table-view table-responsive table-space">
                    <table id="commentTable" class="data-tables table custom-table movie_table" data-toggle="data-table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Release Date</th>
                                <th>Rating</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                             @include('components.widget.rating-lists',['ratingNo'=>"1",
                            'ratingTitle'=>"Movie",
                            'ratingName'=>"Man of Street",
                            'ratingText'=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat
                            luctus est, vel commodo odio rhoncus sit amet",
                            'ratingYear'=>"2017",
                            'ratingStar'=>"9.2"
                            ])

                            @include('components.widget.rating-lists',['ratingNo'=>"2",
                            'ratingTitle'=>"Show",
                            'ratingName'=>"Cursed",
                            'ratingText'=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat
                            luctus est, vel commodo odio rhoncus sit amet",
                            'ratingYear'=>"2012",
                            'ratingStar'=>"8.5"
                            ])


                            @include('components.widget.rating-lists',['ratingNo'=>"2",
                            'ratingTitle'=>"Movie",
                            'ratingName'=>"Veronica",
                            'ratingText'=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat
                            luctus est, vel commodo odio rhoncus sit amet",
                            'ratingYear'=>"2018",
                            'ratingStar'=>"7.0"
                            ])


                            @include('components.widget.rating-lists',['ratingNo'=>"4",
                            'ratingTitle'=>"Movie",
                            'ratingName'=>"Troll Hunters",
                            'ratingText'=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat
                            luctus est, vel commodo odio rhoncus sit amet",
                            'ratingYear'=>"2020",
                            'ratingStar'=>"9.5"
                            ])


                            @include('components.widget.rating-lists',['ratingNo'=>"5",
                            'ratingTitle'=>"Show",
                            'ratingName'=>"Gran Torino",
                            'ratingText'=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat
                            luctus est, vel commodo odio rhoncus sit amet",
                            'ratingYear'=>"2019",
                            'ratingStar'=>"7.5",
                            ])

                            @include('components.widget.rating-lists',['ratingNo'=>"6",
                            'ratingTitle'=>"Movie",
                            'ratingName'=>"Man of Street",
                            'ratingText'=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat
                            luctus est, vel commodo odio rhoncus sit amet",
                            'ratingYear'=>"2017",
                            'ratingStar'=>"9.2"
                            ])


                            @include('components.widget.rating-lists',['ratingNo'=>"7",
                            'ratingTitle'=>"Show",
                            'ratingName'=>"Cursed",
                            'ratingText'=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat
                            luctus est, vel commodo odio rhoncus sit amet",
                            'ratingYear'=>"2012",
                            'ratingStar'=>"8.5"
                            ])


                            @include('components.widget.rating-lists',['ratingNo'=>"8",
                            'ratingTitle'=>"Movie",
                            'ratingName'=>"Veronica",
                            'ratingText'=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat
                            luctus est, vel commodo odio rhoncus sit amet",
                            'ratingYear'=>"2018",
                            'ratingStar'=>"7.0"
                            ])


                            @include('components.widget.rating-lists',['ratingNo'=>"9",
                            'ratingTitle'=>"Movie",
                            'ratingName'=>"Troll Hunters",
                            'ratingText'=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat
                            luctus est, vel commodo odio rhoncus sit amet",
                            'ratingYear'=>"2020",
                            'ratingStar'=>"9.5"
                            ])


                            @include('components.widget.rating-lists',['ratingNo'=>"10",
                            'ratingTitle'=>"Show",
                            'ratingName'=>"Gran Torino",
                            'ratingText'=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat
                            luctus est, vel commodo odio rhoncus sit amet",
                            'ratingYear'=>"2019",
                            'ratingStar'=>"7.5"
                            ])


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
