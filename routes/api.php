<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\DashboardController;
use App\Http\Controllers\backend\role\RoleController;
use App\Http\Controllers\backend\user\UserController;
use App\Http\Controllers\backend\permission\PermissionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::middleware('auth:sanctum')->group(function () {


Route::get('/activities',[DashboardController::class,'activityLogs']);

Route::prefix('management')->group(function () {

    Route::resource('user', UserController::class);
    Route::post('remove-all/users',[UserController::class,'removeAllUsers']);
    Route::get('/roles-perimissions',[UserController::class,'getRolesPermissions']);

    Route::resource('role', RoleController::class);
    Route::resource('permission', PermissionController::class);

});
});
