<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
    use HasFactory;

    protected $table = "doc_documento";

    protected $primaryKey = "doc_id_doc";

    protected $fillable = [
        'doc_num_documento',
        'doc_dat_cadastro',
        'doc_id_tdo',
        'doc_id_emp'
    ];

    public $timestamps = false;

    public function idTipoDocumento() {
        return $this->belongsTo("App\Models\TipoDocumento", "doc_id_tdo");
    }

    public function idEmpresa() {
        return $this->belongsTo("App\Models\Empresa", "emp_id_emp");
    }

}
