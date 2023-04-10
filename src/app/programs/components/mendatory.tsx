"use client";

import React from "react";
import {
  AccordionIcon,
  VStack,
  Button,
  AspectRatio,
  StackDivider,
  Box,
  Flex,
  Text,
  HStack,
  Heading,
  Avatar,
  Link,
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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  Image,
} from "@chakra-ui/react";
import { RevealWrapper, RevealList } from "next-reveal";
import { mendatory, specialization, names} from "./cardsdata";
import { idText } from "typescript";
import { MinusIcon,AddIcon, } from '@chakra-ui/icons'
import { ArrowForwardIcon, HamburgerIcon } from '@chakra-ui/icons'

export default function MendatoryQuarters({ params }) {
  // 👇️ filter with 1 condition
  
  const filtered = names.filter((temp) => {
    return temp.key === params;
  });

  const filteredSpecialization = specialization.filter((temp) => {
    return temp.key === params;
  });


  return (
    <Box id="programdetails"
      w="full"
      px={{ base: "25px", md: "100px", lg: "200px" }}
      py={{ base: "10px", md: "50px", lg: "60px" }}
     >

      {filtered.map((elem) => (
        <>
        <Text
          fontSize={{ base: "34px", md: "44px", lg: "54px" }}
          letterSpacing="6px"
          color="blue.900"
          textAlign="center"
          py="10px"
        >
          {elem.name}
        </Text>
        </>
      ))}



      <Grid
        templateColumns={{
          lg: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        pb="20px"
        gap="5"
      >
        {/* {mendatory.map((elem) => (
          <Card background="blue.900">
            <CardBody>
              <Image src={elem.url} alt={elem.alt} borderRadius="lg" />

              <Stack mt="6" spacing="3" color="whiteAlpha.900">
                <Heading size="md" textAlign="center">
                  {elem.heading}
                </Heading>
                <Divider />
                <Text color="whiteAlpha.900">{elem.desc}</Text>
              </Stack>
            </CardBody>
            <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
          </Card>
        ))} */}

 {mendatory.map((elem) => (
  <>
<Card  background="blue.900"
  // direction={{ base: 'column', sm: 'row' }}
  direction={{ base: 'row', sm: 'column' ,lg:'row'}}
  overflow='hidden'
  variant='outline'
>
<Image 
 objectFit='fill'
 maxW={{ base: '25%', sm: '25%', lg:'50%' }}
src={elem.url} alt={elem.alt} borderRadius="lg" />

  <Stack>
    <CardBody>
    <Heading size="md" color="whiteAlpha.900">
                  {elem.heading}
                </Heading> <hr/>

     <Text py='2' color="whiteAlpha.900">{elem.desc}</Text>
     <Text py='2' color="whiteAlpha.900">{elem.details}</Text>
    </CardBody>

    <CardFooter>
       </CardFooter>
    </Stack>
  </Card>



  <Accordion allowMultiple className="border-blue-900">
  
  <AccordionItem pt={4}>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton _expanded={{ bg: 'blue.700', color: 'white' }}>
            <Box as="span" flex='1' textAlign='left'>
            <b>Course Description</b>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
       
        <AccordionPanel pb={4} background="blue.900" color="whiteAlpha.900">
        <Text>{elem.coursedesc}</Text>
              
       </AccordionPanel>

      </>
    )}
  </AccordionItem>
  
  
  
  
  
  
  
  
  
  
  <AccordionItem pt={4}>
    <h2>
      <AccordionButton _expanded={{ bg: 'blue.700', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left' >
         <b>Course Outline</b>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  


   <AccordionPanel pb={4} background="blue.900" color="whiteAlpha.900">
    <Text> {elem.courses}</Text>
    </AccordionPanel>

  </AccordionItem>





  <AccordionItem pt={4}>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton _expanded={{ bg: 'blue.700', color: 'white' }}>
            <Box as="span" flex='1' textAlign='left'>
            <b>Assignments, Projects and Quizzes</b>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
       
        <AccordionPanel pb={4} background="blue.900" color="whiteAlpha.900">
        <Text>{elem.quizes}</Text>
              
       </AccordionPanel>

      </>
    )}
  </AccordionItem>
</Accordion>

  </>
))}










        {/* {filteredSpecialization.map((temp) => (
          <Card background="blue.900">
            <CardBody>
              <Image src={temp.url} alt={temp.alt} borderRadius="lg" />

              <Stack mt="6" spacing="3" color="whiteAlpha.900">
                <Heading size="md" textAlign="center">
                  {temp.heading}
                </Heading>
                <Divider />
                <Text color="whiteAlpha.900">{temp.desc}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      */}



     {filteredSpecialization.map((temp) => (
      <>
<Card  background="blue.900"
  // direction={{ base: 'column', sm: 'row' }}
  direction={{ base: 'row', sm: 'column' ,lg:'row'}}
  overflow='hidden'
  variant='outline'
>
<Image 
 objectFit='fill'
 maxW={{ base: '25%', sm: '25%', lg:'50%' }}
src={temp.url} alt={temp.alt} borderRadius="lg" />

  <Stack>
    <CardBody>
    <Heading size="md" color="whiteAlpha.900">
                  {temp.heading}
                </Heading> <hr/>

                <Text py='2' color="whiteAlpha.900">{temp.desc}</Text>

    </CardBody>

    <CardFooter>
      {/* <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button> */}
    </CardFooter>
  </Stack>
</Card>
<Accordion allowMultiple >
<AccordionItem pt={4}>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton _expanded={{ bg: 'blue.700', color: 'white' }}>
            <Box as="span" flex='1' textAlign='left'>
            <b>Course Description</b>
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
       
        <AccordionPanel pb={4} background="blue.900" color="whiteAlpha.900">
        <Text>{temp.coursedesc}</Text>
              
       </AccordionPanel>

      </>
    )}
  </AccordionItem>
  
  
  
  
  
  
  
  <AccordionItem pt={4}>
    <h2>
      <AccordionButton _expanded={{ bg: 'blue.700', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        <b>Course Outline</b>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} background="blue.900" color="whiteAlpha.900">
    <Text>{temp.courses}</Text>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</>
  ))}

</Grid>
  </Box>
  );
}
