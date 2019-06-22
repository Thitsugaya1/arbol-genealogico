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

        //MEMO: Los objetos persona deben ser consultados en la base de datos para ver su existencia
        //Validador del nombre del arbol
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|min|min:1|max:255'
        ], $mensajes_error_nombre);

        //Se verifica la existencia de los atributos en el arreglo
        Assert::that($request->relaciones)->keyExists('persona1');
        Assert::that($request->relaciones)->keyExists('persona2');
        Assert::that($request->relaciones)->keyExists('tipoRelacion');

        if($user){
            if (\Hash::check($request->contrasena, $user->contrasena)) {

                $validator = Validator::make($request->all(), [
                    'relaciones->persona1' => 'required',//verificar si existe en la bdd
                    'relaciones->persona2' => 'required',//verificar si existe en la bdd
                    'relaciones->tipoRelacion' => 'required',//verificar si existe en la bdd
                ], $mensajes_error);
            }

        for($id = 0; $i < sizeof($request->relaciones); $id++)
        {
            $p1 = $request->relaciones->persona1;
            $p2 = $request->relaciones->persona2;
            $tRelacion = $request->relaciones->tipoRelacion;

            
            //ver si la persona existe en la bdd
            //validar sintaxis de los objetos

        }
    }
}
