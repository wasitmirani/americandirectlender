<?php

namespace App\Http\Controllers\Api;

use random;
use App\Models\User;
use App\Models\UserInfo;
use Illuminate\Support\Str;
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

    public function update(Request $request, $id){
   

    $user = User::where('id',$request->id)->first();

    if ($request->hasfile('thumbnail')) {
      
        $name = Str::slug($request->name, '-')  . "-" . time() . '.' . $request->thumbnail->extension();
        $request->thumbnail->move(public_path('/user/images'), $name);
    } else{
        $name = "";
    }
        User::where('id',$request['id'])->update([
            'id'=>$request->id,
            'name'=>$request->name,
            'email'=>$request->email,
           
            'user_id'=>$request->user()->id,
            'thumbnail' => $name

        ]);
        UserInfo::where('user_id',$user->id)->update([
            'about_me' => $request->about_me
        ]);

  
        return response()->json();
    }


    public function updatePassword(Request $request, $id){

        $request->validate([
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $user = User::find($id);
        $user->password = Hash::make($request->password);
        $user->save();
        return response()->json();



    }
}
