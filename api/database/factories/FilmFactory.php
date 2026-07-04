<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FilmFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->unique()->sentence(3);

        return [
            'title' => $title,
            'slug' => \Illuminate\Support\Str::slug($title),
            'genre' => $this->faker->randomElement(['Sci-Fi', 'Drama', 'Thriller', 'Animated']),
            'logline' => $this->faker->sentence(12),
            'synopsis' => $this->faker->paragraph(4),
            'release_date' => $this->faker->dateTimeBetween('+1 month', '+1 year')->format('Y-m-d'),
            'director' => $this->faker->name(),
            'cast' => implode(', ', [$this->faker->name(), $this->faker->name(), $this->faker->name()]),
            'trailer_url' => 'https://www.youtube.com/embed/'.$this->faker->regexify('[A-Za-z0-9_-]{11}'),
            'poster_image_path' => '/images/'.\Illuminate\Support\Str::slug($title).'.png',
        ];
    }
}
