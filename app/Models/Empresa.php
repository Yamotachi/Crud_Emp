<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use HasFactory;

    protected $table = "emp_empresa";

    protected $primaryKey = "emp_id_emp";

    protected $fillable = [
        'emp_nom_empresa',
        'emp_dti_atividade',
        'emp_dtf_atividade',
        'emp_especial',
        'emp_telefone'
    ];

    public $timestamps = false;
}
