<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Species extends Model
{
    use HasFactory;

    protected $primaryKey = 'taxonid';
    public $incrementing = false;
    protected $keyType = 'int';

    protected $fillable = [
        'taxonid',
        'scientific_name',
        'subspecies',
        'rank',
        'subpopulation',
        'category'
    ];
}
