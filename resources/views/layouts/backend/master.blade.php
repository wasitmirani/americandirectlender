
<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>

		<!-- Meta data -->
		<meta charset="UTF-8">
		<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
		<meta content="Azea - Admin Panel HTML template" name="description">
		<meta content="Spruko Private Limited" name="author">
		<meta name="keywords" content="admin, admin template, dashboard, admin dashboard, responsive, bootstrap, bootstrap 5, admin theme, admin themes, bootstrap admin template, scss, ui, crm, modern, flat">

		<!-- Title -->
		<title>Azea - Admin Panel HTML template</title>

		<!--Favicon -->
		<link rel="icon" href="{{ asset('backend/assets/images/brand/favicon.ico') }}" type="image/x-icon">

		<!--Bootstrap css -->
		<link href="{{ asset('backend/assets/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">

		<!-- Style css -->
		<link href="{{ asset('backend/assets/css/style.css') }}" rel="stylesheet">
		<link href="{{ asset('backend/assets/css/dark.css') }}" rel="stylesheet">
		<link href="{{ asset('backend/assets/css/skin-modes.css') }}" rel="stylesheet">

		<!-- Animate css -->
		<link href="{{ asset('backend/assets/css/animated.css') }}" rel="stylesheet">

		<!--Sidemenu css -->
       <link href="{{ asset('backend/assets/css/sidemenu.css') }}" rel="stylesheet" id="sidemenu-theme">

		<!-- P-scroll bar css-->
		<link href="{{ asset('backend/assets/plugins/p-scrollbar/p-scrollbar.css') }}" rel="stylesheet">

		<!---Icons css-->
		<link href="{{ asset('backend/assets/css/icons.css') }}" rel="stylesheet">

		<!-- Simplebar css -->
		<link rel="stylesheet" href="{{ asset('backend/') }}assets/plugins/simplebar/css/simplebar.css">

		<!-- INTERNAL Morris Charts css -->
		<link href="{{ asset('backend/assets/plugins/morris/morris.css') }}" rel="stylesheet">

		<!-- INTERNAL Select2 css -->
		<link href="{{ asset('backend/assets/plugins/select2/select2.min.css') }}" rel="stylesheet">

		<!-- Data table css -->
		<link href="{{ asset('backend/assets/plugins/datatables/DataTables/css/dataTables.bootstrap4.min.css') }}" rel="stylesheet">
		<link href="{{ asset('backend/assets/plugins/datatables/Responsive/css/responsive.bootstrap4.min.css') }}" rel="stylesheet">

	    <!-- Color Skin css -->
		<link id="theme" href="{{ asset('backend/assets/colors/color1.css') }}" rel="stylesheet" type="text/css">

	    <!-- INTERNAL Switcher css -->
		<link href="{{ asset('backend/assets/switcher/css/switcher.css') }}" rel="stylesheet">
		<link href="{{ asset('backend/assets/switcher/demo.css') }}" rel="stylesheet">
	</head>

	<body class="app sidebar-mini">


		<!-- Switcher -->
		<div class="switcher-wrapper">
			<div class="demo_changer ">
				<div class="form_holder sidebar-right1">
					<div class="row">
						<div class="predefined_styles">
							<div class="swichermainleft text-center">
								<div class="p-3 d-grid gap-2">
									<a href="../../../index.html" class="btn ripple btn-primary mt-0">View Demo</a>
									<a href="../../../../../user/spruko/portfolio.html" class="btn ripple btn-secondary">Buy Now</a>
									<a href="../../../../../user/spruko/portfolio.html" class="btn ripple btn-red">Our Portfolio</a>
								</div>
							</div>
							<div class="swichermainleft mb-4">
								<h4>Navigation Style</h4>
								<div class="ps-3 pe-3 pt-3 d-grid gap-2">
									<a class="btn btn-success " href="index.html"> Leftmenu</a>
									<a class="btn btn-danger" href="../../LTR/Horizantal-Light/index.html"> Horizontal </a>
								</div>
							</div>
							<div class="swichermainleft">
								<h4>Theme Layout</h4>
								<div class="switch_section d-flex my-4">
									<ul class="switch-buttons row">
										<li class="col-md-6 mb-0">
											<button type="button" id="background-left1" class="bg-left1 wscolorcode1 button-image"></button>
											<span class="d-block">Light Theme</span>
										</li>
										<li class="col-md-6 mb-0">
											<button type="button" id="background-left2" class="bg-left2 wscolorcode1 button-image"></button>
											<span class="d-block">Dark Theme</span>
										</li>
									</ul>
								</div>
							</div>
							<div class="swichermainleft">
								<h4>Header Styles Mode</h4>
								<div class="switch_section d-flex my-4">
									<ul class="switch-buttons row">
										<li class="col-md-6 light-bg">
											<button type="button" id="background1" class="bg1 wscolorcode1 button-image"></button>
											<span class="d-block">Light Header</span>
										</li>
										<li class="col-md-6">
											<button type="button" id="background2" class="bg2 wscolorcode1 button-image"></button>
											<span class="d-block">Color Header</span>
										</li>
										<li class="col-md-6 d-block mx-auto dark-bg">
											<button type="button" id="background3" class="bg3 wscolorcode1 button-image"></button>
											<span class="d-block">Dark Header</span>
										</li>
										<li class="col-md-6 d-block mx-auto">
											<button type="button" id="background11" class="bg8 wscolorcode1 button-image"></button>
											<span class="d-block">Gradient Header</span>
										</li>
									</ul>
								</div>
							</div>
							<div class="swichermainleft">
								<h4>Leftmenu Styles Mode</h4>
								<div class="switch_section d-flex my-4">
									<ul class="switch-buttons row">
										<li class="col-md-6 mb-4">
											<button type="button" id="background4" class="bg4 wscolorcode1 button-image"></button>
											<span class="d-block">Light Menu</span>
										</li>
										<li class="col-md-6 mb-4">
											<button type="button" id="background5" class="bg5 wscolorcode1 button-image"></button>
											<span class="d-block">Color Menu</span>
										</li>
										<li class="col-md-6 mb-0 d-block mx-auto dark-bgmenu">
											<button type="button" id="background6" class="bg6 wscolorcode1 button-image"></button>
											<span class="d-block">Dark Menu</span>
										</li>
										<li class="col-md-6 mb-0 d-block mx-auto">
											<button type="button" id="background10" class="bg7 wscolorcode1 button-image"></button>
											<span class="d-block">Gradient Menu</span>
										</li>
									</ul>
								</div>
							</div>
							<div class="swichermainleft">
								<h4>Layout-width Styles Mode</h4>
								<div class="switch_section d-flex my-4">
									<ul class="switch-buttons row">
										<li class="col-md-6 mb-4">
											<button type="button" id="background14" class="bg-layf wscolorcode1 button-image"></button>
											<span class="d-block">Full-Width</span>
										</li>
										<li class="col-md-6 mb-4">
											<button type="button" id="background15" class="bg-laybx wscolorcode1 button-image"></button>
											<span class="d-block">Boxed</span>
										</li>
									</ul>
								</div>
							</div>
							<div class="swichermainleft">
								<h4>Side-menu layout Styles Mode</h4>
								<div class="switch_section d-flex my-4">
									<ul class="switch-buttons row">
										<li class="col-md-6 mb-4">
											<button type="button" id="background18" class="bg-sided button-image wscolorcode1 default-menu" data-sidetheme="../../assets/css/sidemenu.css"></button>
											<span class="d-block">Default</span>
										</li>
										<li class="col-md-6 mb-4">
											<button type="button" id="background19" class="bg-sideictxt button-image wscolorcode1 icontext-menu" data-sidetheme="../../assets/css/sidemenu-icontext.css"></button>
											<span class="d-block">Icon-with Text</span>
										</li>
										<li class="col-md-6 d-block mx-auto">
											<button type="button" id="background20" class="bg-sideicon button-image wscolorcode1 sideicon-menu" data-sidetheme="../../assets/css/sidemenu-icon.css"></button>
											<span class="d-block">Icon</span>
										</li>
									</ul>
								</div>
							</div>
							<div class="swichermainleft">
								<h4>Layout Positions Mode</h4>
								<div class="switch_section d-flex my-4">
									<ul class="switch-buttons row">
										<li class="col-md-6 mb-4">
											<button type="button" id="background16" class="bg-left1 wscolorcode1 button-image"></button>
											<span class="d-block">Fixed</span>
										</li>
										<li class="col-md-6 mb-4">
											<button type="button" id="background17" class="bg-left1 wscolorcode1 button-image"></button>
											<span class="d-block">Scrollable</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Switcher -->

		<!---Global-loader-->
		<div id="global-loader">
			<img src="{{ asset('backend/assets/images/svgs/loader.svg') }}" alt="loader">
		</div>
		<!--- End Global-loader-->

		<!-- Page -->
		<div class="page">
			<div class="page-main">

				<!--aside open-->
				@include('layouts.backend.components.sidebar')
				<!--aside closed-->

				<!-- App-Content -->
				<div class="app-content main-content">
					<div class="side-app">

						<!--app header-->
						@include('layouts.backend.components.navbar')
						<!--/app header-->

						<!--Page header-->
						@include('layouts.backend.components.header')
						<!--End Page header-->

						<!-- Row-1 -->
					@yield('content')
					</div>
				</div>
				<!-- End app-content-->


				<!--Footer-->
				@include('layouts.backend.components.footer')
				<!-- End Footer-->
			</div>
		</div>
		<!-- End Page -->

		<!-- Back to top -->
		<a href="#top" id="back-to-top"><i class="fe fe-chevron-up"></i></a>

		<!-- Jquery js-->
		<script src="{{ asset('backend/assets/js/jquery.min.js') }}"></script>

		<!-- Bootstrap5 js-->
		<script src="{{ asset('backend/assets/plugins/bootstrap/popper.min.js') }}"></script>
		<script src="{{ asset('backend/assets/plugins/bootstrap/js/bootstrap.min.js') }}"></script>

		<!--Othercharts js-->
		<script src="{{ asset('backend/assets/plugins/othercharts/jquery.sparkline.min.js') }}"></script>

		<!-- Circle-progress js-->
		<script src="{{ asset('backend/assets/js/circle-progress.min.js') }}"></script>

		<!-- Jquery-rating js-->
		<script src="{{ asset('backend/assets/plugins/rating/jquery.rating-stars.js') }}"></script>

		<!--Sidemenu js-->
		<script src="{{ asset('backend/assets/plugins/sidemenu/sidemenu.js') }}"></script>

		<!-- P-scroll js-->
		<script src="{{ asset('backend/assets/plugins/p-scrollbar/p-scrollbar.js') }}"></script>
		<script src="{{ asset('backend/assets/plugins/p-scrollbar/p-scroll1.js') }}"></script>
		<script src="{{ asset('backend/assets/plugins/p-scrollbar/p-scroll.js') }}"></script>

		<!--INTERNAL Flot Charts js-->
		<script src="{{ asset('backend/assets/plugins/flot/jquery.flot.js') }}"></script>
		<script src="{{ asset('backend/assets/plugins/flot/jquery.flot.fillbetween.js') }}"></script>
		<script src="{{ asset('backend/assets/plugins/flot/jquery.flot.pie.js') }}"></script>
		<script src="{{ asset('backend/assets/js/dashboard.sampledata.js') }}"></script>
		<script src="{{ asset('backend/assets/js/chart.flot.sampledata.js') }}"></script>

		<!-- INTERNAL Chart js -->
		<script src="{{ asset('backend/assets/plugins/chart/chart.bundle.js') }}"></script>
		<script src="{{ asset('backend/assets/plugins/chart/utils.js') }}"></script>

		<!-- INTERNAL Apexchart js -->
		<script src="{{ asset('backend/assets/js/apexcharts.js') }}"></script>

		<!--INTERNAL Moment js-->
		<script src="{{ asset('backend/assets/plugins/moment/moment.js') }}"></script>

		<!--INTERNAL Index js-->
		<script src="{{ asset('backend/assets/js/index1.js') }}"></script>

		<!-- INTERNAL Data tables -->
		<script src="{{ asset('backend/assets/plugins/datatables/DataTables/js/jquery.dataTables.js') }}"></script>
		<script src="{{ asset('backend/assets/plugins/datatables/DataTables/js/dataTables.bootstrap5.js') }}"></script>
		<script src="{{ asset('backend/assets/plugins/datatables/Responsive/js/dataTables.responsive.min.js') }}"></script>
		<script src="{{ asset('backend/assets/plugins/datatables/Responsive/js/responsive.bootstrap5.min.js') }}"></script>

		<!-- INTERNAL Select2 js -->
		<script src="{{ asset('backend/assets/plugins/select2/select2.full.min.js') }}"></script>
		<script src="{{ asset('backend/assets/js/select2.js') }}"></script>

		<!-- Simplebar JS -->
		<script src="{{ asset('backend/assets/plugins/simplebar/js/simplebar.min.js') }}"></script>

		<!-- Rounded bar chart js-->
		<script src="{{ asset('backend/assets/js/rounded-barchart.js') }}"></script>

		<!-- Custom js-->
		<script src="{{ asset('backend/assets/js/custom.js') }}"></script>

		<!-- Switcher js -->
		<script src="{{ asset('backend/assets/switcher/js/switcher.js') }}"></script>

	</body>
</html>
