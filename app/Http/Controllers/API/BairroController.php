<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bairro;

class BairroController extends Controller
{
    public function create(Request $request) {
        try {
            
            $insert['bai_id_bai'] = $request['idbairro'];
            $insert['bai_nom_bairro'] = $request['bairronome'];

            Bairro::insert($insert);

            $response['message'] = 'Salvo com sucesso';
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;

    }
}
