import React from "react";
import { VStack,AspectRatio,Box,Flex, Text,HStack, Heading, Link} from "@chakra-ui/react";
import { CheckIcon,ArrowRightIcon } from '@chakra-ui/icons'

export default function Commitment({text}:{text:string}) {
  return (
    <Flex>
        <Text >{text} </Text>
    </Flex>
  )
}
