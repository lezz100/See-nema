FROM php:8.2-cli

# System packages + PHP extensions Laravel and the Postgres connection need
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpq-dev \
    libzip-dev \
    && docker-php-ext-install pdo pdo_pgsql zip \
    && rm -rf /var/lib/apt/lists/*

# Composer itself (copied straight from its own official image, not installed via a script)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .

RUN composer install --optimize-autoloader --no-dev --no-interaction

# Render sets $PORT at runtime; migrate first (safe to repeat — Laravel skips
# already-applied migrations), then start the server bound to that port.
CMD php artisan migrate --force && php artisan serve --host 0.0.0.0 --port $PORT
