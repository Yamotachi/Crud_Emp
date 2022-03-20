<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/empresa', function () {
    return view('empresa');
});

Route::get('/empresa', 'App\Http\Controllers\EmpresaController@index');
Route::get('/empresa/index', 'App\Http\Controllers\EmpresaController@index');
Route::get('/empresa/list', 'App\Http\Controllers\EmpresaController@index');
Route::get('/empresa/form', 'App\Http\Controllers\EmpresaController@index');
Route::get('/empresa/edit/{num}', 'App\Http\Controllers\EmpresaController@index');