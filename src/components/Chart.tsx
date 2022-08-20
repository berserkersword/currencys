import { Line } from 'react-chartjs-2';
import { ChartModel } from '../Model/Model';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables)

const Chartjs = (props: { chartData: ChartModel }) => {
    console.log(props.chartData.datasets);
    return <Line data={props.chartData} />
}

export default Chartjs