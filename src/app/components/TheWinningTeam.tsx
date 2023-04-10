

import React from "react";
import { VStack,AspectRatio,StackDivider,Box,Flex, Text,HStack, Heading, Avatar,Link,Container,Grid,GridItem,Accordion,AccordionItem,AccordionButton,AccordionPanel,Fade, ScaleFade, Slide, SlideFade,Card, CardHeader, CardBody, CardFooter,Stack,Divider,Image} from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard";
import ProfileCard from "./ProfileCard";
import { RevealWrapper,RevealList  } from  'next-reveal'

export default function TheWinningTeam2() {
  return (
  
    <Box w="full"  px={{base:'25px', md:'100px',lg:'200px'}}
    py={{base:'10px', md:'50px',lg:'60px'}} >

{/* <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}> */}
<Heading fontSize={{base:'34px', md:'44px',lg:'54px'}} letterSpacing="6px" color="blue.900" py="20px">
     Our People Are Your Advantage</Heading>  
     {/* </RevealWrapper> */}
    
     <Grid templateColumns={{lg:"repeat(3, 1fr)",md:"repeat(3, 1fr)", base:"repeat(1, 1fr)"}} pb="20px" gap="10" >
   
     <ProfileCard/>

     </Grid>
  

</Box>
  )
}
