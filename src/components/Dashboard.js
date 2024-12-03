import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { SiSalesforce } from "react-icons/si";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
export function Dashboard() {
  const boxdata = [
    {
      label: "Total Vendors",
      totalnumber: 44,
      bgcolor: "pink-300",
      icon: <BsPeopleFill />,
    },
    {
      label: "Total Categories",
      totalnumber: 43,
      bgcolor: "blue-300",
      icon: <MdCategory />,
    },
    {
      label: "Total Products",
      totalnumber: 445,
      bgcolor: "violet-300",
      icon: <AiFillProduct />,
    },
    {
      label: "Total Sales",
      totalnumber: 440,
      bgcolor: "yellow-300",
      icon: <SiSalesforce />,
    },
  ];

  return (
    <div className="flex  p-1 flex-col  gap-3 flex-wrap">
      <div className="flex  justify-center bg-white  rounded shadow-md flex-initial  ml-0.5 p-7 lg:ml-12 lg:mx-auto xl:mx-auto 2xl:mx-auto flex-wrap gap-6">
        {boxdata.map((boxdata, index) => (
          <Boxmodel boxdata={boxdata} key={index} />
        ))}
      </div>

      <div className="flex  flex-wrap  xl:flex-row xl:flex-nowrap gap-3 justify-around">
        <PieChart />
        <BarChart />
      </div>
      <div className="rounded shadow-md" id="tablescroll">
        <Table/>
      </div>
    </div>
  );
}

function Boxmodel({ boxdata }) {
  const bgColorClasses = {
    "pink-300": "bg-rose-300",
    "blue-300": "bg-yellow-300",
    "violet-300": "bg-orange-300",
    "yellow-300": "bg-violet-300",
  };
  return (
    <div
      className={`p-4 w-64 h-28 text-slate-700 xl:text-center text-xl font-display font-bold rounded-md lg:w-72 lg:h-32 lg:p-6 xl:w-64 2xl:w-80 ${
        bgColorClasses[boxdata.bgcolor]
      }`}>
      {boxdata.label}

      <div className="flex xl:justify-between mt-4 space-x-16">
        <div className=" text-2xl ">{boxdata.totalnumber}</div>
        <div className=" ml-6   text-3xl"> {boxdata.icon}</div>
      </div>
    </div>
  );
}

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const PieChart = () => {
  const data = {
    labels: ["All Sports", "Mens Collection", "Womens Collection"],
    datasets: [
      {
        label: "# of Votes",
        data: [11, 13, 8], // Example data
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-white rounded-lg shadow-md w-full h-80 xl:h-96 space-y-8 ">
      <div className="w-52 h-52 lg:w-44 lg:h-44 xl:h-52 xl:w-52">
        <Pie data={data} />{" "}
      </div>
      <div className="text-2xl font-display font-medium">
        Categorywise sales for the current month
      </div>
    </div>
  );
};

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"], // X-axis labels
    datasets: [
      {
        label: "Sales 2024", // Label for the dataset
        data: [65, 59, 80, 81, 56, 55], // Y-axis data
        backgroundColor: "rgba(237, 85, 59, 0.3)", // Bar background color
        borderColor: "rgba(237, 85, 59, 1)", // Bar border color
        borderWidth: 1, // Border width of bars
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true, // Start the Y-axis from 0
      },
    },
  };

  return (
    <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md w-full h-96 font-bold font-display">

    <Bar  data={data} options={options} />
  
    </div>
  );
};


function Table(){
  return(
    <div className="min-w-full ">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SERIAL NO.</th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER NAME</th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER NO.</th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PRODUCT NAME</th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QUANTITY</th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {/* Sample Rows */}
        {Array.from({ length: 10 }).map((_, index) => (
          <tr key={index}>
            <td className="px-4 py-2 whitespace-nowrap">Row {index + 1} - Col 1</td>
            <td className="px-4 py-2 whitespace-nowrap">Row {index + 1} - Col 2</td>
            <td className="px-4 py-2 whitespace-nowrap">Row {index + 1} - Col 3</td>
            <td className="px-4 py-2 whitespace-nowrap">Row {index + 1} - Col 4</td>
            <td className="px-4 py-2 whitespace-nowrap">Row {index + 1} - Col 5</td>
            <td className="px-4 py-2 whitespace-nowrap">Row {index + 1} - Col 6</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  )
}