<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'genre',
        'logline',
        'synopsis',
        'release_date',
        'director',
        'cast',
        'trailer_url',
        'poster_image_path',
    ];

    protected $casts = [
        'release_date' => 'date',
    ];
}
