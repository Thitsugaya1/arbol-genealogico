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
     * @author Bastian Sepulveda, Rodrigo Cordero
     */
    public function crearArbol(Request $request){

        /**
         * Comienzo de la validacion de los parametros ingresados
         */
        //Exige el paso de estas variables desde el front-end
        $input = $request->only('nombre');

        //Traduccion al español de posibles errores en el ingreso de datos
        $mensajes_error = [
            'nombre.required'=> 'El nombre es obligatorio',
            'nombre.string'=> 'El nombre debe contener al menos una letra',
            'nombre.max'=> 'El nombre es demasiado largo',
            'nombre.min'=> 'El nombre es demasiado corto',
        ];
        //Se valida el ingreso correcto de los atributos
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255|min:2',
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
            $nodo->ref_arbol = $arbol->id;
            $nodo->save();
        }

        //Se retorna un mensaje de exito en toda la operación
        return response()->json(['msg'=> 'Arbol creado con exito'], 201);
    }
    /**
     * Metodo para crear relacion
     * @author Jesús Moris
     */
    public function crearRelacion(Request $request, $idarbol){
        if(\App\Arbol::find($idarbol)==null)
            return response()->json(['errors'   => ['El arbol seleccionado no existe']], 422);
        //Arreglo con relaciones validas entre los integrantes del arbol
        $rel = ['Pareja', 'Padre','Madre','Hijo','Hija','Tio','Tia', 'Abuelo','Abuela', 'Hermano', 'Hermana'];
        //Exige el paso de estas variables desde el front-end
        $input = $request->only('persona1', 'persona2', 'tipoRelacion');

        $mensajes_error = [
            'persona1.exists' => 'La persona 1 no existe en la base de datos',
            'persona1.required'=> 'La persona 1 es obligatoria',
            'persona1.integer'=> 'La persona 1 debe ser entero.',

            'persona2.required'=> 'La persona 2 es obligatoria',
            'persona2.exists' => 'La persona 2 no existe en la base de datos',
            'persona2.integer'=> 'La persona 2 debe ser entero.',

            'tipoRelacion.required'=> 'El tipo de relacion entre las personas es obligatoria',
            'tipoRelacion.string'=> 'El tipo de relacion debe contener al menos una letra',
            'tipoRelacion.in' => 'La relacion no es valida',
        ];

        $validator = Validator::make($request->all(), [
            'persona1' => 'required|integer|exists:personas,id',
            'persona2' => 'required|integer|exists:personas,id',
            'tipoRelacion' => ['required', Rule::in($rel)]
        ], $mensajes_error);

        //En caso de una falla en los datos capturados se retorna un codigo de respuesta de error de semantica
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()->all()], 422);
        }
        // Se crea el nodo y se completa con sus respectivos datos
        $nodo = new \App\Parentesco();
        $nodo->ref_persona = $request->persona1;
        $nodo->ref_persona2 = $request->persona2;
        $nodo->relacion = $request->tipoRelacion;
        $nodo->ref_arbol = $idarbol;
        $nodo->save();

        return response()->json(['msg' => 'Relacion creada con exito']);
    }
    /**
     * Metodo para obtener el arbol.
     */
    public function obtenerArbol($id){
        $arbol = \App\Arbol::where('id', $id)->with('relaciones')->with("relaciones.persona1")->with("relaciones.persona2")->first();
        if($arbol != null){
            return response()->json($arbol);
        }
        return response()->json(['error' => 'El arbol con ese identificador no existe.']);
    }

    /**
     * Metodo para modificar un arbol existente.
     * @author Jesús Moris
     */
    public function modificarArbol(Request $request, $id){

    }

}
