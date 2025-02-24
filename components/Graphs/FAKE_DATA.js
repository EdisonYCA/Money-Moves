export const barChartData = {
    labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
    datasets: [
      {
        label: "Expenses",
        data: [1800, 300, 180, 150, 100],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
    options: {
      plugins: {
        title: {
          display: true,
          text: "Paycheck Distribution",
          font: {
            size: 25,
          },
        },
        legend: {
          labels: {
            font: {
              size: 25,
            },
            boxWidth: 50,
            boxHeight: 30
          },
        },
        tooltip: {
          bodyFont: {
            size: 25,
          },
          titleFont: {
            size: 25,
          },
          padding: 25,
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 30,
            },
          },
        },
        y: {
          ticks: {
            font: {
              size: 30,
            },
          },
        },
      },
    },

    labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
    datasets: [
      {
        label: "Expenses",
        data: [1800, 300, 180, 150, 100],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderWidth: 1,
      },
      
    ],
    options: {
      indexAxis: "y",
      plugins: {
        title: {
          display: true,
          text: "Paycheck Distribution",
          font: {
            size: 25,
          },
        },
        legend: {
          labels: {
            font: {
              size: 25,
            },
            boxWidth: 50,
            boxHeight: 30
          },
        },
        tooltip: {
          bodyFont: {
            size: 25,
          },
          titleFont: {
            size: 25,
          },
          padding: 25,
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 30,
            },
          },
        },
        y: {
          ticks: {
            font: {
              size: 30,
            },
          },
        },
      },
    }
  };
  