<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\ContactController;

Route::get('/films', [FilmController::class, 'index']);
Route::get('/films/{slug}', [FilmController::class, 'show']);
Route::post('/contacts', [ContactController::class, 'store'])->middleware('throttle:20,1');
