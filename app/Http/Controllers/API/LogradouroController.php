<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Logradouro;
use App\Models\Bairro;

class LogradouroController extends Controller
{
    public function create(Request $request) {
        try {
            
            $insert['log_id_log'] = $request['idlog'];
            $insert['log_nom_logradouro'] = $request['logradouro'];
            $insert['log_num_cep'] = $request['cep'];
            $insert['log_id_bai'] = $request['idbairro'];

            Logradouro::insert($insert);

            $response['message'] = 'Salvo com sucesso';
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;

    }
}
