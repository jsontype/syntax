<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#video-modal-edit">
    <i class="fa-solid fa-square-plus me-2"></i>{{__('movielist.Edit_Video')}}
</button>

<div class="modal fade" id="video-modal-edit" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="video-modal-label">{{__('movielist.Edit_Video')}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                <form action="" class="section-form">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group px-3 d-flex flex-column">
                                <label class="form-label flex-grow-1" for="quality"><strong>{{__('movielist.Quality')}}:</strong></label>
                                <select id="quality" type="select" class="form-control select2-basic-multiple" placeholder="{{__('movielist.select_quality')}}">
                                    <option>{{__('movielist.480p')}}</option>
                                    <option selected>{{__('movielist.720p')}}</option>
                                    <option>{{__('movielist.1080p')}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            @include('DashboardPages.partials.input-field',[
                            'label'=>__('movielist.video'),
                            'isRequired'=>'',
                            'type'=>"file",

                            ])
                            {{-- {{> components/partials/input-field label="Video" isRequied="true" type="file"}} --}}
                        </div>
                        <div class="col-sm-12">
                            @include('DashboardPages.partials.input-field',[
                            'label'=>__('movielist.Download_Link'),
                            'type'=>"toggle",
                            'class'=>"d-flex justify-content-between",
                            'value'=>"checked"

                            ])
                            {{-- {{> components/partials/input-field label="Download Link"
                            type="toggle"
                            placeholder=""
                            class="d-flex justify-content-between"
                            value="checked"}} --}}
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{__('movielist.Close')}}</button>
                <button type="button" class="btn btn-primary">{{__('movielist.Save_changes')}}</button>
            </div>
        </div>
    </div>
</div>