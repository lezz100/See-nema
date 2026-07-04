<?php

namespace App\Http\Controllers;

use App\Http\Resources\FilmResource;
use App\Models\Film;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\JsonResponse;

class FilmController extends Controller
{
    /**
     * Display a listing of upcoming films.
     */
    public function index(): AnonymousResourceCollection
    {
        $films = Film::orderBy('release_date', 'asc')->get();

        return FilmResource::collection($films);
    }

    /**
     * Display the specified film details.
     */
    public function show(string $slug): JsonResource|JsonResponse
    {
        $film = Film::where('slug', $slug)->first();

        if (!$film) {
            return response()->json(['message' => 'Film not found'], 404);
        }

        return new FilmResource($film);
    }
}
