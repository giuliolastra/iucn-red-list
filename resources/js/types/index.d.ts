import {Config} from 'ziggy-js';


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    ziggy: Config & { location: string };
};

export type CountryType = {
    isocode: string,
    country: string,
}

export type RegionType = {
    identifier: string,
    name: string,
}

export type SpeciesType = {
    taxonid: string|null;
    scientific_name: string|null;
    category: CategorySpecies;
    rank: any;
    subpopulation: any;
    subspecies: any;
    kingdom_name: any;
    phylum_name: any;
    class_name: any;
    order_name: any;
    family_name: any;
    genus_name: any;
    taxonomic_authority: any;
    infra_rank: any;
    infra_name: any;
    population: any;
    main_common_name: any;
    conservation_measures: string|null;
};

export enum CategorySpecies {
    DD = 'DD',
    LC = 'LC',
    NT = 'NT',
    VU = 'VU',
    EN = 'EN',
    CR = 'CR',
    EW = 'EW',
    EX = 'EX',
    LRlc = 'LRlc',
    LRnt = 'LRnt',
    LRcd = 'LRcd',
}
