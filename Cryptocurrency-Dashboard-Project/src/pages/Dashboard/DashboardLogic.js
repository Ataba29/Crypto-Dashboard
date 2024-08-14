// Import necessary React hooks
import { useState, useEffect } from "react";

// Import Chart.js components
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

// Register Chart.js components
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

// Custom hook for dashboard logic, default to "bitcoin"
export const useDashboardLogic = (initialCrypto = "bitcoin") => {
  // State to hold historical data
  const [historicalData, setHistoricalData] = useState([]);
  // State to hold current price
  const [currentPrice, setCurrentPrice] = useState(null);
  // State to hold daily price change
  const [dailyChange, setDailyChange] = useState(null);
  // State to hold selected cryptocurrency
  const [selectedCrypto, setSelectedCrypto] = useState(initialCrypto);

  // Array of cryptocurrency objects
  const cryptocurrencies = [
    { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
    { id: "ethereum", symbol: "ETH", name: "Ethereum" },
    { id: "cardano", symbol: "ADA", name: "Cardano" },
    { id: "binancecoin", symbol: "BNB", name: "Binance Coin" },
    { id: "dogecoin", symbol: "DOGE", name: "Dogecoin" },
  ];

  // useEffect to fetch data when selectedCrypto changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch historical data for the selected cryptocurrency
        const historicalResponse = await fetch(
          `https://mdata.mtw-testnet.com/item/${selectedCrypto}/365`
        );
        const historicalData = await historicalResponse.json();
        setHistoricalData(historicalData);

        // If there's historical data, set current price and daily change
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
  }, [selectedCrypto]); // Dependency array, triggers effect when selectedCrypto changes

  // Return the state variables and the function to change selectedCrypto
  return {
    historicalData,
    currentPrice,
    dailyChange,
    selectedCrypto,
    setSelectedCrypto,
    cryptocurrencies,
  };
};

// Function to prepare chart data
export const getChartData = (historicalData, isDarkMode) => ({
  labels: historicalData.map((data) => new Date(data[0])), // Convert timestamps to date objects
  datasets: [
    {
      label: "Price", // Label for the dataset
      data: historicalData.map((data) => ({
        x: new Date(data[0]),
        y: data[4],
      })), // Map data to x and y values
      fill: true, // Fill under the line
      backgroundColor: isDarkMode
        ? "rgba(52, 211, 153, 0.2)"
        : "rgba(59, 130, 246, 0.2)", // Background color based on dark mode
      borderColor: isDarkMode ? "#34D399" : "#3B82F6", // Border color based on dark mode
      tension: 0.1, // Curve line
    },
  ],
});

// Function to prepare chart options
export const getChartOptions = (selectedCrypto, isDarkMode) => ({
  responsive: true, // Make chart responsive
  maintainAspectRatio: false, // Don't maintain aspect ratio
  plugins: {
    legend: {
      position: "top", // Position of the legend
    },
    title: {
      display: true, // Show the title
      text: `${
        selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)
      } Price Chart (1 Year)`, // Title text
      color: isDarkMode ? "#ffffff" : "#1F2937", // Title color based on dark mode
      font: {
        size: 18, // Font size
        weight: "bold", // Font weight
      },
    },
  },
  scales: {
    x: {
      type: "time", // x-axis type
      time: {
        unit: "month", // Time unit for x-axis
        displayFormats: {
          month: "MMM yyyy", // Display format for months
        },
      },
      ticks: {
        color: isDarkMode ? "#D1D5DB" : "#4B5563", // Tick color based on dark mode
        maxRotation: 0, // Maximum rotation for ticks
        autoSkip: true, // Auto skip ticks
        maxTicksLimit: 12, // Maximum number of ticks
      },
      grid: {
        color: isDarkMode
          ? "rgba(209, 213, 219, 0.1)"
          : "rgba(107, 114, 128, 0.1)", // Grid color based on dark mode
      },
    },
    y: {
      type: "linear", // y-axis type
      ticks: {
        color: isDarkMode ? "#D1D5DB" : "#4B5563", // Tick color based on dark mode
        callback: function (value, index, values) {
          return "$" + value.toLocaleString(); // Format y-axis values as currency
        },
      },
      grid: {
        color: isDarkMode
          ? "rgba(209, 213, 219, 0.1)"
          : "rgba(107, 114, 128, 0.1)", // Grid color based on dark mode
      },
    },
  },
});
