'use client'
import React, { useState, useEffect } from 'react'
import { fetchShows } from '@/actions/fetch-data'
import { useInView } from 'react-intersection-observer'
import RenderData from './RenderData'

const Helper = (props: any) => {
    const { data } = props;
    const [ref, inView] = useInView()
    const [initialState,setInitialState]=useState(data)
    const [shows, setShows] = useState({
        first: data.items[3].mixed_content_items,
        second: null,
        third: null,
        fourth: null,
        fifth: null,
        sixth: null,
        seventh: null
    })
    const [check, setCheck] = useState(1)

    async function loadMoreMovies() {
        var data1: any;
        try {
            if (check == 1) {
                data1 = await fetchShows(1);
                console.log(data1)
                setShows(prevState => ({
                    ...prevState,
                    second: data1.items[3].shows 
                }));
            } else if (check == 2) {
                data1 = await fetchShows(2)
                console.log(data.items[0].shows)
                setShows(prevState => ({
                    ...prevState,
                    third: data1.items[0].shows
                }));
            } else if (check == 3) {
                data1 = await fetchShows(2);
                setShows(prevState => ({
                    ...prevState,
                    fourth: data1.items[1].shows
                }));
            } else if (check == 4) {
                data1 = await fetchShows(2);
                setShows(prevState => ({
                    ...prevState,
                    fifth: data1.items[2].shows
                }));
            } else if (check == 5) {
                data1 = await fetchShows(2);
                setShows(prevState => ({
                    ...prevState,
                    sixth: data1.items[3].shows
                }));
            } else if (check == 6) {
                data1 = await fetchShows(2);
                setShows(prevState => ({
                    ...prevState,
                    seventh: data1.items[4].shows
                }));
            }
          
                setCheck(check + 1);
           

        } catch (error) {

        }
    }

    useEffect(() => {
        if (inView && check < 7) {
            loadMoreMovies()
        }
    }, [inView])
    return (
        <div>

            <RenderData title='Top 10 in India' data={shows.first} />
            {/* on production it is not working  */}
            {/* {check >= 2 && <RenderData title='Vip shows' data={shows.second} />} */}
            {check >= 3 && <RenderData title='Trending' data={shows.third} />}
            {check >= 4 && <RenderData title='Best Of Romance' data={shows.fourth} />}
            {check >= 5 && <RenderData title='Best Of Motivation' data={shows.fifth} />}
            {check >= 6 && <RenderData title='Best Of Religion' data={shows.sixth} />}
            {check >= 7 && <RenderData title='Best Of Horror' data={shows.seventh} />}

            {/* loader  */}
            {check < 7 && <div
                ref={ref}
                className='col-span-1 mt-16 flex items-center justify-center sm:col-span-2 md:col-span-3 lg:col-span-4'
            >
                <svg
                    aria-hidden='true'
                    className='h-10 w-10 animate-spin fill-sky-600 text-gray-200 dark:text-gray-600'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                        fill='currentColor'
                    />
                    <path
                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                        fill='currentFill'
                    />
                </svg>
                <span className='sr-only'>Loading...</span>
            </div>
            }

        </div>
    )
}

export default Helper