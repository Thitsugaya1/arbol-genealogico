<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CuentaController extends Controller
{
    //Metodo que permite el almacenaje de los datos de una nueva cuenta a registrar
    public function nuevoUsuario(Request $request)
    {
        //Variables necesarias que fueron ingresadas
        $input = $request->only(['correo', 'nombre', 'apellidos', 'contrasena']);
        //Verifica el buen ingreso de datos en los campos requeridos
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255',
            'correo' => 'required|string|email|max:255|unique:usuarios',
            'ap_paterno' => 'required|string|max:255',
            'ap_materno' => 'required|string|max:255',
            'contrasena' => 'required|string|max:255',
        ]);
        //En caso de una falla en los datos capturados se retorna un codigo de respuesta de error de semantica
        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()->all()], 422);
        }
        //Se crea un objeto con los datos capturados
        $nuevoUsuario = new \App\Usuario();
        $nuevoUsuario->correo = $request->correo;
        $nuevoUsuario->nombre = $request->nombre;
        $nuevoUsuario->ap_paterno = $request->ap_paterno;
        $nuevoUsuario->ap_materno = $request->ap_materno;
        $nuevoUsuario->contrasena = \Hash::make($request->contrasena); //Se pone la contraseña en modo cifrado
        //guarda el objeto en la base de datos
        $nuevoUsuario->save();
        //retorna un mensaje informando que la operacion fue exitosa, junto a un codigo de respuesta de peticion completada
        return response()->json(['msg'=> 'Usuario guardado con exito', 'estado'], 201);

    }
    /**
     * Metodo para iniciar sesion.
     * @author Bastian Sepulveda, Jesus Moris
     */
    public function iniciarSesion(Request $request)
    {
        $input = $request->only(['correo','contrasena']);
        $validator = Validator::make($request->all(), [
            'correo' => 'required|string|max:255',
            'contrasena' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors'=>$validator->errors()->all()], 422);
        }
        // Se obtiene el usuario segun su correo
        $user = \App\Usuario::where('correo', $request->correo)->first();
        // Si el usuario existe se comprueba la clave con la clave recibida
        if($user){
            if (\Hash::check($request->contrasena, $user->contrasena)) {
                // Se genera el token de acceso
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                // Se formula una respuesta que contenga lo necesario para el front.
                $response = [
                    'token' => $token,
                    'expire_at' => time()+3600*24,
                    'usuario' => $user,
                ];
                // Se retorna la respuesta en json.
                return response()->json($response, 200);
            }else{
                // Si la clave es erronea, se retorna el error.
                return response()->json(['msg' => 'Contraseña invalida'], 422);
            }
        }

    }
}
