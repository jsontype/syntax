@extends('layouts.app')

@section('content')
<div class="container-fluid px-0">
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Popovers</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title"
                        data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to
                        toggle popover</button>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Dismiss on next click</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Use the <code>focus</code> trigger to dismiss popovers on the user’s next click of a
                        different element than the toggle element.</p>
                    <a tabindex="0" class="btn btn-danger" role="button" data-bs-toggle="popover" data-trigger="focus"
                        title="Dismissible popover"
                        data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible
                        popover</a>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Disabled elements</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot
                        hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to
                        trigger the popover from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and
                        override the <code>pointer-events</code> on the disabled element.</p>
                    <span class="d-inline-block" data-bs-toggle="popover" data-bs-content="Disabled popover">
                        <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled
                            button</button>
                    </span>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Hover elements</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>For disabled popover triggers, you may also prefer <code>data-trigger="hover"</code> so that
                        the popover appears as immediate visual feedback to your users as they may not expect to
                        <em>click</em> on a disabled element.
                    </p>
                    <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus"
                        data-bs-content="Disabled popover">
                        <button class="btn btn-primary" type="button" disabled>Disabled button</button>
                    </span>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-lg-6">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Four directions</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Four options are available: top, right, bottom, and left aligned.</p>
                    <button type="button" class="btn btn-secondary mb-1" data-bs-container="body"
                        data-bs-toggle="popover" data-bs-placement="top"
                        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on top
                    </button>
                    <button type="button" class="btn btn-secondary mb-1" data-bs-container="body"
                        data-bs-toggle="popover" data-bs-placement="right"
                        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on right
                    </button>
                    <button type="button" class="btn btn-secondary mb-1" data-bs-container="body"
                        data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus
                        sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on bottom
                    </button>
                    <button type="button" class="btn btn-secondary mb-1" data-bs-container="body"
                        data-bs-toggle="popover" data-bs-placement="left"
                        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on left
                    </button>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Popovers With Color</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Four options are available: top, right, bottom, and left aligned.</p>
                    <button type="button" class="btn btn-primary mb-1" data-bs-container="body" data-bs-toggle="popover"
                        data-bs-placement="top"
                        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on top
                    </button>
                    <button type="button" class="btn btn-success mb-1" data-bs-container="body" data-bs-toggle="popover"
                        data-bs-placement="right"
                        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on right
                    </button>
                    <button type="button" class="btn btn-danger mb-1" data-bs-container="body" data-bs-toggle="popover"
                        data-bs-placement="bottom" data-bs-content="Vivamus
                        sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on bottom
                    </button>
                    <button type="button" class="btn btn-info mb-1" data-bs-container="body" data-bs-toggle="popover"
                        data-bs-placement="left"
                        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on left
                    </button>
                </div>
            </div>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                        <h4 class="card-title">Popovers With Color</h4>
                    </div>
                </div>
                <div class="card-body">
                    <p>Four options are available: top, right, bottom, and left aligned.</p>
                    <button type="button" class="btn bg-primary-subtle mb-1" data-bs-container="body"
                        data-bs-toggle="popover" data-bs-placement="top"
                        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on top
                    </button>
                    <button type="button" class="btn bg-success-subtle mb-1" data-bs-container="body"
                        data-bs-toggle="popover" data-bs-placement="right"
                        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on right
                    </button>
                    <button type="button" class="btn bg-danger-subtle mb-1" data-bs-container="body"
                        data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus
                        sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on bottom
                    </button>
                    <button type="button" class="btn bg-info-subtle mb-1" data-bs-container="body"
                        data-bs-toggle="popover" data-bs-placement="left"
                        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        Popover on left
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection