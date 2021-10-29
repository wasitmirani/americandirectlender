<?php

namespace App\Http\Controllers\backend;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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


         $applications= DB::table('applications')->select(DB::raw('DATE(created_at) as created_at'), DB::raw('COUNT(*) as total'))->
                       groupBy(DB::raw('DATE(created_at)'))->
                       get();

        return response()->json(['applications'=>$applications,'users'=>$users,'roles'=>$agents,'total_application'=>$total_applications,'total_roles'=>$total_roles,'assigned_apps'=>$assigned_apps]);
    }



    public function recentApp(){

          $recentApps = Application::orderBy('id','DESC')->limit(5)->get();
           return response()->json(['applications'=>$recentApps]);

    }


}
