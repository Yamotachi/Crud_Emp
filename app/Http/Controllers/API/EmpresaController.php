<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TipoDocumento;
use App\Models\Empresa;

class EmpresaController extends Controller
{
    public function list_docs() {
     
        $data = TipoDocumento::get();

        $response['data'] = $data;
        $response['success'] = true;

        return $response;
    }   

    public function create(Request $request) {
        try {
            
            $insert['emp_id_emp'] = $request['idempresa'];
            $insert['emp_nom_empresa'] = $request['nome'];
            $insert['emp_dti_atividade'] = $request['dti_atividade'];
            $insert['emp_dtf_atividade'] = $request['dtf_atividade'];
            $insert['emp_especial'] = $request['favorito'];
            $insert['emp_telefone'] = $request['telefone'];

            Empresa::insert($insert);

            $response['message'] = 'Salvo com sucesso';
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;

    }

    public function list() {
        try {

            $data = Empresa::get();

            $response['data'] = $data;
            $response['message'] = 'Carregado com sucesso';
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        
        return $response;
        
    }

    public function get($id) {
        try {

            $data = Empresa::get()->find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = 'Carregado com sucesso';
                $response['success'] = true;
            } else {
                $response['data'] = null;
                $response['message'] = 'Empresa não encontrada';
                $response['success'] = false;
            }


        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        
        return $response;
        
    }

    public function update(Request $request, $id) {
        try {

            $data['emp_id_emp'] = $request['idempresa'];
            $data['emp_nom_empresa'] = $request['nome'];
            $data['emp_dti_atividade'] = $request['dti_atividade'];
            $data['emp_dtf_atividade'] = $request['dtf_atividade'];
            $data['emp_especial'] = $request['favorito'];
            $data['emp_telefone'] = $request['telefone'];

            $res = Empresa::where("id", $id)->update();

            $response['red'] = $res;
            $response['message'] = "Atualizado com sucesso";
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        
        return $response;
        
    }

    public function delete($id) {
        try {

            $res = Empresa::where("emp_id_emp", $id)->delete();

            $response['red'] = $res;
            $response['message'] = "Excluído com sucesso";
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        
        return $response;
        
    }
}
