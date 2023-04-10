import React from "react";
import { AspectRatio,Box,Flex, Text,HStack, Heading, Link,Image} from "@chakra-ui/react";
import YouTubeEmbed from './YouTubeVideo'


export default function WorkMethodCard({imagePath,heading,description}:{imagePath:string,heading:string,description:string}) {
  return (
    <Box w="full" >
        <AspectRatio ratio={16/9}>
        {/* <Image src={imagePath} pb="40px" objectFit="contain"/> */}
        {/* <iframe  src={imagePath} autoPlay className="video" ></iframe> */}
        {/* <iframe id="ytplayer" src={imagePath}> </iframe> */}
        {/* <video src={imagePath} muted loop autoPlay> </video> */}
        <video src={imagePath} width="640" height="480" autoPlay muted loop></video>
        {/* <YouTubeEmbed embedId={imagePath} /> */}
        {/* <iframe src={imagePath}> </iframe> */}
          </AspectRatio>
        <Heading fontSize="24px" color="blue.900" pb="20px" p="10px">{heading}</Heading>
        <Text fontSize="14px" color="blue.700" p="10px">{description}</Text>
    </Box>
  )
}


