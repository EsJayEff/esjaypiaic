"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  Box,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
// Importing all the child components been created for this section only.
import WorkMethodCard from "./WorkMethodCard";
import Wrapper from "./wrapper"

export default function HowWeWork() {
  return (
    <Wrapper>
    <Box
      w="full"
      px={{ base: "50px", md: "100px", lg: "200px" }}
      py={{ base: "40px", md: "50px", lg: "60px" }}
      background="whiteAlpha.900"
    >
      <Heading
        fontSize={{ base: "34px", md: "44px", lg: "54px" }}
        letterSpacing="6px"
        color="blue.900"
        py="40px"
      >
        21<sup>ST</sup> Century Education
      </Heading>
      <Grid
        templateColumns={{
          lg: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gap="8"
      >
        <GridItem
          w="100%"
          h="100%"
          boxShadow="dark-lg"
          rounded="3xl"
          background="whiteAlpha.900"
        >
          <WorkMethodCard
            imagePath="https://www.atechconsultancy.com/piaic/finalintro.mp4"
            heading="Professional Development with Great Training"
            description="Software is now part of practically every industry. And with the rapid pace of scientific development in the 21st century, everybody’s job is changing quickly. Taking time for professional development can do wonders to help you keep up.."
          />
        </GridItem>
        <GridItem
          w="100%"
          h="100%"
          boxShadow="dark-lg"
          rounded="3xl"
          background="whiteAlpha.900"
        >
          <WorkMethodCard
            imagePath="https://www.atechconsultancy.com/piaic/mentoring.mp4"
            heading="Mentoring – Professional Learning Communities"
            description="A professional learning community for mentor teachers is essential in creating an environment where mentors feel free to network, reflect, and share their mentoring practice with other mentor teachers. As with effective teaching practice, effective mentoring practice develops as a result of purposeful study, practice, and reflection over time."
          />
        </GridItem>
        <GridItem
          w="100%"
          h="100%"
          boxShadow="dark-lg"
          rounded="3xl"
          background="whiteAlpha.900"
        >
          <WorkMethodCard
            imagePath="https://www.atechconsultancy.com/piaic/qualityeduc.mp4"
            heading="Provision of Quality Materials and Equipment "
            description="Experienced professionals create handouts, worksheets, tests, quizzes, projects, youtube videos and git repositories. Many of these are used for assessment to determine the level of learning."
          />
        </GridItem>
      </Grid>
    </Box>
  </Wrapper>
  );
}
