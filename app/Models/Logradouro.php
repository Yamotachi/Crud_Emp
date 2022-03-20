<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logradouro extends Model
{
    use HasFactory;

    protected $table = "log_logradouro";

    protected $primaryKey = "log_id_log";

    protected $fillable = [
        'log_nom_logradouro',
        'log_num_cep',
        'log_id_bai'
    ];

    public $timestamps = false;

    public function idBairro() {
        return $this->belongsTo("App\Models\Bairro", "log_id_bai");
    }

}
