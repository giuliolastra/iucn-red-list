<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $primaryKey = 'isocode';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'isocode',
        'country'
    ];
}
