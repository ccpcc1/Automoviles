<?php

use Illuminate\Database\Seeder;

class AutomovilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('automovils')->insert([
            'nombre'=>'mazda 3x',
            'modelo'=>2012,
            'precio'=>210000,
            'descripcion_reparacion'=>'daño electrico del vehiculo',
            'esta_reparado'=> false
        ]);
    }
}
