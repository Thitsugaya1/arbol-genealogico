<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Arbol extends Model
{
    use SoftDeletes;
    public $hidden = ['deleted_at', 'created_at','updated_at'];

    public function relaciones(){
        return $this->hasMany(Parentesco::class, 'ref_arbol', 'id');
    }
}
