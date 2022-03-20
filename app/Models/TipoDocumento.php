<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoDocumento extends Model
{
    use HasFactory;

    protected $table = "tdo_tipo_documento";

    protected $primaryKey = "tdo_id_tdo";

    protected $fillable = [
        'tdo_nom_tipo_documento',
    ];

    public $timestamps = false;
}
