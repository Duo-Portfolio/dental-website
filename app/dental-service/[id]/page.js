// app/services/[id]/page.jsx
import { getServiceById } from "@/model/services";

const ServiceDetail = async ({ params }) => {
  // Await params to ensure it is resolved before accessing its properties
  const { id } = await params;
  const service = await getServiceById(id); // Await if this function returns a Promise

  if (!service) {
    return <div>Service not found.</div>; // Handle case where service is not found
  }
  console.log(service);

  return (
    <>
      <div>hello {service.id}</div>
      <div>{service.title}</div>
      <div>{service.description}</div>
      {<img src={service.image} alt={service.title} />}
      <div>{service.content}</div>
    </>
  );
};

export default ServiceDetail;
