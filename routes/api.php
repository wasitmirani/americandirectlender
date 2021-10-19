<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AppFormController;
use App\Http\Controllers\Api\SettingController;
use App\Http\Controllers\backend\DashboardController;
use App\Http\Controllers\backend\role\RoleController;
use App\Http\Controllers\backend\user\UserController;
use App\Http\Controllers\backend\notify\NotificationController;
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

Route::middleware('auth:api')->group(function () {

    Route::get('customer/applications',[AppFormController::class,'getApplications']);
    Route::get('customer/applications/{id}',[AppFormController::class,'edit']);
    Route::put('customer/applications/{id}',[AppFormController::class,'update']);
    Route::get('/recent/applications',[DashboardController::class,'recentApp']);


    Route::get('/all/notification',[NotificationController::class,'index']);
    Route::get('/notification/{id}',[NotificationController::class,'']);
    Route::put('update/status/{id}',[AppFormController::class,'updateStatus']);


    Route::get('profile/setting',[SettingController::class,'index'])->name('profile.setting');
    Route::post('password/setting/{id}',[SettingController::class,'updatePassword'])->name('password.setting');
    Route::post('profile/setting/{id}',[SettingController::class,'update']);
    Route::get('/dashboard',[DashboardController::class,'getDashboard']);

    Route::prefix('management')->group(function () {
        Route::resource('user', UserController::class);
        Route::resource('notification', NotificationController::class);
        Route::post('remove-all/users',[UserController::class,'removeAllUsers']);
        Route::get('/roles-perimissions',[UserController::class,'getRolesPermissions']);
        Route::resource('application', UserController::class);
        Route::resource('role', RoleController::class);
        Route::post('remove-all/roles',[UserController::class,'removeAllRoles']);
        Route::resource('permission', PermissionController::class);
        Route::post('remove-all/permissions',[UserController::class,'removeAllPermissions']);
    });
});
