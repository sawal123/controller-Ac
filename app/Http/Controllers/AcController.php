<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddRequest;
use App\Models\Ruangan;
use Illuminate\Http\Request;

class AcController extends Controller
{
  public function addController(Request $request)
  {
    $request->validate([
      'nama' => 'required|string',
      'kode' => 'required|string'
    ]);

    Ruangan::create([
      'nama' => $request->nama,
      'kode' => $request->kode
    ]);

    return redirect(route('dashboard.add'))->with([
      'message' => 'Data Berhasil Ditambah'
    ]);
  }
  public function deleteController(Request $request)
  {
    $ruangan = Ruangan::where('id', $request->id)->first();
    $ruangan->delete();
    return redirect(route('dashboard'))->with([
      'message' => 'Data ' . $ruangan->nama . ' Berhasil DiHapus'
    ]);
  }
  public function editController(Request $request)
  {
    $id = $request->id;
    $nama = $request->nama;
    $kode = $request->kode;
    // dd($id);

    $ruangan = Ruangan::where('id', $id)->first();
    $ruangan->nama = $nama;
    $ruangan->kode = $kode;
    $ruangan->save();
    return redirect(route('dashboard.controll', ['id' => $id]))->with([
      'message' => 'Data Berhasil diUpdate!'
    ]);
  }
}
