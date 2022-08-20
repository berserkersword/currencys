import axios from 'axios';
import { useState, useEffect } from 'react'
import Chartjs from '../components/Chart';
import { useParams } from 'react-router-dom';
import { ChartModel, ChartRes } from '../Model/Model';

const Charts = () => {
    const { id } = useParams()
    const [res, setRes] = useState<ChartRes>({
        prices: [
            [1, 2]
        ],
        total_volumes: [
            [1, 2]
        ],
        marcet_caps: [
            [1, 2]
        ]
    });

    const [userData, setUserData] = useState<ChartModel>({
        labels: res.prices.map(data => {
            return data[0] / 3600
        }),
        datasets: [
            {
                label: 'Id',
                data: res.prices.map(data => {
                    return data[1]
                })
            }
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

    return (
        <div>
            <Chartjs chartData={userData} />
        </div>
    )
}

export default Charts