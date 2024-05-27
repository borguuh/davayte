"use client"
import { motion } from "framer-motion";
import { v4 } from "uuid";
import WorkStep from "./WorkStep"

type HowItWorksProps = {
  steps: {
    number: number;
    title: string;
    subtitle: string;
  }[];
}
const vList = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 1,
    transition: {
      when: "afterChildren",
    },
  },
}
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

const HowItWorks = ({ steps }: HowItWorksProps) => {
  return (
    <section id="how" className="w-full pt-32 flex flex-col gap-10 items-center justify-between">
      <div className="flex-1 flex flex-col lg:flex-row items-start justify-between w-full">
        <div className="flex flex-col gap-4 w-full">
          <motion.h3 initial={m.initial} whileInView={m.whileInView} transition={{
            delay: 0,
            duration: 0.5
          }} className="font-playfair font-medium text-2xl flex items-center gap-4">
            Steps
            <div>
              <svg height="15" className="top-[2px]" viewBox="0 0 135 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="11.5176" x2="111" y2="11.5176" stroke="#ffffff" />
                <path d="M123 0.0175781L135 12.0176L123 24.0176L111 12.0176L123 0.0175781Z" fill="#ffffff" />
              </svg>
            </div>
          </motion.h3>
          <motion.h2 initial={m.initial} whileInView={m.whileInView} transition={{
            delay: 0.3,
            duration: 0.5
          }} className="font-playfair font-medium text-5xl">How It <span className="text-highlight">Works</span></motion.h2>
          <motion.p initial={m.initial} whileInView={m.whileInView} transition={{
            delay: 0.6,
            duration: 0.5
          }} className="pt-4">Follow these steps to get started</motion.p>
        </div>
        <motion.div initial="hidden" whileInView={"visible"} variants={vList} className="w-full flex flex-col gap-8 pt-10">
          {steps.map((step, i) => <WorkStep key={v4()} i={i} {...step} />)}
        </motion.div>
      </div>
    </section>
  )
}
export default HowItWorks