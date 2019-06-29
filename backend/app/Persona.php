<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    public $hidden = ['deleted_at', 'created_at','updated_at'];
}
