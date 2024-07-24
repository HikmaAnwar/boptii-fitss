'use client';
import Image from "next/image";


const Home = () =>{
    return(
    <div className=" flex bg-white">
        <Image src="/assets/wardrope.jpg" alt="wardrope img" width={1500} height={200}/>
    </div>
    );
}
export default Home;