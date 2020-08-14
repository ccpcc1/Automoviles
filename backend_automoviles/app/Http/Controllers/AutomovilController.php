<?php

namespace App\Http\Controllers;

use App\Automovil;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class AutomovilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('automovils')->get();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Automovil::create( $request->validated());
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Automovil  $automovil
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
       return DB::table('automovils')->where('id',$request->id)->first();
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Automovil  $automovil
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Automovil $automovil)
    {
       if($proyect->update($request->validated()))
       {
           return "actualizado correctamente";
       }
       else{
           return "sucedio un error";
       }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Automovil  $automovil
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $automovil=DB::table('automovils')->where('id',$request->id)->first();
        $automovil->delete();
    }
}
