import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

import { motion } from "framer-motion"

const Card = ({data ,refrence}) => {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.05}} dragElastic={0.2} dragTransition={{bounceStiffness :180 ,bounceDamping:210}} className=" relative w-72 h-80 bg-zinc-900/90 rounded-[30px] text-white px-8 py-10 overflow-hidden">
<FaRegFileAlt />
<p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
<div className="absolute bottom-0   w-full  left-0">
    <div className='flex justify-between items-center px-8 py-3  mb-3'>
        <h5 className=''>{data.filesize}</h5>
   <span className='w-7 h-7 bg-zinc-600 rounded-full  flex justify-center items-center '>  
    {data.close ?  <IoMdClose/> :<LuDownload size =".7em" color="#fff" />}
       </span>
    </div>
   {data.tag.isOpen && (  <div className={`w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-4 flex justify-center items-center`}>
       <h3 className='text-sm font-semiSbold'> {data.tag.Tagtitle}</h3>
    </div>) }
   
</div>
    </motion.div>
  )
}

export default Card