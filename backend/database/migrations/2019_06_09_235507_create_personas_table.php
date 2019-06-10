<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personas', function (Blueprint $table) {
            $table->bigIncrements('id');
			$table->string('nombre');
			$table->string('ap_paterno');
			$table->string('ap_materno');
			$table->integer('sexo');
			$table->boolean('is_vivo');
			$table->bigInteger('ref_arbol')->nullable();;
			$table->softDeletes();
            $table->timestamps();
			$table->foreign('ref_arbol')
                    ->references('id')->on('arbols')
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personas');
    }
}
