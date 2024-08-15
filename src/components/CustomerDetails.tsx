import React, { useEffect, useState } from "react";
import { Customer } from "../types/Customer";
import { fetchPhotos } from "../services/api";

interface CustomerDetailsProps {
  customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (customer) {
      const loadPhotos = async () => {
        const randomPage = Math.floor(Math.random() * 20) + 1;
        const fetchedPhotos = await fetchPhotos(randomPage);
        setPhotos(fetchedPhotos);
      };
      loadPhotos();
      intervalId = setInterval(loadPhotos, 10000);
    }
    return () => clearInterval(intervalId);
  }, [customer]);

  if (!customer) {
    return (
      <div className="customer-details">Select a customer to see details.</div>
    );
  }

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <div className="photo-grid">
        {photos.map((photoUrl, index) => (
          <img key={index} src={photoUrl} alt="Customer" />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
