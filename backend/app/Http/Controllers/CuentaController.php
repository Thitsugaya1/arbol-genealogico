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
        $input = $request->only(['correo', 'nombre', 'ap_paterno', 'ap_materno', 'contrasena']);
        //Arreglo con los mensajes de error en español
        $mensajes_error = [
            'nombre.required'=> 'El nombre es obligatorio',
            'nombre.string'=> 'El nombre debe contener al menos una letra',
            'nombre.max'=> 'El nombre es demasiado largo',
            'nombre.min'=> 'El nombre es demasiado corto',
            'nombre.regex'=> 'El nombre solo debe contener letras',

            'correo.required'=> 'El correo es obligatorio',
            'correo.string'=> 'El correo debe tener al menos una letra',
            'correo.email'=> 'El correo no sigue el formato @dominio.tld',
            'correo.max'=> 'El correo es demasiado largo',
            'correo.min'=> 'El correo es demasiado corto',
            'correo.unique'=> 'El correo ya esta en uso',

            'ap_paterno.required'=> 'El apellido paterno es obligatorio',
            'ap_paterno.string'=> 'El apellido paterno debe contener al menos una letra',
            'ap_paterno.max'=> 'El apellido paterno es demasiado largo',
            'ap_paterno.min'=> 'El apellido paterno es demasiado corto',

            'ap_materno.required'=> 'El apellido materno es obligatorio',
            'ap_materno.string'=> 'El apellido materno debe contener al menos una letra',
            'ap_materno.max'=> 'El apellido materno es demasiado largo',
            'ap_materno.min'=> 'El apellido materno es demasiado corto',

            'contrasena.required'=> 'El contraseña es obligatoria',
            'contrasena.string'=> 'La contraseña debe contener al menos una letra',
            'contrasena.max'=> 'La contraseña es demasiado larga. Máximo 255 caracteres',
            'contrasena.min'=> 'La contraseña es demasiado corta. Ingrese al menos 4 caracteres'
        ];
        //Verifica el buen ingreso de datos en los campos requeridos
        //En caso de una falla en los datos capturados se retorna un codigo de respuesta de error de semantica
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255|min:2|regex:/(^([a-zA-Z]+)?$)/u',
            'correo' => array('required','string','email','max:255','min:8','unique:usuarios'),
            'ap_paterno' => 'required|string|max:255|min:2|regex:/(^([a-zA-Z]+)?$)/u',
            'ap_materno' => 'required|string|max:255|min:2|regex:/(^([a-zA-Z]+)?$)/u',
            'contrasena' => 'required|string|max:255|min:4',
        ], $mensajes_error);
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
        return response()->json(['msg'=> 'Usuario guardado con exito'], 201);
    }


    /**
     * Metodo para iniciar sesion.
     * @author Bastian Sepulveda, Jesus Moris
     */
    public function iniciarSesion(Request $request)
    {
        // Variables ingresadas en el request
        $input = $request->only(['correo','contrasena']);

        $mensajes_error = [
            'correo.exists' => 'El correo no existe en la base de datos',
            'correo.required'=> 'El correo es obligatorio',
            'correo.string'=> 'El correo debe tener al menos una letra',
            'correo.email'=> 'El correo no sigue el formato @dominio.tld',
            'correo.max'=> 'El correo es demasiado largo',
            'correo.min'=> 'El correo es demasiado corto',
            'contrasena.required'=> 'La contraseña es obligatoria'
        ];

        $validator = Validator::make($request->all(), [
            'correo' => 'required|string|max:255|exists:usuarios',
            'contrasena' => 'required|string|max:255',
        ], $mensajes_error);



        // Se validan lo errores
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
