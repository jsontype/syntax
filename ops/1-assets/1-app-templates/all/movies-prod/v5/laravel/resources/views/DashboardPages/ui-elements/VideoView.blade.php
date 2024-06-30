@extends('layouts.app')
@section('content')
<div class="container-fluid px-0">
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Embeds Video</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Wrap any embed like an <code class="highlighter-rouge">&lt;iframe&gt;</code> in a parent
                        element with <code class="highlighter-rouge">.embed-responsive</code> and an aspect ratio.
                        The <code class="highlighter-rouge">.embed-responsive-item</code> isn’t strictly required,
                        but we encourage it.</p>
                    <div class="ratio ratio-16x9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Responsive Aspect ratios 4:3</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Progress components are built with two HTML elements, some CSS to set the width, and a few
                        attributes.</p>
                    <!-- 4:3 aspect ratio -->
                    <div class="ratio ratio-4x3">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Responsive Aspect ratios 21:9</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Progress components are built with two HTML elements, some CSS to set the width, and a few
                        attributes.</p>
                    <!-- 21:9 aspect ratio -->
                    <div class="ratio ratio-21x9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Responsive Aspect ratios 1:1</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Progress components are built with two HTML elements, some CSS to set the width, and a few
                        attributes.</p>
                    <!-- 1:1 aspect ratio -->
                    <div class="ratio ratio-1x1">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection