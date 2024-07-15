@extends('layouts.app')

@section('content')
<div class="container-fluid px-0">
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Tooltips</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.
                        The data-bs-placement attribute specifies the tooltip position.</p>
                    <button type="button" class="btn btn-secondary mt-2" data-bs-toggle="tooltip"
                        data-bs-placement="top" title="Tooltip on top">
                        Tooltip on top
                    </button>
                    <button type="button" class="btn btn-secondary mt-2" data-bs-toggle="tooltip"
                        data-bs-placement="right" title="Tooltip on right">
                        Tooltip on right
                    </button>
                    <button type="button" class="btn btn-secondary mt-2" data-bs-toggle="tooltip"
                        data-bs-placement="bottom" title="Tooltip on bottom">
                        Tooltip on bottom
                    </button>
                    <button type="button" class="btn btn-secondary mt-2" data-bs-toggle="tooltip"
                        data-bs-placement="left" title="Tooltip on left">
                        Tooltip on left
                    </button>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Disabled elements</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot focus,
                        hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger
                        the tooltip from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made
                        keyboard-focusable using <code>tabindex="0"</code>, and override the
                        <code>pointer-events</code> on the disabled element.
                    </p>
                    <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
                        <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled
                            button</button>
                    </span>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Tooltips</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left
                        Using background colors</p>
                    <button type="button" class="btn btn-primary mt-2" data-bs-toggle="tooltip" data-bs-placement="top"
                        title="Tooltip on top">
                        Tooltip on top
                    </button>
                    <button type="button" class="btn btn-success mt-2" data-bs-toggle="tooltip"
                        data-bs-placement="right" title="Tooltip on right">
                        Tooltip on right
                    </button>
                    <button type="button" class="btn btn-danger mt-2" data-bs-toggle="tooltip"
                        data-bs-placement="bottom" title="Tooltip on bottom">
                        Tooltip on bottom
                    </button>
                    <button type="button" class="btn btn-info mt-2" data-bs-toggle="tooltip" data-bs-placement="left"
                        title="Tooltip on left">
                        Tooltip on left
                    </button>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Tooltips</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left
                        Using Light background colors</p>
                    <button type="button" class="btn btn-primary-subtle mt-2" data-bs-toggle="tooltip"
                        data-bs-placement="top" title="Tooltip on top">
                        Tooltip on top
                    </button>
                    <button type="button" class="btn btn-success-subtle mt-2" data-bs-toggle="tooltip"
                        data-bs-placement="right" title="Tooltip on right">
                        Tooltip on right
                    </button>
                    <button type="button" class="btn btn-danger-subtle mt-2" data-bs-toggle="tooltip"
                        data-bs-placement="bottom" title="Tooltip on bottom">
                        Tooltip on bottom
                    </button>
                    <button type="button" class="btn btn-info-subtle mt-2" data-bs-toggle="tooltip"
                        data-bs-placement="left" title="Tooltip on left">
                        Tooltip on left
                    </button>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Hover elements</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Hover over the buttons below to see the tooltip.</p>
                    <!-- HTML to write -->
                    <a href="#" data-bs-toggle="tooltip" title="Some tooltip text!">Hover over me</a>
                    <!-- Generated markup by the plugin -->
                    <div class="tooltip bs-tooltip-top" role="tooltip">
                        <div class="arrow"></div>
                        <div class="tooltip-inner">
                            Some tooltip text!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection