<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#subtitle-modal-edit">
    <i class="fa-solid fa-square-plus me-2"></i>{{__('movielist.Edit_Subtitle')}}
</button>

<div class="modal fade" id="subtitle-modal-edit" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="subtitle-modal-label">{{__('movielist.Edit_Subtitle')}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                <form action="" class="section-form">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group px-3 d-flex flex-column">
                                <label class="form-label flex-grow-1" for="subtitle"><strong>{{__('movielist.Subtitle')}}:</strong></label>
                                <select id="subtitle" type="select" class="form-control select2-basic-multiple" placeholder="{{__('movielist.select_subtitle')}}">
                                    <option>{{__('movielist.hindi')}}</option>
                                    <option>{{__('movielist.english')}}</option>
                                    <option>{{__('movielist.french')}}</option>
                                    <option>{{__('movielist.marathi')}}</option>
                                    <option selected>{{__('movielist.gujarati')}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            @include('DashboardPages.partials.input-field',[
                            'label'=>__('movielist.File'),
                            'isRequired'=>'',
                            'type'=>"file",

                            ])
                            {{-- {{> components/partials/input-field label="File" isRequied="true" type="file"}} --}}
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