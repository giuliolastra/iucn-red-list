<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class CountryTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_unauthenticated(): void
    {
        $response = $this->get('/country');
        $response->assertStatus(302);
    }

    public function test_authenticated(): void
    {
        $user = User::factory()->create();

        Http::fake([
            'https://apiv3.iucnredlist.org/api/v3/country/list*' => Http::response([
                "count" => 3,
                "results" => [
                    [
                        "isocode" => "UZ",
                        "country" => "Uzbekistan"
                    ],
                    [
                        "isocode" => "QA",
                        "country" => "Qatar"
                    ],
                    [
                        "isocode" => "SA",
                        "country" => "Saudi Arabia"
                    ]
                ]
            ])
        ]);

        $response = $this
            ->actingAs($user)
            ->get('/country');

        $response->assertStatus(200);
    }
}
