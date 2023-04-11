"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import {
  AccordionIcon,
  Box,
  Text,
  Heading,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Card,
  CardBody,
  Stack,
  Image,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
// importing the arrays to be used
import { mendatory, specialization, names } from "./cardsdata";
import Wrapper from "../../components/wrapper"

export default function MendatoryQuarters({ params }) {
  // filter with 1 condition
  const filtered = names.filter((temp) => {
    return temp.key === params;
  });
  const filteredSpecialization = specialization.filter((temp) => {
    return temp.key === params;
  });
  return (
    // main container
  <Wrapper>
    <Box
      id="programdetails"
      w="full"
      px={{ base: "50px", md: "100px", lg: "200px" }}
      py={{ base: "40px", md: "50px", lg: "60px" }}
    >
      {/* The heading of the Program  */}
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
      {/* Grid used for the card of the program */}
      <Grid
        templateColumns={{
          lg: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        pb="20px"
        gap="5"
      >
        {/* The array map used to call the data from the array for mendatory quarters*/}
        {mendatory.map((elem) => (
          <>
            <Card
              background="blue.900"
              direction={{ base: "row", sm: "column", lg: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="fill"
                maxW={{ base: "25%", sm: "25%", lg: "50%" }}
                src={elem.url}
                alt={elem.alt}
                borderRadius="lg"
              />
              <Stack>
                <CardBody>
                  <Heading size="md" color="whiteAlpha.900">
                    {elem.heading}
                  </Heading>{" "}
                  <hr />
                  <Text py="2" color="whiteAlpha.900">
                    {elem.desc}
                  </Text>
                  <Text py="2" color="whiteAlpha.900">
                    {elem.details}
                  </Text>
                </CardBody>
              </Stack>
            </Card>
            {/* First accordation for the courses Description for mendatory quarters*/}
            <Accordion allowMultiple className="border-blue-900">
              {/* Course Description */}
              <AccordionItem pt={4}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "blue.700", color: "white" }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          <b>Course Description</b>
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      background="blue.900"
                      color="whiteAlpha.900"
                    >
                      <Text>{elem.coursedesc}</Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              {/* Course Outline */}
              <AccordionItem pt={4}>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.700", color: "white" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      <b>Course Outline</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  background="blue.900"
                  color="whiteAlpha.900"
                >
                  <Text> {elem.courses}</Text>
                </AccordionPanel>
              </AccordionItem>
              {/* Assignment and Quizes */}
              <AccordionItem pt={4}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "blue.700", color: "white" }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          <b>Assignments, Projects and Quizzes</b>
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      background="blue.900"
                      color="whiteAlpha.900"
                    >
                      <Text>{elem.quizes}</Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </>
        ))}
        {/* The array map used to call the data from the array for specialized quarters*/}
        {filteredSpecialization.map((temp) => (
          <>
            <Card
              background="blue.900"
              direction={{ base: "row", sm: "column", lg: "row" }}
              overflow="hidden"
              variant="outline"
            >
              {/* Image of the quarter */}
              <Image
                objectFit="fill"
                maxW={{ base: "25%", sm: "25%", lg: "50%" }}
                src={temp.url}
                alt={temp.alt}
                borderRadius="lg"
              />
              <Stack>
                <CardBody>
                  <Heading size="md" color="whiteAlpha.900">
                    {temp.heading}
                  </Heading>{" "}
                  <hr />
                  <Text py="2" color="whiteAlpha.900">
                    {temp.desc}
                  </Text>
                </CardBody>
              </Stack>
            </Card>
            {/* Second accordation for the courses Description for specialized quarters quarters*/}
            <Accordion allowMultiple>
              {/* Course Desription */}
              <AccordionItem pt={4}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{ bg: "blue.700", color: "white" }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          <b>Course Description</b>
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      background="blue.900"
                      color="whiteAlpha.900"
                    >
                      <Text>{temp.coursedesc}</Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              {/* Course Outline */}
              <AccordionItem pt={4}>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "blue.700", color: "white" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      <b>Course Outline</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  background="blue.900"
                  color="whiteAlpha.900"
                >
                  <Text>{temp.courses}</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </>
        ))}
      </Grid>
    </Box>
</Wrapper>
  );
}
