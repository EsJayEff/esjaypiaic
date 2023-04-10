"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";
// Importing all the child components created specially for this section
import Tweets from "./Tweets";
import Facebook from "./Facebook";

export default function Blogs() {
  return (
    // Main Container
    <Box
      id="blogs"
      w="full"
      px={{ base: "25px", md: "100px", lg: "200px" }}
      py={{ base: "10px", md: "50px", lg: "60px" }}
    >
      <Heading
        fontSize={{ base: "34px", md: "44px", lg: "54px" }}
        letterSpacing="6px"
        color="blue.900"
        py="20px"
      >
        In Focus | News and Events
      </Heading>
      <div>
        {/* Grid used for the components */}
        <Grid
          templateColumns={{
            lg: "repeat(4, 1fr)",
            md: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          templateRows={{
            lg: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap="2"
        >
          {/* Facebook component used to call the main posts on the page of the facebook of the PIAIC */}
          <div className="w-full col-span-2 rounded-lg">
            <Facebook />
          </div>
          {/* Twitter component used to call the main posts on the page of the twitter of the PIAIC */}
          <div className="w-full col-span-2">
            <Tweets />
          </div>
          {/* First latest video of the youtube page of PIAIC */}
          <div className="w-full ">
            <div className="videoWrapper">
              <iframe src="https://www.youtube.com/embed?listType=playlist&list=UU2Makv_pLAtvrjHNgg-pBLg&index=1"></iframe>
            </div>
          </div>
          {/* Second latest video of the youtube page of PIAIC */}
          <div className="w-full">
            <div className="videoWrapper">
              <iframe src="https://www.youtube.com/embed?listType=playlist&list=UU2Makv_pLAtvrjHNgg-pBLg&index=2"></iframe>
            </div>
          </div>
          {/* Third latest video of the youtube page of PIAIC */}
          <div className="w-full">
            <div className="videoWrapper">
              <iframe src="https://www.youtube.com/embed?listType=playlist&list=UU2Makv_pLAtvrjHNgg-pBLg&index=3"></iframe>
            </div>
          </div>
          {/* Fourth latest video of the youtube page of PIAIC */}
          <div className="w-full">
            <div className="videoWrapper">
              <iframe src="https://www.youtube.com/embed?listType=playlist&list=UU2Makv_pLAtvrjHNgg-pBLg&index=4"></iframe>
            </div>
          </div>
        </Grid>
      </div>
    </Box>
  );
}
