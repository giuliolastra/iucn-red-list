<?php

namespace App\Services;

use App\Models\ConservationMeasure;
use App\Models\Country;
use App\Models\Region;
use App\Models\Species;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

/**
 * @todo API_KEY on .env
 */
class RedListService
{
    private const BASE_URL = 'https://apiv3.iucnredlist.org/api/v3/';

    public function getCountries(): array
    {
        return Cache::remember('countries', 3600, function () {
            return $this->getCollectionFromUri('country/list', 'results')
                ->mapInto(Country::class)->all();
        });
    }

    public function getRegions(): array
    {
        return Cache::remember('regions', 3600, function () {
            return $this->getCollectionFromUri('region/list', 'results')
                ->mapInto(Region::class)->all();
        });
    }

    public function getSpecies(): array
    {
        return Cache::remember('species', 3600, function () {
            return $this->getCollectionFromUri('species/page/0')
                ->mapInto(Species::class)->all();
        });
    }

    public function getSpeciesByCountry(string $isoCode): array
    {
        return Cache::remember('country.' . $isoCode, 3600, function () use ($isoCode) {
            return $this->getCollectionFromUri('country/getspecies/' . $isoCode)
                ->mapInto(Species::class)->all();
        });
    }

    private function getCollectionFromUri(string $uri, string $key = 'result'): Collection
    {
        return collect(Http::get(self::BASE_URL . $uri . '?token=' . self::getApiKey())->json($key));
    }

    public function getSpeciesByRegion(string $identifier): array
    {
        return Cache::remember('region.' . $identifier, 3600, function () use ($identifier) {
            return $this->getCollectionFromUri('species/region/' . $identifier . '/page/0')
                ->mapInto(Species::class)->all();
        });
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
        return Cache::remember('conservation-measure.' . $speciesID, 3600, function () use ($speciesID) {
            return $this->getCollectionFromUri('measures/species/id/' . $speciesID)
                ->mapInto(ConservationMeasure::class)->all();
        });
    }

    public static function getApiKey(): string
    {
        return env('RED_LIST_API_KEY', '');
    }

}
