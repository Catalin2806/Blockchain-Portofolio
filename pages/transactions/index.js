import { useState,useEffect } from "react";
import { useRouter } from "next/router";

const Transactions=()=>{
  const router =useRouter();
const [input,changeInput]=useState("");
const [coin,coinChange]=useState("Bitcoin");
const [sum,sumChange]=useState(0);
const [inputBTC,changeInputBTC]=useState([]);
const [inputETH,changeInputETH]=useState([]);
const [inputXRP,changeInputXRP]=useState([]);
const [inputBTCN,changeInputBTCN]=useState([]);
const [inputETHN,changeInputETHN]=useState([]);
const [inputXRPN,changeInputXRPN]=useState([]);


const inputChange=(event)=>{
  if(event.target.value>0){
  changeInput(event.target.value);}
 
 
}

const inputCoin=(event)=>{
  if(event.target.value.length>0){
  coinChange(event.target.value);}
  
}

const buyHandler=(event)=>{

  event.preventDefault();
  sumChange(sum+Number(input));
  
  console.log(coin);
  console.log(input);
  if(coin==="Bitcoin"&&input>0){
  let totalBTC=inputBTC;
  totalBTC.push(input);
  changeInputBTC(totalBTC);}

  if(coin==="Ethereum"&&input>0){
    let totalETH=inputETH;
    totalETH.push(input);
    changeInputETH(totalETH);}

    if(coin==="XRP"&&input>0){
      let totalXRP=inputXRP;
      totalXRP.push(input);
      changeInputXRP(totalXRP);}
  

}

const sellHandler=(event)=>{
  event.preventDefault();
  if (sum<=0 ||sum-input<0){return;}else{
  sumChange(sum-Number(input));

  if(coin==="Bitcoin"&&input>0){
    let totalBTCN=inputBTCN;
    totalBTCN.push(input);
    changeInputBTCN(totalBTCN);}
  
    if(coin==="Ethereum"&&input>0){
      let totalETHN=inputETHN;
      totalETHN.push(input);
      changeInputETHN(totalETHN);}
  
      if(coin==="XRP"&&input>0){
        let totalXRPN=inputXRPN;
        totalXRPN.push(input);
        changeInputXRPN(totalXRPN);}}
}

const portofolioHandler=()=>{
  router.push('/');
}

    return <div className="body-pos">
    <div className="position">
    <button className="btn-body btn-buy hover:scale-110 hover:rotate-6" onClick={portofolioHandler}>Connect Portofolio</button>
    <hr/>
    <div>
      <h3 className="font-bold  hover:text-yellow-600">1BTC=21000$</h3>
      <h3 className="font-bold  hover:text-yellow-600">1ETH=1400$</h3>
      <h3 className="font-bold  hover:text-yellow-600">1XRP=0.35$</h3>
      </div>
    </div>
    
    <div className="position2">
      <h3 id="deposit " className="font-bold  hover:text-yellow-600 text-2xl">{sum}$</h3>
     
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
            <input  className="addButton  hover:scale-110 hover:rotate-6 cursor-pointer" id="sendButton" type="submit" value="Send" onClick={sellHandler}/>
          </form>
      <div className="grid-cols-4">
      <hr className="hr-buy"/>
      <ul className=" flex space-x-80">
        <li className="li-body1 text-large">Name</li>
        <li className="li-body text-large">
          Amount
        </li>
        <li className="li-body text-large">
          Price
        </li >
        <li className="li-body text-large">
          Total
        </li>
      
      </ul>
      <hr className="hr-buy2"/>
   
    </div>
    </div>
    
    
      <ul className="ul-coin  flex space-x-60">
      <li className="font-bold  hover:text-yellow-600 text-large">Bitcoin</li>
      <ul id="ul-BTC" className="font-bold text-large ">
      { inputBTC.length>0 && inputBTC.map((item)=><li className=" hover:text-yellow-600" key={Math.random()}>{item/Number(21000)}</li>)}
      { inputBTCN.length>0 && inputBTCN.map((item)=><li className=" hover:text-yellow-600" key={Math.random()}>{-item/Number(21000)}</li>)}
    </ul>
      <ul id="ul-BTCPrice" className="font-bold  ml-28 text-large">
      {inputBTC.length>0 && inputBTC.map((item)=><li className=" hover:text-yellow-600" key={Math.random()}>$21000</li>)}
      {inputBTCN.length>0 && inputBTCN.map((item)=><li className=" hover:text-yellow-600" key={Math.random()}>$21000</li>)}
      </ul>
      
      <ul className=" font-bold  text-large mr-0 " id="ul-BTCTotal" style={{marginLeft:"28%"}}>
    {inputBTC.length>0 && inputBTC.map((item)=><li className=" hover:text-yellow-600"  key={Math.random()}>{item}$</li>)}
    {inputBTCN.length>0 && inputBTCN.map((item)=><li  className=" hover:text-yellow-600"key={Math.random()}>-{item}$</li>)}
      </ul>
    </ul>
    <ul className="flex space-x-60">
      <li className="font-bold  hover:text-yellow-600 text-large">Ethereum</li>
      <ul className="font-bold text-large" id="ul-ETH" >
      {inputETH.length>0 && inputETH.map((item)=><li className=" hover:text-yellow-600" key={Math.random()}>{item/Number(1400)}</li>)}
      {inputETHN.length>0 && inputETHN.map((item)=><li className=" hover:text-yellow-600" key={Math.random()}>{-item/Number(1400)}</li>)}
      </ul>
        <ul id="ul-ETHPrice font-bold  ml-28 text-large" >
        {inputETH.length>0 && inputETH.map((item)=><li className="font-bold hover:text-yellow-600" key={Math.random()}>$1400</li>)}
        {inputETHN.length>0 && inputETHN.map((item)=><li className="font-bold hover:text-yellow-600" key={Math.random()}>$1400</li>)}
        </ul>
        <ul id="ul-ETHTotal font-bold  ml-28 text-large" style={{marginLeft:"28.5%"}}>
        {inputETH.length>0 && inputETH.map((item)=><li className="font-bold hover:text-yellow-600"key={Math.random()}>{item}$</li>)}
        {inputETHN.length>0 && inputETHN.map((item)=><li  className="font-bold hover:text-yellow-600" key={Math.random()}>-{item}$</li>)}
        </ul>
    </ul>
    <ul className="flex space-x-72">
      <li className="font-bold  hover:text-yellow-600 text-large">XRP</li>
      <ul className="font-bold text-large" id="ul-XRP " >
      {inputXRP.length>0 && inputXRP.map((item)=><li className=" hover:text-yellow-600" key={Math.random()}>{item/Number(0.35)}</li>)}
      {inputXRPN.length>0 && inputXRPN.map((item)=><li className=" hover:text-yellow-600" key={Math.random()}>{-item/Number(0.35)}</li>)}
      </ul>
        <ul id="ul-XRPPrice" className="font-bold  hover:text-yellow-600 text-large" style={{marginLeft:"22%"}}>
        {inputXRP.length>0 && inputXRP.map((item)=><li className=" hover:text-yellow-600"key={Math.random()}>$0.35</li>)}
        {inputXRPN.length>0 && inputXRPN.map((item)=><li className=" hover:text-yellow-600" key={Math.random()}>$0.35</li>)}
        </ul>
        <ul id="ul-XRPTotal" className="font-bold  hover:text-yellow-600 text-large " style={{marginLeft:"29%"}}>
        {inputXRP.length>0 && inputXRP.map((item)=><li className=" hover:text-yellow-600" key={Math.random()}>{item}$</li>)}
        {inputXRPN.length>0 && inputXRPN.map((item)=><li className=" hover:text-yellow-600" key={Math.random()}>-{item}$</li>)}
        </ul>
    </ul>
    
    </div>
    </div>
}

export default Transactions;