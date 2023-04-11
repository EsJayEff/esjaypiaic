"use client";
// As Chakra components run of client side only

// imports of the libraries
import React from "react";
import { AspectRatio } from "@chakra-ui/react";
import Wrapper from "./wrapper"

export default function Facebook() {
  return (
  <Wrapper>
    <div>
         <AspectRatio>
      <iframe 
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpiaic%2F&tabs=timeline&width=800&height=800&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
        width="800"
        height="800"
        data-adapt-container-width="true"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        className="rounded-l-2xl"
      ></iframe>
      </AspectRatio>
    </div>
  </Wrapper>
  );
}
