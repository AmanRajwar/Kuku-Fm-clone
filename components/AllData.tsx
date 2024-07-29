import { fetchShows } from '@/actions/fetch-data'
import TopTrending from './TopTrending'
import { navigation } from "@/constants";
// async function getData() {
//     const data = await fetchShows({ start: 1, end: 1 });
//     return data.json();
// }

const AllData = async () => {
    const data = await fetchShows(1);

    return (
        <section className='border-t  border-n-6 text-white  max-md:mx-[30px]  mx-[105px] mt-[50px] '>
            
        
            < TopTrending data={data} />
        </section>
    )
}

export default AllData