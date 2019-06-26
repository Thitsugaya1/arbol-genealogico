<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateParentescosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parentescos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('relacion');
            $table->bigInteger('ref_persona');
            $table->bigInteger('ref_persona2');
            $table->bigInteger('ref_arbol');
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('ref_persona')->references('id')->on('personas');
            $table->foreign('ref_persona2')->references('id')->on('personas');
            $table->foreign('ref_arbol')->references('id')->on('arbols');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parentescos');
    }
}
