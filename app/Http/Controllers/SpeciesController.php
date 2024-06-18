<?php

namespace App\Http\Controllers;

use App\Services\RedListService;
use Inertia\Inertia;

class SpeciesController extends Controller
{
    public function listByCountry(string $isoCode, RedListService $redListService)
    {
        return Inertia::render('Species/List',  [
            'isocode' => $isoCode,
            'species' => $redListService->getSpeciesByCountry($isoCode)
        ]);
    }
}
