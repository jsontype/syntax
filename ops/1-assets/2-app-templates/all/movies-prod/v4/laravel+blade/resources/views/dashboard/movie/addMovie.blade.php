<x-layouts.dashboard>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="iq-card">
                    <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                        <h4 class="card-title">Add Movie</h4>
                    </div>
                    </div>
                    <div class="iq-card-body">
                        <form action="{{ route('dashboard.movieList') }}">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="row">
                                    <div class="col-12 form-group">
                                        <input type="text" class="form-control" placeholder="Title">
                                    </div>
                                    <div class="col-12 form_gallery form-group">
                                        <label id="gallery2" for="form_gallery-upload">Upload Image</label>
                                        <input data-name="#gallery2" id="form_gallery-upload" class="form_gallery-upload"
                                            type="file" accept=".png, .jpg, .jpeg">
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option disabled="">Movie Category</option>
                                            <option>Comedy</option>
                                            <option>Crime</option>
                                            <option>Drama</option>
                                            <option>Horror</option>
                                            <option>Romance</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6 form-group">
                                        <select class="form-control" id="exampleFormControlSelect2">
                                            <option disabled="">Choose quality</option>
                                            <option>FULLHD</option>
                                            <option>HD</option>
                                        </select>
                                    </div>
                                    <div class="col-12 form-group">
                                        <textarea id="text" name="text" rows="5" class="form-control"
                                            placeholder="Description"></textarea>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="d-block position-relative">
                                    <div class="form_video-upload">
                                        <input type="file" accept="video/mp4,video/x-m4v,video/*" multiple>
                                        <p>Upload video</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 form-group">
                                    <input type="text" class="form-control" placeholder="Release year">
                                </div>
                                <div class="col-sm-6 form-group">
                                    <select class="form-control" id="exampleFormControlSelect3">
                                    <option selected disabled="">Choose Language</option>
                                    <option>English</option>
                                    <option>Hindi</option>
                                    <option>Tamil</option>
                                    <option>Gujarati</option>
                                    </select>
                                </div>
                                <div class="col-sm-12 form-group">
                                    <input type="text" class="form-control" placeholder="Movie Duration">
                                </div>
                                <div class="col-12 form-group ">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                    <button type="reset" class="btn btn-danger">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-layouts.dashboard>