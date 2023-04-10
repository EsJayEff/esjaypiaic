"use client";

import React from "react";
// motion for animations
import { motion } from "framer-motion";
// variant for framer motion
//import { fadeIn } from "../utils/variants";
import {Button,Box,Heading,Text,Stack } from "@chakra-ui/react";


const Contact = () => {
  return (
    <Box 
    w="full"

    px={{ base: "25px", md: "100px", lg: "200px" }}
    py={{ base: "10px", md: "50px", lg: "60px" }}

    background="blue.900"
justifyContent="space-between" 
alignItems="flex-start"
className="relative"
  >
    <section className="py-16 lg:section" id="contact" >
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div
          className="flex-1 flex justify-start items-center">
            <div>
            <Text color="whiteAlpha.900" className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch!
              </Text>
            <Heading fontSize={{base:'34px', md:'44px',lg:'54px'}} letterSpacing="6px" color="whiteAlpha.900" py="20px">
            Let&apos;s work <br />together!
      </Heading>

              
              {/* <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                
              </h2> */}
            </div>
          </div>
          {/* form */}
          <form            
          className="flex-1  border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start ">
            <input
              className="text-white bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your Email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white  focus:border-accent transition-all resize-none mb-12 text-white"
              placeholder="Your Message"
            ></textarea>
            <Button colorScheme='twitter' variant='solid' className="border-solid">Send message</Button>
           </form>
        </div>
      </div>
    </section>
   </Box>
  );
};

export default Contact;