<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class DashboardTest extends TestCase
{

    public function test_dashboard(): void
    {
        $response = $this->get('/dashboard');

        $response->assertStatus(200);
    }
}
