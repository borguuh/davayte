"use client"
import { motion } from "framer-motion";

const m = {
  initial: {
    opacity: 0,
    y: 20
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
}

const Hero = () => {

  return (
    <section className="w-full pt-16 flex flex-col gap-10 items-center justify-between text-center">
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col gap-4 w-full">
          <motion.h1 initial={m.initial} whileInView={m.whileInView} transition={{
            delay: 0,
            duration: 0.5
          }} className="text-5xl font-semibold leading-relaxed text-balance">
            Transforming <span className="text-highlight">Event Management</span> with Unique Communities
          </motion.h1>
          <motion.p initial={m.initial} whileInView={m.whileInView} transition={{
            delay: 0.3,
            duration: 0.5
          }} className="text-lg opacity-70">Building Unique Communities, One Event at a time</motion.p>
        </div>
        <div className="w-full flex flex-col items-center justify-center pt-2">
          <motion.img initial={m.initial} whileInView={m.whileInView} transition={{
            delay: 0.6,
            duration: 0.5
          }} src="/hero.svg" alt="Hero" className="w-[800px]" />
        </div>
      </div>
    </section>
  )
}
export default Hero