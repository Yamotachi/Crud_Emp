<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImagemDocumento extends Model
{
    use HasFactory;

    protected $table = "imd_imagem_documento";

    protected $primaryKey = "imd_id_imd";

    protected $fillable = [
        'imd_nom_arquivo',
        'imd_arquivo',
        'imd_id_doc'
    ];

    public $timestamps = false;

    public function imdIdDocumento() {
        return $this->belongsTo("App\Models\Documento", "imd_id_doc");
    }

}
