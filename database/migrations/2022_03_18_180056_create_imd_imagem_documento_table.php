<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('imd_imagem_documento', function (Blueprint $table) {
            $table->id('imd_id_imd');
            $table->string('imd_nom_arquivo');
            $table->string('imd_arquivo'); //Path
            $table->unsignedBigInteger('imd_id_doc');
            $table->foreign('imd_id_doc')->references('doc_id_doc')->on('doc_documento');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('imd_imagem_documento');
    }
};
