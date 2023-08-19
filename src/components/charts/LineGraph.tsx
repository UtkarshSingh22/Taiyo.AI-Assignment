import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Options for the line graph
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
    },
};

export interface LineGraphProps {
    data: Object;
}

// Component definition for rendering Line graph
const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
    // Defining values for the graph
    const values = {
        labels: Object.keys(data),
        datasets: [
            {
                label: "Total Cases",
                data: Object.values(data),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    return (
        <>
            <h2 className="text-lg font-semibold mb-4 mt-8">Line Graph</h2>
            <div className="h-96 flex justify-center">
                <Line options={options} data={values} />
            </div>
        </>
    );
};

export default LineGraph;
