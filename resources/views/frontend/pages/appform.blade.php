@extends('layouts.frontend.master')
@section('content')
<section class="banner">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              {{-- <div class="carousel-item active">
                <img src="{{asset('frontend/assets/images/banner.png')}}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h2><span>Feeling good</span> about making a difference.</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <a href="#">Apply For Home Purchase</a>
                </div>
              </div> --}}
              {{-- <div class="carousel-item">
                <img src="{{asset('frontend/assets/images/banner.png')}}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h2><span>Feeling good</span> about making a difference.</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <a href="#">Apply For Home Purchase</a>
                </div>
              </div> --}}
              {{-- <div class="carousel-item">
                <img src="{{asset('frontend/assets/images/banner.png')}}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h2><span>Feeling good</span> about making a difference.</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <a href="#">Apply For Home Purchase</a>
                </div>
              </div>
            </div> --}}
            {{-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button> --}}
          </div>
        </div>
      </div>
      <div class="social-links">
        <ul>
            <li><a href="https://facebook.com/">Facebook</a></li>
            <li><a href="https://twitter.com/">Twitter</a></li>
            <li><a href="https://instagram.com/">Instagram</a></li>

          </ul>
      </div>

         <div class="num-links">
        <ul>
            <h3>GET IN TOUCH!</h3>
            <li><a href="#">012 - 3456 - 7890</a></li>
            <li><a href="#">info@lorem.com</a></li>

          </ul>
      </div>
    </div>

<div class="container">
    <h5 class="center-content">App Form</h5>
    @if($errors->any())
    <ul>
  @foreach($errors->all() as $error)

        <li class="alert alert-danger"> {{ $error }}</li>

     @endforeach
    </ul>

    @endif
    @if (Session::has('message'))
    <p class="alert alert-danger">{{ Session::get('message') }}</p>
    @endif
    <form action="{{ route('store.app.form') }}" method="post" enctype="multipart/formater">
        @csrf
        <div class="form-group">
            <label for="email">Name:</label>
            <input type="text" class="form-control" id="email" placeholder="Enter Name" name="name">
          </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
      </div>
      <div class="form-group">
        <label for="email">City:</label>
        <input type="text" class="form-control" id="email" placeholder="Enter City" name="city">
      </div>

      <div class="form-group">
        <label for="pwd">Phone:</label>
        <input type="text" class="form-control" id="pwd" placeholder="Enter Phone" name="phone">
      </div>
      <div class="form-group">
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>

@endsection
@section('scripts')
<script>


</script>
@endsection
