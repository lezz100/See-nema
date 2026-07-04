<?php

namespace Tests\Feature;

use App\Models\Film;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FilmApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_returns_films_ordered_by_release_date(): void
    {
        $later = Film::factory()->create(['release_date' => '2027-06-01']);
        $sooner = Film::factory()->create(['release_date' => '2026-09-01']);

        $response = $this->getJson('/api/films');

        $response->assertStatus(200);
        $response->assertJsonPath('0.id', $sooner->id);
        $response->assertJsonPath('1.id', $later->id);
    }

    public function test_index_includes_a_poster_url(): void
    {
        Film::factory()->create(['poster_image_path' => '/images/example.png']);

        $response = $this->getJson('/api/films');

        $response->assertStatus(200);
        $response->assertJsonFragment(['poster_url' => url('/images/example.png')]);
    }

    public function test_show_returns_the_matching_film(): void
    {
        $film = Film::factory()->create(['slug' => 'test-film']);

        $response = $this->getJson('/api/films/test-film');

        $response->assertStatus(200);
        $response->assertJsonPath('title', $film->title);
    }

    public function test_show_returns_404_for_an_unknown_slug(): void
    {
        $response = $this->getJson('/api/films/does-not-exist');

        $response->assertStatus(404);
        $response->assertJson(['message' => 'Film not found']);
    }
}
