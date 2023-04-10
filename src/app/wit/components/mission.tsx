import React from "react";
import { VStack,AspectRatio,Box,Flex, Text,HStack, Heading,Image,Container,Grid,GridItem,Accordion,AccordionItem,AccordionButton,AccordionPanel,Fade, ScaleFade, Slide, SlideFade} from "@chakra-ui/react";
import Commitment from "../../components/Commitment";
import { RevealWrapper,RevealList  } from  'next-reveal'
import Link from 'next/link'

export default function Mission() {
  return (
    <section id="mission" className="pt-20">
    <Flex
w="full"  height="full" pl={{base:'25px', md:'100px',lg:'200px'}}
// py={{base:'10px', md:'50px',lg:'60px'}} 

background="yellow.50"
justifyContent="space-between" 
alignItems="flex-start"
className="relative"
>

<Box pr={{base:'25px', md:'100px',lg:'140px'}} 

>  
{/* <RevealWrapper origin='top' delay={200} duration={1200} distance='500px' reset={true}> */}
<Heading fontSize={{base:'34px', md:'44px',lg:'54px'}} letterSpacing="6px" color="blue.900" py="20px">
        Mission of WIT
      </Heading>
 {/* </RevealWrapper> */}


{/* <VStack  pr="100px" color="whiteAlpha.800" spacing="20px" fontSize={{base:'70%', md:'70%',lg:'100%'}} alignItems="self-start"
> */}
 <Grid
        templateColumns={{
          lg: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        color="blue.800"
         gap="8"
      > 
 <GridItem w="100%" h="100%">
{/* <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>     */}

<Commitment text="The Women Inclusion in Technology project is the largest initiative on women education in Pakistan. The main mission of the project is to drive female participation in the technology industry in Pakistan from less than 5% to 30% over the next two years. Via this project, PIAIC is propagating awareness and training on the latest, most state-of-the-art technologies to women in Pakistan. The Women Empowerment Division will aid highly skilled women in technology to establish themselves as entrepreneurs and leaders in the technology industry not only in Pakistan but also around the world."/><br/>
<Commitment text="To embark your journey towards your goals and dreams requires bravery. To remain on the path requires courage. The bridge that merges the two is commitment."/><br/>

{/* </RevealWrapper> */}
{/* <RevealWrapper origin='top' delay={200} duration={1200} distance='500px' reset={true}> */}
{/* </RevealWrapper> */}
{/* <RevealWrapper  origin='bottom' delay={200} duration={1600} distance='500px' reset={true}>  */}
<Text >&quot;We are commited and we will deliver. If you are commited ?&quot; <br/><br/><Link href="/about" className="hover:text-blue-600">Then we should talk ! </Link></Text> 
{/* </RevealWrapper> */}
</GridItem>
<GridItem>
<AspectRatio width="500px" ratio={1}  display={{base:"initial",md:"initial",lg:"none"}}>
{/* <RevealWrapper origin='bottom' delay={200} duration={1800} distance='500px' reset={true}>  */}
   <Image  alt="Empowerment" className="object-cover"  display='block' max-height='100%' max-width= '100%' overflow="hidden" src="empowerment.jpg"  boxShadow='dark-lg' rounded='md'   />
   {/* </RevealWrapper> */}
</AspectRatio>
</GridItem>
 {/* </VStack> */}
 </Grid> 
</Box>


<Image  alt="Empowerment" width="full" src="empowerment.jpg" display={{base:"none",md:"none",lg:"initial"}}
 className="boxShadow='dark-lg' rounded='md'"/>




{/* <Box w={[300, 400, 500]} className="relative">
<AspectRatio ratio={5 / 10}>  
     <Img src="pair-programming10x8.jpg" width="100%" className="absolute"/>
 </AspectRatio>
 </Box> */}
 </Flex>
 </section>


 

   
  )
}
