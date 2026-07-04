<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_valid_contact_inquiry_is_persisted(): void
    {
        $response = $this->postJson('/api/contacts', [
            'name' => 'Ada Lovelace',
            'email' => 'ada@example.com',
            'message' => 'Interested in a premiere consultation.',
            'type' => 'contact',
        ]);

        $response->assertStatus(201);
        $response->assertJson(['success' => true]);
        $this->assertDatabaseHas('contacts', [
            'email' => 'ada@example.com',
            'type' => 'contact',
        ]);
    }

    public function test_a_valid_newsletter_signup_is_persisted(): void
    {
        $response = $this->postJson('/api/contacts', [
            'email' => 'subscriber@example.com',
            'type' => 'newsletter',
        ]);

        $response->assertStatus(201);
        $response->assertJson(['success' => true]);
        $this->assertDatabaseHas('contacts', [
            'email' => 'subscriber@example.com',
            'type' => 'newsletter',
        ]);
    }

    public function test_a_contact_inquiry_missing_required_fields_is_rejected(): void
    {
        $response = $this->postJson('/api/contacts', [
            'type' => 'contact',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['name', 'email', 'message']);
    }

    public function test_a_newsletter_signup_with_an_invalid_email_is_rejected(): void
    {
        $response = $this->postJson('/api/contacts', [
            'email' => 'not-an-email',
            'type' => 'newsletter',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['email']);
    }
}
