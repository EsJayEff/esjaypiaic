
import React from "react";
import { AspectRatio,Box,Flex, Text,HStack, Heading, Link,Container,Grid,GridItem,Tabs, TabList, TabPanels, Tab, TabPanel,Image} from "@chakra-ui/react";
import ServiceCard from "./ServiceCard";
import CounterUp from "./CounterUp";
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'
import { RevealWrapper,RevealList  } from  'next-reveal'
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

export default function Services() {
  return (
    
    <Box  id="programs" w="full"   px={{ base: "25px", md: "100px", lg: "200px" }}
    py={{ base: "10px", md: "50px", lg: "60px" }}  
    className='relative' >

      <Grid templateColumns={{lg:"repeat(2, 1fr)",md:"repeat(2, 1fr)", base:"repeat(1, 1fr)"}} pb="20px" gap="8" >
      {/* <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}> */}
      <GridItem w="100%" h="100%" >
      <Heading fontSize={{base:'34px', md:'44px',lg:'54px'}} letterSpacing="6px" color="blue.900">The Program in a Nutshell: <br/>Earn While You Learn</Heading>
    </GridItem> 
    {/* </RevealWrapper> */}
    {/* <RevealWrapper origin='right' delay={200} duration={1200} distance='500px' reset={true}> */}
    <GridItem w="100%" h="100%" >
    <Text color="blue.700" className="pt-2">In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program&apos;s beginning. It resembles a cross between a corporate venture and an educational project.
    </Text>
    <Box color="blue.700" fontSize={{base:'50%', md:'75%',lg:'100%'}} className="pt-14">
     <VisibilitySensor>
        {({isVisible}) =>
          <div>&nbsp; {isVisible ? <CounterUp/> : ' '}</div>
        }
      </VisibilitySensor>
    
    
  </Box>
  </GridItem> 
  {/* </RevealWrapper> */}
  </Grid>
  
    {/* <HStack w="full"  alignItems="center"
    display={{lg:"flex",base:"revert"}}
    > */}

    <Tabs variant='unstyled' >
   
  <TabList>
  <Grid templateColumns={{lg:"repeat(6, 1fr)",md:"repeat(3, 1fr)", base:"repeat(2, 1fr)"}} >
  {/* <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}> */}
     <Tab _selected={{ color: 'white', bg: 'blue.900' }}fontSize={{base:'80%', md:'90%',lg:'100%'}}>Web 3.0 and Metaverse</Tab>
     {/* </RevealWrapper> */}
     {/* <RevealWrapper origin='left' delay={200} duration={1200} distance='500px' reset={true}> */}
    <Tab _selected={{ color: 'white', bg: 'blue.900' }}fontSize={{base:'80%', md:'90%',lg:'100%'}}>Artificial Intelligence and Deep Learning</Tab>
    {/* </RevealWrapper> */}
    {/* <RevealWrapper origin='top' delay={200} duration={1400} distance='500px' reset={true}> */}
       <Tab _selected={{ color: 'white', bg: 'blue.900' }}fontSize={{base:'80%', md:'90%',lg:'100%'}}>Cloud-Native Computing</Tab>
    {/* </RevealWrapper> */}
    {/* <RevealWrapper origin='top' delay={200} duration={1600} distance='500px' reset={true}> */}
    <Tab _selected={{ color: 'white', bg: 'blue.900' }}fontSize={{base:'80%', md:'90%',lg:'100%'}}>Ambient Computing and IoT</Tab>
    {/* </RevealWrapper> */}
    {/* <RevealWrapper origin='right' delay={200} duration={1800} distance='500px' reset={true}> */}
    <Tab _selected={{ color: 'white', bg: 'blue.900' }}fontSize={{base:'80%', md:'90%',lg:'100%'}}>Genomics and Bioinformatics</Tab>
    {/* </RevealWrapper> */}
    {/* <RevealWrapper origin='right' delay={200} duration={2000} distance='500px' reset={true}> */}
    <Tab _selected={{ color: 'white', bg: 'blue.900' }}fontSize={{base:'80%', md:'90%',lg:'100%'}}>Network Programmability and Automation</Tab>
   {/* </RevealWrapper> */}
    </Grid>
  </TabList>


  {/* <RevealWrapper origin='bottom' delay={200} duration={1200} distance='500px' reset={true}> */}
  <TabPanels>
    <TabPanel>
   
    {/* <AspectRatio  ratio={20/5} >
      <Image src="/bcandmeta.jpg" objectFit="contain"/>
      </AspectRatio> */}
    <ServiceCard 
    heading="Web 3.0 (Blockchain) and Metaverse Specialization"
    description="This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences."
    imageurl="bcandmeta.jpg"
    id="WEB3"
    />
    
     
    </TabPanel>
    <TabPanel>
    {/* <AspectRatio  ratio={20/5} >
      <Image w="100%" h="100%" src="/ai.jpg" display="block" />
      </AspectRatio> */}
    <ServiceCard 
    heading="Artificial Intelligence (AI) and Deep Learning Specialization"
    description="The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models."
    
    imageurl="ai.jpg"
    id="AI"
    />
      </TabPanel>
    <TabPanel>
    {/* <AspectRatio  ratio={20/5} >
      <Image src="/cloudnative.jpg" />
      </AspectRatio> */}
<ServiceCard 
    heading="Cloud-Native Computing Specialization"
    description="The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes."
   imageurl="cloudnative.jpg"
    id="CN"
    />
   
</TabPanel>
    <TabPanel>
    {/* <AspectRatio  ratio={20/5} >
      <Image src="/iot.jpg" />
      </AspectRatio> */}
 <ServiceCard 
    heading="Ambient Computing and IoT Specialization"
    description="The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices."
   
    imageurl="realiot.jpg"
    id="IOT"
/>

</TabPanel>
    <TabPanel>
    {/* <AspectRatio  ratio={20/5} >
      <Image src="/genomics.jpg" />
      </AspectRatio> */}
 <ServiceCard 
    heading="Genomics and Bioinformatics Specialization"
    description="Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications. "
   
    imageurl="genomics.jpg"
    id="GENOM"
    />
 
 </TabPanel>
<TabPanel>
{/* <AspectRatio  ratio={20/5} >
      <Image src="/iot.jpg" />
      </AspectRatio> */}
 <ServiceCard 
    heading="Network Programmability and Automation Specialization"
    description="More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git."
  
    imageurl="iot.jpg"
    id="NP"
 />
 
 </TabPanel>
{/* </HStack> */}
</TabPanels>
{/* </RevealWrapper> */}
</Tabs>
    </Box>

   
  )
}
