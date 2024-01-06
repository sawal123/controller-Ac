<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddRequest;
use App\Models\Ruangan;
use Illuminate\Http\Request;

class AcController extends Controller
{
    public function addController(Request $request){
      $request->validate([
        'nama'=> 'required|string',
        'kode'=> 'required|string'
      ]);

      Ruangan::create([
        'nama'=> $request->nama,
        'kode'=> $request->kode
      ]);
      
      return redirect('/addRuangan');
     
    }
}
