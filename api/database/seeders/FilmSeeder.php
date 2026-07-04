<?php

namespace Database\Seeders;

use App\Models\Film;
use Illuminate\Database\Seeder;

class FilmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $films = [
            [
                'title' => 'Echoes of Horizon',
                'slug' => 'echoes-of-horizon',
                'genre' => 'Sci-Fi / Thriller',
                'logline' => 'A deep-space transmission reveals a countdown that matches the heartbeats of five people on Earth.',
                'synopsis' => 'When an astrophysicist decodes a mysterious signal from the edge of the galaxy, she discovers a chilling correlation: the signal contains a rhythmic pulse that is synchronized with the heartbeats of five seemingly ordinary strangers. As the countdown nears zero, they must unite to uncover the transmission\'s source before their hearts stop.',
                'release_date' => '2026-10-14',
                'director' => 'Marcus Vance',
                'cast' => 'Priya Anand, Damon Osei, Naomi Voss',
                'trailer_url' => 'https://www.youtube.com/embed/KC4r2lm8kr8', // Sintel (Blender Foundation, CC-licensed)
                'poster_image_path' => '/images/echoes-of-horizon.png',
            ],
            [
                'title' => 'The Midnight Syndicate',
                'slug' => 'the-midnight-syndicate',
                'genre' => 'Neo-Noir / Crime',
                'logline' => 'In a city where night never ends, an investigator has 12 hours to solve a murder that hasn\'t happened yet.',
                'synopsis' => 'Beneath the neon glow of a perpetual dusk, detective Leo Mercer is hired by a mysterious client to investigate a murder. The catch? The victim is still alive, and the crime is scheduled to happen at midnight. To prevent the inevitable, Leo must navigate the dark underbelly of the city\'s elite.',
                'release_date' => '2026-12-04',
                'director' => 'Renata Solis',
                'cast' => 'Elliot Marsh, Dahlia Reyes, Victor Okonkwo',
                'trailer_url' => 'https://www.youtube.com/embed/R6MlUcmOul8', // Tears of Steel (Blender Foundation, CC-licensed)
                'poster_image_path' => '/images/the-midnight-syndicate.png',
            ],
            [
                'title' => 'Whispers in the Amber',
                'slug' => 'whispers-in-the-amber',
                'genre' => 'Historical Drama / Romance',
                'logline' => 'A lost correspondence from WWII resurfaces, threatening to dismantle a modern European dynasty.',
                'synopsis' => 'When archivist Sophie Laurent discovers a cache of letters hidden inside a vintage amber box, she uncovers a passionate, forbidden affair between a resistance fighter and a German officer. As she traces the descendants, she realizes the truth could shatter one of France\'s most prominent political families.',
                'release_date' => '2027-02-18',
                'director' => 'Camille Duvall',
                'cast' => 'Adrien Fontaine, Margot Lavelle, Julian Kessler',
                'trailer_url' => 'https://www.youtube.com/embed/ZWw1KfNzMRo', // Cosmos Laundromat (Blender Foundation, CC-licensed)
                'poster_image_path' => '/images/whispers-in-the-amber.png',
            ],
            [
                'title' => 'Stellar Drift',
                'slug' => 'stellar-drift',
                'genre' => 'Animated Space Adventure',
                'logline' => 'A young mechanic and a discarded maintenance droid embark on a journey to find the last active star.',
                'synopsis' => 'In a solar system where stars are dying one by one, Pip, a resourceful orbital mechanic, accidentally activates an ancient droid with a map to the Cradle of Creation. Together, they set off on a breathtaking, dangerous voyage across the stars to relight the cosmos.',
                'release_date' => '2027-05-20',
                'director' => 'Owen Marchetti',
                'cast' => 'Zoe Callahan, Malik Adebayo, Theo Bennett',
                'trailer_url' => 'https://www.youtube.com/embed/JiSuwJkJf7Y', // Big Buck Bunny (Blender Foundation, CC-licensed)
                'poster_image_path' => '/images/stellar-drift.png',
            ],
            [
                'title' => 'The Rift Trail',
                'slug' => 'the-rift-trail',
                'genre' => 'Sports / Drama',
                'logline' => 'An underdog marathon runner risks everything to qualify for the world championship in the high-altitude trails of Kenya.',
                'synopsis' => 'Kipchoge \'Kip\' Korir has spent his life running the red-dirt paths of Iten. When a renowned international coach discovers him, Kip is thrust into the ruthless world of professional marathon running. Facing injury, financial hardship, and fierce competitors, Kip must dig deep to run the race that could change his community\'s future forever.',
                'release_date' => '2027-08-12',
                'director' => 'Doreen Achieng',
                'cast' => 'Faith Chebet, Emmanuel Kiptoo, Grace Nyambura',
                'trailer_url' => 'https://www.youtube.com/embed/WhWc3b3KhnY', // Spring (Blender Foundation, CC-licensed)
                'poster_image_path' => '/images/the-rift-trail.png',
            ],
            [
                'title' => 'Shadows of the Savannah',
                'slug' => 'shadows-of-the-savannah',
                'genre' => 'Wildlife Thriller / Mystery',
                'logline' => 'A ranger tracks a legendary black panther while uncovering a high-tech poaching syndicate operating within Tsavo.',
                'synopsis' => 'In the dense wilderness of Tsavo East, ranger Amina Vance is assigned to track a rare black panther sighted after decades. However, her mission takes a dangerous turn when she encounters a sophisticated poaching network using military-grade surveillance and drones. She must navigate a deadly game of cat and mouse to protect the sanctuary.',
                'release_date' => '2027-11-05',
                'director' => 'Femi Adeyemi',
                'cast' => 'Zawadi Mwangi, Daniel Kamau, Njeri Wachira',
                'trailer_url' => 'https://www.youtube.com/embed/mN0zPOpADL4', // Agent 327: Operation Barbershop (Blender Foundation, CC-licensed)
                'poster_image_path' => '/images/shadows-of-the-savannah.png',
            ],
        ];

        foreach ($films as $film) {
            Film::updateOrCreate(['slug' => $film['slug']], $film);
        }
    }
}
