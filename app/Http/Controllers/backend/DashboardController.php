<?php

namespace App\Http\Controllers\backend;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Application;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index(){


        return view('backend.pages.dashboard');
    }
    public function getDashboard(Request $request){
        $users=User::all()->count();
        $total_applications= Application::all()->count();
        $total_roles = Role::all()->count();
        $assigned_apps = Application::where('status','1')->count();
        $agents=Role::select('name')->withCount('users')->get();

        $applications = Application::select('id', 'created_at')
        ->get()
        ->groupBy(function($date) {
            //return Carbon::parse($date->created_at)->format('Y'); // grouping by years
            return Carbon::parse($date->created_at)->format('m'); // grouping by months
        });


        // $appsNumber = [];
        // $applicationArr = [];

        // foreach ($applications as $key => $value) {
        //     $appsNumber[(int)$key] = count($value);
        // }

        // for($i = 1; $i <= 12; $i++){
        //     if(!empty($appsNumber[$i])){
        //         $applicationArr[$i] = $appsNumber[$i];
        //     }else{
        //         $applicationArr[$i] = 0;
        //     }
        // }

       return response()->json(['users'=>$users,'roles'=>$agents,'total_application'=>$total_applications,'total_roles'=>$total_roles,'assigned_apps'=>$assigned_apps]);
    }


    public function recentApp(){

          $recentApps = Application::orderBy('id','DESC')->limit(5)->get();
           return response()->json(['applications'=>$recentApps]);

    }


}
