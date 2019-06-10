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
            $table->bigInteger('ref_parentesco');
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('ref_persona')->references('id')->on('personas');
            $table->foreign('ref_persona2')->references('id')->on('personas');
            $table->foreign('ref_parentesco')->references('id')->on('parentescos');
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
