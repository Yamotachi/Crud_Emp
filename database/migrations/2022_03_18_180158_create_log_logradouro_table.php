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
        Schema::create('log_logradouro', function (Blueprint $table) {
            $table->id('log_id_log');
            $table->string('log_nom_logradouro');
            $table->string('log_num_cep');
            $table->unsignedBigInteger('log_id_bai');
            $table->foreign('log_id_bai')->references('bai_id_bai')->on('bai_bairro');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('log_logradouro');
    }
};
