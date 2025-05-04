import React from "react";
import Banner from "../components/Banner";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Our service  */}
      <h2 className="text-5xl font-bold text-center mt-16">Our Services</h2>
      <p className="text-center w-2/5 my-3 mx-auto">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis
        architecto eveniet aliquid, molestias officiis architecto eveniet
        aliquid, mole alias?{" "}
      </p>
      <div className="grid gap-3 mt-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {services.slice(0, 4).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <button className="block mx-auto btn btn-warning my-8"><Link to="/allTreatments">Show More</Link></button>
    </div>
  );
};

export default Home;
