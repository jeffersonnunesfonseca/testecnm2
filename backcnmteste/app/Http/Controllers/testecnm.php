<?php

namespace App\Http\Controllers;
use App\Model\cliente;

use Illuminate\Http\Request;

class testecnm extends Controller
{
    public function index(){
        return "Ola";
    }

    public function returnDados(){
        $objCliente = new cliente();
        return json_encode($objCliente->pedidosCliente());
    }
}
