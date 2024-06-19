<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\RegionController;
use App\Http\Controllers\SpeciesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::prefix('/profile')->group(function () {
        Route::get('', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    Route::prefix('/country')->group(function () {
        Route::get('', [CountryController::class, 'list'])->name('country');
    });

    Route::prefix('/region')->group(function () {
        Route::get('', [RegionController::class, 'list'])->name('region');
    });

    Route::prefix('/species')->group(function () {
        Route::get('', [SpeciesController::class, 'list'])->name('species');
        Route::get('/country/{isocode}', [SpeciesController::class, 'listByCountry'])->name('species.country');
        Route::get('/region/{identifier}', [SpeciesController::class, 'listByRegion'])->name('species.region');
        Route::get('/class/{class}', [SpeciesController::class, 'filterByClass'])->name('species.class');
        Route::get('/category/{category}', [SpeciesController::class, 'filterByCategory'])->name('species.category');
    });

});


require __DIR__ . '/auth.php';
