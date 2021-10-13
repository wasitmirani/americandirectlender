<?php

namespace App\Http\Controllers\Api;

use App\Models\Application;
use Illuminate\Http\Request;
use App\Mail\ApplicationMail;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;

class AppFormController extends Controller
{
  public function getFormData(){


    $formdata = Application::paginate(10);
  if(!empty($formdata)){
    return response()->json($formdata);

  }else{
      return response()->json("No Data Found");
  }

  }

}
