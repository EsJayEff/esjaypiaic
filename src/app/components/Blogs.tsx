import React from "react";
import {
  VStack,
  AspectRatio,
  Box,
  Flex,
  Text,
  HStack,
  Heading,
  Link,
  Image,
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
  grid,
} from "@chakra-ui/react";
import Tweets from "./Tweets"
import { RevealWrapper,RevealList  } from  'next-reveal'
import Facebook from "./Facebook"

export default function Blogs() {
  return (
    <Box id="blogs"
      w="full"

      px={{ base: "25px", md: "100px", lg: "200px" }}
      py={{ base: "10px", md: "50px", lg: "60px" }}
    >
   {/* <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}> */}
   <Heading fontSize={{base:'34px', md:'44px',lg:'54px'}} letterSpacing="6px" color="blue.900" py="20px">
       In Focus | News and Events
      </Heading>
    {/* </RevealWrapper> */}

    {/* <RevealWrapper origin='bottom' delay={200} duration={1000} distance='500px' reset={true}> */}
      <div>
        <Grid
          templateColumns={{
            lg: "repeat(4, 1fr)",
            md: "repeat(2, 1fr)",
            base: "repeat(2, 1fr)",
          }}
          templateRows={{
            lg: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
          }}
                   gap="2"
        //   gridAutoColumns="auto"
        >
          {/* <div className="grid grid-cols-6 grid-rows-2  grid-flow-col gap-2"> */}

          {/* <div className="w-full col-span-2 row-span-2">
            <Image
              src="/Blog5.jpg"
              alt="Photo by PIAIC"
              className="inset-0 h-full w-full  object-center rounded opacity-75 hover:opacity-100"
            />
          </div> */}

          <div className="w-full col-span-2 rounded-lg">
            {/* <Image
              src="/Blog5.jpg"
              alt="Photo by PIAIC"
              className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100 "
            /> */}
            <Facebook/>
          </div>
          <div className="w-full col-span-2">
            {/* <Image
              src="/Blog6.jpg"
              alt="Photo by PIAIC"
              className="inset-0 h-full w-full  object-center rounded opacity-75 hover:opacity-100 "
            /> */}
          <Tweets/>
         
   
          </div>
          
          <div className="w-full ">
            {/* <Image
              src="/Blog8.jpg"
              alt="Photo by PIAIC"
              className="inset-0 h-full w-full  object-center rounded opacity-75 hover:opacity-100 "
            /> */}
            <div className="videoWrapper">
<iframe src="https://www.youtube.com/embed?listType=playlist&list=UU2Makv_pLAtvrjHNgg-pBLg&index=1"></iframe>
</div> 
          </div>
          <div className="w-full">
            {/* <Image
              src="/Blog4.jpg"
              alt="Photo by PIAIC"
              className="inset-0 h-full w-full  object-center rounded opacity-75 hover:opacity-100 "
            /> */}
                        <div className="videoWrapper">
<iframe src="https://www.youtube.com/embed?listType=playlist&list=UU2Makv_pLAtvrjHNgg-pBLg&index=2"></iframe>
</div>
          </div>
            <div className="w-full">
            {/* <Image
              src="/Blog7.jpg"
              alt="Photo by PIAIC"
              className="inset-0 h-full w-full  object-center rounded opacity-75 hover:opacity-100 "
            /> */}
                        <div className="videoWrapper">
<iframe src="https://www.youtube.com/embed?listType=playlist&list=UU2Makv_pLAtvrjHNgg-pBLg&index=3"></iframe>
</div>
          </div>
          <div className="w-full">
            {/* <Image
              src="/Blog10.jpg"
              alt="Photo by PIAIC"
              className="inset-0 h-full w-full  object-center rounded opacity-75 hover:opacity-100 "
            /> */}
                        <div className="videoWrapper">
<iframe src="https://www.youtube.com/embed?listType=playlist&list=UU2Makv_pLAtvrjHNgg-pBLg&index=4"></iframe>
</div>
          </div>
        </Grid>
        {/* </div> */}
      </div>
      {/* </RevealWrapper> */}
    </Box>
  );
}
