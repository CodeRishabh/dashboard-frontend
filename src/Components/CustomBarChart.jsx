import React from "react";
import { BarChart, XAxis, Bar, Tooltip } from "recharts";

const isMobile = window.innerWidth <= 1000; // Adjust the breakpoint as needed
const chartWidth = isMobile ? 300 : 700; // Adjust the values as needed
const chartHeight = isMobile ? 150 : 250;
const barSize = isMobile ? 10 : 40;

const Fulldata = [
  {
    name: "Jan",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    pv: 3200,
    amt: 2000,
  },
  {
    name: "Apr",
    pv: 800,
    amt: 2500,
  },
  {
    name: "May",
    pv: 1990,
    amt: 2100,
  },
  {
    name: "Jun",
    pv: 3000,
    amt: 1200,
  },
  {
    name: "Jul",
    pv: 1200,
    amt: 3200,
  },
  {
    name: "Aug",
    pv: 2800,
    amt: 2800,
  },
  {
    name: "Sep",
    pv: 2300,
    amt: 2300,
  },
  {
    name: "Oct",
    pv: 1800,
    amt: 1900,
  },
  {
    name: "Nov",
    pv: 3400,
    amt: 1700,
  },
  {
    name: "Dec",
    pv: 2200,
    amt: 2500,
  },
];
const mobileData = [
  {
    name: "May",
    pv: 1990,
    amt: 2100,
  },
  {
    name: "Jun",
    pv: 3000,
    amt: 1200,
  },
  {
    name: "Jul",
    pv: 1200,
    amt: 3200,
  },
  {
    name: "Aug",
    pv: 2800,
    amt: 2800,
  },
  {
    name: "Sep",
    pv: 2300,
    amt: 2300,
  },
  {
    name: "Oct",
    pv: 1800,
    amt: 1900,
  },
];
const data = isMobile ? mobileData : Fulldata;

const CustomBarChart = () => {
  return (
    <BarChart
      width={chartWidth}
      height={chartHeight}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis
        dataKey="name"
        scale="point"
        padding={{ left: 40, right: 20 }}
        axisLine={false}
        tickLine={false}
      />
      <Tooltip />
      <Bar
        dataKey="pv"
        fill="#5A32EA"
        background={{ fill: "#eee" }}
        className=" py-4 rounded-md bg-slate-500"
        radius={[10, 10, 10, 10]}
        barSize={barSize}
      />
    </BarChart>
  );
};

export default CustomBarChart;
