import React from "react";
import { VStack,AspectRatio,Box,Flex, Text,HStack, Heading, Link,Img,Grid} from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard";

export default function testimonials() {
  return (
    <Box w="full"  px={{base:'25px', md:'100px',lg:'200px'}}
    py={{base:'10px', md:'50px',lg:'60px'}} pb="100px" >
      <Heading fontSize={{base:'34px', md:'44px',lg:'54px'}} letterSpacing="6px" color="blue.900" py="20px">
        The people have spoken
      </Heading>
      <Grid templateColumns={{lg:"repeat(3, 1fr)",md:"repeat(3, 1fr)", base:"repeat(1, 1fr)"}} gap="40px">

<Box boxShadow='dark-lg' rounded='md'>
      <AspectRatio w="full" ratio={16/9}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/43nPL8SgN4c"  allowFullScreen > </iframe>
</AspectRatio>
</Box>
<Box boxShadow='dark-lg' rounded='md'>
      <AspectRatio w="full" ratio={16/9}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/kMRVJAsMjBg" allowFullScreen > </iframe>
</AspectRatio>
</Box>
<Box boxShadow='dark-lg' rounded='md'>
<AspectRatio w="full" ratio={16/9}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/TS6WdZebsNU" allowFullScreen> </iframe>
</AspectRatio>
</Box>
<Box boxShadow='dark-lg' rounded='md'>
<AspectRatio w="full" ratio={16/9}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/D0eJYGurKOk" allowFullScreen> </iframe>
</AspectRatio>
</Box>
<Box boxShadow='dark-lg' rounded='md'>
<AspectRatio w="full" ratio={16/9}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/e6wEGsAT2no" allowFullScreen> </iframe>
</AspectRatio>
</Box>
<Box boxShadow='dark-lg' rounded='md'>
<AspectRatio w="full" ratio={16/9}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/w6q6Id44O3k" allowFullScreen> </iframe>
</AspectRatio>
</Box>
</Grid>
   </Box>
  )
}
