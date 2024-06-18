import {SpeciesType} from "@/types";
import {PropsWithChildren} from "react";

export default function Species({species}: PropsWithChildren<{species: SpeciesType}>) {
    return (
        <div>
            <div>TaxonID: <strong>{species.taxonid}</strong></div>
            <div>Scientific Name: <strong>{species.scientific_name}</strong></div>
            <div>Category: <strong>{species.category}</strong></div>
            <div>Rank: <strong>{species.rank}</strong></div>
            <div>Subpopulation: <strong>{species.subpopulation}</strong></div>
            <div>Subspecies: <strong>{species.subspecies}</strong></div>
        </div>
    );
}
