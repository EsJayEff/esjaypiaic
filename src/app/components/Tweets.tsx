// imports of the libraries
import Script from "next/script";
import React from "react";
import { AspectRatio } from "@chakra-ui/react";
import Wrapper from "./wrapper";

export default function Tweets() {
  return (
    <Wrapper>
      <div className="block">
        <AspectRatio>
          <a
            className="twitter-timeline"
            data-width="800"
            data-height="800"
            href="https://twitter.com/piaicofficial?ref_src=twsrc%5Etfw"
          >
            Tweets by piaicofficial
          </a>
        </AspectRatio>
        <Script src="https://platform.twitter.com/widgets.js" />
      </div>
    </Wrapper>
  );
}
