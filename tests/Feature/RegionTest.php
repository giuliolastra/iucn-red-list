<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class RegionTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_unauthenticated(): void
    {
        $response = $this->get('/region');
        $response->assertStatus(302);
    }

    public function test_authenticated(): void
    {
        $user = User::factory()->create();

        Http::fake([
            'https://apiv3.iucnredlist.org/api/v3/region/list*' => Http::response([
                "count" => 3,
                "results" => [
                    [
                        "name" => "Eastern Africa",
                        "identifier" => "eastern_africa"
                    ],
                    [
                        "name" => "Northeastern Africa",
                        "identifier" => "northeastern_africa"
                    ],
                    [
                        "name" => "Central Africa",
                        "identifier" => "central_africa"
                    ],
                ]
            ])
        ]);

        $response = $this
            ->actingAs($user)
            ->get('/region');

        $response->assertStatus(200);
    }
}
