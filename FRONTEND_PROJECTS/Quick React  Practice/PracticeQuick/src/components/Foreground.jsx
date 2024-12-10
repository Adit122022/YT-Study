import React, { useState } from 'react'
import Card from './Card'
import { motion } from "framer-motion"

const Foreground = () => {
    const narutoQuotes = [
        {
          name: "Naruto Uzumaki",
          desc: "I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:true,Tagtitle:"Download Now",tagColor : "green"
          }
        },
        {
          name: "Kakashi Hatake",
          desc: "Those who break the rules are scum, but those who abandon their friends are worse than scum.",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:true,Tagtitle:"Download Now",tagColor : "blue"
          }
        },
        {
          name: "Sasuke Uchiha",
          desc: "My name is Sasuke Uchiha. I hate a lot of things, and I don’t particularly like anything. What I have is not a dream, because I will make it a reality.",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:false,Tagtitle:"Download Now",tagColor : "green"
          }
        },
        {
          name: "Itachi Uchiha",
          desc: "People live their lives bound by what they accept as correct and true. That’s how they define 'reality.' But what does it mean to be 'correct' or 'true?' They are merely vague concepts.",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:true,Tagtitle:"Download Now",tagColor : "blue"
          }
        },
        {
          name: "Jiraiya",
          desc: "A person grows up when they're able to overcome hardships. Protection is important, but there are some things a person must learn on their own.",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:false,Tagtitle:"Download Now",tagColor : "green"
          }
        },
        {
          name: "Hinata Hyuga",
          desc: "When I watch you, I feel strong, like I can do anything—that even I am worth something.",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:false,Tagtitle:"Download Now",tagColor : "green"
          }
        },
        {
          name: "Gaara",
          desc: "A person becomes strong when they have someone they want to protect.",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:true,Tagtitle:"Upload Now",tagColor : "green"
          }
        },
        {
          name: "Rock Lee",
          desc: "A hero is not one who never falls. He is the one who gets up again and again, never losing sight of his dreams.",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:false,Tagtitle:"Download Now",tagColor : "green"
          }
        },
        {
          name: "Tsunade",
          desc: "People become stronger because they have things they cannot forget. That’s what you call growth.",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:false,Tagtitle:"Download Now",tagColor : "green"
          }
        },
        {
          name: "Minato Namikaze",
          desc: "When you’re protecting something special, it gives you the courage to move forward.",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:false,Tagtitle:"Download Now",tagColor : "green"
          }
        },
        {
          name: "Madara Uchiha",
          desc: "Wake up to reality! Nothing ever goes as planned in this accursed world.",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:false,Tagtitle:"Download Now",tagColor : "green"
          }
        },
        {
          name: "Obito Uchiha",
          desc: "I'm no one. I don't want to be anyone. All I care about is completing the Eye of the Moon Plan.",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:false,Tagtitle:"Download Now",tagColor : "green"
          }
        },
        {
          name: "Hashirama Senju",
          desc: "The true meaning of a shinobi is one who endures to achieve their goal.",
          filesize: ".9mb",
          close :true,
          tag:{
            isOpen:false,Tagtitle:"Download Now",tagColor : "green"
          }
        }
      ];
      
    // const [first, setfirst] = useState(second)
  return (
    <div className="scrollbar w-full h-full  fixed top-0 left-0 flex gap-10 overflow-x-hidden overflow-y-scroll  flex-wrap justify-center p-5 z-[3]">
{narutoQuotes.map((value,index)=>{
   return <Card data ={value} />
    
})}
    </div>
  )
}

export default Foreground