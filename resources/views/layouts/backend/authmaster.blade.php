
<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>

		<!-- Meta data -->
		<meta charset="UTF-8">
		<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
		<meta content="{{config('app.name')}}" name="description">
		<meta content="{{config('app.name')}}" name="author">
		<meta name="keywords" content="{{config('app.name')}}">

		<!-- Title -->
		<title> | {{config('app.name')}}</title>

		<!--Favicon -->
		<link rel="icon" href="{{asset('/backend/assets/images/brand/favicon.ico')}}" type="image/x-icon"/>

		<!--Bootstrap css -->
		<link href="{{asset('/backend/assets/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">

		<!-- Style css -->
		<link href="{{asset('/backend/assets/css/style.css')}}" rel="stylesheet" />
		<link href="{{asset('/backend/assets/css/dark.css')}}" rel="stylesheet" />
		<link href="{{asset('/backend/assets/css/skin-modes.css')}}" rel="stylesheet" />

		<!-- Animate css -->
		<link href="{{asset('/backend/assets/css/animated.css')}}" rel="stylesheet" />

		<!---Icons css-->
		<link href="{{asset('/backend/assets/css/icons.css')}}" rel="stylesheet" />

	    <!-- Color Skin css -->
		<link id="theme" href="{{asset('/backend/assets/colors/color1.css')}}" rel="stylesheet" type="text/css"/>

	</head>

	<body class="register1">
		<div class="page">
			<div class="page-single">
				<div class="container">
                    @yield('content')
				</div>
			</div>
		</div>

		<!-- Jquery js-->
		<script src="../../assets/js/jquery.min.js"></script>

		<!-- Bootstrap5 js-->
		<script src="../../assets/plugins/bootstrap/popper.min.js"></script>
		<script src="../../assets/plugins/bootstrap/js/bootstrap.min.js"></script>

		<!--Othercharts js-->
		<script src="../../assets/plugins/othercharts/jquery.sparkline.min.js"></script>

		<!-- Circle-progress js-->
		<script src="../../assets/js/circle-progress.min.js"></script>

		<!-- Jquery-rating js-->
		<script src="../../assets/plugins/rating/jquery.rating-stars.js"></script>

		<!-- Show Password -->
		<script src="../../assets/js/bootstrap-show-password.min.js"></script>

		<!-- Custom js-->
		<script src="../../assets/js/custom.js"></script>

	</body>
</html>
