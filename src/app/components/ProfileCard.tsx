"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  Box,
  Image,
} from "@chakra-ui/react";

export default function ProfileCard() {
  return (
    <>
      {/* Profile Card */}
      <Box
        w="full"
        px="40px"
        py="20px"
        className="relative"
        boxShadow="dark-lg"
        rounded="3xl"
      >
        <div className="w-full h-full group cursor-pointer active:opacity-70 transition-opacity duration-300 relative z-[1]">
          <div className="bg-black relative group rounded-t h-[50px] group-hover:h-[100px] transition-all duration-300">
            <Box
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition duration-300"
              bgGradient="linear(to-t, blue.900, blue.500)"
            >
                {/* Body */}
            </Box>
            <Image
              alt="zia khan"
              src="/ziakhanpot.jpg"
              className="object-cover absolute w-[120px] bottom-0 opacity-0 rounded-full  border-solid border-8 border-white aspect-square group-hover:opacity-100 transform translate-y-2/4 group-hover:translate-y-0 transition duration-300"
            />
            <h1 className="absolute top-1/2 transform -translate-y-1/2 left-5 group-hover:left-40 text-white font-bold sm:text-xl transition-all duration-300">
              Zia Khan
            </h1>
          </div>
          <Box>
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/groups/590632791401391">
                  <Image
                    alt="facebook"
                    src="https://i.ibb.co/x7P24fL/facebook.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/piaicofficial">
                  <Image
                    alt="twitter"
                    src="https://i.ibb.co/Wnxq2Nq/twitter.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/piaicofficial">
                  <Image
                    alt="instagram"
                    src="https://i.ibb.co/ySwtH4B/instagram.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ziaukhan/">
                  <Image alt="linkedin" src="linkedin.png" />
                </a>
              </li>
            </ul>
          </Box>
          <hr />
          {/* Body Card */}
          <div className="py-3 px-4 bg-white rounded-b relative z-10 ">
            <div className="font-semibold mb-1">
              <p className=" text-gray-700">Volunteer COO of PIAIC</p>
            </div>
            <p className="text-sm text-gray-500">
              Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and
              Metanomist | CEO Panacloud | Volunteer COO Presidential Initiative
              for AI and Computing.
            </p>
          </div>
        </div>
      </Box>

      <Box
        w="full"
        px="40px"
        py="20px"
        className="relative"
        boxShadow="dark-lg"
        rounded="3xl"
      >
        <div className=" group cursor-pointer active:opacity-70 transition-opacity duration-300 relative z-[1]">
          {/* Title */}
          <div className="bg-black relative group rounded-t h-[50px] group-hover:h-[100px] transition-all duration-300">
            <Box
              className="w-full h-full  opacity-40 group-hover:opacity-60 transition duration-300"
              bgGradient="linear(to-t, blue.900, blue.500)"
            >
                {/* Body */}
            </Box>
            <Image
              alt="Hira Khan"
              src="/hirakhanpot.jpg"
              className="object-cover absolute w-[120px] bottom-0 opacity-0 rounded-full border-solid border-8 border-white aspect-square group-hover:opacity-100 transform translate-y-2/4 group-hover:translate-y-0 transition duration-300"
            />
            <h1 className="absolute top-1/2 transform -translate-y-1/2 left-5 group-hover:left-40 text-white font-bold sm:text-xl transition-all duration-300">
              Hira Khan
            </h1>
          </div>
          <Box>
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/groups/590632791401391">
                  <Image
                    alt="facebook"
                    src="https://i.ibb.co/x7P24fL/facebook.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/piaicofficial">
                  <Image
                    alt="twitter"
                    src="https://i.ibb.co/Wnxq2Nq/twitter.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/piaicofficial">
                  <Image
                    alt="instagram"
                    src="https://i.ibb.co/ySwtH4B/instagram.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hira-khan-76523540/">
                  <Image alt="linkedin" src="linkedin.png" />
                </a>
              </li>
            </ul>
          </Box>
          <hr />
          {/* Body Card */}
          <div className="py-3 px-4 bg-white rounded-b relative z-10 ">
            <div className="font-semibold mb-1">
              <p className=" text-gray-700">Co-Founder of Panacloud.</p>
            </div>
            <p className="text-sm text-gray-500">
              Co-founder of Panacloud Pvt. Ltd., which has been working in the
              technology education and services industry for the past 7 years.
              Prior to this I had been leading the Operation Badar Welfare
              Trust. Over the past 20 years, my team has collectively trained
              over 110,000 students, 30,000+ of which I am personally
              responsible for.
            </p>
          </div>
        </div>
      </Box>

      <Box
        w="full"
        px="40px"
        py="20px"
        className="relative"
        boxShadow="dark-lg"
        rounded="3xl"
      >
        {/* Profile Card */}
        <div className=" group cursor-pointer active:opacity-70 transition-opacity duration-300 relative z-[1]">
          {/* Title */}
          <div className="bg-black relative group rounded-t h-[50px] group-hover:h-[100px] transition-all duration-300">
            <Box
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition duration-300"
              bgGradient="linear(to-t, blue.900, blue.500)"
            >
                  {/* Body */}
            </Box>
            <Image
              alt="adil altaf"
              src="/adilaltafpot.jpg"
              className="object-cover absolute w-[120px] bottom-0 opacity-0 rounded-full border-solid border-8 border-white aspect-square group-hover:opacity-100 transform translate-y-2/4 group-hover:translate-y-0 transition duration-300"
            />
            <h1 className="absolute top-1/2 transform -translate-y-1/2 left-5 group-hover:left-40 text-white font-bold sm:text-xl transition-all duration-300">
              Adil Altaf
            </h1>
          </div>
          <Box>
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/groups/590632791401391">
                  <Image
                    alt="facebook"
                    src="https://i.ibb.co/x7P24fL/facebook.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/piaicofficial">
                  <Image
                    alt="twitter"
                    src="https://i.ibb.co/Wnxq2Nq/twitter.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/piaicofficial">
                  <Image
                    alt="instagram"
                    src="https://i.ibb.co/ySwtH4B/instagram.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/adilaltaf/">
                  <Image alt="linkedin" src="linkedin.png" />
                </a>
              </li>
            </ul>
          </Box>
          <hr />
          {/* Body Card */}
          <div className="py-3 px-4 bg-white rounded-b relative z-10 ">
            <div className="font-semibold mb-1">
              <p className=" text-gray-700">Continuous Innovation Leader</p>
            </div>
            <p className="text-sm text-gray-500">
              Building innovative products by using a combination of Design
              Thinking, Lean Startup, Agile and DevOps Methodologies. Using this
              iterative leadership and development approach, I deliver
              incremental and continuous increases in business value and reduce
              risk and time to market significantly using automation tools for
              CI/CD.
            </p>
          </div>
        </div>
      </Box>

      <Box
        w="full"
        px="40px"
        py="20px"
        className="relative"
        boxShadow="dark-lg"
        rounded="3xl"
      >
        {/* Profile Card */}
        <div className=" group cursor-pointer active:opacity-70 transition-opacity duration-300 relative z-[1]">
          {/* Title */}
          <div className="bg-black relative group rounded-t h-[50px] group-hover:h-[100px] transition-all duration-300">
            <Box
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition duration-300"
              bgGradient="linear(to-t, blue.900, blue.500)"
            >
                {/* Body */}
            </Box>
            <Image
              alt="Zeeshan Hanif"
              src="/zeeshanhanifpot.jpg"
              className="object-cover absolute w-[120px] bottom-0 rounded-full border-solid border-8 border-white aspect-square opacity-0 group-hover:opacity-100 transform translate-y-2/4 group-hover:translate-y-0 transition duration-300"
            />
            <h1 className="absolute top-1/2 transform -translate-y-1/2 left-5 group-hover:left-36 text-white font-bold sm:text-xl transition-all duration-300">
              Zeeshan Hanif
            </h1>
          </div>
          <Box>
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/groups/590632791401391">
                  <Image
                    alt="facebook"
                    src="https://i.ibb.co/x7P24fL/facebook.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/piaicofficial">
                  <Image
                    alt="twitter"
                    src="https://i.ibb.co/Wnxq2Nq/twitter.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/piaicofficial">
                  <Image
                    alt="instagram"
                    src="https://i.ibb.co/ySwtH4B/instagram.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/zeeshanhanif/">
                  <Image alt="linkedin" src="linkedin.png" />
                </a>
              </li>
            </ul>
          </Box>
          <hr />
          {/* Body Card */}
          <div className="py-3 px-4 bg-white rounded-b relative z-10 ">
            <div className="font-semibold mb-1">
              <p className=" text-gray-700">Head of Software Development.</p>
            </div>
            <p className="text-sm text-gray-500">
              Modern full-stack cloud and blockchain developer with over a
              decade of experience in developing dynamic applications using MERN
              Stack and static content with JAMstack together with
              Infrastructure as Code (IaC). I have developed the front-ends for
              SaaS and mobile applications, as well as extremely scalable and
              fault-tolerant back-ends.
            </p>
          </div>
        </div>
      </Box>
      <Box
        w="full"
        px="40px"
        py="20px"
        className="relative"
        boxShadow="dark-lg"
        rounded="3xl"
      >
        {/* Profile Card */}
        <div className="group cursor-pointer active:opacity-70 transition-opacity duration-300 relative z-[1]">
          {/* Title */}
          <div className="bg-black relative group rounded-t h-[50px] group-hover:h-[100px] transition-all duration-300">
            <Box
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition duration-300"
              bgGradient="linear(to-t, blue.900, blue.500)"
            >
              {/* Body */}
            </Box>
            <Image
              alt="Daniyal Nagori"
              src="/daniyalnagoripot.jpg"
              className="object-cover absolute w-[120px] bottom-0 opacity-0 rounded-full border-solid border-8 border-white aspect-square group-hover:opacity-100 transform translate-y-2/4 group-hover:translate-y-0 transition duration-300"
            />
            <h1 className="absolute top-1/2 transform -translate-y-1/2 left-5 group-hover:left-36 text-white font-bold sm:text-xl transition-all duration-300">
              Daniyal Nagori
            </h1>
          </div>
          {/* Body Card */}
          <Box>
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/groups/590632791401391">
                  <Image
                    alt="facebook"
                    src="https://i.ibb.co/x7P24fL/facebook.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/piaicofficial">
                  <Image
                    alt="twitter"
                    src="https://i.ibb.co/Wnxq2Nq/twitter.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/piaicofficial">
                  <Image
                    alt="instagram"
                    src="https://i.ibb.co/ySwtH4B/instagram.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/daniyalnagori/">
                  <Image alt="linkedin" src="linkedin.png" />
                </a>
              </li>
            </ul>
          </Box>
          <hr />
          <div className="py-3 px-4 bg-white rounded-b relative z-10 ">
            <div className="font-semibold mb-1">
              <p className=" text-gray-700">Head of Software Development.</p>
            </div>

            <p className="text-sm text-gray-500">
              Full-stack developer and DevOps Architect with certification in
              most cutting edge technologies of development and deployment of
              tools, apps and microservices. I am current in my certification
              for: Certified Kubernetes Application Developer AWS Certified
              Developer,Coursera React Native Nano Degree.
            </p>
          </div>
        </div>
      </Box>
      <Box
        w="full"
        px="40px"
        py="20px"
        className="relative"
        boxShadow="dark-lg"
        rounded="3xl"
      >
        {/* Profile Card */}
        <div className="group cursor-pointer active:opacity-70 transition-opacity duration-300 relative z-[1]">
          {/* Title */}

          <div className="bg-black relative group rounded-t h-[50px] group-hover:h-[100px] transition-all duration-300">
            <Box
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition duration-300"
              bgGradient="linear(to-t, blue.900, blue.500)"
            >
               {/* Body */}
            </Box>
            <Image
              alt="You"
              src="/me.jpg"
              className="object-cover absolute w-[120px] bottom-0 opacity-0 rounded-full border-solid border-8 border-white aspect-square group-hover:opacity-100 transform translate-y-2/4 group-hover:translate-y-0 transition duration-300"
            />
            <h1 className="absolute top-1/2 transform -translate-y-1/2 left-5 group-hover:left-36 text-white font-bold sm:text-xl transition-all duration-300">
              Es Jay
            </h1>
          </div>
          {/* Body Card */}
          <Box>
            <ul className="social">
              <li>
                <a href="https://www.facebook.com/groups/590632791401391">
                  <Image
                    alt="facebook"
                    src="https://i.ibb.co/x7P24fL/facebook.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/piaicofficial">
                  <Image
                    alt="twitter"
                    src="https://i.ibb.co/Wnxq2Nq/twitter.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/piaicofficial">
                  <Image
                    alt="instagram"
                    src="https://i.ibb.co/ySwtH4B/instagram.png"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shiraz-javed-farooq-esjay/">
                  <Image alt="linkedin" src="linkedin.png" />
                </a>
              </li>
              {/* <li><SocialIcon url="https://www.linkedin.com/in/shiraz-javed-farooq-esjay/" /></li> */}
            </ul>
          </Box>
          <hr />
          <div className="py-3 px-4 bg-white rounded-b relative z-10 ">
            <div className="font-semibold mb-1">
              <p className=" text-gray-700">Future of Pakistan.</p>
            </div>
            <p className="text-sm text-gray-500">PIAIC Ninja Trainee.</p>
          </div>
        </div>
      </Box>
    </>
  );
}
