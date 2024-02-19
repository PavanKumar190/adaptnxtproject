import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import OrdersTab from './OrdersTab';
import OrderTable from './OrderTable';
import SideBar from './SideBar';
import './OrderDashboard.css';
const OrderDashboard = () => {
  // Sample orders data
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', product: 'Product A', status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', product: 'Product B', status: 'Completed' },
    { id: 3, customerName: 'Alice Johnson', product: 'Product C', status: 'Pending' },
    { id: 4, customerName: 'Bob Brown', product: 'Product D', status: 'Completed' },
  ]);

  const [filteredOrders, setFilteredOrders] = useState(orders);

  const handleTabChange = (tab) => {
    if (tab === 'Pending') {
      setFilteredOrders(orders.filter((order) => order.status === 'Pending'));
    } else if (tab === 'Completed') {
      setFilteredOrders(orders.filter((order) => order.status === 'Completed'));
    }
  };

  return (
    <div className="order-dashboard">
              <SideBar />

    
    <div className="main-content">
      <NavigationBar />
      <OrdersTab onTabChange={handleTabChange} />
      <OrderTable orders={filteredOrders} />
    </div>
    </div>
  );
};

export default OrderDashboard;
