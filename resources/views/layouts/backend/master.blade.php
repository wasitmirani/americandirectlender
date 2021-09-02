
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from admin.pixelstrap.com/viho/theme/dashboard-02.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 02 Sep 2021 16:33:46 GMT -->
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="viho admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords" content="admin template, viho admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="pixelstrap">
    <link rel="icon" href="../assets/images/favicon.png" type="image/x-icon">
    <link rel="shortcut icon" href="../assets/images/favicon.png" type="image/x-icon">
    <title>{{config('app.name')}} Admin </title>
    <!-- Google font-->
    <link rel="preconnect" href="https://fonts.gstatic.com/">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
    <!-- Font Awesome-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/fontawesome.css')}}">
    <!-- ico-font-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/icofont.css')}}">
    <!-- Themify icon-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/themify.css')}}">
    <!-- Flag icon-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/flag-icon.css')}}">
    <!-- Feather icon-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/feather-icon.css')}}">
    <!-- Plugins css start-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/animate.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/chartist.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/owlcarousel.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/prism.css')}}">
    <!-- Plugins css Ends-->
    <!-- Bootstrap css-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/bootstrap.css')}}">
    <!-- App css-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/style.css')}}">
    <link id="color" rel="stylesheet" href="{{asset('assets/css/color-1.css')}}" media="screen">
    <!-- Responsive css-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/responsive.css')}}">
  </head>
  <body>
  <!-- Loader starts-->
  <div class="loader-wrapper">
    <div class="theme-loader">
      <div class="loader-p"></div>
    </div>
  </div>
  <!-- Loader ends-->
  <!-- page-wrapper Start-->
  <div class="page-wrapper compact-wrapper" id="pageWrapper">
    <!-- Page Header Start-->
       @include('layouts.backend.components.header')
    <!-- Page Header Ends                              -->
    <!-- Page Body Start-->
    <div class="page-body-wrapper sidebar-icon">
      <!-- Page Sidebar Start-->
      @include('layouts.backend.components.sidebar')

      <!-- Page Sidebar Ends-->
      <div class="page-body dashboard-2-main">
        <!-- Container-fluid starts-->
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 box-col-12 des-xl-100 invoice-sec">
              <div class="card">
                <div class="card-header">
                  <div class="header-top d-sm-flex justify-content-between align-items-center">
                    <h5>Invoice Overview    </h5>
                    <div class="center-content">
                      <p class="d-sm-flex align-items-center"><span class="m-r-10">$5,56548k</span><i class="toprightarrow-primary fa fa-arrow-up m-r-10"></i>94% More Than Last Year</p>
                    </div>
                    <div class="setting-list">
                      <ul class="list-unstyled setting-option">
                        <li>
                          <div class="setting-primary"><i class="icon-settings"></i></div>
                        </li>
                        <li><i class="view-html fa fa-code font-primary"></i></li>
                        <li><i class="icofont icofont-maximize full-card font-primary"></i></li>
                        <li><i class="icofont icofont-minus minimize-card font-primary"></i></li>
                        <li><i class="icofont icofont-refresh reload-card font-primary"></i></li>
                        <li><i class="icofont icofont-error close-card font-primary"> </i></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body p-0">
                  <div id="timeline-chart"></div>
                  <div class="code-box-copy">
                    <button class="code-box-copy__btn btn-clipboard" data-clipboard-target="#invoice-overview" title="Copy"><i class="icofont icofont-copy-alt"></i></button>
                    <pre><code class="language-html" id="invoice-overview"></code></pre>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 box-col-12 des-xl-100 top-dealer-sec">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="header-top d-sm-flex justify-content-between align-items-center">
                    <h5>Top Dealer</h5>
                    <div class="center-content">
                      <p class="d-sm-flex align-items-center"><span class="m-r-10">845 Dealer</span><i class="toprightarrow-primary fa fa-arrow-up m-r-10"></i>86% More Than Last Year</p>
                    </div>
                    <div class="setting-list">
                      <ul class="list-unstyled setting-option">
                        <li>
                          <div class="setting-primary"><i class="icon-settings"></i></div>
                        </li>
                        <li><i class="view-html fa fa-code font-primary"></i></li>
                        <li><i class="icofont icofont-maximize full-card font-primary"></i></li>
                        <li><i class="icofont icofont-minus minimize-card font-primary"></i></li>
                        <li><i class="icofont icofont-refresh reload-card font-primary"></i></li>
                        <li><i class="icofont icofont-error close-card font-primary"> </i></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="owl-carousel owl-theme" id="owl-carousel-14">
                    <div class="item">
                      <div class="row">
                        <div class="col-12">
                          <div class="owl-carousel-16 owl-carousel owl-theme">
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/1.png" alt="...">
                                  <h6>Thompson lee</h6>
                                  <p>Malasiya</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/8.png" alt="...">
                                  <h6>Johnson allon</h6>
                                  <p>Bangladesh</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/3.png" alt="...">
                                  <h6>williams reed</h6>
                                  <p>Belgium</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/4.png" alt="...">
                                  <h6> Jones king</h6>
                                  <p>Canada</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="owl-carousel-16 owl-carousel owl-theme">
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/5.png" alt="...">
                                  <h6>Brown davis</h6>
                                  <p>China</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/6.png" alt="...">
                                  <h6>Wilson Hill</h6>
                                  <p>Denmark</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/7.png" alt="...">
                                  <h6>Anderson ban</h6>
                                  <p>Japan</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/8.png" alt="...">
                                  <h6>Thompson lee</h6>
                                  <p>Malasiya</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="row">
                        <div class="col-12">
                          <div class="owl-carousel-16 owl-carousel owl-theme">
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/1.png" alt="...">
                                  <h6>Thompson lee</h6>
                                  <p>Malasiya</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/8.png" alt="...">
                                  <h6>Johnson allon</h6>
                                  <p>Bangladesh</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/3.png" alt="...">
                                  <h6>williams reed</h6>
                                  <p>Belgium</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/4.png" alt="...">
                                  <h6> Jones king</h6>
                                  <p>Canada</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="owl-carousel-16 owl-carousel owl-theme">
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/5.png" alt="...">
                                  <h6>Brown davis</h6>
                                  <p>China</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/6.png" alt="...">
                                  <h6>Wilson Hill</h6>
                                  <p>Denmark</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/7.png" alt="...">
                                  <h6>Anderson ban</h6>
                                  <p>Japan</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/8.png" alt="...">
                                  <h6>Thompson lee</h6>
                                  <p>Malasiya</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="row">
                        <div class="col-12">
                          <div class="owl-carousel-16 owl-carousel owl-theme">
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/1.png" alt="...">
                                  <h6>Thompson lee</h6>
                                  <p>Malasiya</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/8.png" alt="...">
                                  <h6>Johnson allon</h6>
                                  <p>Bangladesh</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/3.png" alt="...">
                                  <h6>williams reed</h6>
                                  <p>Belgium</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/4.png" alt="...">
                                  <h6> Jones king</h6>
                                  <p>Canada</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="owl-carousel-16 owl-carousel owl-theme">
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/5.png" alt="...">
                                  <h6>Brown davis</h6>
                                  <p>China</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/6.png" alt="...">
                                  <h6>Wilson Hill</h6>
                                  <p>Denmark</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/7.png" alt="...">
                                  <h6>Anderson ban</h6>
                                  <p>Japan</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/8.png" alt="...">
                                  <h6>Thompson lee</h6>
                                  <p>Malasiya</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="row">
                        <div class="col-12">
                          <div class="owl-carousel-16 owl-carousel owl-theme">
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/1.png" alt="...">
                                  <h6>Thompson lee</h6>
                                  <p>Malasiya</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/8.png" alt="...">
                                  <h6>Johnson allon</h6>
                                  <p>Bangladesh</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/3.png" alt="...">
                                  <h6>williams reed</h6>
                                  <p>Belgium</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/4.png" alt="...">
                                  <h6> Jones king</h6>
                                  <p>Canada</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="owl-carousel-16 owl-carousel owl-theme">
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/5.png" alt="...">
                                  <h6>Brown davis</h6>
                                  <p>China</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/6.png" alt="...">
                                  <h6>Wilson Hill</h6>
                                  <p>Denmark</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/7.png" alt="...">
                                  <h6>Anderson ban</h6>
                                  <p>Japan</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="card">
                                <div class="top-dealerbox text-center"><img class="card-img-top" src="../assets/images/dashboard-2/8.png" alt="...">
                                  <h6>Thompson lee</h6>
                                  <p>Malasiya</p><a class="btn btn-rounded" href="social-app.html">View More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="code-box-copy">
                    <button class="code-box-copy__btn btn-clipboard" data-clipboard-target="#top-dealer" title="Copy"><i class="icofont icofont-copy-alt"></i></button>

                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-md- des-xl-100 box-col-12">
              <div class="row">
                <div class="col-xl-3 col-sm-6 box-col-3 chart_data_right">
                  <div class="card income-card card-secondary">
                    <div class="card-body align-items-center">
                      <div class="round-progress knob-block text-center">
                        <div class="progress-circle">
                          <input class="knob1" data-width="10" data-height="70" data-thickness=".3" data-angleoffset="0" data-linecap="round" data-fgcolor="#ba895d" data-bgcolor="#e0e9ea" value="60">
                        </div>
                        <h5>$9,84,235</h5>
                        <p>Our Annual Income</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 box-col-3 chart_data_right second">
                  <div class="card income-card card-primary">
                    <div class="card-body">
                      <div class="round-progress knob-block text-center">
                        <div class="progress-circle">
                          <input class="knob1" data-width="50" data-height="70" data-thickness=".3" data-fgcolor="#24695c" data-linecap="round" data-angleoffset="0" value="60">
                        </div>
                        <h5>$4,55,462</h5>
                        <p>Our Annual Income</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 box-col-6 top-sell-sec">
                  <div class="card">
                    <div class="card-header pb-0">
                      <div class="header-top d-sm-flex justify-content-between align-items-center">
                        <h5>Top Selling Product</h5>
                        <div class="center-content">
                          <ul class="week-date">
                            <li class="font-primary">Today</li>
                            <li>Month</li>
                          </ul>
                        </div>
                        <div class="setting-list">
                          <ul class="list-unstyled setting-option">
                            <li>
                              <div class="setting-primary"><i class="icon-settings"></i></div>
                            </li>
                            <li><i class="view-html fa fa-code font-primary"></i></li>
                            <li><i class="icofont icofont-maximize full-card font-primary"></i></li>
                            <li><i class="icofont icofont-minus minimize-card font-primary"></i></li>
                            <li><i class="icofont icofont-refresh reload-card font-primary"></i></li>
                            <li><i class="icofont icofont-error close-card font-primary"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="media"><img class="img-fluid" src="../assets/images/dashboard-2/9.png" alt="">
                        <div class="media-body"><a href="product-page.html">
                            <h6>Trending Nike shoes</h6></a>
                          <p>New Offer Only $126.00</p>
                          <ul class="rating-star">
                            <li>                                      <i class="fa fa-star"></i></li>
                            <li>                                      <i class="fa fa-star"></i></li>
                            <li>                                      <i class="fa fa-star"></i></li>
                            <li>                                      <i class="fa fa-star"></i></li>
                            <li>                                      <i class="fa fa-star"></i></li>
                          </ul>
                        </div><a class="btn btn-iconsolid" href="cart.html"><i class="icon-bag"></i></a>
                      </div>
                      <div class="code-box-copy">
                        <button class="code-box-copy__btn btn-clipboard" data-clipboard-target="#top-selling-product" title="Copy"><i class="icofont icofont-copy-alt"></i></button>
                        <pre><code class="language-html" id="top-selling-product"></code></pre>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 box-col-6">
                  <div class="card">
                    <div class="card-header">
                      <div class="header-top d-sm-flex justify-content-between align-items-center">
                        <h5>Total Selling</h5>
                        <div class="center-content">
                          <ul class="week-date">
                            <li class="font-primary">Today</li>
                            <li>Month                                     </li>
                          </ul>
                        </div>
                        <div class="setting-list">
                          <ul class="list-unstyled setting-option">
                            <li>
                              <div class="setting-primary"><i class="icon-settings"></i></div>
                            </li>
                            <li><i class="view-html fa fa-code font-primary"></i></li>
                            <li><i class="icofont icofont-maximize full-card font-primary"></i></li>
                            <li><i class="icofont icofont-minus minimize-card font-primary"></i></li>
                            <li><i class="icofont icofont-refresh reload-card font-primary"></i></li>
                            <li><i class="icofont icofont-error close-card font-primary"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="card-body chart-block p-0">
                      <div id="chart-dash-2-line"></div>
                      <div class="code-box-copy">
                        <button class="code-box-copy__btn btn-clipboard" data-clipboard-target="#total-selling" title="Copy"><i class="icofont icofont-copy-alt"></i></button>
                        <pre><code class="language-html" id="total-selling">       </code></pre>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 box-col-6">
                  <div class="card target-sec">
                    <div class="card-header pb-0">
                      <ul class="target-list">
                        <li>
                          <h6>Our Target</h6>
                          <p>Completed</p><span>$687.780</span>
                        </li>
                        <li class="bg-primary">
                          <h6>We Archieve</h6>
                          <p>Completed in After 3 Hours</p><span>$687.780k                                     </span>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body p-0">
                      <div class="traget-img-sec"></div>
                      <div class="animat-block"><i class="fa fa-times close1"></i><i class="fa fa-times close2"></i><i class="fa fa-times close3"></i>
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        <div class="circle3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 des-xl-50 box-col-12 activity-sec chart_data_left">
              <div class="card">
                <div class="card-header">
                  <div class="header-top d-sm-flex justify-content-between align-items-center">
                    <h5 class="m-0">Activity Timeline</h5>
                    <div class="center-content">
                      <p>Yearly User 24.65k</p>
                    </div>
                    <div class="setting-list">
                      <ul class="list-unstyled setting-option">
                        <li>
                          <div class="setting-primary"><i class="icon-settings"></i></div>
                        </li>
                        <li><i class="view-html fa fa-code font-primary"></i></li>
                        <li><i class="icofont icofont-maximize full-card font-primary"></i></li>
                        <li><i class="icofont icofont-minus minimize-card font-primary"></i></li>
                        <li><i class="icofont icofont-refresh reload-card font-primary"></i></li>
                        <li><i class="icofont icofont-error close-card font-primary"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="chart-main activity-timeline update-line">
                    <div class="media">
                      <div class="activity-line"></div>
                      <div class="activity-dot-primary"></div>
                      <div class="media-body d-block">
                        <h6> <span class="font-primary">20-04-2021</span>Today </h6>
                        <h5>Updated Product<i class="fa fa-circle circle-dot-primary pull-right"></i></h5>
                        <p>Quisque a consequat ante Sit amet magna at volutapt.</p>
                      </div>
                    </div>
                    <div class="media">
                      <div class="activity-dot-primary"></div>
                      <div class="media-body d-block">
                        <h6> <span class="font-primary">20-04-20121</span>Today<span class="badge pill-badge-primary m-l-10">new                                           </span></h6>
                        <h5>James just like your product     <i class="fa fa-circle circle-dot-primary pull-right"></i></h5>
                        <p>Quisque a consequat ante Sit amet magna at volutapt.</p>
                        <ul class="timeline-pro">
                          <li>                                            <img class="img-fluid" src="../assets/images/dashboard-2/11.png" alt="Product-1"></li>
                          <li>                                        <img class="img-fluid" src="../assets/images/dashboard-2/10.png" alt="Product-2"></li>
                        </ul>
                      </div>
                    </div>
                    <div class="media">
                      <div class="activity-dot-primary"></div>
                      <div class="media-body d-block">
                        <h6> <span class="font-primary">20-04-20121</span>Today</h6>
                        <h5>Jihan Doe just like your product<i class="fa fa-circle circle-dot-primary pull-right"></i></h5>
                        <p>Vestibulum nec mi suscipit, dapibus purus ane.</p>
                      </div>
                    </div>
                    <div class="media">
                      <div class="media-body d-block">
                        <div class="tomorrow-sec">
                          <p>Tomorrow</p>
                        </div>
                      </div>
                    </div>
                    <div class="media">
                      <div class="activity-dot-primary"></div>
                      <div class="media-body d-block">
                        <h6> <span class="font-primary">20-04-20121</span>Tomorrow</h6>
                        <h5>Today Total  Revenue<i class="fa fa-circle circle-dot-primary pull-right"></i></h5>
                        <p>Quisque a consequat ante Sit amet magna at volutapt.</p>
                      </div>
                    </div>
                    <div class="media">
                      <div class="activity-dot-primary"></div>
                      <div class="media-body d-block">
                        <div class="hospital-small-chart">
                          <div id="column-chart">                                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="code-box-copy">
                    <button class="code-box-copy__btn btn-clipboard" data-clipboard-target="#activity-timeline" title="Copy"><i class="icofont icofont-copy-alt"></i></button>
                    <pre><code class="language-html" id="activity-timeline">   </code></pre>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-12 des-xl-50 yearly-growth-sec">
              <div class="card">
                <div class="card-header">
                  <div class="header-top d-sm-flex justify-content-between align-items-center">
                    <h5>Yearly growth</h5>
                    <div class="center-content">
                      <p class="d-sm-flex align-items-center"><span class="m-r-10"><i class="toprightarrow-primary fa fa-arrow-up m-r-10"></i>$9657.55k </span>86% more then last year</p>
                    </div>
                    <div class="setting-list">
                      <ul class="list-unstyled setting-option">
                        <li>
                          <div class="setting-primary"><i class="icon-settings"></i></div>
                        </li>
                        <li><i class="view-html fa fa-code font-primary"></i></li>
                        <li><i class="icofont icofont-maximize full-card font-primary"></i></li>
                        <li><i class="icofont icofont-minus minimize-card font-primary"></i></li>
                        <li><i class="icofont icofont-refresh reload-card font-primary"></i></li>
                        <li><i class="icofont icofont-error close-card font-primary"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body p-0 chart-block">
                  <div id="chart-yearly-growth-dash-2"></div>
                  <div class="code-box-copy">
                    <button class="code-box-copy__btn btn-clipboard" data-clipboard-target="#yearly-growth" title="Copy"><i class="icofont icofont-copy-alt"></i></button>
                    <pre><code class="language-html" id="yearly-growth">       </code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Container-fluid Ends-->
      </div>
      <!-- footer start-->
      <footer class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 footer-copyright">
              <p class="mb-0">Copyright 2021-22 © viho All rights reserved.</p>
            </div>
            <div class="col-md-6">
              <p class="pull-right mb-0">Hand crafted & made with <i class="fa fa-heart font-secondary"></i></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
    <script src="{{asset('assets/js/jquery-3.5.1.min.js')}}"></script>
    <!-- feather icon js-->
    <script src="{{asset('assets/js/icons/feather-icon/feather.min.js')}}"></script>
    <script src="{{asset('assets/js/icons/feather-icon/feather-icon.js')}}"></script>
    <!-- Sidebar jquery-->
    <script src="{{asset('assets/js/sidebar-menu.js')}}"></script>
    <script src="{{asset('assets/js/config.js')}}"></script>
    <!-- Bootstrap js-->
    <script src="{{asset('assets/js/bootstrap/popper.min.js')}}"></script>
    <script src="{{asset('assets/js/bootstrap/bootstrap.min.js')}}"></script>
    <!-- Plugins JS start-->
    <script src="{{asset('assets/js/chart/chartjs/chart.min.js')}}"></script>
    <script src="{{asset('assets/js/chart/chartist/chartist.js')}}"></script>
    <script src="{{asset('assets/js/chart/chartist/chartist-plugin-tooltip.js')}}"></script>
    <script src="{{asset('assets/js/chart/knob/knob.min.js')}}"></script>
    <script src="{{asset('assets/js/chart/apex-chart/apex-chart.js')}}"></script>
    <script src="{{asset('assets/js/chart/apex-chart/stock-prices.js')}}"></script>
    <script src="{{asset('assets/js/prism/prism.min.js')}}"></script>
    <script src="{{asset('assets/js/clipboard/clipboard.min.js')}}"></script>
    <script src="{{asset('assets/js/counter/jquery.waypoints.min.js')}}"></script>
    <script src="{{asset('assets/js/counter/jquery.counterup.min.js')}}"></script>
    <script src="{{asset('assets/js/counter/counter-custom.js')}}"></script>
    <script src="{{asset('assets/js/custom-card/custom-card.js')}}"></script>
    <script src="{{asset('assets/js/owlcarousel/owl.carousel.js')}}"></script>
    <script src="{{asset('assets/js/owlcarousel/owl-custom.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/dashboard_2.js')}}"></script>
    <!-- Plugins JS Ends-->
    <!-- Theme js-->
    <script src="{{asset('assets/js/script.js')}}"></script>
    <script src="{{asset('assets/js/theme-customizer/customizer.js')}}"></script>
    <!-- login js-->
    <!-- Plugin used-->
  </body>


</html>
