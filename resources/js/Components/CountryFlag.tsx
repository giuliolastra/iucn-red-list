export default function CountryFlag({country, alt}: { country: string, alt: string }) {
    const fallbackImage = function (event: Event) {
        if(event.target instanceof HTMLImageElement) {
            event.target.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAOUlEQVR42u3OIQEAAAACIP1/2hkWWEBzVgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYF3YDicAEE8VTiYAAAAAElFTkSuQmCC';
        }

    }
    return (
        <img src={`https://flagsapi.com/${country}/flat/64.png`} alt={alt} onError={fallbackImage }/>
    );
}
