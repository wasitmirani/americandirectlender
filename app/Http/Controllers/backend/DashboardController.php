<?php

namespace App\Http\Controllers\backend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Activitylog\Models\Activity;

class DashboardController extends Controller
{
    public function index(){
        $activities =  Activity::latest()->take(20)->get();

        return view('backend.pages.dashboard',compact('activities'));
    }

    public function activityLogs(){
        $activities =  Activity::latest()->take(5)->get();

        return response()->json($activities);


    }
}
