import {SpeciesType} from "@/types";
import {PropsWithChildren} from "react";
import ConditionalRenderer from "@/Components/ConditionalRenderer";

export default function Species({species}: PropsWithChildren<{species: SpeciesType}>) {
    return (
        <div>
            {species.taxonid ? (<div>TaxonID: <strong>{species.taxonid}</strong></div>) : <></>}
            {species.scientific_name ? (<div>Scientific Name: <strong>{species.scientific_name}</strong></div>) : <></>}
            {species.kingdom_name ? (<div>Kingdom Name: <strong>{species.kingdom_name}</strong></div>) : <></>}
            {species.phylum_name ? (<div>Phylum Name: <strong>{species.phylum_name}</strong></div>) : <></>}
            {species.class_name ? (<div>Class Name: <strong>{species.class_name}</strong></div>) : <></>}
            {species.order_name ? (<div>Order Name: <strong>{species.order_name}</strong></div>) : <></>}
            {species.family_name ? (<div>Family Name: <strong>{species.family_name}</strong></div>) : <></>}
            {species.genus_name ? (<div>Genus Name: <strong>{species.genus_name}</strong></div>) : <></>}
            {species.taxonomic_authority ? (<div>Taxonomic Authority: <strong>{species.taxonomic_authority}</strong></div>) : <></>}
            {species.infra_rank ? (<div>Infra Rank: <strong>{species.infra_rank}</strong></div>) : <></>}
            {species.infra_name ? (<div>Infra Name: <strong>{species.infra_name}</strong></div>) : <></>}
            {species.population ? (<div>Population: <strong>{species.population}</strong></div>) : <></>}
            {species.category ? (<div>Category: <strong>{species.category}</strong></div>) : <></>}
            {species.main_common_name ? (<div>Main Common Name: <strong>{species.main_common_name}</strong></div>) : <></>}
            {species.subspecies ? (<div>Subspecies: <strong>{species.subspecies}</strong></div>) : <></>}
            {species.rank ? (<div>Rank: <strong>{species.rank}</strong></div>) : <></>}
            {species.subpopulation ? (<div>Subopulation: <strong>{species.subpopulation}</strong></div>) : <></>}
            {species.conservation_measures ? (<div>Conservation Measures: <strong>{species.conservation_measures}</strong></div>) : <></>}
        </div>
    );
}
