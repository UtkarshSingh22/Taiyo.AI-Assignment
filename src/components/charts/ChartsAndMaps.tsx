import React from "react";
import { useQuery } from "react-query";
import { fetchLineGraphData, fetchMapData } from "../../api";
import LineGraph from "./LineGraph";
import Map from "./Map";

// Component definition which contains the map and line graph
const ChartsAndMaps: React.FC = () => {
    // Fetching line graph data
    const {
        data: lineGraphData,
        isLoading: lineGraphLoading,
        isError: lineGraphError,
    } = useQuery("lineGraphData", fetchLineGraphData);

    // Fetching map data
    const {
        data: mapData,
        isLoading: mapLoading,
        isError: mapError,
    } = useQuery("mapData", fetchMapData);

    return (
        <div className="bg-white p-4 shadow-md rounded-lg m-8">
            <h1 className="text-3xl font-semibold mb-4">
                Charts and Maps Page
            </h1>
            {mapLoading && <p className="text-gray-600">Loading map...</p>}
            {!mapLoading && (mapError || !mapData) && (
                <p className="text-red-600">Error loading map</p>
            )}
            {mapData && <Map data={mapData} />}
            {lineGraphLoading && (
                <p className="text-gray-600">Loading line graph...</p>
            )}
            {lineGraphData && <LineGraph data={lineGraphData.cases} />}
            {!lineGraphLoading && (lineGraphError || !lineGraphData) && (
                <p className="text-red-600">Error loading line graph</p>
            )}
        </div>
    );
};

export default ChartsAndMaps;
