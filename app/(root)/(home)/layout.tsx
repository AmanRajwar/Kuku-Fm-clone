import Header from '@/components/Header';
import { fetchShows } from '@/actions/fetch-data';
import Footer from '@/components/Footer';



export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const abc = await fetchShows(1);
// const data = abc.items[0].shows.slice(0, 5);
    return (
        <main className=' '>
             <Header />
            {children}
            <Footer />
        </main>
    );
}
