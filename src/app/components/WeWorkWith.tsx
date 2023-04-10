"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export default function WeWorkWith() {
  return (
    <Box
      w="full"
      px={{ base: "25px", md: "100px", lg: "200px" }}
      py={{ base: "20px", md: "50px", lg: "60px" }}
      className="relative"
    >
      <Heading
        fontSize={{ base: "34px", md: "44px", lg: "54px" }}
        letterSpacing="6px"
        color="blue.900"
        py="20px"
      >
        We Work With |<br />
        Partners
      </Heading>
      <Marquee
        pauseOnHover
        speed={50}
        className="h-[100px] mr-10 overflow-hidden"
      >
        <div className="h-[100px] w-[100px] mr-10  overflow-hidden">
          <Image
            alt="KSE"
            width={{ base: "50%", md: "70%", lg: "100%" }}
            className="max-w-[100%] max-h-[100%] block "
            src="KSE.png"
            title="Karachi Stock Exchange"
          />
        </div>

        <div className="h-[100px] w-[100px] mr-10  overflow-hidden">
          <Image
            alt="Panacloud"
            width={{ base: "50%", md: "70%", lg: "100px" }}
            className="max-w-[100%] max-h-[100%] block "
            src="panacloud.png"
            title="Pana cloud"
          />
        </div>

        <div className="h-[100px] w-[200px] mr-10  overflow-hidden">
          <Image
            alt="Saylani Trust"
            width={{ base: "50%", md: "70%", lg: "100%" }}
            className="max-w-[100%] max-h-[100%] block "
            src="saylaniwelfare.png"
            title="Saylani Welfare Trust"
          />
        </div>

        <div className="h-[100px] w-[100px] mr-10  overflow-hidden">
          <Image
            alt="University of Peshawar"
            width={{ base: "50%", md: "70%", lg: "100%" }}
            className="max-w-[100%] max-h-[100%] block "
            src="UOP.png"
            title="University of Peshawar"
          />
        </div>

        <div className="h-[100px] w-[100px] mr-10  overflow-hidden">
          <Image
            alt="CECOS University Peshawar"
            width={{ base: "50%", md: "70%", lg: "100%" }}
            className="max-w-[100%] max-h-[100%] block "
            src="cecos.jpeg"
            title="CECOS University Peshawar"
          />
        </div>

        <div className="h-[100px] w-[100px] mr-10  overflow-hidden">
          <Image
            width={{ base: "50%", md: "70%", lg: "100%" }}
            className="max-w-[100%] max-h-[100%] block "
            src="imsciences.jpg"
            alt="IM sciences University Peshawar"
            title="IM sciences University Peshawar"
          />
        </div>

        <div className="h-[100px] w-[100px] mr-10  overflow-hidden">
          <Image
            width={{ base: "50%", md: "70%", lg: "100px" }}
            className="max-w-[100%] max-h-[100%] block "
            src="Hazarauni.jpg"
            title="Hazara University Mansehra"
            alt="Hazara University Mansehra"
          />
        </div>

        <div className="h-[100px] w-[100px] mr-10  overflow-hidden">
          <Image
            width={{ base: "50%", md: "70%", lg: "100px" }}
            className="max-w-[100%] max-h-[100%] block "
            src="AIR.png"
            title="Air University Islamabad"
            alt="Air University Islamabad"
          />
        </div>

        <div className="h-[100px] w-[100px] mr-10  overflow-hidden">
          <Image
            width={{ base: "50%", md: "70%", lg: "100px" }}
            className="max-w-[100%] max-h-[100%] block "
            src="NUST.jpg"
            title="National University of Technology Islamabad"
            alt="National University of Technology Islamabad"
          />
        </div>

        <div className="h-[100px] w-[100px] mr-10  overflow-hidden">
          <Image
            width={{ base: "50%", md: "70%", lg: "100px" }}
            className="max-w-[100%] max-h-[100%] block "
            src="CUL.jpg"
            title="COMSAT University Lahore & Abbotabad"
            alt="COMSAT University Lahore & Abbotabad"
          />
        </div>

        <div className="h-[100px] w-[100px] mr-10  overflow-hidden">
          <Image
            width={{ base: "50%", md: "70%", lg: "100px" }}
            className="max-w-[100%] max-h-[100%] block "
            src="UET.png"
            title="University of Engineering & Technology Lahore"
            alt="University of Engineering & Technology Lahore"
          />
        </div>

        <div className="h-[100px] w-[100px] mr-10  overflow-hidden">
          <Image
            width={{ base: "50%", md: "70%", lg: "100px" }}
            className="max-w-[100%] max-h-[100%] block "
            src="MUQ.png"
            title="Minhaj Ul Quran University Lahore"
            alt="Minhaj Ul Quran University Lahore"
          />
        </div>
      </Marquee>
    </Box>
  );
}
