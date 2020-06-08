import React, { useState, useEffect } from "react";
import { Chart } from "react-charts";

export const LineChart = ({ points }) => {
  const data = [
    {
      label: "Series 1",
      data: points,
    },
  ];

  const options = {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Y text",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "X text",
          },
        },
      ],
    },
  };

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        marginTop: "1rem",
      }}
    >
      <Chart data={data} axes={axes} options={options} />
    </div>
  );
};
