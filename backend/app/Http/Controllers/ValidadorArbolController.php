<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ValidadorArbolController extends Controller
{
    public function validarAtributosDelArbol(Request $request)
    {
        
        //Exige el paso de estas variables desde el front-end
        $input = $request->only('nombre', 'relaciones');

        $mensajes_error = [
            'nombre.required'=> 'El nombre es obligatorio',
            'nombre.string'=> 'El nombre debe contener al menos una letra',
            'nombre.max'=> 'El nombre es demasiado largo',
            'nombre.min'=> 'El nombre es demasiado corto',

            'relaciones.*.persona1.exists' => 'La persona 1 no existe en la base de datos',
            'relaciones.*.persona1.required'=> 'La persona 1 es obligatoria',

            'relaciones.*.persona2.required'=> 'La persona 2 es obligatoria',
            'relaciones.*.persona2.exists' => 'La persona 2 no existe en la base de datos',

            'relaciones.*.tipoRelacion.required'=> 'El tipo de relacion entre las personas es obligatoria',
            'relaciones.*.tipoRelacion.string'=> 'El tipo de relacion debe contener al menos una letra',
        ];

        //Se valida el ingreso correcto de los atributos 
        $this->validate($request, [
            'name' => 'required|string|max:255|min:1',
            'relaciones.*.persona1' => 'required|string|exists:persona',
            'relaciones.*.persona2' => 'required|string|exists:persona',
            'relaciones.*.tipoRelacion' => 'required|string',
        ], $mensajes_error);

        //En caso de una falla en los datos capturados se retorna un codigo de respuesta de error de semantica
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()->all()], 422);
        }
        return response()->json(['msg'=> 'Datos correctos']);
    }
}
