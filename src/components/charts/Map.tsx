import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CountryData } from "../../api";
import { Icon } from "leaflet";

interface MapProps {
    data: CountryData[];
}

// Adding a custom map pin
const icon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/447/447031.png",
    iconSize: [15, 15],
});

// Component which renders the map
const Map: React.FC<MapProps> = ({ data }) => {
    return (
        <div className="mt-5">
            <h2 className="text-lg font-semibold mb-4">Map</h2>
            <div
                style={{ height: "70vh", width: "100%" }}
                className="flex justify-center"
            >
                <MapContainer
                    center={[0, 0]}
                    zoom={2}
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {data.map((country) => (
                        <Marker
                            key={country.country}
                            position={[
                                country.countryInfo.lat,
                                country.countryInfo.long,
                            ]}
                            icon={icon}
                        >
                            <Popup>
                                <div>
                                    <h2 className="text-lg font-semibold mb-1">
                                        {country.country}
                                    </h2>
                                    <p>Total Active: {country.active}</p>
                                    <p>Total Recovered: {country.recovered}</p>
                                    <p>Total Deaths: {country.deaths}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Map;
