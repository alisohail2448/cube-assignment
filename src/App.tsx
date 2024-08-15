import React, { useState } from "react";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import { Customer } from "./types/Customer";
import "./styles/App.css";

const mockCustomers: Customer[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Customer ${i < 9 ? `0${i + 1}` : i + 1}`,
  title: `Title ${i + 1}`,
  address: `Address ${i + 1}`,
  photos: [],
}));

function App() {
  const [customers] = useState<Customer[]>(mockCustomers);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
    1
  );

  const selectedCustomer =
    customers.find((customer) => customer.id === selectedCustomerId) || null;
  return (
    <div>
      <h2 className="heading">Customer Portal</h2>
      <div className="app-container">
        <CustomerList
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onSelectCustomer={setSelectedCustomerId}
        />
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
}

export default App;
