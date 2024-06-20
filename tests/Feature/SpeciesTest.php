<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class SpeciesTest extends TestCase
{
    public function test_list(): void
    {
        Http::fake([
            'https://apiv3.iucnredlist.org/api/v3/species/page/*' => Http::response([
                "count" => 3,
                "page" => "0",
                "result" => [
                    [
                        "taxonid" => 3,
                        "kingdom_name" => "ANIMALIA",
                        "phylum_name" => "MOLLUSCA",
                        "class_name" => "GASTROPODA",
                        "order_name" => "STYLOMMATOPHORA",
                        "family_name" => "ENDODONTIDAE",
                        "genus_name" => "Aaadonta",
                        "scientific_name" => "Aaadonta angaurana",
                        "taxonomic_authority" => "Solem, 1976",
                        "infra_rank" => null,
                        "infra_name" => null,
                        "population" => null,
                        "category" => "CR",
                        "main_common_name" => null
                    ],
                    [
                        "taxonid" => 4,
                        "kingdom_name" => "ANIMALIA",
                        "phylum_name" => "MOLLUSCA",
                        "class_name" => "GASTROPODA",
                        "order_name" => "STYLOMMATOPHORA",
                        "family_name" => "ENDODONTIDAE",
                        "genus_name" => "Aaadonta",
                        "scientific_name" => "Aaadonta constricta",
                        "taxonomic_authority" => "(Semper, 1874)",
                        "infra_rank" => null,
                        "infra_name" => null,
                        "population" => null,
                        "category" => "EN",
                        "main_common_name" => null
                    ],
                    [
                        "taxonid" => 5,
                        "kingdom_name" => "ANIMALIA",
                        "phylum_name" => "MOLLUSCA",
                        "class_name" => "GASTROPODA",
                        "order_name" => "STYLOMMATOPHORA",
                        "family_name" => "ENDODONTIDAE",
                        "genus_name" => "Aaadonta",
                        "scientific_name" => "Aaadonta fuscozonata",
                        "taxonomic_authority" => "(Beddome, 1889)",
                        "infra_rank" => null,
                        "infra_name" => null,
                        "population" => null,
                        "category" => "EN",
                        "main_common_name" => null
                    ]
                ]
            ])
        ]);

        $response = $this->get('/species');

        $response->assertStatus(200);
    }

    public function test_region_europe(): void
    {
        Http::fake([
            'https://apiv3.iucnredlist.org/api/v3/species/region/europe/*' => Http::response([
                "count" => 2,
                "page" => "0",
                "result" => [
                    [
                        "taxonid" => 59,
                        "kingdom_name" => "ANIMALIA",
                        "phylum_name" => "MOLLUSCA",
                        "class_name" => "GASTROPODA",
                        "order_name" => "STYLOMMATOPHORA",
                        "family_name" => "VALLONIIDAE",
                        "genus_name" => "Acanthinula",
                        "scientific_name" => "Acanthinula spinifera",
                        "taxonomic_authority" => "Mousson, 1872",
                        "infra_rank" => null,
                        "infra_name" => null,
                        "population" => null,
                        "category" => "DD",
                        "main_common_name" => null
                    ],
                    [
                        "taxonid" => 81,
                        "kingdom_name" => "ANIMALIA",
                        "phylum_name" => "CHORDATA",
                        "class_name" => "ACTINOPTERYGII",
                        "order_name" => "SALMONIFORMES",
                        "family_name" => "SALMONIDAE",
                        "genus_name" => "Salmo",
                        "scientific_name" => "Salmo ohridanus",
                        "taxonomic_authority" => "Steindachner, 1892",
                        "infra_rank" => null,
                        "infra_name" => null,
                        "population" => null,
                        "category" => "VU",
                        "main_common_name" => null
                    ]
                ]
            ])
        ]);

        $response = $this->get('/species/region/europe');

        $response->assertStatus(200);
    }

    public function test_country_az(): void
    {
        Http::fake([
            'https://apiv3.iucnredlist.org/api/v3/country/getspecies/az*' => Http::response([
                "count" => 2,
                "country" => "US",
                "subcountry" => "MAS-00",
                "result" => [
                    [
                        "taxonid" => 42293,
                        "scientific_name" => "Abies nordmanniana",
                        "subspecies" => null,
                        "rank" => null,
                        "subpopulation" => null,
                        "category" => "LC"
                    ],
                    [
                        "taxonid" => 196098,
                        "scientific_name" => "Abies nordmanniana subsp. nordmanniana",
                        "subspecies" => "nordmanniana",
                        "rank" => "subsp.",
                        "subpopulation" => null,
                        "category" => "LC"
                    ],
                ]
            ])
        ]);

        $response = $this->get('/species/country/az');

        $response->assertStatus(200);
    }
}
