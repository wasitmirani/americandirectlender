<?php

namespace App\Http\Controllers\Api;

use App\Models\Application;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppFormController extends Controller
{
    public function getApplications(){

         //
        $q=request('query');
        $applications = Application::where('name', 'like', '%' .$q. '%')
        ->orderBy('name','ASC')
        ->with('agents','attachments')->paginate(env('PAR_PAGE'));

        if($applications){
            return response()->json(['applications'=>$applications]);

        }else{
            return response()->json("No Application Found");
        }

    }


}
