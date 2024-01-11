<?php

namespace App\Http\Controllers;

use App\Models\Ruangan;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function Dashboard()
    {
        $ruangan = Ruangan::all();
        // dd($ruangan);
        return inertia('Dashboard', [
            'ruangan' => $ruangan
        ]);
    }

    public function addRuangan()
    {
        return inertia('AddRuangan');
    }
    public function editRuangan($id)
    {
        $ruangan = Ruangan::where('id', $id)->first();
        return inertia('EditRuangan', ['ruangan' => $ruangan]);
    }
    public function ControllAc($id)
    {
        $data = Ruangan::where('id', $id)->first();
        // dd($data);
        return inertia('ControlPage', [
            'data' => $data
        ]);
    }
}
