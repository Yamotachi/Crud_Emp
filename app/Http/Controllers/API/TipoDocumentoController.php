<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TipoDocumento;

class TipoDocumentoController extends Controller
{
    public function create(Request $request) {
        try {
            
            $insert['tdo_id_tdo'] = $request['idtipodoc'];
            $insert['tdo_nom_tipo_documento'] = $request['nomedoc'];

            TipoDocumento::insert($insert);

            $response['message'] = 'Salvo com sucesso';
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;

    }
}
