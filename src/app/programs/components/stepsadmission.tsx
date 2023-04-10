"use client";

import React, { useState } from "react";
import {
  AccordionIcon,
  VStack,
  AspectRatio,
  StackDivider,
  Center,
  Box,
  Button,
  ButtonGroup,
  OrderedList,ListItem,
  Flex,
  Text,
  HStack,
  Heading,
  Avatar,
  Link,
  Container,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  Image,
} from "@chakra-ui/react";
import '../../globals.css'

export default function StepsAdmission() {
 
     const MyPlaceholder = [
        {
          Step:"1",
          url:"../../step1.jpg",
          Paragraph:"\nPIAIC will launch classes in the following locations, one city at a time, in the following order\n\n1- Karachi\n2- Islamabad\n3- Lahore\n4- Peshawar\n5- Faisalabad",
        },
        {
          Step:"2",
          url:"../../step2.jpg",
          Paragraph:"\nTo participate in the program and become eligible for the most prestigious credentials for AI, Cloud and Blockchain technologies in the world, students must complete the following process \n\n1- Signup at PIAIC Portal  https://portal.piaic.org/signup \n2- Submit the online application.\n3- Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results are determined based on percentile.\n4- Pass all PIAIC exams with an average score of at least 70%.",
        },
        {
          Step:"3",
          url:"../../step3.jpg",
          Paragraph:"\nAll programs are one year long in duration. Each program is divided into four quarters (12 weeks each). Classes are held once a week. In the initial stages, classes will be held only on Sundays. There will 6 sections of classes available, including:\n \n1- Artificial Intelligence\n2- Cloud Native and Mobile Web Computing\n3- Blockchain\n4- Internet of Things\n5- 5G and Software Defined Networking and Quantum Computing.\n\nEach class will be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year.",
        },
        {
          Step:"4",
          url:"../../step4.jpg",
          Paragraph:"\nThose students who wish to participate in the program online can check the distance learning option in the application form. Please note that distance learning students must also take proctored exams on site, just like the onsite students.\n\nThe fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 installments of PKR 3,000, before the start of each quarter.\n\nThe fee structure for distance learning students is PKR 500 per month for 12 months, payable in 4 installments of PKR 1,500, before the start of each quarter.",
        },
        {
          Step:"5",
         
          url:"../../step5.jpg",
          Paragraph:"\nPlease note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds.",
        },
        { 
          Step:"6",
       
          url:"../../step6.jpg",
          Paragraph:"\nPlease note, this is a highly prestigious program. Due to the high level of difficulty, only 10% of students will be awarded the PIAIC certifications.",
        },
        {
          Step:"7",
         
          url:"../../step7.jpg",
          Paragraph:"\nFor questions related to admissions, you may call us on the\nPIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM.\n\nPlease note we are closed on Fridays.\n\nFor technical questions related to coursework, you may contact us via\nemail at education@piaic.org.",
        },
        
      ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide =()=>
  {
      const isFirstSlide = currentIndex === 0;
      const newindex = isFirstSlide ? MyPlaceholder.length -1 : currentIndex -1;
      setCurrentIndex(newindex);
  }
  const nextSlide =()=>{
      const isLastSlide = currentIndex === MyPlaceholder.length-1;
      const newindex = isLastSlide ? 0 : currentIndex +1;
      setCurrentIndex(newindex);
  }
  
  const goToSlide =(MyPlaceholderIndex:any)=>{
  setCurrentIndex(MyPlaceholderIndex);
  }
  
  return (
         <Box w="full"  px={{base:'25px', md:'100px',lg:'200px'}}
      // py={{base:'10px', md:'50px',lg:'60px'}} pb="100px" 
      className="relative group" bg="yellow.50">
     {/* <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}> */}
  <Heading fontSize={{base:'34px', md:'44px',lg:'54px'}} letterSpacing="6px" color="blue.900" py="20px">
          How it Works
        </Heading>
        {/* </RevealWrapper> */}
  
  
         {/* <Box w="full" boxShadow='dark-lg' rounded='md' >
        <AspectRatio w="full" ratio={16/9} >
  <iframe width="560" height="315" src={slides[currentIndex].url}  allowFullScreen > </iframe>
  </AspectRatio>
  </Box> */}
    {/* <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}> */}
  <Flex flexDirection="column" bg="yellow.50" height="full" justifyContent='center' alignItems='center'>
     <Box  bg="yellow.50"  w="full" >
     <Grid templateColumns={{lg:"repeat(2, 1fr)",md:"repeat(2, 1fr)", base:"repeat(1, 1fr)"}} pb="20px" gap="10" className="relative">
  
 
     <GridItem boxShadow='dark-lg' rounded='md'>
 
 <HStack>
 <b><div className="test1 relative">Step&nbsp;{MyPlaceholder[currentIndex].Step}</div></b>
   <AspectRatio width="full" height="400px" ratio={16/9}>
        <Image alt="service image" width="full" display='block' min-height='25%' min-width= '25%' overflow="hidden" src={MyPlaceholder[currentIndex].url}  />
        </AspectRatio>   
      
  </HStack>
          </GridItem>
  
 
 <GridItem>
  <br/>
 <b><div>Step&nbsp;{MyPlaceholder[currentIndex].Step}</div></b>
<Text  color="blue.700" fontSize={{base:'80%', md:'90%',lg:'100%'}}>{MyPlaceholder[currentIndex].Paragraph}</Text><br/>
</GridItem>
  

  </Grid>
  
  </Box>
  
      </Flex>
      {/* </RevealWrapper> */}
  
      {/* <RevealWrapper origin='bottom' delay={200} duration={1000} distance='500px' reset={true}> */}
  
          {/* <div className='hidden group-hover:block absolute top-[50%] -translate-x-[-10%] translate-y-[-50%] left-50 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30}/>
          </div>
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-[-10%] translate-y-[-50%] right-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30}/>
          </div> */}
          {/* <div className='flex top-4 justify-center py-2'>
          {MyPlaceholder.map((MyPlaceholder, MyPlaceholderIndex) =>(
  <div 
  key={MyPlaceholderIndex}
  onClick={()=> goToSlide(MyPlaceholderIndex)}
  className='text-2xl cursor-pointer'> 
      <RxDotFilled/>
  </div>
          ))}
  
          </div> */}
          {/* </RevealWrapper> */}
          <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    py={12}
    // bgImage="url('https://bit.ly/2Z4KKcF')"
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={2}
  >
    <ButtonGroup gap='4'>
      <Button colorScheme='facebook' onClick={prevSlide}>Previous Step</Button>
      <Button colorScheme='facebook' onClick={nextSlide}>Next Step</Button>
    </ButtonGroup>
  </Box>





     </Box>
    )
}
