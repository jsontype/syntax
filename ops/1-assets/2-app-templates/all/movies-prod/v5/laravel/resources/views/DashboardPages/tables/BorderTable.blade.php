@extends('layouts.app')

@section('content')
<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header border-bottom d-flex justify-content-between align-items-center py-3">
                <div class="d-flex align-items-center pt-3">
                    <div class="form-group">
                        <select type="select" class="form-control select2-basic-multiple" placeholder="No Action">
                            <option>{{__('dashboard.no_action')}}</option>
                            <option>{{__('dashboard.status')}}</option>
                            <option>{{__('dashboard.delete')}}</option>
                        </select>
                        <button class="btn btn-primary ">{{__('dashboard.apply')}}</button>
                    </div>
                </div>
            </div>

                <div class="custom-table-effect table-responsive  border rounded py-4">
                    <table class="table mb-0" id="datatable" data-toggle="data-table">
                        <thead>
                            <tr class="bg-white">
                                <th scope="col">Profiles</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Country</th>
                                <th scope="col">Purchases</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img class="rounded img-fluid avatar-60 me-3"
                                            src="{{ asset('dashboard/images/avatars/01.png') }}" alt=""
                                            loading="lazy">
                                        <div class="media-support-info">
                                            <h5 class="iq-sub-label">Anne Teak</h5>
                                            <p class="mb-0">@musk</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="">(208) 555-0112</td>
                                <td class="">musk.e@mail.com</td>
                                <td class="">
                                    <svg width="18" class="me-2" viewBox="0 0 20 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="20" height="13.75" fill="#EEF3F8" />
                                        <rect y="0.5" width="11.25" height="8.75" fill="#41479B" />
                                        <rect x="11.25" y="0.5" width="8.75" height="1.25" fill="#DC251C" />
                                        <rect x="11.25" y="3" width="8.75" height="1.25" fill="#DC251C" />
                                        <rect x="11.25" y="5.5" width="8.75" height="1.25" fill="#DC251C" />
                                        <rect x="11.25" y="8" width="8.75" height="1.25" fill="#DC251C" />
                                        <rect y="10.5" width="20" height="1.25" fill="#DC251C" />
                                        <rect y="13" width="20" height="1.25" fill="#DC251C" />
                                        <rect x="1.25" y="1.75" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="3.75" y="1.75" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="6.25" y="1.75" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="8.75" y="1.75" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="1.25" y="4.25" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="3.75" y="4.25" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="6.25" y="4.25" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="2.5" y="5.5" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="5" y="5.5" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="7.5" y="5.5" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="2.5" y="3" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="5" y="3" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="7.5" y="3" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="8.75" y="4.25" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="1.25" y="6.75" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="3.75" y="6.75" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="6.25" y="6.75" width="1.25" height="1.25" fill="#C5D0EC" />
                                        <rect x="8.75" y="6.75" width="1.25" height="1.25" fill="#C5D0EC" />
                                    </svg>
                                    USA
                                </td>
                                <td class="">548</td>
                                <td>
                                    <span class="badge bg-primary-subtle p-2 text-primary">Active</span>
                                </td>
                                <td>
                                    <div class="d-flex justify-content-evenly">
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-user-plus"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-pen"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-trash"></i>
                                            </span>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img class="rounded img-fluid avatar-60 me-3"
                                            src="{{ asset('dashboard/images/avatars/03.png') }}" alt=""
                                            loading="lazy">
                                        <div class="media-support-info">
                                            <h5 class="iq-sub-label">Marie Clark</h5>
                                            <p class="mb-0">@mclark</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="">(208) 262-238</td>
                                <td class="">mclark@mail.com</td>
                                <td class="">
                                    <svg width="18" class="me-2" viewBox="0 0 20 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="15" transform="translate(0 0.5)"
                                            fill="#FFD018" />
                                        <rect y="0.5" width="20" height="3.75" fill="#DC251C" />
                                        <rect y="11.75" width="20" height="3.75" fill="#DC251C" />
                                        <rect x="3.75" y="5.5" width="2.5" height="2.5" fill="#DC251C" />
                                        <path d="M3.75 8H6.25V10.5H4.75C4.19772 10.5 3.75 10.0523 3.75 9.5V8Z"
                                            fill="#FF8718" />
                                        <path d="M6.25 8H8.75V9.5C8.75 10.0523 8.30228 10.5 7.75 10.5H6.25V8Z"
                                            fill="#DC251C" />
                                        <rect x="6.25" y="5.5" width="2.5" height="2.5" fill="#A6A6A6" />
                                        <circle cx="6.25" cy="8" r="0.625" fill="#41479B" />
                                    </svg>
                                    SPN
                                </td>
                                <td class="">256</td>
                                <td>
                                    <span class="badge bg-warning-subtle p-2 text-warning">Pending</span>
                                </td>
                                <td>
                                    <div class="d-flex justify-content-evenly">
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-user-plus"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-pen"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-trash"></i>
                                            </span>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img class="rounded img-fluid avatar-60 me-3"
                                            src="{{ asset('dashboard/images/avatars/04.png') }}" alt=""
                                            loading="lazy">
                                        <div class="media-support-info">
                                            <div class="media-support-info">
                                                <h5 class="iq-sub-label">James Mason</h5>
                                                <p class="mb-0">@mason.j</p>
                                            </div>
                                        </div>
                                </td>
                                <td class="">(208) 326-4679</td>
                                <td class="">mason.j@mail.com</td>
                                <td class="">
                                    <svg width="18" class="me-2" viewBox="0 0 20 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="20" height="15" fill="#F5F8FB" />
                                        <rect y="0.5" width="6.25" height="15" fill="#2B9F5A" />
                                        <rect x="13.75" y="0.5" width="6.25" height="15" fill="#DC251C" />
                                    </svg>
                                    ITL
                                </td>
                                <td class="">481</td>
                                <td>
                                    <span class="badge bg-primary p-2 text-white">Hold</span>
                                </td>
                                <td>
                                    <div class="d-flex justify-content-evenly">
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-user-plus"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-pen"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-trash"></i>
                                            </span>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img class="rounded img-fluid avatar-60 me-3"
                                            src="{{ asset('dashboard/images/avatars/05.png') }}" alt=""
                                            loading="lazy">
                                        <div class="media-support-info">
                                            <div class="media-support-info">
                                                <h5 class="iq-sub-label">Clinette Mark</h5>
                                                <p class="mb-0">@c.mark</p>
                                            </div>
                                        </div>
                                </td>
                                <td class="">(208) 346-4687</td>
                                <td class="">c.mark@mail.com</td>
                                <td class="">
                                    <svg width="18" class="me-2" viewBox="0 0 20 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="15" transform="translate(0 0.5)"
                                            fill="#F5F8FB" />
                                        <circle cx="9.5" cy="7.5" r="3.5" fill="#DC251C" />
                                    </svg>
                                    JPN
                                </td>
                                <td class="">324</td>
                                <td>
                                    <span class="badge bg-success-subtle p-2 text-success">Complete</span>
                                </td>
                                <td>
                                    <div class="d-flex justify-content-evenly">
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-user-plus"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-pen"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-trash"></i>
                                            </span>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img class="rounded img-fluid avatar-60 me-3"
                                            src="{{ asset('dashboard/images/avatars/06.png') }}" alt=""
                                            loading="lazy">
                                        <div class="media-support-info">
                                            <div class="media-support-info">
                                                <h5 class="iq-sub-label">Jamie Park</h5>
                                                <p class="mb-0">@jpark</p>
                                            </div>
                                        </div>
                                </td>
                                <td class="">(208) 778-6878</td>
                                <td class="">park.e@mail.com</td>
                                <td class="">
                                    <svg width="22" class="me-2" viewBox="0 0 22 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="21.3333" height="16" fill="#272727" />
                                        <rect y="5.3335" width="21.3333" height="5.33333" fill="#E31D1C" />
                                        <rect y="10.6665" width="21.3333" height="5.33333" fill="#FFD018" />
                                    </svg>
                                    GER
                                </td>
                                <td class="">123</td>
                                <td>
                                    <span class="badge bg-danger-subtle p-2 text-danger">Inactive</span>
                                </td>
                                <td>
                                    <div class="d-flex justify-content-evenly">
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-user-plus"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-pen"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-trash"></i>
                                            </span>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img class="rounded img-fluid avatar-60 me-3"
                                            src="{{ asset('dashboard/images/avatars/07.png') }}" alt=""
                                            loading="lazy">
                                        <div class="media-support-info">
                                            <div class="media-support-info">
                                                <h5 class="iq-sub-label">Dennis Hall</h5>
                                                <p class="mb-0">@dennis</p>
                                            </div>
                                        </div>
                                </td>
                                <td class="">(208) 555-0112</td>
                                <td class="">dennis.e@mail.com</td>
                                <td class="">
                                    <svg width="21" class="me-2" viewBox="0 0 21 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_80_4707)">
                                            <path d="M0 0H21V5.33333H0V0Z" fill="#FF8718" />
                                            <path d="M0 5.3335H21V10.6668H0V5.3335Z" fill="#F5F8FB" />
                                            <path d="M0 10.6665H21V15.9998H0V10.6665Z" fill="#2B9F5A" />
                                            <path
                                                d="M11.813 8.00033C11.813 8.73671 11.2254 9.33366 10.5005 9.33366C9.77561 9.33366 9.18799 8.73671 9.18799 8.00033C9.18799 7.26395 9.77561 6.66699 10.5005 6.66699C11.2254 6.66699 11.813 7.26395 11.813 8.00033Z"
                                                fill="#F5F8FB" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M10.4995 7.33333C10.1371 7.33333 9.84326 7.63181 9.84326 8C9.84326 8.36819 10.1371 8.66667 10.4995 8.66667C10.8619 8.66667 11.1558 8.36819 11.1558 8C11.1558 7.63181 10.8619 7.33333 10.4995 7.33333ZM8.53076 8C8.53076 6.89543 9.4122 6 10.4995 6C11.5868 6 12.4683 6.89543 12.4683 8C12.4683 9.10457 11.5868 10 10.4995 10C9.4122 10 8.53076 9.10457 8.53076 8Z"
                                                fill="#41479B" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_80_4707">
                                                <rect width="21" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    IND
                                </td>
                                <td class="">210</td>
                                <td>
                                    <span class="badge bg-primary-subtle p-2 text-primary">Active</span>
                                </td>
                                <td>
                                    <div class="d-flex justify-content-evenly">
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-user-plus"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-pen"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-trash"></i>
                                            </span>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img class="rounded img-fluid avatar-60 me-3"
                                            src="{{ asset('dashboard/images/avatars/08.png') }}" alt=""
                                            loading="lazy">
                                        <div class="media-support-info">
                                            <div class="media-support-info">
                                                <h5 class="iq-sub-label">Clara Mist</h5>
                                                <p class="mb-0">@mist.c</p>
                                            </div>
                                        </div>
                                </td>
                                <td class="">(208) 674-3424</td>
                                <td class="">mist.e@mail.com</td>
                                <td class="">
                                    <svg width="22" class="me-2" viewBox="0 0 22 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect y="5.3335" width="21.3333" height="5.33333" fill="#F5F8FB" />
                                        <rect width="21.3333" height="5.33333" fill="#2B9F5A" />
                                        <rect y="10.6665" width="21.3333" height="5.33333" fill="#272727" />
                                        <rect width="6.66667" height="16" fill="#DC251C" />
                                    </svg>
                                    UAE
                                </td>
                                <td class="">327</td>
                                <td>
                                    <span class="badge bg-warning-subtle p-2 text-warning">Pending</span>
                                </td>
                                <td>
                                    <div class="d-flex justify-content-evenly">
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-user-plus"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-pen"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-trash"></i>
                                            </span>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img class="rounded img-fluid avatar-60 me-3"
                                            src="{{ asset('dashboard/images/avatars/09.png') }}" alt=""
                                            loading="lazy">
                                        <div class="media-support-info">
                                            <div class="media-support-info">
                                                <h5 class="iq-sub-label">Anne Teak</h5>
                                                <p class="mb-0">@musk</p>
                                            </div>
                                        </div>
                                </td>
                                <td class="">(208) 555-0112</td>
                                <td class="">musk.e@mail.com</td>
                                <td class="">
                                    <svg width="21" class="me-2" viewBox="0 0 21 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="21" height="16" fill="#F5F8FB" />
                                        <rect width="21" height="2" fill="#41479B" />
                                        <rect y="3" width="21" height="3" fill="#41479B" />
                                        <rect y="7" width="21" height="2" fill="#41479B" />
                                        <rect width="9" height="9" fill="#41479B" />
                                        <rect y="3" width="9" height="3" fill="#F5F8FB" />
                                        <rect x="3" y="9" width="9" height="3" transform="rotate(-90 3 9)"
                                            fill="#F5F8FB" />
                                        <rect y="10" width="21" height="3" fill="#41479B" />
                                        <rect y="14" width="21" height="2" fill="#41479B" />
                                    </svg>
                                    GRC
                                </td>
                                <td class="">548</td>
                                <td>
                                    <span class="badge bg-primary p-2 text-white">Hold</span>
                                </td>
                                <td>
                                    <div class="d-flex justify-content-evenly">
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-user-plus"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-pen"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-trash"></i>
                                            </span>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img class="rounded img-fluid avatar-60 me-3"
                                            src="{{ asset('dashboard/images/avatars/10.png') }}" alt=""
                                            loading="lazy">
                                        <div class="media-support-info">
                                            <div class="media-support-info">
                                                <h5 class="iq-sub-label">Anne Teak</h5>
                                                <p class="mb-0">@musk</p>
                                            </div>
                                        </div>
                                </td>
                                <td class="">(208) 555-0112</td>
                                <td class="">musk.e@mail.com</td>
                                <td class="">
                                    <svg width="18" class="me-2" viewBox="0 0 21 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="21" height="16" fill="#F5F8FB" />
                                        <ellipse cx="10.5" cy="7.69231" rx="3.5" ry="3.69231"
                                            fill="#DC251C" />
                                        <mask style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="7"
                                            width="7" height="5">
                                            <path
                                                d="M14 12.0002V8.30792C12.832 6.15169 10.4961 7.92611 10.4961 7.92611C10.4961 7.92611 8.16538 9.53597 7 7.07715V12.0002H14Z"
                                                fill="#C4C4C4" />
                                        </mask>
                                        <g mask="url(#mask0_80_4853)">
                                            <ellipse cx="10.5" cy="7.69231" rx="3.5" ry="3.69231"
                                                fill="#41479B" />
                                        </g>
                                        <path d="M2.16455 4.83789L4.32821 1.09033" stroke="black" stroke-width="0.5" />
                                        <path d="M3.12744 5.39551L5.2911 1.64795" stroke="black" stroke-width="0.5" />
                                        <path d="M4.09131 5.95117L6.25496 2.20361" stroke="black" stroke-width="0.5" />
                                        <path d="M18.9995 4.83789L16.8359 1.09033" stroke="black" stroke-width="0.5"
                                            stroke-dasharray="8 1" />
                                        <path d="M18.0366 5.39551L15.873 1.64795" stroke="black" stroke-width="0.5" />
                                        <path d="M17.0728 5.95117L14.9091 2.20361" stroke="black" stroke-width="0.5"
                                            stroke-dasharray="8 1" />
                                        <path d="M2.16406 11.5049L4.32772 15.2524" stroke="black" stroke-width="0.5" />
                                        <path d="M3.12744 10.9492L5.2911 14.6968" stroke="black" stroke-width="0.5"
                                            stroke-dasharray="8 1" />
                                        <path d="M4.09082 10.3926L6.25447 14.1401" stroke="black" stroke-width="0.5" />
                                        <path d="M18.9995 11.5049L16.8359 15.2524" stroke="black" stroke-width="0.5"
                                            stroke-dasharray="8 1" />
                                        <path d="M18.0366 10.9492L15.873 14.6968" stroke="black" stroke-width="0.5"
                                            stroke-dasharray="8 1" />
                                        <path d="M17.0732 10.3926L14.9096 14.1401" stroke="black" stroke-width="0.5"
                                            stroke-dasharray="8 1" />
                                    </svg>
                                    S.KO
                                </td>
                                <td class="">548</td>
                                <td>
                                    <span class="badge bg-success-subtle p-2 text-success">Complete</span>
                                </td>
                                <td>
                                    <div class="d-flex justify-content-evenly">
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-user-plus"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-pen"></i>
                                            </span>
                                        </a>
                                        <a class="btn btn-primary btn-icon btn-sm rounded-pill ms-2" href="#"
                                            role="button">
                                            <span class="btn-inner">
                                                <i class="fa-solid fa-trash"></i>
                                            </span>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
