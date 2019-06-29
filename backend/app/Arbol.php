<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Arbol extends Model
{
    public $hidden = ['deleted_at', 'created_at','updated_at'];

    public function relaciones(){
        return $this->hasMany(Parentesco::class, 'ref_arbol', 'id');
    }
}
