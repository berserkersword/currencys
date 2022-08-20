import axios from 'axios';
import { useState, useEffect } from 'react'
import Chartjs from '../components/Chart';
import { useParams } from 'react-router-dom';
import { ChartModel, ChartRes } from '../Model/Model';

const Charts = () => {

    const { id } = useParams();

    const [res, setRes] = useState<ChartRes>({
        prices: [
            [1660831328221, 23498.056141562774],
            [1660834820925, 23428.465875440546],
            [1660838500790, 23472.0421571502]
        ],
        total_volumes: [
            [1, 2]
        ],
        marcet_caps: [
            [1, 2]
        ]
    });

    useEffect(() => {
        const Query = async () => {
            await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=2&interval=2`).then(data => {
                setRes(data.data)
            })
        }
        Query()
    }, [id])
    console.log(res);

    let [userData, setUserData] = useState<ChartModel>({
        labels: res.prices.map(data => data[0]),
        datasets: [
            {
                label: `${id}`,
                data: res.prices.map(date => date[1])
            }
        ]
    });

    return (
        <div>
            <Chartjs chartData={userData} />
        </div>
    )
}

export default Charts