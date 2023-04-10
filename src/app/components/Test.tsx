
import React from "react";
import { VStack,AspectRatio,Box,Flex, Text,HStack, Heading, Link,Image,Grid,GridItem} from "@chakra-ui/react";
import WorkMethodCard from "./WorkMethodCard"



export default function Test() {
  return (
    <div>
        <Grid
    h='200px'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(5, 1fr)'
    gap={4}
  >
    <GridItem colSpan={2} bg='papayawhip'/>
   <GridItem rowSpan={2} colSpan={1} bg='tomato' />
    
    <GridItem colSpan={2} bg='papayawhip' />
    
    <GridItem colSpan={2} bg='papayawhip' />
    <GridItem colSpan={2} bg='papayawhip' />
    
  </Grid></div>
  )
}

