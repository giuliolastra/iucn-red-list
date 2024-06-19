<?php

namespace App\Services;

use App\Models\ConservationMeasure;
use App\Models\Country;
use App\Models\Region;
use App\Models\Species;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

/**
 * @todo API_KEY on .env
 */
class RedListService
{
    private string $json = '[{"taxonid":3,"kingdom_name":"ANIMALIA","phylum_name":"MOLLUSCA","class_name":"GASTROPODA","order_name":"STYLOMMATOPHORA","family_name":"ENDODONTIDAE","genus_name":"Aaadonta","scientific_name":"Aaadonta angaurana","taxonomic_authority":"Solem, 1976","infra_rank":null,"infra_name":null,"population":null,"category":"CR","main_common_name":null},{"taxonid":4,"kingdom_name":"ANIMALIA","phylum_name":"MOLLUSCA","class_name":"GASTROPODA","order_name":"STYLOMMATOPHORA","family_name":"ENDODONTIDAE","genus_name":"Aaadonta","scientific_name":"Aaadonta constricta","taxonomic_authority":"(Semper, 1874)","infra_rank":null,"infra_name":null,"population":null,"category":"EN","main_common_name":null},{"taxonid":5,"kingdom_name":"ANIMALIA","phylum_name":"MOLLUSCA","class_name":"GASTROPODA","order_name":"STYLOMMATOPHORA","family_name":"ENDODONTIDAE","genus_name":"Aaadonta","scientific_name":"Aaadonta fuscozonata","taxonomic_authority":"(Beddome, 1889)","infra_rank":null,"infra_name":null,"population":null,"category":"EN","main_common_name":null},{"taxonid":6,"kingdom_name":"ANIMALIA","phylum_name":"MOLLUSCA","class_name":"GASTROPODA","order_name":"STYLOMMATOPHORA","family_name":"ENDODONTIDAE","genus_name":"Aaadonta","scientific_name":"Aaadonta irregularis","taxonomic_authority":"Semper, 1874","infra_rank":null,"infra_name":null,"population":null,"category":"CR","main_common_name":null},{"taxonid":7,"kingdom_name":"ANIMALIA","phylum_name":"MOLLUSCA","class_name":"GASTROPODA","order_name":"STYLOMMATOPHORA","family_name":"ENDODONTIDAE","genus_name":"Aaadonta","scientific_name":"Aaadonta kinlochi","taxonomic_authority":"Solem, 1976","infra_rank":null,"infra_name":null,"population":null,"category":"CR","main_common_name":null},{"taxonid":8,"kingdom_name":"ANIMALIA","phylum_name":"MOLLUSCA","class_name":"GASTROPODA","order_name":"STYLOMMATOPHORA","family_name":"ENDODONTIDAE","genus_name":"Aaadonta","scientific_name":"Aaadonta pelewana","taxonomic_authority":"Solem, 1976","infra_rank":null,"infra_name":null,"population":null,"category":"CR","main_common_name":null}]';
    private const BASE_URL = 'https://apiv3.iucnredlist.org/api/v3/';
    private const API_KEY = '9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee';

    public function getCountries(): array
    {
        return $this->getCollectionFromUri('country/list', 'results')
            ->mapInto(Country::class)->all();
    }

    public function getRegions(): array
    {
        return $this->getCollectionFromUri('region/list', 'results')
            ->mapInto(Region::class)->all();
    }

    public function getSpecies(): array
    {
//        return collect(json_decode($this->json, true))->mapInto(Species::class)->all();
        return $this->getCollectionFromUri('species/page/0')
            ->mapInto(Species::class)->all();
    }

    public function getSpeciesByCountry(string $isoCode): array
    {
        return $this->getCollectionFromUri('country/getspecies/' . $isoCode)
            ->mapInto(Species::class)->all();
    }

    private function getCollectionFromUri(string $uri, string $key = 'result'): Collection
    {
        return collect(Http::get(self::BASE_URL . $uri . '?token=' . self::API_KEY)->json($key));
    }

    public function getSpeciesByRegion(string $identifier): array
    {
        return $this->getCollectionFromUri('species/region/' . $identifier . '/page/0')
            ->mapInto(Species::class)->all();
    }

    public function filterSpeciesByClass(string $class): array
    {
        return array_values(array_filter($this->getSpecies(), function (Species $species) use ($class) {
            return strtolower($species->class_name) === strtolower($class);
        }));
    }

    public function filterSpeciesByCategory(string $category): array
    {
        return array_values(array_filter($this->getSpecies(), function (Species $species) use ($category) {
            return strtolower($species->category) === strtolower($category);
        }));
    }

    public function getSpeciesConservationMeasure(string $speciesID): array
    {
        return $this->getCollectionFromUri('measures/species/id/' . '181008073')
            ->mapInto(ConservationMeasure::class)->all();
    }

}
