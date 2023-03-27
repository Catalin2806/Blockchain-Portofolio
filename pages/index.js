import { useState } from "react";
import { useRouter } from "next/router";


export default function Home() {
  const router =useRouter();
const [name,changeName]=useState("")

const nameHandler=()=>{
 let numeIntrodus= prompt('Please enter your name');
 let nume=numeIntrodus.charAt(0).toUpperCase()+numeIntrodus.slice(1).toLowerCase();
  changeName(nume);
}

const buyHandler=()=>{
  router.push('/deposit');
}

  return (<>
  <div className="body-pos">
<div className="position">
  <div>
    <h3 className="font-bold cursor-pointer hover:text-yellow-600">1BTC=21000$</h3>
    <h3 className="font-bold cursor-pointer hover:text-yellow-600">1ETH=1200$</h3>
    <h3 className="font-bold cursor-pointer hover:text-yellow-600">1XRP=0.35$</h3>
    <h1 id='nume'>{name}</h1><button id="nameButton" className="btn-body hover:scale-110 hover:rotate-6" onClick={nameHandler}>Change Name</button>
    </div>
<hr/>
</div>

<div className="position2">
  <h3 className="font-bold cursor-pointer hover:text-yellow-600 text-2xl">$0</h3>

  <button id="buyButton" className="btn-buy hover:scale-110 hover:rotate-6" onClick={buyHandler}>Buy with Card</button>
  <div>
  <hr className="hr-buy"/>
  <ul className="flex space-x-52">
    <li className="li-body">Name</li>
    <li className="li-body">
      Amount
    </li>
    <li className="li-body">
      Price
    </li >
    <li className="li-body">
      Total
    </li>
    <li className="li-body">24 Hours</li>
  </ul>
  <hr className="hr-buy2"/>
</div>
</div>
</div>

   
    </>
  )
}
