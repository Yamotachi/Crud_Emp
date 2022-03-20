<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bairro extends Model
{
    use HasFactory;

    protected $table = "bai_bairro";

    protected $primaryKey = "bai_id_bai";

    protected $fillable = [
        'bai_nom_bairro'
    ];

}
