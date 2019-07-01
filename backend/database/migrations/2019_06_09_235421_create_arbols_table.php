<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArbolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('arbols', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre', 32);
            $table->bigInteger('ref_usuario');

            $table->softDeletes();
            $table->timestamps();

            $table->foreign('ref_usuario')->references('id')->on('usuarios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('arbols');
    }
}
