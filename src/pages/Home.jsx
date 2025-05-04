import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    const services = useLoaderData()
    console.log(services)



    return (
        <div>
            {/* Banner */}
            <Banner />

            {/* Our service  */}
            <div className='grid gap-3 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                {
                    services.map((service) => <ServiceCard key={service.id} service={service} />)
                }
            </div>
            
        </div>
    );
};

export default Home;