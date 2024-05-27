"use client"
import { motion } from "framer-motion";
import QSet from "./QSet"

const vList = {
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
			delay: 0.8
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

const FAQ = ({ faqs }: { faqs: any[] }) => {
	return (
		<section id="faq" className="w-full pt-32 flex flex-col gap-10 items-center justify-between">
			<div className="flex-1 flex flex-col items-center justify-between w-full">
				<div className="flex flex-col gap-4 w-full">
					<motion.h3 initial={m.initial} whileInView={m.whileInView} transition={{
						delay: 0,
						duration: 0.5
					}} className="font-playfair font-medium text-2xl flex items-center gap-4">
						FAQs
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
					}} className="font-playfair font-medium text-3xl sm:text-4xl lg:text-5xl">Frequently Asked <span className="text-highlight">Questions</span></motion.h2>
					<motion.p initial={m.initial} whileInView={m.whileInView} transition={{
						delay: 0.6,
						duration: 0.5
					}} className="pt-2 sm:pt-4">Find answers to all your questions about Davayte in our comprehensive FAQ section. Get all the information you need before you arrive, so you can enjoy a hassle-free stay.</motion.p>
				</div>
			</div>
			<motion.div initial="hidden" whileInView={"visible"} variants={vList} className="w-full flex flex-col gap-8">
				{faqs.map((faq: any, i) => <QSet key={faq._id} i={i} faq={faq} />)}
				{faqs.length === 0 && <div className="pb-8 font-playfair uppercase w-full text-2xl">There are no FAQs at the moment</div>}
			</motion.div>
		</section>
	)
}
export default FAQ