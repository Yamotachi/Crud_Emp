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
        Schema::create('emp_empresa', function (Blueprint $table) {
            $table->id('emp_id_emp');
            $table->string('emp_nom_empresa');
            $table->datetime('emp_dti_atividade');
            $table->datetime('emp_dtf_atividade');
            $table->tinyInteger('emp_especial');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('emp_empresa');
    }
};
