import React from 'react'
import { VStack,AspectRatio,Box,Flex, Text,HStack, Heading, Link,Img,Grid,Avatar} from "@chakra-ui/react";

export default function TestimonialCard() {
  return (
    <Box w="full" p="40px" bg="white" px="40px" py="20px">
        <Flex alignItems="center" pb="20px">
            <Avatar src="man-portrait1x1.jpg" mr="20px"> </Avatar>
                <Box>
                    <Heading fontSize={16} color="blue.900" mb="2px">Zac Walker</Heading>
                    <Text fontSize={12} color="gray.500">Founder of mock.io</Text>
                </Box>
            </Flex>
            <Text color="blue.700" fontSize={14}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis quasi iusto atque aliquid molestias temporibus quo saepe cum illum placeat quisquam et beatae, asperiores facilis error excepturi. Harum, aperiam?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque fugiat obcaecati voluptatem esse hic excepturi earum labore deleniti veritatis expedita recusandae commodi molestiae adipisci, beatae eaque! Maxime dolores recusandae soluta!
            </Text>
    </Box>
  )
}
