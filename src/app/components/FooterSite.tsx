import React from "react";
import { VStack,AspectRatio,Box,Flex, Text,HStack, Heading,Image,Grid,GridItem} from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { RevealWrapper,RevealList  } from  'next-reveal'
import Link from "next/link";

export default function FooterSite() {
  return (
    
    <Box w="full"  px={{base:'25px', md:'100px',lg:'200px'}}
    py={{base:'10px', md:'50px',lg:'60px'}} pb="100px"
    bg="gray.900" textAlign='center'>
{/* <RevealWrapper origin='bottom' delay={200} duration={1000} distance='500px' reset={true}> */}
<Grid templateColumns={{lg:"repeat(3, 1fr)",md:"repeat(3, 1fr)", base:"repeat(1, 1fr)"}} pb="20px" gap="8">
        
        <GridItem display={{base:'none',md:'none',lg:'initial' }} >
      <VStack >
        <Heading
          color="whiteAlpha.900"
          fontSize={{base:'32px', md:'36px',lg:'40px'}}
          letterSpacing="1.5px"
          border="2px solid white"
          >
        &nbsp;PIAIC&nbsp; 
        </Heading>
        </VStack>
        <Box color="whiteAlpha.700" pt="20px" textAlign="center"
        >
          <Link href="./" className="hover:text-white">Home </Link><br/>
          <Link href="/blogs" className="hover:text-white">Blogs </Link><br/>
          <Link href="/programs" className="hover:text-white">Programs</Link><br/>
          <Link href="/about" className="hover:text-white">About Us</Link><br/>
          <Link href="/wit" className="hover:text-white">WIT</Link> <br/>
        
          </Box>
          
          </GridItem>

          <GridItem display={{base:'initial',md:'initial',lg:'none' }} >
    
        <Heading
          color="whiteAlpha.900"
          fontSize={{base:'32px', md:'36px',lg:'40px'}}
          letterSpacing="1.5px"
          border="2px solid white"
          
          >
        &nbsp;PIAIC&nbsp; 
        </Heading>

       <Flex
      width="full"
      color="whiteAlpha.700"
      alignItems="flex-end"
      justifyContent="space-between"
      letterSpacing="1px"
      pt="10px"
      >

          <Link href="./" className="hover:text-white">Home </Link>
          <Link href="/blogs" className="hover:text-white">Blogs </Link>
          <Link href="/programs" className="hover:text-white">Programs</Link>
          <Link href="/about" className="hover:text-white">About Us</Link>
          <Link href="/wit" className="hover:text-white">WIT</Link>
        </Flex>
          </GridItem>

        <GridItem >

      <Heading color="white" fontSize={{base:'26px', md:'36px',lg:'46px'}} letterSpacing="6px"  pb={{lg:"80px", md:"40px", base:"20px"}} textAlign='center'> 
      Creating Entrepreneurs <br/> <Text mt='10px' fontSize={{base:'14px', md:'18px',lg:'22px'}}>Making Miracles Happen</Text>
      </Heading>
      <Box display={{base:'none',md:'initial',lg:'initial' }}>
        <hr/>
      <Text color="white">&copy;&nbsp;Copyright&nbsp;PIAIC&nbsp;2023</Text>
      </Box>
      </GridItem>
      <GridItem  pt="20px" >
      <Link href="/about"  className="hover:text-white text-gray-300"> Get in touch</Link> <ArrowForwardIcon style={{filter: "invert(1)"}} />
      <ul className="social" style={{filter: "invert(1)"}} >
      <li><a href="https://www.facebook.com/groups/590632791401391"><Image alt="facebook" src="https://i.ibb.co/x7P24fL/facebook.png"/></a></li>
      <li><a href="https://twitter.com/piaicofficial"><Image alt="twitter" src="https://i.ibb.co/Wnxq2Nq/twitter.png"/></a></li>
      <li><a href="https://www.instagram.com/piaicofficial"><Image alt="instagram" src="https://i.ibb.co/ySwtH4B/instagram.png"/></a></li>
      <li><a href="https://www.linkedin.com/company/piaicofficial/"><Image alt="linkedin" src="linkedin.png"/></a></li>
     </ul>
     <Text pt="20px" color="white">PIAIC Helpline +92-308-2220203</Text>
    <Box display={{base:'initial',md:'none',lg:'none' }}>
    <hr />
    <Text pt="20px" color="white">&copy;Copyright&nbsp;PIAIC&nbsp;2023</Text>
    </Box>
      </GridItem>
   </Grid>
   {/* </RevealWrapper> */}
    </Box>
  
  )
}