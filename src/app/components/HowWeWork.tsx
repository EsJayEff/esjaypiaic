import React from "react";
import { VStack,AspectRatio,Box,Flex, Text,HStack, Heading, Link,Image,Grid,GridItem} from "@chakra-ui/react";
import WorkMethodCard from "./WorkMethodCard"
import { RevealWrapper,RevealList  } from  'next-reveal'

export default function HowWeWork() {
  return (
    <Box w="full"  px={{base:'25px', md:'100px',lg:'200px'}}
    py={{base:'10px', md:'50px',lg:'60px'}} pb="100px" background="whiteAlpha.900">
{/* <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}> */}
<Heading fontSize={{base:'34px', md:'44px',lg:'54px'}} letterSpacing="6px" color="blue.900" py="40px">
      21<sup>ST</sup> Century Education
      </Heading>
      {/* </RevealWrapper> */}

 
      <Grid templateColumns={{lg:"repeat(3, 1fr)",md:"repeat(3, 1fr)", base:"repeat(1, 1fr)"}}  gap="8" >
            {/* <HStack w="full" alignItems="flex-start" spacing="75px"> */}
  {/* <RevealWrapper origin='left' delay={200} duration={1200} distance='500px' reset={true}> */}
      <GridItem w="100%" h="100%" boxShadow='dark-lg' rounded='3xl' background="whiteAlpha.900">
        <WorkMethodCard 
        //imagePath={"finalintro.mp4"}
        imagePath="https://www.atechconsultancy.com/piaic/finalintro.mp4"
        //imagePath="pxn6QSg3NfA"
        heading="Professional Development with Great Training"
        description="Software is now part of practically every industry. And with the rapid pace of scientific development in the 21st century, everybody’s job is changing quickly. Taking time for professional development can do wonders to help you keep up.."
        />
        </GridItem>
{/* </RevealWrapper> */}
{/* <RevealWrapper origin='bottom' delay={200} duration={1400} distance='500px' reset={true}> */}
        <GridItem w="100%" h="100%" boxShadow='dark-lg' rounded='3xl' background="whiteAlpha.900">
          <WorkMethodCard 
        // imagePath={"mentoring.mp4"}
        imagePath="https://www.atechconsultancy.com/piaic/mentoring.mp4"
        //imagePath="Am0fBzdpZRY"
        heading="Mentoring – Professional Learning Communities"
        description="A professional learning community for mentor teachers is essential in creating an environment where mentors feel free to network, reflect, and share their mentoring practice with other mentor teachers. As with effective teaching practice, effective mentoring practice develops as a result of purposeful study, practice, and reflection over time."
        />
        </GridItem>
{/* </RevealWrapper> */}
{/* <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>      */}
<GridItem w="100%" h="100%" boxShadow='dark-lg' rounded='3xl' background="whiteAlpha.900">
          <WorkMethodCard 
        // imagePath={"qualityeduc.mp4"}
        imagePath="https://www.atechconsultancy.com/piaic/qualityeduc.mp4"
        //imagePath="OqTlzpLxZcM"
        heading="Provision of Quality Materials and Equipment "
        description="Experienced professionals create handouts, worksheets, tests, quizzes, projects, youtube videos and git repositories. Many of these are used for assessment to determine the level of learning."
        />

</GridItem>
{/* </RevealWrapper>     */}
{/* </HStack>   */}
</Grid>
    </Box>
  )
}
