export interface CountryData {
    country: string;
    countryInfo: {
        lat: number;
        long: number;
    };
    active: number;
    recovered: number;
    deaths: number;
}

export interface LineGraphData {
    cases: Record<string, number>;
}

// Function to fetch line graph data using url
export async function fetchLineGraphData(): Promise<LineGraphData> {
    const response = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return response.json();
}

// Function to fetch map data using url
export async function fetchMapData(): Promise<CountryData[]> {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    return response.json();
}
