<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Parentesco extends Model
{
    //
    public function persona1(){
        return $this->hasOne(Persona::class, 'id', 'ref_persona');
    }

    public function persona2(){
        return $this->hasOne(Persona::class, 'id', 'ref_persona2');
    }

}
