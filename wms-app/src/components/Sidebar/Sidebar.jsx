import React from "react";
import "./Sidebar.css"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
                <li> <a href="/dashboard">Dashboard</a> </li>
                <li> <a href="/inventory">Inventory</a> </li>
                <li> <a href="/orders">Orders</a> </li>
                <li> <a href="/products">Products</a> </li>
                <li> <a href="/warehouseMap">Warehouse Map</a> </li>
                <li> <a href="/reports">Reports</a> </li>
                <li> <a href="/settings">Settings</a> </li>
            </ul>
        </div>
    )
}

export default Sidebar