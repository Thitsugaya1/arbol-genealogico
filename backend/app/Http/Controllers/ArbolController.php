<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ArbolController extends Controller
{
    /**
     * Metodo para crear el arbol en la base de datos.
     * Se validara la informacion ingresada y se ingresara en la base de datos con sus respectivas relaciones.
     * @author Bastian Sepulveda, Rodrigo Cordero, Jesus Moris
     */
    public function crearArbol(Request $request){

        /**
         * Comienzo de la validacion de los parametros ingresados
         */
        //Exige el paso de estas variables desde el front-end
        $input = $request->only('nombre', 'relaciones');
        //Arreglo con relaciones validas entre los integrantes del arbol
        $rel = ['Pareja', 'Padre','Madre','Hijo','Hija','Tio','Tia', 'Abuelo','Abuela', 'Hermano', 'Hermana'];
        //Traduccion al español de posibles errores en el ingreso de datos
        $mensajes_error = [
            'nombre.required'=> 'El nombre es obligatorio',
            'nombre.string'=> 'El nombre debe contener al menos una letra',
            'nombre.max'=> 'El nombre es demasiado largo',
            'nombre.min'=> 'El nombre es demasiado corto',

            'relaciones.*.persona1.exists' => 'La persona 1 no existe en la base de datos',
            'relaciones.*.persona1.required'=> 'La persona 1 es obligatoria',
            'relaciones.*.persona1.integer'=> 'La persona 1 debe ser entero.',

            'relaciones.*.persona2.required'=> 'La persona 2 es obligatoria',
            'relaciones.*.persona2.exists' => 'La persona 2 no existe en la base de datos',
            'relaciones.*.persona2.integer'=> 'La persona 2 debe ser entero.',

            'relaciones.*.tipoRelacion.required'=> 'El tipo de relacion entre las personas es obligatoria',
            'relaciones.*.tipoRelacion.string'=> 'El tipo de relacion debe contener al menos una letra',
            'relaciones.*.tipoRelacion.in' => 'La relacion no es valida',

            'relaciones.required' => 'Las relaciones son obligatorias',
            'relaciones.min' => 'No hay relaciones suficientes',
        ];
        //Se valida el ingreso correcto de los atributos
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255|min:2',
            'relaciones' => 'required|min:1',
            'relaciones.*.persona1' => 'required|integer|exists:personas,id',
            'relaciones.*.persona2' => 'required|integer|exists:personas,id',
            'relaciones.*.tipoRelacion' => ['required', Rule::in($rel)]
        ], $mensajes_error);

        //En caso de una falla en los datos capturados se retorna un codigo de respuesta de error de semantica
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()->all()], 422);
        }

        // Se crea el arbol
        $arbol = new \App\Arbol();
        $arbol->nombre = $request->nombre;
        $arbol->ref_usuario = auth('api')->user()->id;
        $arbol->save();

        // Se recorren las relaciones del JSON y se genera un objeto para cada una.
        // Se agregan a la BD.
        foreach($request->relaciones as $relacion){
            $nodo = new \App\Parentesco();
            $nodo->ref_persona = $relacion['persona1'];
            $nodo->ref_persona2 = $relacion['persona2'];
            $nodo->relacion = $relacion['tipoRelacion'];
            // Deberia anclarse a un arbol???
            $nodo->save();
        }

        //Se retorna un mensaje de exito en toda la operación
        return response()->json(['msg'=> 'Arbol creado con exito'], 201);
    }

}
