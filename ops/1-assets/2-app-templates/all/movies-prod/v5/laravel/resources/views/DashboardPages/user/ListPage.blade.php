@extends('layouts.app', ['module_title' => 'User List','title'=>"User List",'active'=>"user-list-mini",'isSweetalert'=>true])

@section('content')
<div>
    <div class="row">
       <div class="col-sm-12">
          <div class="card">
             <div class="card-header border-bottom d-flex justify-content-between align-items-center py-3">
                <div class="d-flex align-items-center pt-3 gap-2">
                   <div class="form-group mb-0">
                      <select type="select" class="form-control select2-basic-multiple" placeholder="No Action">
                         <option>{{__('dashboard.no_action')}}</option>
                         <option>{{__('dashboard.status')}}</option>
                         <option>{{__('dashboard.delete')}}</option>
                      </select>

                   </div>
                   <button class="btn btn-primary ">{{__('dashboard.apply')}}</button>
                </div>
             </div>
             <div class="card-body">
                <div class="table-responsive rounded py-4 table-space">
                   <table id="user-list-table" class="table custom-table" role="grid" data-toggle="data-table">
                      <thead>
                         <tr class="ligth">
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Status</th>
                            <th>Company</th>
                            <th>Join Date</th>
                            <th style="min-width: 100px">Action</th>
                         </tr>
                      </thead>
                       <tbody>
                           <tr>
                              <td class="text-center"><img class="bg-soft-primary rounded img-fluid avatar-40 me-3"
                                    src="{{asset('dashboard/images/avatars/01.png')}}" alt="profile" loading="lazy"></td>
                              <td>Anna Sthesia</td>
                              <td>(760) 756 7568</td>
                              <td>annasthesia@gmail.com</td>
                              <td>USA</td>
                              <td><span class="badge bg-primary">Active</span></td>
                              <td>Acme Corporation</td>
                              <td>2019/12/01</td>
                              <td>
                                 <div class="flex align-items-center list-user-action">
                                    <a class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Add" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-user-plus fa-xs"></i>
                                       </span>
                                    </a>

                                    <a class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Delete" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-trash fa-xs"></i>
                                       </span>
                                    </a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="text-center"><img class="bg-soft-primary rounded img-fluid avatar-40 me-3"
                                    src="{{asset('dashboard/images/avatars/02.png')}} " alt="profile" loading="lazy"></td>
                              <td>Brock Lee</td>
                              <td>+62 5689 458 658</td>
                              <td>brocklee@gmail.com</td>
                              <td>Indonesia</td>
                              <td><span class="badge bg-primary">Active</span></td>
                              <td>Soylent Corp</td>
                              <td>2019/12/01</td>
                              <td>
                                 <div class="flex align-items-center list-user-action">
                                    <a class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Add" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-user-plus fa-xs"></i>
                                       </span>
                                    </a>

                                    <a class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Delete" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-trash fa-xs"></i>
                                       </span>
                                    </a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="text-center"><img class="bg-soft-primary rounded img-fluid avatar-40 me-3"
                                    src="{{asset('dashboard/images/avatars/03.png')}}" alt="profile" loading="lazy"></td>
                              <td>Dan Druff</td>
                              <td>+55 6523 456 856</td>
                              <td>dandruff@gmail.com</td>
                              <td>Brazil</td>
                              <td><span class="badge bg-warning">Pending</span></td>
                              <td>Umbrella Corporation</td>
                              <td>2019/12/01</td>
                              <td>
                                 <div class="flex align-items-center list-user-action">
                                    <a class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Add" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-user-plus fa-xs"></i>
                                       </span>
                                    </a>

                                    <a class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Delete" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-trash fa-xs"></i>
                                       </span>
                                    </a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="text-center"><img class="bg-soft-primary rounded img-fluid avatar-40 me-3"
                                    src="{{asset('dashboard/images/avatars/04.png')}}" alt="profile" loading="lazy"></td>
                              <td>Hans Olo</td>
                              <td>+91 2586 253 125</td>
                              <td>hansolo@gmail.com</td>
                              <td>India</td>
                              <td><span class="badge bg-danger">Inactive</span></td>
                              <td>Vehement Capital</td>
                              <td>2019/12/01</td>
                              <td>
                                 <div class="flex align-items-center list-user-action">
                                    <a class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Add" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-user-plus fa-xs"></i>
                                       </span>
                                    </a>

                                    <a class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Delete" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-trash fa-xs"></i>
                                       </span>
                                    </a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="text-center"><img class="bg-soft-primary rounded img-fluid avatar-40 me-3"
                                    src="{{asset('dashboard/images/avatars/05.png')}}" alt="profile" loading="lazy"></td>
                              <td>Lynn Guini</td>
                              <td>+27 2563 456 589</td>
                              <td>lynnguini@gmail.com</td>
                              <td>Africa</td>
                              <td><span class="badge bg-primary">Active</span></td>
                              <td>Massive Dynamic</td>
                              <td>2019/12/01</td>
                              <td>
                                 <div class="flex align-items-center list-user-action">
                                    <a class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Add" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-user-plus fa-xs"></i>
                                       </span>
                                    </a>

                                    <a class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Delete" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-trash fa-xs"></i>
                                       </span>
                                    </a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="text-center"><img class="bg-soft-primary rounded img-fluid avatar-40 me-3"
                                    src="{{asset('dashboard/images/avatars/06.png')}}" alt="profile" loading="lazy"></td>
                              <td>Eric Shun</td>
                              <td>+55 25685 256 589</td>
                              <td>ericshun@gmail.com</td>
                              <td>Brazil</td>
                              <td><span class="badge bg-warning">Pending</span></td>
                              <td>Globex Corporation</td>
                              <td>2019/12/01</td>
                              <td>
                                 <div class="flex align-items-center list-user-action">
                                    <a class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Add" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-user-plus fa-xs"></i>
                                       </span>
                                    </a>

                                    <a class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Delete" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-trash fa-xs"></i>
                                       </span>
                                    </a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="text-center"><img class="bg-soft-primary rounded img-fluid avatar-40 me-3"
                                    src="{{asset('dashboard/images/avatars/03.png')}}" alt="profile" loading="lazy"></td>
                              <td>aaronottix</td>
                              <td>(760) 765 2658</td>
                              <td>budwiser@ymail.com</td>
                              <td>USA</td>
                              <td><span class="badge bg-info">Hold</span></td>
                              <td>Acme Corporation</td>
                              <td>2019/12/01</td>
                              <td>
                                 <div class="flex align-items-center list-user-action">
                                    <a class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Add" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-user-plus fa-xs"></i>
                                       </span>
                                    </a>

                                    <a class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Delete" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-trash fa-xs"></i>
                                       </span>
                                    </a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="text-center"><img class="bg-soft-primary rounded img-fluid avatar-40 me-3"
                                    src="{{asset('dashboard/images/avatars/05.png')}}" alt="profile" loading="lazy"></td>
                              <td>Marge Arita</td>
                              <td>+27 5625 456 589</td>
                              <td>margearita@gmail.com</td>
                              <td>Africa</td>
                              <td><span class="badge bg-success">Complete</span></td>
                              <td>Vehement Capital</td>
                              <td>2019/12/01</td>
                              <td>
                                 <div class="flex align-items-center list-user-action">
                                    <a class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Add" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-user-plus fa-xs"></i>
                                       </span>
                                    </a>

                                    <a class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Delete" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-trash fa-xs"></i>
                                       </span>
                                    </a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td class="text-center"><img class="bg-soft-primary rounded img-fluid avatar-40 me-3"
                                    src="{{asset('dashboard/images/avatars/02.png')}}" alt="profile" loading="lazy"></td>
                              <td>Bill Dabear</td>
                              <td>+55 2563 456 589</td>
                              <td>billdabear@gmail.com</td>
                              <td>Brazil</td>
                              <td><span class="badge bg-primary">active</span></td>
                              <td>Massive Dynamic</td>
                              <td>2019/12/01</td>
                              <td>
                                 <div class="flex align-items-center list-user-action">
                                    <a class="btn btn-sm btn-icon btn-success rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Add" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-user-plus fa-xs"></i>
                                       </span>
                                    </a>

                                    <a class="btn btn-sm btn-icon btn-danger delete-btn rounded" data-bs-toggle="tooltip"
                                       data-placement="top" title="" data-bs-original-title="Delete" href="#">
                                       <span class="btn-inner">
                                          <i class="fa-solid fa-trash fa-xs"></i>
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
    </div>
 </div>
@endsection
