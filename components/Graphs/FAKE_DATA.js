export const barChartData = {
  labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
  datasets: [
    {
      label: "January",
      data: [1800, 300, 180, 150, 100],
      borderColor: "#000000",
      backgroundColor: "#000000",
      borderWidth: 1,
      barPercentage: 0.4,
      categoryPercentage: 0.6,
    },
    {
      label: "February",
      data: [2500, 200, 150, 500, 150],
      borderColor: "#248232",
      backgroundColor: "#248232",
      borderWidth: 1,
      barPercentage: 0.4,
      categoryPercentage: 0.6,
    },
    {
      label: "March",
      data: [2500, 250, 350, 200, 100],
      borderColor: "#2D3A3A",
      backgroundColor: "#2D3A3A",
      borderWidth: 1,
      barPercentage: 0.4,
      categoryPercentage: 0.6,
    },
  ],
  options: {
    indexAxis: "x",
    plugins: {
      title: {
        display: true,
        text: "Income Distribution",
        font: {
          size: 15,
        },
      },
      legend: {
        labels: {
          font: {
            size: 10,
          },
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `$${tooltipItem.raw}`,
        },
        bodyFont: {
          size: 10,
        },
        titleFont: {
          size: 10,
        },
        padding: 10,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 10,
          },
          callback: (value) => {
            return value >= 1000 ? `$${(value / 1000).toFixed(1)}k` : `$${value}`;
          },
        },
        suggestedMax: 4100,
      },
    },
  },
};
