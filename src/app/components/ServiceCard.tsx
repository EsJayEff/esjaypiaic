import React from "react";
import {
  AspectRatio,
  Box,
  Flex,
  Text,
  HStack,
  Heading,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Wrapper from "./wrapper"

export default function ServiceCard({
  heading,
  description,
  imageurl,
  id,
}: {
  heading: string;
  description: string;
  imageurl: string;
  id: string;
}) {
  return (
    <Wrapper>
    <Flex flexDirection="column" bg="yellow.50" p="10px" height="full">
      <Box bg="yellow.50" p="10px" w="full">
        <Grid
          templateColumns={{
            lg: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          pb="20px"
          gap="10"
          className="relative"
        >
          <GridItem boxShadow="dark-lg" rounded="md">
            <AspectRatio width="full" height="300px" ratio={16 / 9}>
              <Image
                alt="service image"
                width="full"
                display="block"
                min-height="25%"
                min-width="25%"
                overflow="hidden"
                src={imageurl}
              />
            </AspectRatio>
          </GridItem>
          <GridItem>
            <Heading
              color="blue.900"
              fontSize={{ base: "16px", md: "18px", lg: "20px" }}
              letterSpacing="2px"
              pb="16px"
            >
              {heading}
            </Heading>
            <Text
              color="blue.700"
              fontSize={{ base: "80%", md: "90%", lg: "100%" }}
            >
              {description}
            </Text>
            <br />

            <Link
              href={"/programs/" + id}
              className="hover:text-blue-700 text-blue-900"
            >
              Explore More
              <ArrowForwardIcon mt="5px" />{" "}
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  </Wrapper>
  );
}
