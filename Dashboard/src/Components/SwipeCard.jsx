import { motion,useMotionValue, useTransform } from "framer-motion";
import { useAuth } from "../Contexts/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function SwipeCard({info}) {
    const {cardData, setCardData }=useAuth()
    const [tog,setTog]=useState(false)
  
  return (
    <section className="relative h-[100dvh] w-full snap-start overflow-hidden ">
      <motion.img
        src={info?.passportPhoto}
        alt={`Reel`}
        className="h-full w-full object-cover"
        initial={{ scale: 1.2, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        viewport={{ amount: 0.3 }}
      />
      <div onClick={()=>setTog(!tog)} className="absolute  w-full bottom-0 px-5 pb-6 pt-2 left-0 text-white drop-shadow-lg">
        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-bold"
        >
          {info?.personalDetails?.fullName}
          {/* Harsh jha */}
        </motion.h3>
        <p className="text-sm opacity-80">Tap to see more...</p>
      </div>
     {tog&&<motion.section 
      onClick={()=>setTog(!tog)}
            key="menu"
            initial={{
              scaleY: 0,
            }}
            animate={{
              scaleY: 1,
            }}
            exit={{
              scaleY: 0,
            }}
            className=" origin-bottom fixed flex bottom-0 left-0 h-screen  justify-center items-center w-full z-60 "
          >
            <div className=" bg-[#00000070] absolute h-full w-full top-0 left-0 blur-xl"></div>
            <div className="text-white flex flex-col w-[80vw] text-2xl gap-6">
              <Link to={`/employee/${info?._id}#Personal`} className="border-b relative z-30 w-full flex justify-between items-center">Personal Details <IoIosArrowForward/></Link>
              <Link to={`/employee/${info?._id}#Professional`} className="border-b relative z-30 w-full flex justify-between items-center">Professional Details <IoIosArrowForward/></Link>
              <Link to={`/employee/${info?._id}#Emergency`} className="border-b relative z-30 w-full flex justify-between items-center">Emergency Contacts <IoIosArrowForward/></Link>
              <Link to={`/employee/${info?._id}#Account`} className="border-b relative z-30 w-full flex justify-between items-center">Account Details <IoIosArrowForward/></Link>
              
            </div>
           
          </motion.section>}
    </section>
  );
}

export default SwipeCard;
