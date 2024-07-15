<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cast-modal-edit">
    <i class="fa-solid fa-square-plus me-2"></i>{{__('movielist.Edit__cast_button')}}
</button>

<div class="modal fade" id="cast-modal-edit" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="cast-modal-label">{{__('movielist.Edit__cast_title')}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div class="modal-body">
                <form action="" class="section-form">
                    <div class="row">
                        <div class="col-sm-12">
                            @include('DashboardPages.partials.input-field',[
                            'label'=>__('movielist.person'),
                            'isRequired'=>'',
                            'type'=>"text",
                            'placeholder'=>__('movielist.Person_Name'),
                            'value'=>"Austin Robertson"
                            ])
                            {{-- {{> components/partials/input-field label="Person" isRequied="true" type="text"
                        placeholder="{{__('movielist.Person_Name')}}" value="Austin Robertson"}} --}}
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group px-3 d-flex flex-column">
                                <label class="form-label flex-grow-1"
                                    for="occupation"><strong>Occupation:</strong></label>
                                <select id="occupation" type="select" class="form-control select2-basic-multiple"
                                    placeholder="Select Occupation">
                                    <option>{{__('movielist.cast')}}</option>
                                    <option>{{__('movielist.crew')}}</option>
                                    <option>{{__('movielist.production')}}</option>
                                    <option selected>{{__('movielist.director')}}</option>
                                    <option>{{__('movielist.actor')}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            @include('DashboardPages.partials.input-field',[
                            'label'=>__('movielist.as'),
                            'isRequired'=>'',
                            'type'=>"text",
                            'placeholder'=>__('movielist.played_as'),
                            'value'=>"XYZ"
                            ])
                            {{-- {{> components/partials/input-field label="As" isRequied="true" type="text"
                        placeholder="Played as" value="XYZ"}} --}}
                        </div>
                        <div class="col-sm-12">
                            @include('DashboardPages.partials.input-field',[
                            'label'=>__('movielist.status'),
                            'isRequired'=>'',
                            'type'=>"toggle",
                            'placeholder'=>"" ,
                            'class'=>"d-flex justify-content-between",
                            'value'=>"checked"
                            ])
                            {{-- {{> components/partials/input-field label="Status"
                        type="toggle"
                        placeholder=""
                        class="d-flex justify-content-between"
                        value="checked"}} --}}
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary"
                    data-bs-dismiss="modal">{{__('movielist.Close')}}</button>
                <button type="button" class="btn btn-primary">{{__('movielist.Save_changes')}}</button>
            </div>
        </div>
    </div>
</div>