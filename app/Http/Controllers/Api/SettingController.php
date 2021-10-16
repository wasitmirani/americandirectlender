<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class SettingController extends Controller
{
    public function  index(){
        $id = Auth::user()->id;
        $user = User::with('userInfo')->find($id);
        return response()->json(['user'=>$user]);
    }

    public function update(Request $request){



    //        return
    //     $request->validate([
    //         'name' => ['required', 'string', 'min:3','max:50'],
    //         'email' => ['required',  'email', 'unique:users,email,'.$request->id],


    //     ]);

    //     if($request->password!=""){
    //           $request->validate([
    //                 'password' => ['required', 'string', 'min:8'],
    //           ]);
    //         User::where('id',$request->id)->update(['password'=>Hash::make($request->password)]);
    //     }

    //     $user=User::where('id',$request->id)->first();

    //     $request_array=[
    //         'id'=>$request->id,
    //         'name'=>$request->name,
    //         'email'=>$request->email,
    //         'about_me' => $request->about_me,
    //         'user_id'=>$request->user()->id,
    //         'thumbnail' => $request->thumbnail
    //     ];
    //     $user->userInfoCreateOrUpdate($user,$request);

    //     // $permission_collection=Permission::WhereIn('id',  json_decode($request->selected_permissions))->get();
    //     // $new_user->permissions()->attach($permission_collection);
    //     return response()->json();
    // }


    // public function updatePassword(Request $request, $id){

    //     $request->validate([
    //         'password' => ['required', 'string', 'min:8', 'confirmed'],
    //     ]);

    //     $user = User::find($id);
    //     $user->password = $request->password;
    //     $user->save();
    //     return response()->json();



    }
}
