"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  AspectRatio,
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";
import Wrapper from "./wrapper";

// Importing the head component of next JS to change the title of the page.
import Commitment from "./Commitment";

export default function Commitments() {
  return (
    <Wrapper>
      <Flex
        w="full"
        height="full"
        pl={{ base: "25px", md: "100px", lg: "200px" }}
        background="blue.900"
        justifyContent="space-between"
        alignItems="flex-start"
        className="relative"
      >
        <Box pr={{ base: "25px", md: "100px", lg: "140px" }}>
          <Heading
            fontSize={{ base: "34px", md: "44px", lg: "54px" }}
            letterSpacing="6px"
            color="whiteAlpha.900"
            py="20px"
          >
            Committed to your <br />
            success
          </Heading>
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
              <Commitment text="To embark your journey towards your goals and dreams requires bravery. To remain on the path requires courage. The bridge that merges the two is commitment." />
              <br />
              <Commitment text="The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports." />
              <br />
              <Commitment text="All of the latest tech dimensions need to be addressed to bring Pakistan into developing apace. It is the need of the hour and that’s why this interdisciplinary hub has been established for the people who want to step into the research and education." />
              <br />
              <Text>
                &quot;We are commited and we will deliver. If you are commited
                ?&quot; <br />
                <br />
                <Link href="/about" className="hover:text-white">
                  Then we should talk !{" "}
                </Link>
              </Text>
              <br />
            </GridItem>
            <GridItem>
              <AspectRatio
                width="500px"
                ratio={1}
                display={{ base: "initial", md: "initial", lg: "none" }}
              >
                <Image
                  alt="Commitments"
                  className="object-cover"
                  display="block"
                  max-height="100%"
                  max-width="100%"
                  overflow="hidden"
                  src="pair-programming10x8.jpg"
                  boxShadow="dark-lg"
                  rounded="md"
                />
              </AspectRatio>
            </GridItem>
          </Grid>
        </Box>
        <Image
          alt="Commitments"
          width="full"
          src="pair-programming10x8.jpg"
          display={{ base: "none", md: "none", lg: "initial" }}
        />
      </Flex>
    </Wrapper>
  );
}
