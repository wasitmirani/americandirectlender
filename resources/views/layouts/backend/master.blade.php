
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
		<title>{{config('app.name')}} - Admin Panel </title>

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


		<!-- Data table css -->


	    <!-- Color Skin css -->
		<link id="theme" href="{{ asset('backend/assets/colors/color1.css') }}" rel="stylesheet" type="text/css">

	    <!-- INTERNAL Switcher css -->
		<link href="{{ asset('backend/assets/switcher/css/switcher.css') }}" rel="stylesheet">
		<link href="{{ asset('backend/assets/switcher/demo.css') }}" rel="stylesheet">
        @stack('styles')
	</head>

	<body class="app sidebar-mini dark-menu">



		<!-- Switcher -->
            @include('layouts.backend.components.switcher')
		<!-- End Switcher -->

		<!---Global-loader-->
		<div id="global-loader">
			<img src="{{ asset('backend/assets/images/svgs/loader.svg') }}" alt="loader">
		</div>
		<!--- End Global-loader-->
        <div id="app">

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
        </div>
		<!-- Back to top -->
		<a href="#top" id="back-to-top"><i class="fe fe-chevron-up"></i></a>

		<!-- Jquery js-->
		<script src="{{ asset('backend/assets/js/jquery.min.js') }}"></script>

		<!-- Bootstrap5 js-->
		<script src="{{ asset('backend/assets/plugins/bootstrap/popper.min.js') }}"></script>
		<script src="{{ asset('backend/assets/plugins/bootstrap/js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('js/app.js') }}" ></script>
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


		<!-- INTERNAL Select2 js -->


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
