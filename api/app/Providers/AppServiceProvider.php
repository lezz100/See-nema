<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        JsonResource::withoutWrapping();

        // Render (and most PaaS hosts) terminate SSL at a proxy in front of the
        // container, so the app itself sees plain HTTP requests. Without this,
        // generated URLs (like FilmResource's poster_url) come back as http://,
        // which gets blocked as mixed content on an HTTPS page.
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }
    }
}
