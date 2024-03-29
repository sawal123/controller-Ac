<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\AcController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [Controller::class, 'Dashboard'])->name('dashboard');
    Route::get('/addRuangan', [Controller::class, 'addRuangan'])->name('dashboard.add');
    Route::get('/editRuangan/{id}', [Controller::class, 'editRuangan'])->name('dashboard.edit');
    Route::get('/controllAc/{id}', [Controller::class, 'ControllAc'])->name('dashboard.controll');
    Route::post('/submitAdd', [AcController::class, 'addController'])->name('dashboard.submitAdd');
    Route::post('/submitEdit', [AcController::class, 'editController'])->name('dashboard.submitEdit');
    Route::post('/deleteAc/{id}', [AcController::class, 'deleteController'])->name('dashboard.deleteAc');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
