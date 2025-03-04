import {Pie} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, plugins} from 'chart.js'
import { barChartData } from '@/library/barChartData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, plugins)

export const BarChart = () => {
    return <Bar options={barChartData.options} data={barChartData}></Bar>;
}