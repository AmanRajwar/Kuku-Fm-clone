import Carousel from '@/components/Carousel';
import Header from '@/components/Header';
import ButtonBar from '@/components/ButtonBar';
import AllData from '@/components/AllData';
import { fetchShows } from '@/actions/fetch-data';
export default async function Home() {
  const abc = await fetchShows(2);
  // console.log(abc)
  return (
    <>
     
            <Header />
            <div className=' max-md:mx-[30px]  mx-[105px]  mt-[200px]  overflow-hidden  flex justify-center items-center '>
                <Carousel data={abc}/>
            </div>
        
            <ButtonBar/>
            <AllData/>
    
    </>
  );
}
