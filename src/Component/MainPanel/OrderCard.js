import React from 'react'

function OrderCard({title, value}) {
  return (
    <div className='order-card' style={{
        backgroundColor: "#f2f2f2",
        borderRadius: "5px",
        padding: "20px",
        width: "200px", /* Adjust width as needed */
        textAlign: "center",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" 
         }}>
        <p className='title' style={{fontWeight: "bold", marginBottom: "10px"}}>{title}</p>
        <p className='value' style={{fontSize: "24px"}}>{value}</p>
      
    </div>
  );
}

export default OrderCard;
