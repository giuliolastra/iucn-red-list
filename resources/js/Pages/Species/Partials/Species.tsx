import {SpeciesType} from "@/types";
import {PropsWithChildren} from "react";

export default function Species({species}: PropsWithChildren<{species: SpeciesType}>) {

    return (
        <div className="min-w-0 mx-auto gap-x-2 flex-auto justify-items-center ">
            {species.taxonid ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">TaxonID: <strong>{species.taxonid}</strong></div>) : <></>}
            {species.main_common_name ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Main Common Name: <strong>{species.main_common_name}</strong></div>) : <></>}
            {species.scientific_name ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Scientific Name: <strong>{species.scientific_name}</strong></div>) : <></>}
            {species.kingdom_name ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Kingdom Name: <strong>{species.kingdom_name}</strong></div>) : <></>}
            {species.phylum_name ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Phylum Name: <strong>{species.phylum_name}</strong></div>) : <></>}
            {species.class_name ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Class Name: <strong>{species.class_name}</strong></div>) : <></>}
            {species.order_name ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Order Name: <strong>{species.order_name}</strong></div>) : <></>}
            {species.family_name ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Family Name: <strong>{species.family_name}</strong></div>) : <></>}
            {species.genus_name ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Genus Name: <strong>{species.genus_name}</strong></div>) : <></>}
            {species.taxonomic_authority ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Taxonomic Authority: <strong dangerouslySetInnerHTML={{__html: species.taxonomic_authority}}/></div>) : <></>}
            {species.infra_rank ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Infra Rank: <strong>{species.infra_rank}</strong></div>) : <></>}
            {species.infra_name ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Infra Name: <strong>{species.infra_name}</strong></div>) : <></>}
            {species.population ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Population: <strong>{species.population}</strong></div>) : <></>}
            {species.category ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Category: <strong>{species.category}</strong></div>) : <></>}
            {species.subspecies ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Subspecies: <strong>{species.subspecies}</strong></div>) : <></>}
            {species.rank ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Rank: <strong>{species.rank}</strong></div>) : <></>}
            {species.subpopulation ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Subopulation: <strong>{species.subpopulation}</strong></div>) : <></>}
            {species.conservation_measures ? (<div className="mt-1 truncate text-xs leading-5 text-gray-500">Conservation Measures: <strong dangerouslySetInnerHTML={{__html: species.conservation_measures}} /></div>) : <></>}
        </div>
    );
}
