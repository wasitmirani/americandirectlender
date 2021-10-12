<?php

namespace App\Http\Controllers;

use App\Models\AppForm;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    //

    public function index(){


        return view('frontend.pages.index');
    }

    public function refinance(){


        return view('frontend.pages.refinance');
    }

    public function appForm(){


        return view('frontend.pages.appform');
    }

    public function storeAppForm(Request $request){
        dd('dsf');

        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'city' => 'required'
        ]);
        $appform = new AppForm;
        $appform->name = $request->name;
        $appform->email = $request->email;
        $appform->phone = $request->phone;
        $appform->city = $request->city;
        if($appform->save()){

            return back()->with('message',"App Form Data Added Successfully");

        }else{
            return back()->with('message','Something Went Wrong');
        }



    }
}
