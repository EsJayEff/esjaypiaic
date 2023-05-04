"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  Flex,
  HStack,
  Heading,
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
// Importing all the child components already been created
import HamburgerMenu from "./HamburgerMenu";

export default function HeaderSite() {
  return (
    <div className="sticky z-20 top-0 max-w-screen-2xl mx-auto">
      {/* Main Container */}
      <Flex
        px={{ base: "25px", md: "100px", lg: "200px" }}
        py={{ base: "20px", md: "20px", lg: "20px" }}
        width="full"
        bg="blue.900"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        {/* Header Navigation Links */}
        <Flex alignItems="flex-end">
          {/* Logo */}
          <Image
          display={{ base: "none", md: "none", lg: "initial" }}
          width="120px" height="150px"
          mr="20px"
          mb="-70px"
          src="PIAIC_logo.png" alt="PIAIC LOGO"/>

          <Heading display={{ base: "initial", md: "initial", lg: "none" }}
            color="whiteAlpha.900"
            mr={{ lg: "60px", md: "30px", base: "0px" }}
            fontSize={{ base: "32px", md: "36px", lg: "40px" }}
            letterSpacing="1.5px"
            border="2px solid white"
          >
            &nbsp;PIAIC&nbsp;
          </Heading>
          {/* Links */}
          <HStack
            color="whiteAlpha.700"
            spacing="40px"
            letterSpacing="1px"
            display={{ lg: "initial", base: "none" }}
          >
            <Link href="./" className="hover:text-white">
              Home
            </Link>
            <Link href="/blogs" className="hover:text-white">
              Blogs
            </Link>
            {/* <Link href="/programs" className="hover:text-white">
              Programs
            </Link> */}

<Box className="dropdown">
  <button className="dropbtn">Programs &nbsp;&#9660;</button>
  <div className="dropdown-content">
    <Link href="/programs/WEB3">&#9658;&nbsp;Web 3.0 & Metaverse</Link>
    <hr/>
    <Link href="/programs/AI">&#9658;&nbsp;Artificial Intelligence</Link>
    <hr/>
    <Link href="/programs/CN">&#9658;&nbsp;Cloud-Native</Link>
    <hr/>
    <Link href="/programs/IOT">&#9658;&nbsp;Ambient Computing</Link>
    <hr/>
    <Link href="/programs/GENOM">&#9658;&nbsp;Genomics</Link>
    <hr/>
    <Link href="/programs/NP">&#9658;&nbsp;Network Automation</Link>
  </div>
</Box>





            <Link href="/about" className="hover:text-white">
              About Us
            </Link>
            <Link href="/wit" className="hover:text-white">
              WIT
            </Link>
          </HStack>
        </Flex>
        <Box display={{ lg: "initial", md: "none", base: "none" }}>
          <Button
            colorScheme="twitter"
            variant="solid"
            className="border-solid"
          >
            <a href="/about">Get in touch</a>
          </Button>
        </Box>
        {/* For small devices Hamburger Menu */}
        <Box display={{ lg: "none", md: "initial", base: "initial" }}>
          <HamburgerMenu />
        </Box>
      </Flex>
    </div>
  );
}
