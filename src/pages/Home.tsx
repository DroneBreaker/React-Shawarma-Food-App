import { ReactNode } from "react"
import Button from "../components/Button"
import HeroText from "../components/HeroText"
import HomeLayout from "../layouts/HomeLayout"
import { motion } from 'framer-motion'

function HomeContent() {
    return (
        <div className="mx-4 md:mx-16 grid md:grid-cols-2">
            <div>
                <HeroText introText="It's not just a Food" lastText="Its an Experience!"/>

                <motion.p initial={{opacity: 0, scale:0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.7}} className="text-gray-400 text-sm md:w-[300px] w-[260px] mt-4 md:mt-8 mb-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempora
                    quaerat itaque nobis beatae quia unde totam ipsa delectus accusamus magnam
                    excepturi fugiat, praesentium, quo expedita pariatur, nam quasi iure.
                </motion.p>

                <motion.div initial={{opacity: 0, scale:0.2}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 1.2}} className="flex">
                    <Button img={"/menu.png"} text={"Our Menu"} route={'/menu'}/>
                    <Button img={"/conversation.png"} text={"About Us"} route={'/about'}/>
                </motion.div>
            </div>

            <motion.div initial={{opacity: 0, scale: 0.2}} animate={{opacity: 1, scale: 0.94, rotate: 360}} transition={{duration: 2}} className="relative shadow-2xl shadow-gray-700 rounded-full mt-[10%] mx-[-4] bg-gray-200">
                <img style={{left: '3%'}} className="relative" src="/shawarma-with-board.png"/>

                <div style={{top: '75%', left: '-7%'}} className="bg-white rounded-full flex absolute z-10 p-2 px-4 text-gray-400 animate-bounce hover:bg-gray-400 hover:text-white">
                    <img className="h-5 mx-1" src="/full.png"/>
                    <h2 className="text-xs font-bold">Finger licking dish</h2>
                </div>

                <div style={{top: '15%', right: '-7%'}} className="bg-white rounded-full flex absolute z-10 p-1 px-6 text-gray-400 animate-bounce hover:bg-gray-400 hover:text-white">
                    <img className="h-5 m-2" src="/full.png"/>
                    <h2 className="text-xs font-bold">Order from us <span className="block">and be happy</span></h2>
                </div>
            </motion.div>
        </div>
    )
}

export default function Home({children}: {children: ReactNode}) {
    return (
        <HomeLayout><HomeContent/></HomeLayout>
        
    )
}