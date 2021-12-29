import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data, chartStyle }) => {
  console.log(data);
  const [chartData, setchartData] = useState([40, 30, 30]);

  useEffect(() => {
    const temp = [];
    for (const d in data.Sentiment) {
      temp.push(data.Sentiment[d]);
    }
    setchartData(temp);
  }, [data]);
  return (
    <div style={chartStyle}>
      {data && (
        <Pie
          data={{
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
              {
                label: "My First Dataset",
                data: chartData,
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default Chart;
