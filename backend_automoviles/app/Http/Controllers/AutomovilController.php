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
        return DB::table('users')->get();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Automovil  $automovil
     * @return \Illuminate\Http\Response
     */
    public function show(Automovil $automovil)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Automovil  $automovil
     * @return \Illuminate\Http\Response
     */
    public function destroy(Automovil $automovil)
    {
        //
    }
}
