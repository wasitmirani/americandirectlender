<?php

namespace App\Http\Controllers\backend;

use App\Models\User;
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
        $agents=Role::select('name')->withCount('users')->get();

        return response()->json(['users'=>$users,'roles'=>$agents]);
    }


}
