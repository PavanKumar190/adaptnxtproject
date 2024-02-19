import React, { useState } from 'react';

const OrdersTab = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('Pending');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    onTabChange(tab); // Callback to parent component
  };

  return (
    <div className="tab-container">
      <button
        className={activeTab === 'Pending' ? 'active' : ''}
        onClick={() => handleTabChange('Pending')}
      >
        Pending
      </button>
      <button
        className={activeTab === 'Completed' ? 'active' : ''}
        onClick={() => handleTabChange('Completed')}
      >
        Completed
      </button>
      <button
        className={activeTab === 'Completed' ? 'active' : ''}
        onClick={() => handleTabChange('Completed')}
      >
        Cancelled
      </button>
      <button
        className={activeTab === 'Completed' ? 'active' : ''}
        onClick={() => handleTabChange('Completed')}
      >
        Shipped
      </button>
      <button
        className={activeTab === 'Completed' ? 'active' : ''}
        onClick={() => handleTabChange('Completed')}
      >
        Ready to ship
      </button>
    </div>
  );
};

export default OrdersTab;
