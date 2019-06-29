<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Parentesco extends Model
{
    public $hidden = ['ref_persona', 'ref_persona2', 'ref_arbol', 'deleted_at', 'created_at','updated_at'];
    //
    public function arbol(){
        return $this->belongsTo(Arbol::class);
    }

    public function persona1(){
        return $this->hasOne(Persona::class, 'id', 'ref_persona');
    }

    public function persona2(){
        return $this->hasOne(Persona::class, 'id', 'ref_persona2');
    }

}
