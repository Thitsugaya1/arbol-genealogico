<?php

use Illuminate\Http\Request;

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

// RUTAS PUBLICAS, NO NECESITAN AUTORIZACION.
Route::post('/login', 'CuentaController@iniciarSesion')->name('login');
Route::post('/register', 'CuentaController@nuevoUsuario');
Route::get('/unauthorized', function(){ return response(['msg' => 'unauthorized'], 401); })->name('unauthorized');
// RUTAS PRIVADAS, ESTAS SI NECESITAN AUTORIZACION.
Route::middleware('auth:api')->group(function () {
    Route::get('/logout', 'CuentaController@desconectar');
    Route::get('/user', function(Request $request){
        return auth('api')->user();
    });
});

