<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Endereco;
use App\Models\Logradouro;

class EnderecoController extends Controller
{

    public function list_end() {
     
        $data = Endereco::get();

        $response['data'] = $data;
        $response['success'] = true;

        return $response;
    }

    public function create(Request $request) {
        try {
            
            $insert['end_id_end'] = $request['idend'];
            $insert['end_num_numero'] = $request['endnumero'];
            $insert['end_nom_complemento'] = $request['complemento'];
            $insert['end_num_lat'] = $request['latitude'];
            $insert['end_num_long'] = $request['longitude'];
            $insert['end_id_log'] = $request['idlogradouro'];
            $insert['end_id_emp'] = $request['idempresa'];
            $insert['end_cidade'] = $request['cidade'];

            Endereco::insert($insert);

            $response['message'] = 'Salvo com sucesso';
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;

    }
}
