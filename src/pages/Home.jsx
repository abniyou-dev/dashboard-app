import React from "react";
import SideBar from "../components/SideBar";
import DashboardHeader from "../components/DashboardHeader";
import { RiChatCheckFill } from "react-icons/ri";
import { DashNumbers } from "../data/DashData";
import { ordersData } from "../data/OrdersData";

function Home() {
  // download the json-server package
  // npm install -g json-server

  // run the json server
  // json-server --watch db.json --port 5000

  const DashData = DashNumbers();

    let pendding, shipped, delivered;
    
  const getdata = () => {
     pendding = ordersData.filter(or => or.status === "pending");
     shipped = ordersData.filter(or => or.status === "shipped");
     delivered = ordersData.filter(or => or.status === "delivered");
  }

  getdata();
  return (
    <div className="w-full min-h-screen bg-neutral-900 text-white flex">

      {/* Sidebar  */}
      <div
        className="hidden md:block">
        <SideBar />
      </div>

      {/* Dashboard elements   */}
      <div
        className="w-full p-5 flex flex-col gap-5">
        <DashboardHeader />

        {/* dashhboard cards  */}
        <div
          className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">

          {/* card content  */}
          <div
            className="border flex h-50 p-5 bg-linear-to-tr from-sky-700 to-sky-400 rounded-xl shadow-lg">
            <div className="flex-1">
              <span 
                className="text-3xl font-bold">Shipped Orders</span>
            </div>
            <div
              className="flex items-center justify-center">
              <span className="text-5xl font-extrabold  ">{pendding.length}</span>
            </div>
          </div>
          <div
            className="border flex h-50 p-5 bg-linear-to-tr from-red-500 to-red-400 rounded-xl shadow-lg">
            <div className="flex-1">
              <span 
                className="text-3xl font-bold">Pendding Orders</span>
            </div>
            <div
              className="flex items-center justify-center">
              <span className="text-5xl font-extrabold  ">{pendding.length}</span>
            </div>
          </div>
          <div
            className="border flex h-50 p-5 bg-linear-to-tr from-green-600 to-green-400 rounded-xl shadow-lg">
            <div className="flex-1">
              <span 
                className="text-3xl font-bold">New Orders</span>
            </div>
            <div
              className="flex items-center justify-center">
              <span className="text-5xl font-extrabold  ">{delivered.length}</span>
            </div>
          </div>
          

        </div>

        {/* main content  */}
      <div
        className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">

        <div
          className="bg-neutral-800 p-5 rounded-xl space-y-2 ">
            <h1 className="text-2xl">Recent Activity</h1>
            <div
              className="border-b flex items-center justify-between">
              <div
                className="flex items-center gap-5 py-2">
                <span><RiChatCheckFill /></span>
                <span>Confirm Orders Updates</span>
              </div>
              <span className="bg-yellow-700 mr-5 text-sm rounded-xl px-3">Uroent</span>
            </div>
            <div
              className="border-b flex items-center justify-between">
              <div
                className="flex items-center gap-5 py-2">
                <span><RiChatCheckFill /></span>
                <span>Confirm Orders Updates</span>
              </div>
              <span className="bg-yellow-700 mr-5 text-sm rounded-xl px-3">Uroent</span>
            </div>
            <div
              className="border-b flex items-center justify-between">
              <div
                className="flex items-center gap-5 py-2">
                <span><RiChatCheckFill /></span>
                <span>Confirm Orders Updates</span>
              </div>
              <span className="bg-yellow-700 mr-5 text-sm rounded-xl px-3">Uroent</span>
            </div>
            <div
              className="border-b flex items-center justify-between">
              <div
                className="flex items-center gap-5 py-2">
                <span><RiChatCheckFill /></span>
                <span>Confirm Orders Updates</span>
              </div>
              <span className="bg-green-700 mr-5 text-sm rounded-xl px-3">Uroent</span>
            </div>
            <div
              className="border-b flex items-center justify-between">
              <div
                className="flex items-center gap-5 py-2">
                <span><RiChatCheckFill /></span>
                <span>Confirm Orders Updates</span>
              </div>
              <span className="bg-red-700 mr-5 text-sm rounded-xl px-3">Uroent</span>
            </div>
            
        </div>

      </div>
      </div>

      

    </div>
  );
}

export default Home;
