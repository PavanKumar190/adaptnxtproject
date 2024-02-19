import React from 'react';
import './SideBar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#order-dashboard">Order Dashboard</a></li>
        <li><a href="#inventory">Inventory</a></li>
        <li><a href="#orders">Orders</a></li>
        <li><a href="#shipping">Shipping</a></li>
        <li><a href="#channel">Channel</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
