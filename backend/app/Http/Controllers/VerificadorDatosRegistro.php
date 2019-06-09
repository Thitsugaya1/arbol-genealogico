<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VerificadorDatorRegistro extends Controller
{
    public function nuevoUsuario(Request $request)
    {
        $input = $request->only(['correo', 'nombre', 'apellidos', 'contraseña']);

        $validator = Validator::make($request->all(), [
            'correo' => 'required|string|max:255',
            'nombre' => 'required|string|email|max:255|unique:users',
            'apellidos' => 'required|string|max:255',
            'contraseña' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()->all()], 422);
        }

        $nuevoUsuario = new \App\User();
        $nuevoUsuario->correo = $request->correo;
        $nuevoUsuario->nombre = $request->nombre;
        $nuevoUsuario->apellidos = $request->apellidos;
        $nuevoUsuario->contraseña = $request->contraseña;

        $nuevoUsuario->save();

        return response()->json(['msg'=> 'Usuario guardado con exito', 'estado'], 201);

    }