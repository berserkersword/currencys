import React from 'react'
import { Res1 } from '../Model/Model';

const Main = (props: { res: Res1[] }) => {
    console.log(props.res);


    return (
        <div className='main w-full'>
            <section className="w-full p-3">
                <div className='w-1/2 sm:w-full p-2'>
                    <h1 className='text-6xl dark:text-white'>
                        Wellcome To Our Side
                    </h1>
                    <h5>Bla-bla  Bla-bla Bla-bla Bla-bla Bla-bla Bla-bla Bla-bla Bla-bla Bla-bla Bla-bla Bla-bla </h5>
                </div>
                <div className='w-1/2 sm:w-full'></div>
            </section>
        </div>
    )
}

export default Main