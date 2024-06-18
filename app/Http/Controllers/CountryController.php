<?php

namespace App\Http\Controllers;

use App\Services\RedListService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CountryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Country/Index');
    }

    public function list(RedListService $redListService): Response
    {
        return Inertia::render('Country/List',  ['countries' => $redListService->fetchCountries()]);
    }
}
