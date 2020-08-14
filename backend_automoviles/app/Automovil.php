<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Automovil extends Model
{
    protected $fillable=['nombre','modelo','precio','descripcion_reparacion','esta_reparado'];
}
