import {Config} from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

export type CountryType = {
    isocode: string,
    country: string,
}

export type SpeciesType = {
    taxonid: string;
    category: string;
    rank: any;
    scientific_name: string;
    subpopulation: any;
    subspecies: any;
};
