# Api Exercise
Build a simple app using the technology of your choice and integrate the following features using the public IUCN Red List API.

**API - IUCN Red List of Threatened Species**

## ToDo
1. Load the list of the available regions for species
2. Take a random region from the list
3. Load the list of all species in the selected region — the first page of the results would suffice, no need for pagination
4. Create a model for “Species” and map the results to an array of Species.
5. Filter the results for Critically Endangered species:
   - Fetch the conservation measures for all critically endangered species
   - Store the “title”-s of the response in the Species model as concatenated text property. 
   - Print/display the results
6. Filter the results (from step 4) for the mammal class 
   - Print/display the results

## Intro
Il progetto è stato articolato per interfacciarsi alle API v3 messe a disposizione da *IUCN Red List of Threatened Species* utilizzando **Laravel 11.x** + **InertiaJS (React)** sfruttando gli elementi presenti nel boilerplate dell’applicazione Laravel.

**Riferimenti**:

- https://laravel.com/docs/11.x
- https://inertiajs.com/
- https://apiv3.iucnredlist.org/api/v3/docs

## Requisiti

- PHP ≥ 8.3
- Composer ≥ 2.5
- Node ≥ 22.0
- NPM ≥ 10.0

## Installazione

Eseguire i seguenti comandi bash per l’installazione dei vendor necessari all’esecuzione via composer, l’esecuzione di script automatici e l’installazione di pacchetti npm 

```bash
composer install
npm i
npm run build
```

## Esecuzione

A questo punto possiamo eseguire il progetto con il comando 

```bash
php artisan serve
```

Sarà disponibile all’indirizzo nel formato `localhost:<PORT>`

## Dettagli e Visualizzazione

La Pagina principale è la dashboard. Qui vi è un riepilogo del progetto e con i vari punti ed i link diretti per poter visionare quanto richiesto.

**In particolare:**

- *Load the list of the available regions for species*
    
    E’ stata predisposta una rotta `/region` che seguendo le specifiche restituisce una lista di elementi cliccabili per visualizzare quanto richiesto nel punto *Load the list of all species in the selected region*
    
- *Take a random region from the list*
    
    Nella parte del titolo è stato inserito un pulsante che gestisca un elemento casuale dalla lista per poter visionare il dettaglio
    
- *Create a model for “Species” and map the results to an array of Species*
    
    Il link rimanda alla rotta `/species` ottenuta come da requisiti creando un modello visionabile in `app/Models/Species.php` e mappando il risultato della chiamata alle API in un array di **Species `app/Services/RedListService.php:36`** 
    
- *Filter the results for Critically Endangered species*
    
    I dati vengono filtrati in base alla stringa della categoria passata al metodo `filterSpeciesByCategory` in `app/Services/RedListService.php:72` 
    
    All’interno del metodo del controller `app/Http/Controllers/SpeciesController.php:42` vengono iterati gli elementi ottenuti dalla chiamata sopra indicata per fetchare le misure di conservazione tramite il metodo in `app/Services/RedListService.php:79` , ed aggiungere come da requisiti la concatenazione dei titoli ottenuti *(al fine di non sovraccaricare l’endpoint i risultati sono stati limitati a 5)*. I risultati sono visibili come da link alla rotta `/species/category/CR`
    
- *Filter the results (from step 4) for the mammal class*
    
    Similmente a quanto fatto nel punto precedente è stato predisposto il metodo `filterSpeciesByClass` nel service `RedListService` per filtrare le specie tramite una stringa contenente la classe del la stessa. E’ possibile visualizzare il risultato alla rotta `/species/class/mammalia`
    

## Note

Di seguito alcuni elementi implementativi e secondari che sono stati aggiunti al progetto:

- Sono stati realizzati dei feature tests per le rotte generate all’interno dell’applicativo sfruttando `Http::fake` per mockare le risposte delle API
- E’ stata implementata una rotta aggiuntiva per `/country` seguendo quanto fatto per la rotta `/region` dove è possibile visualizzare l’elenco delle nazioni e cliccare su di esse per avere un elenco di specie per le stesse
- Le chiamate vengono poste a cache con TTL 3600 secondi in modo da poter avere una navigazione più agevole e non sovraccaricare di richieste l’endpoint messo a disposizione.
