import React, { useState, useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import { ThemeContext } from "../ThemeContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

// Register the necessary chart.js plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale
);

function Dashboard() {
  // Define the state variables
  const [historicalData, setHistoricalData] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [dailyChange, setDailyChange] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const { isDarkMode } = useContext(ThemeContext); // useContext hook to access the isDarkMode value from ThemeContext

  // list of all the available cryptocurrencies
  const cryptocurrencies = [
    { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
    { id: "ethereum", symbol: "ETH", name: "Ethereum" },
    { id: "cardano", symbol: "ADA", name: "Cardano" },
    { id: "binancecoin", symbol: "BNB", name: "Binance Coin" },
    { id: "dogecoin", symbol: "DOGE", name: "Dogecoin" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      // Fetch historical data for the selected cryptocurrency for the past 365 days
      try {
        const historicalResponse = await fetch(
          `https://mdata.mtw-testnet.com/item/${selectedCrypto}/365`
        );
        const historicalData = await historicalResponse.json();
        setHistoricalData(historicalData); // Update the historicalData state

        // Calculate the current price and daily change based on the latest data
        // Check if there is any historical data available
        if (historicalData.length > 0) {
          // Get the latest data point
          const latestData = historicalData[historicalData.length - 1];
          // Set the current price
          setCurrentPrice(latestData[4]);
          // Calculate the daily change
          // Get the previous day's data point
          const previousDay = historicalData[historicalData.length - 2];
          // Calculate the daily change value
          const dailyChangeValue =
            ((latestData[4] - previousDay[4]) / previousDay[4]) * 100;
          // Round the daily change value to 2 decimal places and set it
          setDailyChange(dailyChangeValue.toFixed(2));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedCrypto]); // dependency array containing the selectedCrypto state variable to trigger the effect

  // Function to create the chart data
  const chartData = () => {
    // Map the historical data to create labels for the chart.
    // The label is the date of the data point.
    const labels = historicalData.map((data) => new Date(data[0]));
    // Map the historical data to create data points for the chart.
    // Each data point consists of the date of the data point and the price.
    const dataPoints = historicalData.map((data) => ({
      x: new Date(data[0]),
      y: data[4],
    }));
    // Create the chart data object.
    return {
      labels: labels, // Set the labels for the chart.
      datasets: [
        {
          label: "Price", // Set the label for the dataset.
          data: dataPoints, // Set the data points for the dataset.
          fill: true, // Set the dataset to be filled.
          backgroundColor: isDarkMode
            ? "rgba(52, 211, 153, 0.2)"
            : "rgba(59, 130, 246, 0.2)",
          borderColor: isDarkMode ? "#34D399" : "#3B82F6",
          tension: 0.1, // Set the tension of the line.
        },
      ],
    };
  };

  // The chart options for the line chart.
  const chartOptions = {
    // Set the chart to be responsive to the container size.
    // Disable maintaining the aspect ratio of the chart.
    responsive: true,
    maintainAspectRatio: false,
    // Configure the chart plugins.
    plugins: {
      legend: {
        // Position the legend at the top of the chart.
        position: "top",
      },
      title: {
        // Display the chart title.
        display: true,
        // Set the chart title text.
        text: `${
          selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)
        } Price Chart (1 Year)`,
        // Set the color of the chart title.
        color: isDarkMode ? "#ffffff" : "#1F2937",
        // Set the font of the chart title.
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    // Configure the chart scales.
    scales: {
      x: {
        // Set the type of the x-axis scale to be a time scale.
        type: "time",
        // Configure the time scale options.
        time: {
          // Set the unit of the time scale to be a month.
          unit: "month",
          // Set the display formats for the time scale ticks.
          displayFormats: {
            month: "MMM yyyy",
          },
        },
        // Configure the ticks for the x-axis.
        ticks: {
          // Set the color of the ticks.
          color: isDarkMode ? "#D1D5DB" : "#4B5563",
          // Disable rotation of the ticks.
          maxRotation: 0,
          // Enable auto skipping of ticks.
          autoSkip: true,
          // Set the maximum number of ticks to be displayed.
          maxTicksLimit: 12,
        },
        // Configure the grid for the x-axis.
        grid: {
          // Set the color of the grid lines.
          color: isDarkMode
            ? "rgba(209, 213, 219, 0.1)"
            : "rgba(107, 114, 128, 0.1)",
        },
      },
      y: {
        // Configure the ticks for the y-axis.
        ticks: {
          // Set the color of the ticks.
          color: isDarkMode ? "#D1D5DB" : "#4B5563",
          // Format the value of the ticks as a currency.
          callback: function (value, index, values) {
            return "$" + value.toLocaleString();
          },
        },
        // Configure the grid for the y-axis.
        grid: {
          // Set the color of the grid lines.
          color: isDarkMode
            ? "rgba(209, 213, 219, 0.1)"
            : "rgba(107, 114, 128, 0.1)",
        },
      },
    },
  };

  return (
    // The outermost div that wraps the entire dashboard component.
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-900"
      }`}
    >
      {/* Container for the dashboard content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
        {/* Title of the dashboard */}
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-600">
          Cryptocurrency Dashboard
        </h1>
        {/* Select element for choosing the cryptocurrency */}
        <select
          value={selectedCrypto}
          onChange={(e) => setSelectedCrypto(e.target.value)}
          className={`mb-8 p-2 border rounded-md ${
            isDarkMode
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-gray-900 border-gray-300"
          } w-full max-w-xs focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
        >
          {/* Map over the cryptocurrencies array to create options */}
          {cryptocurrencies.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name}
            </option>
          ))}
        </select>
        {/* Card component for displaying the selected cryptocurrency's price, daily change, and chart */}
        <div
          className={`mb-8 p-6 rounded-lg shadow-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } w-full max-w-md border ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          {/* Title of the card */}
          <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-500">
            {selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)}{" "}
            Price
          </h2>
          {/* Current price of the cryptocurrency */}
          <div className="flex justify-between items-center">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Current Price:
            </p>
            <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              ${currentPrice ? currentPrice.toLocaleString() : "Loading..."}
            </p>
          </div>
          {/* 24h change of the cryptocurrency */}
          <div className="flex justify-between items-center mt-2">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              24h Change:
            </p>
            <p
              className={`text-xl font-bold ${
                parseFloat(dailyChange) >= 0
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {dailyChange ? `${dailyChange}%` : "Loading..."}
            </p>
          </div>
        </div>
        {/* Chart component for displaying the price history of the selected cryptocurrency */}
        <div className="w-full max-w-6xl bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
