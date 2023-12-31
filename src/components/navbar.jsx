import React from "react";
import "./navbar.css";
import { useState } from "react";
import Drop1 from "./drop.jsx";

export default function Navbar(){
  const [state,setState] = useState(false)
   
    return <>
    <div className="grid grid-cols-7 px-3 py-4 text-right fixed top-0 left-0 right-0 box-border">
      <div className="grid col-span-4 text-left font-bold text-slate-950 text-lg">Sublime.</div>
      <div className=" col-span-2  flex justify-end content-center hover:text-regal">
        <span className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </span>
        <span>Cart (0)</span>
      </div>
      <div className="flex justify-end col-span-1 content-center" onClick={()=>{
         setState(!state)
      }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
      </div>
      <div className="col-span-7 -mt-12 p-0 ">
        {state?<Drop1/>:null}
      </div>
    </div>
    </>
}