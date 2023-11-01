import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 2490,
    pv: 1300,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 1490,
    pv: 1300,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 3190,
    pv: 4100,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 1490,
    pv: 1300,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3590,
    pv: 4500,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0";

  render() {
    return (
      <div style={{ width: "90%", height: 200 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#212a3e" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#ffe77d"
              fill="#ffe77d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
