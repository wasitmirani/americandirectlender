<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\role\RoleController;
use App\Http\Controllers\Backend\user\UserController;
use App\Http\Controllers\Backend\permission\PermissionController;

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


Route::resource('user', UserController::class);
// Route::prefix('user')->name('user.')->group(function () {
//     Route::post("/update", [UserController::class, 'update'])->name('update');
//     Route::post("/store", [UserController::class, 'store'])->name('store');

// });

Route::resource('role', RoleController::class);
// ->only('index', 'destroy');
// Route::prefix('role')->name('role.')->group(function () {
//     Route::post("/update", [RoleController::class, 'update'])->name('update');
//     Route::post("/store", [RoleController::class, 'store'])->name('store');

// });
Route::resource('permission', PermissionController::class);
// ->only('index', 'destroy');
// Route::prefix('permission')->name('permission.')->group(function () {
//     Route::post("/update", [PermissionController::class, 'update'])->name('update');
//     Route::post("/store", [PermissionController::class, 'store'])->name('store');
// });
