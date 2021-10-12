<?php

namespace App\Http\Controllers\backend\notify;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use App\Notifications\NotifyUser;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Notification;

class NotificationController extends Controller
{
    //

    public function index(){

        $notifications=DB::table('notifications')->latest()->get();
        $users=Role::select('id','name')->with('users:id,name')->orderBy('name','ASC')->get();

        return response()->json(['notifications'=>$notifications,'users'=>$users]);

    }
    public function store(Request $request){
        $users =User::WhereIn('id',  $request->users)->get();

        $notificationdata =(object)[
            'title' =>$request->title,
            'body' => $request->body,
        ];

        $res=collect($users)->map(function($user) use ($notificationdata){
           return $user->notify(new NotifyUser($notificationdata));
            // return Notification::send($user, new NotifyUser($notificationdata));
        });

        return response()->json(['notifications'=>$res]);
    }
}
