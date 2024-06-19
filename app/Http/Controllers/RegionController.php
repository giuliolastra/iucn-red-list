<?php

namespace App\Http\Controllers;

use App\Services\RedListService;
use Inertia\Inertia;
use Inertia\Response;

class RegionController extends Controller
{
    public function list(RedListService $redListService): Response
    {
        return Inertia::render('Region/List', ['regions' => $redListService->getRegions()]);
    }
}
