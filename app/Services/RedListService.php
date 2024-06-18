<?php

namespace App\Services;

use App\Models\Country;
use App\Models\Species;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

/**
 * @todo API_KEY on .env
 */
class RedListService
{
    private const BASE_URL = 'https://apiv3.iucnredlist.org/api/v3/';
    private const API_KEY = '9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee';

    public function __construct()
    {
    }

    public function fetchCountries(): array
    {
        return $this->getCollectionFromUri('country/list')
            ->mapInto(Country::class)->all();
    }


    public function getSpeciesByCountry(string $isoCode): array
    {
        return $this->getCollectionFromUri('country/getspecies/' . $isoCode, 'result')
            ->mapInto(Species::class)->all();
    }

    private function getCollectionFromUri(string $uri, string $key = 'results'): Collection
    {
        return collect(Http::get(self::BASE_URL . $uri . '?token=' . self::API_KEY)->json($key));
    }
}
