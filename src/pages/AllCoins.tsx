import { useState } from 'react'
import Table from '../components/Table';
import { Res1 } from '../Model/Model';

const AllCoins = (props: { coin: Res1[] }) => {

    const [search, setSearch] = useState('')

    const filterCoins = props.coin.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
    console.log(filterCoins);

    return (
        <div className='w-full p-3'>

            <form className='p-6 w-full'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative w-9/12 sm:w-1/2 mx-auto">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input
                        onChange={e => { setSearch(e.target.value) }}
                        type="search"
                        id="default-search"
                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search ..."
                    />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full p-8 sm:p-4">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                        {
                            filterCoins.map(coin => {
                                return (
                                    <Table
                                        id={coin.id}
                                        volume={coin.market_cap}
                                        price={coin.current_price}
                                        image={coin.image}
                                        name={coin.name}
                                        symbol={coin.symbol}
                                        priceChange={coin.price_change_24h}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllCoins