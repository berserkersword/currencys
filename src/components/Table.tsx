import { Link } from 'react-router-dom'

const Table = (props: {
    image: string,
    id: string,
    name: string,
    symbol: string,
    volume: number,
    price: number,
    priceChange: number
}) => {
    return (

        // <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        //     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

        //         <tbody>
        <tr key={props.id} className="border-b border-gray-200 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <img src={props.image} className="w-[10px]" alt={props.id} style={{ width: 20 }} />
            </th>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                <h3 className='text-xl'>{props.name.toUpperCase()}</h3>
            </th>
            <td className="py-4 px-4">
                ${props.volume}
            </td>
            <td className="py-4 px-4 bg-gray-50 dark:bg-gray-800">
                ${props.price}
            </td>

            {
                props.priceChange < 0 ?
                    <td className="py-4 px-4 bg-gray-50 dark:bg-gray-800 text-red-700">
                        ${props.priceChange.toFixed(2)}
                    </td> :
                    <td className="py-4 px-4 bg-gray-50 dark:bg-gray-800 text-green-700">
                        ${props.priceChange.toFixed(2)}
                    </td>
            }
            <td className="py-4 px-4 bg-gray-50 dark:bg-gray-800">
                <Link className='text-gray-900 dark:text-white text-xl' to={`/coins/${props.id}`} >Rate</Link>
            </td>
        </tr>

        //         </tbody>
        //     </table>
        // </div>

    )
}

export default Table
