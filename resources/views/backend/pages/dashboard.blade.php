@extends('layouts.backend.master')
@section('content')
<div class="row">
    <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
        <div class="card overflow-hidden dash1-card border-0 bg-primary-transparent">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-6">
                        <div class="">
                            <span class="fs-14 font-weight-normal">Total Sales</span>
                            <h2 class="mb-2 number-font carn1 font-weight-bold text-primary">3,257</h2>
                            <span class=""><i class="fe fe-arrow-up-circle text-primary"></i> 76% <span class="ms-1 fs-11">Growth This Month</span>
                        </span></div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-6 my-auto mx-auto">
                        <div class="mx-auto text-right">
                            <div id="spark1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
        <div class="card overflow-hidden dash1-card border-0 bg-success-transparent">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-6">
                        <div class="">
                            <span class="fs-14">Total Stats</span>
                            <h2 class="mb-2 mt-1 number-font carn2 font-weight-bold  text-success">1,678</h2>
                            <span class=""><i class="fe fe-arrow-down-circle text-success"></i> 15% <span class="ms-1 fs-11">Loss This Month</span>
                        </span></div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-6 my-auto mx-auto">
                        <div class="mx-auto text-right">
                            <div id="spark2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
        <div class="card overflow-hidden dash1-card border-0 bg-warning-transparent">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-6">
                        <div class="">
                            <span class="fs-14">Total Income</span>
                            <h2 class="mb-2 mt-1 number-font carn2 font-weight-bold  text-warning">$2,590</h2>
                            <span class=""><i class="fe fe-arrow-up-circle text-warning"></i> 62% <span class="ms-1 fs-11">From Last Month</span>
                        </span></div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-6 my-auto mx-auto">
                        <div class="mx-auto text-right">
                            <div id="spark3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-6 col-md-6 col-xm-12">
        <div class="card overflow-hidden dash1-card border-0 bg-danger-transparent">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-6">
                        <div class="text-justify">
                            <span>Total Tax</span>
                            <h2 class="mb-2 mt-1 number-font carn2 font-weight-bold text-danger">$1,954</h2>
                            <span class=""><i class="fe fe-arrow-up-circle text-danger"></i> 53% <span class="ms-1 fs-11">From Last Month</span>
                        </span></div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-6 my-auto mx-auto">
                        <div class="mx-auto text-right">
                            <div id="spark4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Row-1 -->

<!-- Row-2 -->
<div class="row">
    <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Sales Activity</h3>
            </div>
            <div class="card-body pt-0">
                <div class="chart-wrapper">
                    <div id="statistics"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    Recent Activity
                </h3>
                <div class="card-options">
                    <a href="javascript:void0;" class="btn btn-sm btn-primary">View All</a>
                </div>
            </div>
            <div class="card-body p-0">
                <ul class="recent-activity">
                    <li class="mb-5 mt-5">
                        <div>
                            <span class="activity-timeline text-info"><i class="mdi mdi-archive"></i></span>
                            <div class="activity-timeline-content">
                                <span class="font-weight-normal1 fs-13">New Products,</span><span class="text-muted fs-12 float-end">6:45pm</span>
                                <span class="activity-sub-content text-info fs-11">52% New products</span>
                                <p class="text-muted fs-12 mt-1">More than 200 new products are added</p>
                            </div>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div>
                            <span class="activity-timeline text-danger"><i class="zmdi zmdi-mall"></i></span>
                            <div class="activity-timeline-content">
                                <span class="font-weight-normal1 fs-13">New Sale,</span><span class="text-muted fs-12 float-end">1day ago</span>
                                <span class="activity-sub-content text-danger fs-11">76% Profit earned.</span>
                                <p class="text-muted fs-12 mt-1">$2,546 income earned in today sale</p>
                            </div>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div>
                            <span class="activity-timeline text-success"><i class="mdi mdi-account-box"></i></span>
                            <div class="activity-timeline-content">
                                <span class="font-weight-normal1 fs-13">New Customers,</span><span class="text-muted fs-12 float-end">7.45pm</span>
                                <span class="activity-sub-content text-success fs-11">24% New customers</span>
                                <p class="text-muted fs-12 mt-1">1.3k new customers reached us this year</p>
                            </div>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div>
                            <span class="activity-timeline text-warning"><i class="zmdi zmdi-pin-assistant"></i></span>
                            <div class="activity-timeline-content">
                                <span class="font-weight-normal1 fs-13">New Reviews,</span><span class="text-muted fs-12 float-end">1min ago</span>
                                <span class="activity-sub-content text-warning fs-11">96% Positive reviews.</span>
                                <p class="text-muted fs-12 mt-1">There are 500 plus new reviews</p>
                            </div>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div>
                            <span class="activity-timeline text-secondary"><i class="zmdi zmdi-eye"></i></span>
                            <div class="activity-timeline-content">
                                <span class="font-weight-normal1 fs-13">Customer Visits,</span><span class="text-muted fs-12 float-end">today</span>
                                <span class="activity-sub-content text-secondary fs-11">33% target achieved.</span>
                                <p class="text-muted fs-12 mt-1">daily 20 plus new customers visits us</p>
                            </div>
                        </div>
                    </li>
                    <li class="mb-5 border-bottom-0">
                        <div>
                            <span class="activity-timeline text-teal"><i class="zmdi zmdi-bookmark"></i></span>
                            <div class="activity-timeline-content">
                                <span class="font-weight-normal1 fs-13">Sale  Consistency,</span><span class="text-muted fs-12 float-end">3 days ago</span>
                                <span class="activity-sub-content text-teal fs-11">90% growth.</span>
                                <p class="text-muted fs-12 mt-1">More than 5 Sales happening every week</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- End Row-2 -->

<!-- Row-3 -->
<div class="row row-deck">
    <div class="col-md-12 col-sm-12 col-lg-12 col-xl-6">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    Top Products
                </h3>
                <div class="card-options">
                    <a href="javascript:void0;" class="btn btn-sm btn-primary">View All</a>
                </div>
            </div>
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover card-table table-vcenter text-nowrap">
                        <thead class="border-bottom-0 pt-3 pb-3">
                            <tr>
                                <th class="text-center">s.no</th>
                                <th>Product Category</th>
                                <th>Product Name</th>
                                <th>Sale Value</th>
                                <th>Sale Info</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">1</td>
                                <td><img class="avatat avatar-md brround me-2" src="../../assets/images/orders/7.jpg" alt="img">Books</td>
                                <td class="fs-13 text-success"><span class="dot-label bg-success me-2 w-2 h-2"></span>Book</td>
                                <td><span class="font-weight-normal1">$1234</span></td>
                                <td class="text-muted">3 days ago</td>
                                <td><span class="badge fs-11 bg-success-transparent text-success ms-2">Regular</span></td>
                            </tr>
                            <tr>
                                <td class="text-center">2</td>
                                <td><img class="avatat avatar-md brround me-2" src="../../assets/images/orders/5.jpg" alt="img">Sports</td>
                                <td class="fs-13 text-secondary"><span class="dot-label bg-secondary me-2 w-2 h-2"></span>Shoes</td>
                                <td><span class="font-weight-normal1">$5436</span></td>
                                <td class="text-muted">1hr ago</td>
                                <td><span class="badge fs-11 bg-secondary-transparent text-secondary ms-2">Top Seller</span></td>
                            </tr>
                            <tr>
                                <td class="text-center">3</td>
                                <td><img class="avatat avatar-md brround me-2" src="../../assets/images/orders/6.jpg" alt="img">Accesories</td>
                                <td class="fs-13 text-danger"><span class="dot-label bg-danger me-2 w-2 h-2"></span>Watch</td>
                                <td><span class="font-weight-normal1">$540</span></td>
                                <td class="text-muted">1 week ago</td>
                                <td><span class="badge fs-11 bg-danger-transparent text-danger ms-2">Irregular</span></td>
                            </tr>
                            <tr>
                                <td class="text-center">4</td>
                                <td><img class="avatat avatar-md brround me-2" src="../../assets/images/orders/4.jpg" alt="img">Watches</td>
                                <td class="fs-13 text-success"><span class="dot-label bg-success me-2 w-2 h-2"></span>Smart Watch</td>
                                <td><span class="font-weight-normal1">$1543</span></td>
                                <td class="text-muted">Today</td>
                                <td><span class="badge fs-11 bg-success-transparent text-success text-success ms-2">Regular</span></td>
                            </tr>
                            <tr>
                                <td class="text-center">5</td>
                                <td><img class="avatat avatar-md brround me-2" src="../../assets/images/orders/10.jpg" alt="img">speakers</td>
                                <td class="fs-13 text-info"><span class="dot-label bg-info me-2 w-2 h-2"></span>Head set</td>
                                <td><span class="font-weight-normal1">$6427</span></td>
                                <td class="text-muted">Today</td>
                                <td><span class="badge fs-11 bg-info-transparent text-info ms-2 mb-0">Top Pick</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12 col-sm-12 col-lg-6 col-xl-3">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    Recent transactions
                </h3>
                <div class="card-options">
                    <a href="javascript:void0;" class="btn btn-sm btn-primary">View All</a>
                </div>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <div class="d-flex">
                        <div class="Recent-transactions-img brround bg-primary text-white font-weight-normal1">AL</div>
                        <div class="">
                            <a href="javascript:void0;" class="font-weight-normal1 mb-1 fs-13">Alberto</a>
                            <p class="text-muted fs-11">2 hours ago</p>
                        </div>
                        <span class="text-success font-weight-normal fs-12 ms-auto">&plus;$543.98</span>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex">
                        <div class="Recent-transactions-img brround bg-danger text-white font-weight-normal1">HE</div>
                        <div class="">
                            <a href="javascript:void0;" class="font-weight-normal1 mb-1 fs-13">Herrouchi</a>
                            <p class="text-muted fs-11">6 hours ago</p>
                        </div>
                        <span class="text-success font-weight-normal fs-12 ms-auto">&plus;$534.87</span>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex">
                        <div class="Recent-transactions-img brround bg-warning text-white font-weight-normal1 text-center">AK</div>
                        <div class="">
                            <a href="javascript:void0;" class="font-weight-normal1 mb-1 fs-13">Alexandra Kiso</a>
                            <p class="text-muted fs-11">2 days ago</p>
                        </div>
                        <span class="text-danger font-weight-normal fs-12 ms-auto">&minus;$132</span>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex">
                        <div class="Recent-transactions-img brround bg-teal text-white font-weight-normal1 text-center">KW</div>
                        <div class="">
                            <a href="javascript:void0;" class="font-weight-normal1 mb-1 fs-13">kate william</a>
                            <p class="text-muted fs-11">1 hours ago</p>
                        </div>
                        <span class="text-success font-weight-normal fs-12 ms-auto">&plus;$153.45</span>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="d-flex">
                        <div class="Recent-transactions-img brround bg-success text-white font-weight-normal1 text-center">JP</div>
                        <div class="">
                            <a href="javascript:void0;" class="font-weight-normal1 mb-1 fs-13">Jean Powell</a>
                            <p class="text-muted fs-11">5 hours ago</p>
                        </div>
                        <span class="text-danger font-weight-normal fs-12 ms-auto">&minus;$324.78</span>
                    </div>
                </div>
                <div class="">
                    <div class="d-flex">
                        <div class="Recent-transactions-img brround bg-secondary text-white font-weight-normal1 text-center">HC</div>
                        <div class="">
                            <a href="javascript:void0;" class="font-weight-normal1 mb-1 fs-13">Hakino Chen</a>
                            <p class="text-muted fs-11">21 hours ago</p>
                        </div>
                        <span class="text-danger font-weight-normal fs-12 ms-auto">&minus;$3277.78</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-3">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Revenue Of This Month</h3>
            </div>
            <div class="card-body">
                <div class="mb-6">
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="text-muted fs-13 mb-1">Monthly Profit</span>
                    </div>
                    <div class="d-flex justify-content-between mb-1">
                        <span class="fs-16 font-weight-normal1">$25,854</span>
                        <span class="text-muted fs-12"><i class="mdi mdi-arrow-up-thick text-success"></i> 40% increase</span>
                    </div>
                    <div class="progress progress-sm">
                        <div class="progress-bar bg-primary progress-bar-striped progress-bar-animated" style="width: 50%"></div>
                    </div>
                </div>
                <div class="mb-6">
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="text-muted fs-13 mb-1">Monthly Orders</span>
                    </div>
                    <div class="d-flex justify-content-between mb-1">
                        <span class="fs-16 font-weight-normal1">8,654</span>
                        <span class="text-muted fs-12"><i class="mdi mdi-arrow-up-thick text-success"></i> 62% increase</span>
                    </div>
                    <div class="progress progress-sm">
                        <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width: 80%"></div>
                    </div>
                </div>
                <div class="mb-6">
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="text-muted fs-13 mb-1">Monthly Revenue</span>
                    </div>
                    <div class="d-flex justify-content-between mb-1">
                        <span class="fs-16 font-weight-normal1">$98,654</span>
                        <span class="text-muted  fs-12"><i class="mdi mdi-arrow-up-thick text-success"></i> 38% increase</span>
                    </div>
                    <div class="progress progress-sm">
                        <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width: 60%"></div>
                    </div>
                </div>
                <div>
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="text-muted fs-13 mb-1">Monthly Expenses</span>
                    </div>
                    <div class="d-flex justify-content-between mb-1">
                        <span class="fs-16 font-weight-normal1">$54,456</span>
                        <span class="text-muted fs-12"><i class="mdi mdi-arrow-down-thick text-danger"></i> 20% decreased</span>
                    </div>
                    <div class="progress progress-sm">
                        <div class="progress-bar bg-pink progress-bar-striped progress-bar-animated" style="width: 70%"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Row-3 -->

<!--Row-->
<div class="row">
    <div class="col-xl-12 col-lg-12 col-md-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Invoice Summary</h3>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered card-table table-vcenter text-nowrap" id="datatable">
                        <thead>
                            <tr>
                                <th>Invoice ID</th>
                                <th scope="row">Customer Name</th>
                                <th>Customer ID</th>
                                <th>Date</th>
                                <th>Order Value</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a class="font-weight-normal1" href="">002584611</a>
                                </td>
                                <td>Joan Powell</td>
                                <td>JoanPowell@gmail.com</td>
                                <td>08/3/2021</td>
                                <td>$450,870</td>
                                <td>
                                    <span class="badge bg-success-light border-success fs-11">Paid</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a class="font-weight-normal1" href="">004641215</a>
                                </td>
                                <td>Gavin Gibson</td>
                                <td>JoanPowell@gmail.com</td>
                                <td>08/3/2021</td>
                                <td>$230,540</td>
                                <td>
                                    <span class="badge bg-danger-light border-danger fs-11">Failed</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a class="font-weight-normal1" href="">004655445</a>
                                </td>
                                <td>Julian Kerr</td>
                                <td>JoanPowell@gmail.com</td>
                                <td>08/3/2021</td>
                                <td>$55,300</td>
                                <td>
                                    <span class="badge bg-success-light border-success fs-11">Paid</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a class="font-weight-normal1" href="">004343455</a>
                                </td>
                                <td>Cedric Kelly</td>
                                <td>JoanPowell@gmail.com</td>
                                <td>08/3/2021</td>
                                <td>$234,100</td>
                                <td>
                                    <span class="badge bg-success-light border-success fs-11">Paid</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a class="font-weight-normal1" href="">004651234</a>
                                </td>
                                <td>Junior Sam</td>
                                <td>JoanPowell@gmail.com</td>
                                <td>08/3/2021</td>
                                <td>$43,198</td>
                                <td>
                                    <span class="badge bg-success-light border-success fs-11">Paid</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a class="font-weight-normal1" href="">00434567</a>
                                </td>
                                <td>Gabriel</td>
                                <td>JoanPowell@gmail.com</td>
                                <td>08/3/2021</td>
                                <td>$230,540</td>
                                <td>
                                    <span class="badge bg-warning-light border-warning fs-11">Pending</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a class="font-weight-normal1" href="">004345623</a>
                                </td>
                                <td>Zach efron</td>
                                <td>JoanPowell@gmail.com</td>
                                <td>08/3/2021</td>
                                <td>$55,300</td>
                                <td>
                                    <span class="badge bg-success-light border-success fs-11">Paid</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a class="font-weight-normal1" href="">004345234</a>
                                </td>
                                <td>Mona matty</td>
                                <td>JoanPowell@gmail.com</td>
                                <td>08/3/2021</td>
                                <td>$234,100</td>
                                <td>
                                    <span class="badge bg-success-light border-success fs-11">Paid</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a class="font-weight-normal1" href="">004567455</a>
                                </td>
                                <td>Samantha May</td>
                                <td>JoanPowell@gmail.com</td>
                                <td>08/3/2021</td>
                                <td>$43,198</td>
                                <td>
                                    <span class="badge bg-warning-light border-warning fs-11">Pending</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
