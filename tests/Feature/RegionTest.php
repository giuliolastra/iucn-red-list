<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class RegionTest extends TestCase
{
    public function test_region(): void
    {
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

        $response = $this->get('/region');

        $response->assertStatus(200);
    }
}
