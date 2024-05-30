"use client"
import { emailURL, postApiJson } from "@/source/controllers/helpers";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

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

const Subscribe = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: ""
  })
  const [processing, setProcessing] = useState(false)

  const submitHandler = async (e: any) => {
    e.preventDefault()
    if (processing) return toast.error("Please wait while we process your request")
    if (!userData.name) return toast.error("Please enter your name")
    if (!userData.email) return toast.error("Please enter your email address")
    setProcessing(true)
    try {
      const service_id = process.env.NEXT_PUBLIC_SERVICE_ID
      const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID
      const user_id = process.env.NEXT_PUBLIC_USER_ID

      const res = await postApiJson(emailURL, {
        service_id,
        template_id,
        user_id,
        template_params: {
          full_name: userData.name,
          user_email: userData.email
        }
      })

      if (res !== 200) toast.error("An error occurred while processing your request")
      else {
        toast.success("You have successfully subscribed to our newsletter")
        setUserData({
          name: "",
          email: ""
        })
      }

    } catch (error) {
      console.log(error)
      toast.error("An error occurred while processing your request")
    }

    setProcessing(false)
  }

  return (
    <section id="subscribe" className="w-full pt-32 flex flex-col gap-10 items-center justify-between">
      <div className="flex-1 flex flex-col lg:flex-row items-start justify-between w-full">
        <div className="flex flex-col gap-4 w-full">
          <motion.h3 initial={m.initial} whileInView={m.whileInView} transition={{
            delay: 0,
            duration: 0.5
          }} className="font-playfair font-medium text-2xl flex items-center gap-4">
            Subscribe
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
          }} className="font-playfair font-medium text-3xl sm:text-4xl lg:text-5xl">
            Stay <span className="text-highlight">Updated</span>
          </motion.h2>
          <motion.p initial={m.initial} whileInView={m.whileInView} transition={{
            delay: 0.6,
            duration: 0.5
          }} className="pt-2 sm:pt-4">
            Subscribe to our newsletter to get the latest updates on our products and services.
          </motion.p>
        </div>
        <motion.div initial={m.initial} whileInView={m.whileInView} transition={{
            delay: 0.9,
            duration: 0.5
          }} className="w-full flex flex-col gap-8 pt-10">
          <form action="" className="max-w-[400px] flex flex-col gap-4 lg:self-end w-full" onSubmit={submitHandler}>
            <input type="name" name="name" id="name" placeholder="Enter your name" onInput={(e: any) => setUserData({ ...userData, name: e.target.value })} value={userData.name}
              className="w-full bg-transparent border-b border-gray-300 focus:border-gray-500 focus:outline-none p-2" />
            <input type="email" name="email" id="email" placeholder="Enter your email address" onInput={(e: any) => setUserData({ ...userData, email: e.target.value })} value={userData.email}
              className="w-full bg-transparent border-b border-gray-300 focus:border-gray-500 focus:outline-none p-2" />
            <button type="submit" disabled={processing} className="w-full flex items-center justify-center gap-2 bg-highlight text-black font-medium py-2 cursor-pointer focus:outline-none transition duration-300 hover:bg-opacity-80 hover:shadow-xl">
              Subscribe
              {processing && <ClipLoader color="#000000" size={16} />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
export default Subscribe