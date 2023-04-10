"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  AspectRatio,
  Box,
  Flex,
  Text,
  HStack,
  Heading,
  Link,
  Container,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import VisibilitySensor from "react-visibility-sensor";
// Importing all the child components specialy for this section
import ServiceCard from "./ServiceCard";
import CounterUp from "./CounterUp";

export default function Services() {
  return (
    <Box
      id="programs"
      w="full"
      px={{ base: "25px", md: "100px", lg: "200px" }}
      py={{ base: "10px", md: "50px", lg: "60px" }}
      className="relative"
    >
      <Grid
        templateColumns={{
          lg: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        pb="20px"
        gap="8"
      >
        <GridItem w="100%" h="100%">
          <Heading
            fontSize={{ base: "34px", md: "44px", lg: "54px" }}
            letterSpacing="6px"
            color="blue.900"
          >
            The Program in a Nutshell: <br />
            Earn While You Learn
          </Heading>
        </GridItem>
        <GridItem w="100%" h="100%">
          <Text color="blue.700" className="pt-2">
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program&apos;s beginning. It resembles a
            cross between a corporate venture and an educational project.
          </Text>
          <Box
            color="blue.700"
            fontSize={{ base: "50%", md: "75%", lg: "100%" }}
            className="pt-14"
          >
            <VisibilitySensor>
              {({ isVisible }) => (
                <div>&nbsp; {isVisible ? <CounterUp /> : " "}</div>
              )}
            </VisibilitySensor>
          </Box>
        </GridItem>
      </Grid>
      <Tabs variant="unstyled">
        <TabList>
          <Grid
            templateColumns={{
              lg: "repeat(6, 1fr)",
              md: "repeat(3, 1fr)",
              base: "repeat(2, 1fr)",
            }}
          >
            <Tab
              _selected={{ color: "white", bg: "blue.900" }}
              fontSize={{ base: "80%", md: "90%", lg: "100%" }}
            >
              Web 3.0 and Metaverse
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "blue.900" }}
              fontSize={{ base: "80%", md: "90%", lg: "100%" }}
            >
              Artificial Intelligence and Deep Learning
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "blue.900" }}
              fontSize={{ base: "80%", md: "90%", lg: "100%" }}
            >
              Cloud-Native Computing
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "blue.900" }}
              fontSize={{ base: "80%", md: "90%", lg: "100%" }}
            >
              Ambient Computing and IoT
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "blue.900" }}
              fontSize={{ base: "80%", md: "90%", lg: "100%" }}
            >
              Genomics and Bioinformatics
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "blue.900" }}
              fontSize={{ base: "80%", md: "90%", lg: "100%" }}
            >
              Network Programmability and Automation
            </Tab>
          </Grid>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ServiceCard
              heading="Web 3.0 (Blockchain) and Metaverse Specialization"
              description="This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences."
              imageurl="bcandmeta.jpg"
              id="WEB3"
            />
          </TabPanel>
          <TabPanel>
            <ServiceCard
              heading="Artificial Intelligence (AI) and Deep Learning Specialization"
              description="The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models."
              imageurl="ai.jpg"
              id="AI"
            />
          </TabPanel>
          <TabPanel>
            <ServiceCard
              heading="Cloud-Native Computing Specialization"
              description="The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes."
              imageurl="cloudnative.jpg"
              id="CN"
            />
          </TabPanel>
          <TabPanel>
            <ServiceCard
              heading="Ambient Computing and IoT Specialization"
              description="The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices."
              imageurl="realiot.jpg"
              id="IOT"
            />
          </TabPanel>
          <TabPanel>
            <ServiceCard
              heading="Genomics and Bioinformatics Specialization"
              description="Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications. "
              imageurl="genomics.jpg"
              id="GENOM"
            />
          </TabPanel>
          <TabPanel>
            <ServiceCard
              heading="Network Programmability and Automation Specialization"
              description="More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git."
              imageurl="iot.jpg"
              id="NP"
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
