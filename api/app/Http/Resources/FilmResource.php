<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FilmResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'genre' => $this->genre,
            'logline' => $this->logline,
            'synopsis' => $this->synopsis,
            'release_date' => $this->release_date,
            'director' => $this->director,
            'cast' => $this->cast,
            'trailer_url' => $this->trailer_url,
            'poster_image_path' => $this->poster_image_path,
            'poster_url' => $this->poster_image_path ? url($this->poster_image_path) : null,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
