import img1 from "../../imagini/jacket1.png";
import img2 from '../../imagini/pulover1.png';
import img3 from '../../imagini/tricou.png';
import Image from 'next/image'
import { useRouter } from "next/router";

const NFT=()=>{
  const router =useRouter();

  const buyHandler=()=>{
    router.push('/deposit');
  }

    return <div className="positionNFT">
    <h3 className='text-center w-90 text-lg font-bold'> 3 NFT</h3>
    
    <button id="buyButton" className=" btn-buy hover:scale-110 hover:rotate-6" onClick={buyHandler}>Buy with Card</button>
    <div>
    <hr className="hr-buy"/>
    
    <hr className="hr-buy2"/>
    <div className="justify">
    <div className="cardMare">
    <div className="card cursor-pointer shadow-transparent hover:scale-90">
      <Image className="img1" src={img1} alt="Avatar" />
      <div className="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
      
    </div>
    <div className="card cursor-pointer shadow-transparent hover:scale-90">
      <Image className="img1" src={img2} alt="Avatar" />
      <div className="container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
      
  </div>
  <div className="card cursor-pointer shadow-transparent hover:scale-90">
    <Image className="img1" src={img3} alt="Avatar" />
    <div className="container">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
}

export default NFT;