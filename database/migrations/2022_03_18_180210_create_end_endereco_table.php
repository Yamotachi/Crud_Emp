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
        Schema::create('end_endereco', function (Blueprint $table) {
            $table->id('end_id_end');
            $table->Integer('end_num_numero');
            $table->string('end_nom_complemento');
            $table->decimal('end_num_lat');
            $table->decimal('end_num_long');
            $table->unsignedBigInteger('end_id_log');
            $table->foreign('end_id_log')->references('log_id_log')->on('log_logradouro');
            $table->unsignedBigInteger('end_id_emp');
            $table->foreign('end_id_emp')->references('emp_id_emp')->on('emp_empresa');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('end_endereco');
    }
};
