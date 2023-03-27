import { useState,useEffect } from "react";

const Deposit=()=>{
  const [input,changeInput]=useState("");
const [coin,coinChange]=useState("Bitcoin");
const [sum,sumChange]=useState(0);
const [sumBTC,sumChangeBTC]=useState(0);
const [priceBTC,priceChangeBTC]=useState(21000);
const [amountBTC,amountChangeBTC]=useState(0);
const [sumETH,sumChangeETH]=useState(0);
const [priceETH,priceChangeETH]=useState(1400);
const [amountETH,amountChangeETH]=useState(0);
const [sumXRP,sumChangeXRP]=useState(0);
const [priceXRP,priceChangeXRP]=useState(0.35);
const [amountXRP,amountChangeXRP]=useState(0);
const [priceBTCChange,priceBTCChangeButton]=useState(0);
const [priceETHChange,priceETHChangeButton]=useState(0);
const [priceXRPChange,priceXRPChangeButton]=useState(0);
const [hBTC,hBTCChange]=useState(0);
const [hETH,hETHChange]=useState(0);
const [hXRP,hXRPChange]=useState(0);


const inputChange=(event)=>{
  if(event.target.value>0){
  changeInput(event.target.value);}
 
 
}

const inputBTCPriceHandler=(event)=>{
  priceBTCChangeButton(event.target.value);
}

const inputETHPriceHandler=(event)=>{
  priceETHChangeButton(event.target.value);
}

const inputXRPPriceHandler=(event)=>{
  priceXRPChangeButton(event.target.value);
}

const inputCoin=(event)=>{
  if(event.target.value.length>0){
  coinChange(event.target.value);}
  
}

const buyHandler=(event)=>{

  event.preventDefault();
  sumChange(sum+Number(input));
  
  
  if(coin==="Bitcoin"&&input>0){
  sumChangeBTC(sumBTC+Number(input))
  amountChangeBTC(amountBTC+(input/priceBTC))
  
  }

  if(coin==="Ethereum"&&input>0){
    sumChangeETH(sumETH+Number(input))
  amountChangeETH(amountETH+(input/priceETH))
  }

    if(coin==="XRP"&&input>0){
      sumChangeXRP(sumXRP+Number(input))
  amountChangeXRP(amountXRP+(input/priceXRP))
  }
  
}

const changeBtcHandler=(event)=>{
  event.preventDefault();
priceChangeBTC(priceBTCChange);
hBTCChange(priceBTCChange-priceBTC);
}

const changeETHHandler=(event)=>{
  event.preventDefault();
priceChangeETH(priceETHChange);
hETHChange(priceETH-priceETHChange-priceETH);
}

const changeXRPHandler=(event)=>{
  event.preventDefault();
priceChangeXRP(priceXRPChange);
hXRPChange(priceXRPChange-priceXRP);
}

return <div className="body-pos">
<div className="position">
<hr/>
<div>
  <h3 id="h3ChangeBTC" className="font-bold  hover:text-yellow-600">1BTC={priceBTC}$</h3>
  <input  id="userChange" type="number"  min="0" onChange={inputBTCPriceHandler}/>
    <input  className="cursor-pointer btn-body hover:scale-110 hover:rotate-6" id="changeMoney" type="submit" value="Change" onClick={changeBtcHandler}/>
  <h3 id="h3ChangeETH" className="font-bold  hover:text-yellow-600">1ETH={priceETH}$</h3>
  <input  id="userChangeETH" type="number"  min="0" onChange={inputETHPriceHandler}/>
    <input  className="cursor-pointer btn-body hover:scale-110 hover:rotate-6" id="changeMoneyETH" type="submit" value="Change" onClick={changeETHHandler}/>
  <h3 id="h3ChangeXRP" className="font-bold  hover:text-yellow-600">1XRP={priceXRP}$</h3>
  <input  id="userChangeXRP" type="number"  min="0" onChange={inputXRPPriceHandler}/>
    <input  className="cursor-pointer btn-body hover:scale-110 hover:rotate-6" id="changeMoneyXRP" type="submit" value="Change" onClick={changeXRPHandler}/>
  </div>
<hr/>
</div>

<div className="position2">
  <h3 id="deposit" className="font-bold  hover:text-yellow-600 text-2xl">${sum}</h3>
  
  <div className="deposit-div">
    <form>
      <label className="font-bold  hover:text-yellow-600 text-xl">Coin:</label>
      <select className="selector" onChange={inputCoin}>
        <option>Bitcoin</option>
        <option>Ethereum</option>
        <option>XRP</option>
      </select>
      <label htmlFor="addMoney" className="font-bold  hover:text-yellow-600 text-xl">Amount $:</label>
      <input  id="userInput" type="number"  min="0" onChange={inputChange}/>
      <input  className="addButton hover:scale-110 hover:rotate-6 cursor-pointer" id="addMoney" type="submit" value="Buy" onClick={buyHandler}/>
    </form>
  </div>
  <div>
  <hr className="hr-buy"/>
  <ul className="flex space-x-52 text-large  ">
    <li className="text-large ">Name</li>
    <li className="text-large ">
      Amount
    </li>
    <li className="text-large li-body">
      Price
    </li >
    <li className="text-large li-body">
      Total
    </li>
    <li className="text-large li-body">24 Hours</li>
  </ul>
  <hr className="hr-buy2"/>




<div className="ul-div">
  <ul className="flex space-x-56 font-bold text-large">
  <li className=" hover:text-yellow-600">Bitcoin</li>
  <li className=" hover:text-yellow-600"  >
  {amountBTC}
  </li>
  <li className=" hover:text-yellow-600" >
  {priceBTC}$
  </li>
  <li className=" hover:text-yellow-600" style={{marginLeft:"27%"}}>
  {sumBTC}$
  </li>
  <li className=" hover:text-yellow-600">
    {hBTC}$
  </li>
</ul>
<ul className="flex space-x-56 font-bold text-large">
  <li className=" hover:text-yellow-600">Ethereum</li>
  <li className=" hover:text-yellow-600 "  style={{marginLeft:"26.5%"}}>
  {amountETH}
  </li>
  <li className=" hover:text-yellow-600" style={{marginLeft:"30%"}}>
  {priceETH}$
  </li>
  <li className=" hover:text-yellow-600" style={{marginLeft:"27.5%"}}>
  {sumETH}$
  </li>
  <li className=" hover:text-yellow-600" style={{marginLeft:"29%"}}>
  {hETH}$
  </li>
</ul>
<ul className="flex space-x-56 font-bold text-large">
  <li className=" hover:text-yellow-600">XRP</li>
  <li style={{marginLeft:"32%"}}>
  {amountXRP}
  </li>
  <li className=" hover:text-yellow-600" style={{marginLeft:"30%"}}>
  {priceXRP}$
  </li>
  <li className=" hover:text-yellow-600" style={{marginLeft:"28%"}}>
  {sumXRP}$
  </li>
  <li className=" hover:text-yellow-600">
  {hXRP}$
  </li>
</ul>
</div>
</div>
</div>
</div>

}

export default Deposit;