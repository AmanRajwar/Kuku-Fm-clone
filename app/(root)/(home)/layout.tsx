import Carousel from '@/components/Carousel';
import Header from '@/components/Header';
import ButtonBar from '@/components/ButtonBar';
import AllData from '@/components/AllData';
import { fetchShows } from '@/actions/fetch-data';



export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const abc = await fetchShows(1);
// const data = abc.items[0].shows.slice(0, 5);
    return (
        <main className=' '>
            {children}
        </main>
    );
}
