import { fetchShows } from '@/actions/fetch-data'
import Helper from './Helper';


const AllData = async () => {
    const data = await fetchShows(1);

    return (
        <section className='border-t  border-n-6 text-white  max-md:mx-[30px]  mx-[105px] mt-[50px] '>
            < Helper data={data} />
        </section>
    )
}

export default AllData