import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { BiSearch } from "react-icons/bi";
import { ordersData } from "../data/OrdersData";

function orders() {

  const [serchedWord, setSearchedWord] = useState();
  const [filtredData, setFilteresData] = useState([]);

  function handleChange(e) {
    setFilteresData(ordersData.filter(or => or.customer.includes(e.target.value)));
  }

  function handleclick() {
    console.log(filtredData);
  }

  return (
    <div className="w-full min-h-screen bg-neutral-900 text-white flex">
      <div className="hidden md:block">
        <SideBar />
      </div>

      <div className="p-5 space-y-5 w-full">
        <div className="grid">
          <h1 className="text-4xl font-bold tracking-wider">Orders</h1>
          <span className="text-sm text-neutral-400">Total Orders : {ordersData.length}</span>
          <button 
            onClick={handleclick}
            className="bg-sky-800">show</button>
        </div>

        {/* searchh box */}
        <div className="border flex items-center h-10 max-w-75 rounded border-neutral-800">
          <span className="px-2 text-xl text-neutral-200">
            <BiSearch />
          </span>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Search for...."
            className="outline-none text-neutral-200"
          />
        </div>

        {/* data table */}
        <div className="min-w-154 ">
          <div className="w-full border border-neutral-700">
            <div
              className="grid grid-cols-5  text-center border-neutral-700
              [&>span]:p-3 [&>span]:border-r [&>span]:border-neutral-700 
              [&>span]:font-bold [&>span]:text-neutral-200"
            >
              <span>id</span>
              <span>customer</span>
              <span>total</span>
              <span>status</span>
              <span>date</span>
            </div>

            {filtredData.length > 0 ? (
              filtredData.map((or) => (
                <div
                  key={or.id}
                  className="grid grid-cols-5 border-t text-center border-neutral-700
              [&>span]:p-3 [&>span]:border-r [&>span]:border-neutral-700 
             [&>span]:text-neutral-200"
                >
                  <span>{or.id}</span>
                  <span>{or.customer}</span>
                  <span>{or.total}</span>
                  <span>{or.status}</span>
                  <span>
                    <span
                    className={or.status === "pending" ? "pendding" : or.status === "shipped" ?  "shipped" : "delivered"}>{or.status}</span>
                    </span>
                </div>
              ))
            ) : (
              ordersData.map((or) => (
                <div
                  key={or.id}
                  className="grid grid-cols-5 border-t text-center border-neutral-700
              [&>span]:p-3 [&>span]:border-r [&>span]:border-neutral-700 
             [&>span]:text-neutral-200"
                >
                  <span>{or.id}</span>
                  <span>{or.customer}</span>
                  <span>{or.total}</span>
                  <span>{or.status}</span>
                  <span>
                    <span
                    className={or.status === "pending" ? "pendding" : or.status === "shipped" ?  "shipped" : "delivered"}>{or.status}</span>
                    </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default orders;
