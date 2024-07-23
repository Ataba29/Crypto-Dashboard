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

// Register Chart.js components and plugins needed for the line chart
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
  // State variables for historical data, current price, daily change, and selected cryptocurrency
  const [historicalData, setHistoricalData] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [dailyChange, setDailyChange] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const { isDarkMode } = useContext(ThemeContext); // Access dark mode state from ThemeContext

  // List of available cryptocurrencies for selection
  const cryptocurrencies = [
    { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
    { id: "ethereum", symbol: "ETH", name: "Ethereum" },
    { id: "cardano", symbol: "ADA", name: "Cardano" },
    { id: "binancecoin", symbol: "BNB", name: "Binance Coin" },
    { id: "dogecoin", symbol: "DOGE", name: "Dogecoin" },
  ];

  // Fetch historical data whenever the selected cryptocurrency changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch historical data for the selected cryptocurrency for the past 365 days
        const historicalResponse = await fetch(
          `https://mdata.mtw-testnet.com/item/${selectedCrypto}/365`
        );
        const historicalData = await historicalResponse.json();
        setHistoricalData(historicalData);

        // Update current price and daily change if historical data is available
        if (historicalData.length > 0) {
          const latestData = historicalData[historicalData.length - 1];
          setCurrentPrice(latestData[4]);
          const previousDay = historicalData[historicalData.length - 2];
          const dailyChangeValue =
            ((latestData[4] - previousDay[4]) / previousDay[4]) * 100;
          setDailyChange(dailyChangeValue.toFixed(2));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedCrypto]); // Re-run effect when selectedCrypto changes

  // Chart data configuration
  const chartData = {
    labels: historicalData.map((data) => new Date(data[0])), // X-axis labels (dates)
    datasets: [
      {
        label: "Price",
        data: historicalData.map((data) => ({
          x: new Date(data[0]), // X value (date)
          y: data[4], // Y value (price)
        })),
        fill: true,
        backgroundColor: isDarkMode
          ? "rgba(52, 211, 153, 0.2)" // Background color when dark mode is active
          : "rgba(59, 130, 246, 0.2)", // Background color when dark mode is not active
        borderColor: isDarkMode ? "#34D399" : "#3B82F6", // Border color based on dark mode
        tension: 0.1, // Line tension for smooth curves
      },
    ],
  };

  // Chart options configuration
  const chartOptions = {
    responsive: true, // Make chart responsive to container size
    maintainAspectRatio: false, // Allow chart to resize without maintaining aspect ratio
    plugins: {
      legend: {
        position: "top", // Position legend at the top of the chart
      },
      title: {
        display: true, // Display chart title
        text: `${
          selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)
        } Price Chart (1 Year)`, // Dynamic chart title based on selected cryptocurrency
        color: isDarkMode ? "#ffffff" : "#1F2937", // Title color based on dark mode
        font: {
          size: 18, // Title font size
          weight: "bold", // Title font weight
        },
      },
    },
    scales: {
      x: {
        type: "time", // Use time scale for x-axis
        time: {
          unit: "month", // Display time unit as month
          displayFormats: {
            month: "MMM yyyy", // Display format for month
          },
        },
        ticks: {
          color: isDarkMode ? "#D1D5DB" : "#4B5563", // Tick color based on dark mode
          maxRotation: 0, // Disable rotation of ticks
          autoSkip: true, // Automatically skip ticks to avoid overlap
          maxTicksLimit: 12, // Limit the maximum number of ticks
        },
        grid: {
          color: isDarkMode
            ? "rgba(209, 213, 219, 0.1)" // Grid line color based on dark mode
            : "rgba(107, 114, 128, 0.1)", // Grid line color when dark mode is not active
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? "#D1D5DB" : "#4B5563", // Tick color based on dark mode
          callback: function (value, index, values) {
            return "$" + value.toLocaleString(); // Format tick values as currency
          },
        },
        grid: {
          color: isDarkMode
            ? "rgba(209, 213, 219, 0.1)" // Grid line color based on dark mode
            : "rgba(107, 114, 128, 0.1)", // Grid line color when dark mode is not active
        },
      },
    },
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-600">
          Cryptocurrency Dashboard
        </h1>
        <select
          value={selectedCrypto}
          onChange={(e) => setSelectedCrypto(e.target.value)}
          className={`mb-8 p-2 border rounded-md ${
            isDarkMode
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-gray-900 border-gray-300"
          } w-full max-w-xs focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
        >
          {cryptocurrencies.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name}
            </option>
          ))}
        </select>
        <div
          className={`mb-8 p-6 rounded-lg shadow-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } w-full max-w-md border ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-500">
            {selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)}{" "}
            Price
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Current Price:
            </p>
            <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              ${currentPrice ? currentPrice.toLocaleString() : "Loading..."}
            </p>
          </div>
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
