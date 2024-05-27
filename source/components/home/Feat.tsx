"use client"
import { motion } from "framer-motion";

type FeatProps = {
  i: number
  title: string
  subtitle: string
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

const Feat = ({ i, title, subtitle }: FeatProps) => {
  return (
    <motion.div custom={i} variants={variant} className="bg-[#151515] w-full p-6 rounded-3xl border border-white/20">
      <h4 className="text-xl font-medium">{title}</h4>
      <p className="pt-4 opacity-70">{subtitle}</p>
    </motion.div>
  )
}
export default Feat