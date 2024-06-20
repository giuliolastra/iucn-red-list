<?php

namespace App\Http\Controllers;

use App\Services\RedListService;
use Inertia\Inertia;
use Inertia\Response;

class SpeciesController extends Controller
{
    public function list(RedListService $redListService): Response
    {
        return Inertia::render('Species/List', [
            'species' => $redListService->getSpecies()
        ]);
    }

    public function listByCountry(RedListService $redListService, string $isoCode): Response
    {
        return Inertia::render('Species/List', [
            'title' => $isoCode,
            'species' => $redListService->getSpeciesByCountry($isoCode)
        ]);
    }

    public function listByRegion(RedListService $redListService, string $identifier): Response
    {
        return Inertia::render('Species/List', [
            'title' => $identifier,
            'species' => $redListService->getSpeciesByRegion($identifier)
        ]);
    }

    public function filterByClass(RedListService $redListService, string $class): Response
    {
        return Inertia::render('Species/List', [
            'title' => 'Class: ' . $class,
            'species' => $redListService->filterSpeciesByClass($class)
        ]);
    }

    public function filterByCategory(RedListService $redListService, string $category): Response
    {
        // Limiting results to 5 due to high api load
        $SpeciesByCategory = array_slice($redListService->filterSpeciesByCategory($category), 0, 5);

        foreach ($SpeciesByCategory as $species) {
            $species->conservation_measures = $this->getTitleFromCM($redListService->getSpeciesConservationMeasure($species->taxonid));
        }

        return Inertia::render('Species/List', [
            'title' => 'Category: ' . $category,
            'species' => $SpeciesByCategory
        ]);
    }

    private function getTitleFromCM(array $conservationMeasures): string
    {
        $title = '';
        foreach ($conservationMeasures as $conservationMeasure) {
            $title .= $conservationMeasure->title . ', ';
        }

        return substr($title, 0, -2);
    }
}
