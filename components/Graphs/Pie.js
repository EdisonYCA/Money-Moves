import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { pieChartData } from '@/library/pieChartData';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
    const options = {}
    return <Pie options={options} data={pieChartData} />;
};