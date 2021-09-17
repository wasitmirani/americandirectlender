<?php

namespace App\Http\Controllers\Backend\role;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    //

    public function index()
    {
        //
        $q=request('query');
        $roles=Role::where('name', 'like', '%' . $q . '%')
        ->orderBy('name','ASC')
        ->paginate(env('PER_PAGE'));
        $users=User::orderBy('name','ASC')->get();
        return response()->json(['roles'=>$roles]);
    }


    public function store(Request $request)
    {

        $request->validate([
            'role' => ['required'],
        ]);

        $role = Role::create([
            'name' => $request->role
        ]);

        return response()->json($role);


    }






    public function update(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255','unique:roles,name,'.$request->id],
        ]);
        $users=explode(",",$request->users);
        $role = Role::find($request->id);
        $role->name=$request->name;
        $role->save();
        $role->users()->sync($users);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {


      Role::destroy($id);
    }
}
