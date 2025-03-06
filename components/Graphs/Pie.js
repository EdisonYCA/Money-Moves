import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { defaultPieData, backgroundColors } from "@/library/pieChartData";
import { useState, useEffect } from "react";
import { useStateContext } from "@/context/StateContext";
import { getExpensesCategories, getCategoryData } from "@/backend/Database";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  const { user } = useStateContext();
  const options = {};
  const [pieData, setPieData] = useState(defaultPieData);

  useEffect(() => {
    const fetchExpenseData = async () => {
      const categories = await getExpensesCategories();
      const categoryData = await getCategoryData();

      setPieData({
        labels: categories,
        datasets: [
          {
            data: categoryData,
            backgroundColor: backgroundColors
          },
        ],
      });
    }; 

    fetchExpenseData()
  }, [user]);

  return <Pie options={options} data={pieData} />;
};
