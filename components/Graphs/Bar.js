import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, plugins} from 'chart.js'
import { barChartData } from './FAKE_DATA'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, plugins)

export const BarChart = () => {
    return <Bar options={barChartData.options} data={barChartData}></Bar>;
}