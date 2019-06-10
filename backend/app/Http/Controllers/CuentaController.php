<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VerificadorDatorRegistro extends Controller
{
    //Metodo que permite el almacenaje de los datos de una nueva cuenta a registrar
    public function nuevoUsuario(Request $request)
    {
        //Variables necesarias que fueron ingresadas
        $input = $request->only(['correo', 'nombre', 'apellidos', 'contraseña']);
        //Verifica el buen ingreso de datos en los campos requeridos
        $validator = Validator::make($request->all(), [
            'correo' => 'required|string|max:255',
            'nombre' => 'required|string|email|max:255|unique:users',
            'apellidos' => 'required|string|max:255',
            'contraseña' => 'required|string|max:255',
        ]);
        //En caso de una falla en los datos capturados se retorna un codigo de respuesta de error de semantica 
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()->all()], 422);
        }
        //Se crea un objeto con los datos capturados
        $nuevoUsuario = new \App\Usuario();
        $nuevoUsuario->id = $request->id;
        $nuevoUsuario->correo = $request->correo;
        $nuevoUsuario->nombre = $request->nombre;
        $nuevoUsuario->apellidoPaterno = $request->apellidoPaterno;
        $nuevoUsuario->apellidoMaterno = $request->apellidoMaterno;
        $nuevoUsuario->contraseña = $request->contraseña;
        //guarda el objeto en la base de datos
        $nuevoUsuario->save();
        //retorna un mensaje informando que la operacion fue exitosa, junto a un codigo de respuesta de peticion completada 
        return response()->json(['msg'=> 'Usuario guardado con exito', 'estado'], 201);

    }
}