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
        'kingdom_name',
        'phylum_name',
        'class_name',
        'order_name',
        'family_name',
        'genus_name',
        'taxonomic_authority',
        'infra_rank',
        'infra_name',
        'population',
        'category',
        'main_common_name',
        'subspecies',
        'rank',
        'subpopulation',
        'conservation_measures'
    ];
}
