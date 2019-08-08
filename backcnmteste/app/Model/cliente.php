<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $table = "cliente";

    public function pedidosCliente(){
        return self::select("*")
                ->join("pedido","pedido.id_cliente","=","cliente.id")
                ->get()->toarray();
    }

}
