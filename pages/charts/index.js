import React,{useEffect,useState} from 'react';
import { Chart } from "chart.js";
import { useRouter } from "next/router";
import Chart1 from '../../components/Bitcoin';
import Chart2 from '../../components/Ethereum';
import Chart3 from '../../components/Xrp';


const Charts =()=>{
  

    return <div className="items-center">
      
    <Chart1/>
    <Chart2/>
    <Chart3/>
  
  </div>
}

export default Charts;