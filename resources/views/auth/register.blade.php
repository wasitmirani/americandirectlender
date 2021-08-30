@extends('layouts.backend.authmaster')

@section('content')
<div class="row">
    <div class="col mx-auto">
        <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-12">
                <div class="row p-0 m-0">
                    <div class="col-lg-6 p-0">
                        <div class="text-justified text-white p-5 register-1 overflow-hidden">
                            <div class="custom-content">
                                <div class="mb-5 br-7">
                                    <img src="{{ asset('backend/assets/images/brand/logo1.png') }}" class="header-brand-img desktop-lgo" alt="Azea logo">
                                </div>
                                <div class="ms-5">
                                    <div class="fs-16 mb-6 font-weight-bold text-white">Welcome Back To American Direct Lender  !</div>
                                    <div class="mb-6 text-white-50">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem et esse in velit deleniti facilis quo, placeat totam aliquam veniam, quis rerum itaque, incidunt sequi quidem magni error est! Provident!
                                    </div>
                                    <h6 class="text-white-50">Already a member ?</h6>
                                    <a href="{{ route('login') }}" class="btn btn-white text-primary font-weight-bold ">Login Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-lg-6 p-0 mx-auto">
                    <div class="bg-white  text-dark br-7 br-tl-0 br-bl-0">
                        <div class="card-body">
                            <div class="text-center mb-3">
                                <h1 class="mb-2">Sign Up</h1>
                                <a href="javascript:void0;" class="">Create New Account</a>
                            </div>
                            <form class="mt-5"  method="POST" action="{{ route('register') }}">
                                {{ csrf_field() }}
                                <input type="hidden" name="role" value="user">
                                <div class="input-group mb-4">
                                        <div class="input-group-text">
                                            <i class="fe fe-user"></i>
                                        </div>
                                    <input type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                                </div>
                                <div class="input-group mb-4">
                                        <div class="input-group-text">
                                            <i class="fe fe-mail"></i>
                                        </div>
                                    <input id="email" type="email" class="form-control @error('name') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                                </div>
                                <div class="input-group mb-4">
                                    <div class="input-group" id="Password-toggle">
                                            <a href="" class="input-group-text">
                                            <i class="fe fe-eye" aria-hidden="true"></i>
                                            </a>
                                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                                    </div>
                                </div>
                                <div class="input-group mb-4">
                                    <div class="input-group" id="Password-toggle1">
                                        <a href="" class="input-group-text">
                                          <i class="fe fe-eye" aria-hidden="true"></i>
                                        </a>

                                            <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">

                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" />
                                        <span class="custom-control-label">I Agree For<a href="javascript:void0;" class="font-weight-bold">  Terms & Conditions.</a></span>
                                    </label>
                                </div>
                                <div class="form-group text-center mb-3">
                                    <button class="btn btn-primary btn-lg w-100 br-7">Sign Up</button>
                                </div>
                                {{-- <div class="form-group fs-12 text-center">
                                    By Clicking Sign up,Your agree to our  <a href="javascript:void0;" class="font-weight-bold">Terms & Conditions</a> and have read and acknowledge our  <a href="javascript:void0;" class="font-weight-bold">Privacy & Services.</a>
                                </div> --}}
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
