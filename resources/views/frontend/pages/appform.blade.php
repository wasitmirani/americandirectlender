@extends('layouts.frontend.master')
@section('content')
<section class="re-banner">
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
              <div class="carousel-item active">
                <img src="/assets/images/re.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h2>Refinancing</h2>
                  <p>Refinancing is often used to lower your interest rate on your property. If rates have dropped since you last financed your home, you may want to consider refinancing.</p>
                  <!-- <a href="#">Apply For Home Purchase</a> -->
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>

</section>
<div class="container">
    <h2>App Form</h2>
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
