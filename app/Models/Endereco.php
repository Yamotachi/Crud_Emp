<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
    use HasFactory;

    protected $table = "end_endereco";

    protected $primaryKey = "end_id_end";

    protected $fillable = [
        'end_num_numero',
        'end_nom_complemento',
        'end_num_lat',
        'end_num_long',
        'end_id_log',
        'end_id_emp'
    ];

    public $timestamps = false;

    public function idLogradouro() {
        return $this->belongsTo("App\Models\Logradouro", "end_id_log");
    }

    public function idEndEmpresa() {
        return $this->belongsTo("App\Models\Empresa", "end_id_emp");
    }
}
