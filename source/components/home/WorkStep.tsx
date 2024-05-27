"use client"
import { motion } from "framer-motion";

type WorkStepProps = {
  i: number;
  number: number;
  title: string;
  subtitle: string;
}
const variant = {
	visible: (i: number) => ({
		scale: 1,
		opacity: 1,
		transition: {
			delay: i * 0.2,
		},
	}),
	hidden: { scale: 0.5, opacity: 0, },
}

const WorkStep = ({ i, number, title, subtitle }: WorkStepProps) => {
  return (
    <motion.div custom={i} variants={variant} className="flex items-start ssm:items-center justify-start gap-2 sm:gap-6 flex-col ssm:flex-row ">
      <div className="w-14 h-14 bg-white/15 flex items-center justify-center rounded-full text-2xl font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="font-playfair font-medium text-xl sm:text-2xl pb-1.5">{title}</h3>
        <p className="opacity-70 sm:text-base text-sm">{subtitle}</p>
      </div>
    </motion.div>
  )
}
export default WorkStep