import React, { useState, useRef } from "react";
import { Flex, HStack, Heading,Button,Box,Menu,
  MenuButton,
  MenuList,
  MenuItem, IconButton,AspectRatio
  } from "@chakra-ui/react";
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'
import HamburgerMenu from './HamburgerMenu';
import { RevealList } from  'next-reveal';
import Link from 'next/link'

export default function HeaderSite() {

   return (
  <div className="sticky z-10 top-0">
    <Flex
      px={{base:'25px', md:'100px',lg:'200px'}}
      py={{base:'10px', md:'10px',lg:'10px'}}
      width="full"
      bg="blue.900"
      alignItems="flex-end"
      justifyContent="space-between"
      
      >
        {/* <RevealList interval={60} delay={500} > */}
      <Flex alignItems="flex-end">
        <Heading
          color="whiteAlpha.900"
          mr={{lg:"60px", md:"30px", base:"0px"}}
          fontSize={{base:'32px', md:'36px',lg:'40px'}}
          letterSpacing="1.5px"
          border="2px solid white"
         
        >
        &nbsp;PIAIC&nbsp; 
        </Heading>
        
        <HStack  color="whiteAlpha.700" spacing="40px" letterSpacing="1px" 
        display={{lg:"initial",base:"none"}}
        >
        
          <Link href="./" className="hover:text-white">Home</Link>
          <Link href="/blogs" className="hover:text-white">Blogs</Link>
          <Link href="/programs" className="hover:text-white">Programs</Link>
          <Link href="/about" className="hover:text-white">About Us</Link>
          <Link href="/wit" className="hover:text-white">WIT</Link>
        </HStack>
       
      </Flex>
       {/* </RevealList> */}
      <Box display={{lg:"initial", md:"none", base:"none"}} >
      <Button colorScheme='twitter' variant='solid' className="border-solid"><a href="/about">Get in touch</a></Button>
      </Box>

      <Box display={{lg:"none", md:"initial", base:"initial"}} >
          
      <HamburgerMenu />
      </Box>



 
     </Flex>
     </div>
   
  )
}