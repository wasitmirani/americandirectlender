<?php

namespace App\Http\Controllers\Backend\user;


use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    public function index()
    {


        $q=request('query');
        $users=User::where('name', 'like', '%' . $q . '%')
        ->Orwhere('email', 'like', '%' . $q. '%')
        ->Orwhere('created_at', 'like', '%' . $q. '%')
        ->latest()->paginate(env('PER_PAGE'));
       return response()->json(['users'=>$users]);

    // $users = User::all();
    // $allusers = User::with('roles')->latest()->paginate(env('PER_PAGE'));
    // return response()->json(['users'=>$users, 'allusers'=>$allusers]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'min:3','max:50'],
            'l_name' => ['required', 'string', 'min:3','max:50'],
            'f_name' => ['required', 'string', 'min:3','max:50'],
            'role' => ['required'],
            'postalcode' => ['required'],
            'city' => ['required'],
            'country' => ['required'],
            'bio' => ['required'],
            'address' => ['required'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            // 'phone' => ['required',  'regex:/^([0-9\s\-\+\(\)]*)$/', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        $user = User::create([

            'name'=>$request->name,
            'email'=>$request->email,
            'password' => Hash::make($request->password),
            'l_name' => $request->l_name,
            'f_name' => $request->f_name,
            'role' => $request->role,
            'postal_code' => $request->postalcode,
            'city' => $request->city,
            'country' => $request->country,
            'bio' => $request->bio,
            'address' => $request->address,


        ]);

        return response()->json($user,200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id){
        $user=User::find($id);
        return response()->json(['user'=>$user]);
    }
    public function update(Request $request)
    {
        dd($request->email);

        $request->validate([
            'name' => ['required', 'string', 'min:3','max:50'],
            'email' => ['required',  'email', 'unique:users,email,'.$request->id],
            'phone' => ['required',  'regex:/^([0-9\s\-\+\(\)]*)$/', 'max:255', 'unique:users,phone,'.$request->id],
        ]);

        if($request->password!=""){
              $request->validate([
                    'password' => ['required', 'string', 'min:8'],
              ]);
            User::where('id',$request->id)->update(['password'=>Hash::make($request->password)]);
        }

        //   $user=User::where('id',$request->id)->first();
          User::where('id',$request->id)->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'l_name' => $request->l_name,
            'f_name' => $request->f_name,
            'role' => $request->role,
            'postalcode' => $request->postalcode,
            'city' => $request->city,
            'country' => $request->country,
            'bio' => $request->bio,
            'address' => $request->address,
        ]);

        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

       $user =  User::destroy($id);
       return response()->json($user);

    }
}
