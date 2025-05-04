import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const AllTreatments = () => {
  const services = useLoaderData();

  return (
    <div>
      <div className="grid gap-3 my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllTreatments;
