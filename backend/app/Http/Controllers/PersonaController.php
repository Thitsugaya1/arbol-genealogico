<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class PersonaController extends Controller
{
    /**
     * Metodo para agregar una nueva persona.
     * @author Jesús Moris
     */
    public function nuevaPersona(Request $request, $idarbol){
        if(\App\Arbol::find($idarbol)==null)
            return response()->json(['errors'   => ['El arbol seleccionado no existe']], 422);
        //Variables necesarias que fueron ingresadas
        $input = $request->only(['nombres', 'ap_paterno', 'ap_materno', 'sexo', 'is_vivo', 'foto']);
        //Arreglo con los mensajes de error en español
        $mensajes_error = [
            'nombres.required'=> 'El nombre es obligatorio',
            'nombres.string'=> 'El nombre debe contener al menos una letra',
            'nombres.max'=> 'El nombre es demasiado largo',
            'nombres.min'=> 'El nombre es demasiado corto',
            'nombres.regex'=> 'El nombre solo debe contener letras',

            'ap_paterno.required'=> 'El apellido paterno es obligatorio',
            'ap_paterno.string'=> 'El apellido paterno debe contener al menos una letra',
            'ap_paterno.max'=> 'El apellido paterno es demasiado largo',
            'ap_paterno.min'=> 'El apellido paterno es demasiado corto',
            'ap_paterno.regex' => 'El apellido paterno no cumple con el formato',

            'ap_materno.required'=> 'El apellido materno es obligatorio',
            'ap_materno.string'=> 'El apellido materno debe contener al menos una letra',
            'ap_materno.max'=> 'El apellido materno es demasiado largo',
            'ap_materno.min'=> 'El apellido materno es demasiado corto',
            'ap_materno.regex' => 'El apellido materno no cumple con el formato',

            'sexo.required' => 'El sexo es obligatorio',
            'sexo.integer' => 'El sexo debe ser un numero entero',

            'is_vivo.required' => 'La variable esta vivo es obligatoria',
            'is_vivo.boolean' => 'La variable esta vivo debe ser verdaderao o falso',
        ];
        $validator = Validator::make($request->all(), [
            'nombres' => 'required|string|max:32|min:2|regex:/^[a-zA-Z\s]*$/',
            'ap_paterno' => 'required|string|max:32|min:2|regex:/^[a-zA-Z\s]*$/',
            'ap_materno' => 'required|string|max:32|min:2|regex:/^[a-zA-Z\s]*$/',
            'sexo' => 'required|integer',
            'is_vivo' => 'required|boolean'
        ], $mensajes_error);
        //En caso de una falla en los datos capturados se retorna un codigo de respuesta de error de semantica
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()->all()], 422);
        }

        $persona = new \App\Persona();
        $persona->nombres = $request->nombres;
        $persona->ap_paterno = $request->ap_paterno;
        $persona->ap_materno = $request->ap_materno;
        $persona->sexo = $request->sexo;
        $persona->is_vivo = $request->is_vivo;
        $persona->foto = ($request->foto==null)?'blank':$request->foto;
        $persona->ref_arbol = $idarbol;
        $persona->save();

        return response()->json(['msg' => 'Persona creada con exito.'], 201);
    }
    /**
     * Metodo para eliminar una persona.
     * @author Jesús Moris
     */
    public function eliminarPersona($id){

    }
    /**
     * Metodo para editar una persona en particular.
     * @author Rodrigo Cordero
     */
    public function editarPersona(Request $request, $idarbol, $idnodo){

        if(\App\Persona::find($idnodo)==null)
            return response()->json(['errors'   => ['El nodo seleccionado no existe']], 422);
        //Variables necesarias que fueron ingresadas
        $input = $request->only(['nombres', 'ap_paterno', 'ap_materno', 'sexo', 'is_vivo', 'foto']);
        //Arreglo con los mensajes de error en español
        $mensajes_error = [
            'nombres.required'=> 'El nombre es obligatorio',
            'nombres.string'=> 'El nombre debe contener al menos una letra',
            'nombres.max'=> 'El nombre es demasiado largo',
            'nombres.min'=> 'El nombre es demasiado corto',
            'nombres.regex'=> 'El nombre solo debe contener letras',

            'ap_paterno.required'=> 'El apellido paterno es obligatorio',
            'ap_paterno.string'=> 'El apellido paterno debe contener al menos una letra',
            'ap_paterno.max'=> 'El apellido paterno es demasiado largo',
            'ap_paterno.min'=> 'El apellido paterno es demasiado corto',
            'ap_paterno.regex' => 'El apellido paterno no cumple con el formato',

            'ap_materno.required'=> 'El apellido materno es obligatorio',
            'ap_materno.string'=> 'El apellido materno debe contener al menos una letra',
            'ap_materno.max'=> 'El apellido materno es demasiado largo',
            'ap_materno.min'=> 'El apellido materno es demasiado corto',
            'ap_materno.regex' => 'El apellido materno no cumple con el formato',

            'sexo.required' => 'El sexo es obligatorio',
            'sexo.integer' => 'El sexo debe ser un numero entero',

            'is_vivo.required' => 'La variable esta vivo es obligatoria',
            'is_vivo.boolean' => 'La variable esta vivo debe ser verdaderao o falso',
        ];
        //Se valida el correcto ingreso de las entradas
        $validator = Validator::make($request->all(), [
            'nombres' => 'required|string|max:32|min:2|regex:/^[a-zA-Z\s]*$/',
            'ap_paterno' => 'required|string|max:32|min:2|regex:/^[a-zA-Z\s]*$/',
            'ap_materno' => 'required|string|max:32|min:2|regex:/^[a-zA-Z\s]*$/',
            'sexo' => 'required|integer',
            'is_vivo' => 'required|boolean'
        ], $mensajes_error);
        //En caso de una falla en los datos capturados se retorna un codigo de respuesta de error de semantica
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()->all()], 422);
        }
        //Se editan los parametros de la persona
        $persona = \App\Persona::find($idnodo);
        $persona->nombres = $request->nombres;
        $persona->ap_paterno = $request->ap_paterno;
        $persona->ap_materno = $request->ap_materno;
        $persona->sexo = $request->sexo;
        $persona->is_vivo = $request->is_vivo;
        $persona->foto = ($request->foto==null)?'blank':$request->foto;
        $persona->ref_arbol = $idarbol;
        $persona->save();

        return response()->json(['msg' => 'Persona editada con exito.'], 201);
    }

}
