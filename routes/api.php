<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Req
Route::get('/empresa/listdocs', 'App\Http\Controllers\API\EmpresaController@list_docs');
Route::get('/endereco/listend', 'App\Http\Controllers\API\EnderecoController@list_end');

//Create
Route::post('/empresa/create', 'App\Http\Controllers\API\EmpresaController@create');

//List
Route::get('/empresa/list', 'App\Http\Controllers\API\EmpresaController@list');

//Edit
Route::get('/empresa/get/{id}', 'App\Http\Controllers\API\EmpresaController@get');

//Update
Route::put('/empresa/update/{id}', 'App\Http\Controllers\API\EmpresaController@update');

//Delete
Route::delete('/empresa/delete/{id}', 'App\Http\Controllers\API\EmpresaController@delete');