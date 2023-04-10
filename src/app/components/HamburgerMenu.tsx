"use client";

import React, { useState, useRef } from "react";
import { Flex, HStack, Heading, Link, Button,Box,Menu,
  MenuButton,
  MenuList,
  MenuItem, IconButton,AspectRatio,useDisclosure, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  } from "@chakra-ui/react";
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'
import FooterSite from "./FooterSite";



export default function HamburgerMenu() {
        const sizes = ['full']
        const [size, setSize] = React.useState('')
        const { isOpen, onOpen, onClose } = useDisclosure()
        const handleClick = (newSize) => {
          setSize(newSize)
          onOpen()
        }
    
    
        return (
          <>
            {sizes.map((size) => (
              <Button
                onClick={() => handleClick(size)}
                key={size}
                m={0}
              bg="blue.900"
              className="text-4xl hover:text-black text-white">&#9776;</Button>
            ))}
      
            <Drawer onClose={onClose} isOpen={isOpen} size={size} placement='top' >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton className="text-white text-2xl"/>
                <DrawerHeader bg="gray.900" className="text-white"></DrawerHeader>
                <DrawerBody bg="gray.900">
                <FooterSite />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )
      }
    