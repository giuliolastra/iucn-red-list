<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class CountryTest extends TestCase
{

    public function test_country(): void
    {
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

        $response = $this->get('/country');

        $response->assertStatus(200);
    }
}
