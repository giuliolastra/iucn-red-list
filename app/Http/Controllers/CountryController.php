<?php

namespace App\Http\Controllers;

use App\Services\RedListService;
use Inertia\Inertia;
use Inertia\Response;

class CountryController extends Controller
{
    public function list(RedListService $redListService): Response
    {
        return Inertia::render('Country/List', ['countries' => $redListService->getCountries()]);
    }
}
