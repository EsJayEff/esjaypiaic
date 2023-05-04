"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  Button,
  Box,
  Heading,
  Text,
  VStack,
  Image,
  GridItem,
  Grid,
  Center,
} from "@chakra-ui/react";
import Wrapper from "../../components/wrapper";

const President = () => {
  return (
    <Wrapper>
      <Box
        w="full"
        px={{ base: "50px", md: "100px", lg: "200px" }}
        py={{ base: "40px", md: "50px", lg: "60px" }}
        background="blue.900"
        justifyContent="space-between"
        alignItems="flex-start"
        className="relative"
      >
        <Grid className="relative"
          templateColumns={{
            lg: "repeat(3, 1fr)",
            md: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          color="whiteAlpha.800"
          gap="8"
        >
          <GridItem className="relative">
            <VStack className="relative">
            <Center>
<Image src="presidentpic.png" alt="President" className="relative"
display={{ base: "initial", md: "initial", lg: "none" }}
width={{base: "50%", md: "50%", lg: "none"}}
height={{base: "50%", md: "50%", lg: "none"}}
                        />
                        </Center>
                         <Center>
                                      <Text display={{ base: "initial", md: "initial", lg: "none" }}
                color="whiteAlpha.900"
                className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide"
              >
              <br/> <u> Dr. Arif Alvi</u>
              </Text>
              </Center>
              <Center>
              <Text display={{ base: "initial", md: "initial", lg: "none" }}
                color="whiteAlpha.900"
                className="text-x1 uppercase text-accent font-medium tracking-wide"
              >
                
                <u>President Islamic Republic of Pakistan</u>
              </Text>
              </Center>
              <Box display={{ base: "initial", md: "initial", lg: "none" }}>
              <ul className="social m-0" style={{ filter: "invert(1)" }}>
                <li>
                  <a href="https://www.facebook.com/Dr.ArifAlvi/">
                    <Image
                      alt="facebook"
                      src="https://i.ibb.co/x7P24fL/facebook.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/ArifAlvi">
                    <Image
                      alt="twitter"
                      src="https://i.ibb.co/Wnxq2Nq/twitter.png"
                    />
                  </a>
                </li>
              </ul>
              </Box>

            <Text>
            Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic
            of Pakistan on 9th September 2018.
          </Text><br/>
          <Text>
            Dr. Arif Alvi was born in 1949 and completed his early education in
            Karachi. He did his Bachelor of Dental Surgery (BDS) from De&apos;
            Montmorency College of Dentistry, Lahore where he was declared the
            &quote;Best Graduate&quote;. He completed his Masters of Science in the field of
            Prosthodontics from University of Michigan (1975) and in
            Orthodontics from University of Pacific, San Francisco (1982). He
            was awarded fellowship &quote;Diplomatic American Board of Orthodontists
            (1995)&quote;.
          </Text><br/>
          <Text>
          President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
          </Text><br/>   
          <Text>
          Dr. Arif Alvi&apos;s political career commenced with his pro-democracy struggle against the dictatorship of General Ayub Khan. He is a founding member of Pakistan Tehreek-e-Insaf (PTI) that came into being in 1996.
          </Text>
            </VStack>
        
          </GridItem>
      
<GridItem className="relative">

<Image src="presidentpic.png" alt="President" className="relative z-10" 
display={{ base: "none", md: "none", lg: "initial" }}
                        />
                        <Image width="auto" height="auto" src="pakmap.png" alt="PakMap" className="absolute left-0 top-0" 
display={{ base: "none", md: "none", lg: "initial" }}
                        />
          
                         <Center>
                                      <Text display={{ base: "none", md: "none", lg: "initial" }}
                color="whiteAlpha.900"
                className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide"
              >
              <br/> <u> Dr. Arif Alvi</u>
              </Text>
              </Center>
              <Center>
              <Text display={{ base: "none", md: "none", lg: "initial" }}
                color="whiteAlpha.900"
                className="text-x1 uppercase text-accent font-medium tracking-wide"
              >
                
                <u>President Islamic Republic of Pakistan</u>
              </Text>
              </Center>
              <Box display={{ base: "none", md: "none", lg: "initial" }}>
              <ul className="social m-0" style={{ filter: "invert(1)" }}>
                <li>
                  <a href="https://www.facebook.com/Dr.ArifAlvi/">
                    <Image
                      alt="facebook"
                      src="https://i.ibb.co/x7P24fL/facebook.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/ArifAlvi">
                    <Image
                      alt="twitter"
                      src="https://i.ibb.co/Wnxq2Nq/twitter.png"
                    />
                  </a>
                </li>
              </ul>
              </Box>
         <br/>
          <Text><br/><br/>
         He remained a member of the PTI&apos;s Central Executive Committee since its inception and has held the offices of PTI President of Sindh (1997-2001), Central Vice President (2001-2006) and Secretary General (2006-2013). In line with Constitution of Pakistan, he resigned from all the positions of PTI before assuming the prestigious office of the President.
          </Text>
          

        
          </GridItem>

<GridItem>
<Text>
          During his tenure as the Secretary General of the party, Dr. Arif Alvi introduced social media platform in the politics of Pakistan. He was instrumental in holding intra-party election (2012-2013) and enabled millions of party members to digitally participate in the election process. He was elected as member of National Assembly from Karachi in 2013 and 2018 and was instrumental in drafting and the passage of many bills including one on Alternate Dispute Resolution. He also chaired the sub-committee of EVM&apos;s, Digital Identification of voters and voting of overseas Pakistanis. The latter has finally come to fruition. Dr. Arif Alvi has keen interest in education and health sectors. Provision of basic facilities to the common man and uplifting the country&apos;s image are very close to his heart. He considers people of Pakistan as the most precious asset and, therefore, accords special focus to human resource development in the country. He is happily married and has four children.
          </Text><br/>
          <Center>
          <Image src="PIAIC_logo.png" alt="PIAIC"
          width={{base: "30%", md: "30%", lg: "300px"}}
          height={{base: "30%", md: "30%", lg: "380px"}}
          />
          </Center>
</GridItem>

        </Grid>
      </Box>
    </Wrapper>
  );
};

export default President;
