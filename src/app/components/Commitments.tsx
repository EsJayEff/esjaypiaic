import React from "react";
import { VStack,AspectRatio,Box,Flex, Text,HStack, Heading,Image,Container,Grid,GridItem,Accordion,AccordionItem,AccordionButton,AccordionPanel,Fade, ScaleFade, Slide, SlideFade} from "@chakra-ui/react";
import Commitment from "./Commitment";
import { RevealWrapper,RevealList  } from  'next-reveal'
import Link from 'next/link'

export default function Commitments() {
  return (
  
  

<Flex
w="full"  height="full" pl={{base:'25px', md:'100px',lg:'200px'}}
//py={{base:'10px', md:'50px',lg:'60px'}} 


background="blue.900"
justifyContent="space-between" 
alignItems="flex-start"
className="relative"
>

<Box pt="40px" pr={{base:'25px', md:'100px',lg:'140px'}} 

>  
{/* <RevealWrapper origin='top' delay={200} duration={1200} distance='500px' reset={true}> */}
<Heading fontSize={{base:'34px', md:'44px',lg:'54px'}} letterSpacing="6px" color="whiteAlpha.900" py="20px">
        Committed to your <br/>success 
      </Heading>
 {/* </RevealWrapper> */}


{/* <VStack  color="whiteAlpha.800" spacing="20px" fontSize={{base:'70%', md:'70%',lg:'100%'}} alignItems="self-start"
> */}
 <Grid
        templateColumns={{
          lg: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        color="whiteAlpha.800"
         gap="8"
      > 
<GridItem>  
{/* <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>     */}
<Commitment text="To embark your journey towards your goals and dreams requires bravery. To remain on the path requires courage. The bridge that merges the two is commitment."/><br/>
{/* </RevealWrapper> */}
{/* <RevealWrapper origin='top' delay={200} duration={1200} distance='500px' reset={true}> */}
<Commitment text="The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports." /><br/>
{/* </RevealWrapper> */}
{/* <RevealWrapper origin='top' delay={200} duration={1400} distance='500px' reset={true}>     */}
<Commitment text="All of the latest tech dimensions need to be addressed to bring Pakistan into developing apace. It is the need of the hour and that’s why this interdisciplinary hub has been established for the people who want to step into the research and education." /><br/>
{/* </RevealWrapper> */}
{/* <RevealWrapper  origin='bottom' delay={200} duration={1600} distance='500px' reset={true}>  */}
<Text >&quot;We are commited and we will deliver. If you are commited ?&quot; <br/><br/><Link href="/about" className="hover:text-white">Then we should talk ! </Link></Text><br/> 
{/* </RevealWrapper> */}
</GridItem>
<GridItem>
<AspectRatio width="500px" ratio={1}  display={{base:"initial",md:"initial",lg:"none"}}>
{/* <RevealWrapper origin='bottom' delay={200} duration={1800} distance='500px' reset={true}>  */}
   <Image  alt="Commitments" className="object-cover"  display='block' max-height='100%' max-width= '100%' overflow="hidden" src="pair-programming10x8.jpg"  boxShadow='dark-lg' rounded='md'   />
   {/* </RevealWrapper> */}
</AspectRatio>
</GridItem>
 {/* </VStack> */}
</Grid>
</Box>


<Image  alt="Commitments" width="full" src="pair-programming10x8.jpg" display={{base:"none",md:"none",lg:"initial"}}
 />




{/* <Box w={[300, 400, 500]} className="relative">
<AspectRatio ratio={5 / 10}>  
     <Img src="pair-programming10x8.jpg" width="100%" className="absolute"/>
 </AspectRatio>
 </Box> */}
 </Flex>



 
  )
}
