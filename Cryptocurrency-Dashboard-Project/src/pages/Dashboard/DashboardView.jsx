import React from "react";
import { Line } from "react-chartjs-2";
import { getDashboardStyles } from "./DashboardStyles";
import { getChartData, getChartOptions } from "./DashboardLogic";

function DashboardView({
  isDarkMode,
  historicalData,
  currentPrice,
  dailyChange,
  selectedCrypto,
  setSelectedCrypto,
  cryptocurrencies,
}) {
  // Get styles based on the current theme
  const styles = getDashboardStyles(isDarkMode);

  // Prepare chart data and options using the provided historical data and selected cryptocurrency
  const chartData = getChartData(historicalData, isDarkMode);
  const chartOptions = getChartOptions(selectedCrypto, isDarkMode);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Main header for the dashboard */}
        <h1 className={styles.header}>Cryptocurrency Dashboard</h1>

        {/* Dropdown to select the cryptocurrency */}
        <select
          value={selectedCrypto}
          onChange={(e) => setSelectedCrypto(e.target.value)}
          className={styles.selector}
        >
          {/* Options for each cryptocurrency */}
          {cryptocurrencies.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name}
            </option>
          ))}
        </select>

        {/* Card displaying the current price and 24-hour change */}
        <div className={styles.priceCard}>
          <h2 className={styles.priceCardTitle}>
            {selectedCrypto.charAt(0).toUpperCase() + selectedCrypto.slice(1)}{" "}
            Price
          </h2>
          {/* Display current price */}
          <div className="flex justify-between items-center">
            <p className={styles.priceLabel}>Current Price:</p>
            <p className={styles.priceValue}>
              ${currentPrice ? currentPrice.toLocaleString() : "Loading..."}
            </p>
          </div>
          {/* Display 24-hour change */}
          <div className="flex justify-between items-center mt-2">
            <p className={styles.changeLabel}>24h Change:</p>
            <p className={styles.changeValue(dailyChange)}>
              {dailyChange ? `${dailyChange}%` : "Loading..."}
            </p>
          </div>
        </div>

        {/* Chart container displaying the historical data */}
        <div className={styles.chartContainer}>
          <div className={styles.chart}>
            <Line
              key={selectedCrypto} // Ensure chart updates when selectedCrypto changes
              data={chartData} // Data for the chart
              options={chartOptions} // Options for the chart
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardView;
