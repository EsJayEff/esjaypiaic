import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import Wrapper from "../../components/wrapper";

export default function ImageSlider() {
  const slides = [
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364749/wit/51029395_10156517515841281_7963296630130606080_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364738/wit/50690232_10156517507666281_4171136796081520640_n.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364752/wit/51066316_10156517520621281_4992381620213252096_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364738/wit/50675836_10156517507021281_4706052772112367616_n.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364727/wit/50458348_10156517507336281_6817312210671370240_n.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364738/wit/50685972_10155901301712623_7726406252925812736_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364748/wit/50985903_10156517518846281_6420746962424823808_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364725/wit/50448704_10156517507676281_1689263323880620032_n.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364747/wit/50850130_10156517530851281_4777873481524051968_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364744/wit/50778365_10156517513361281_8933050299392720896_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364738/wit/50668180_10156517509866281_140588998451003392_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364742/wit/50762687_10156517514306281_4049375349413249024_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364746/wit/50702979_10156517517476281_1815261936175022080_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364742/wit/50692532_10156517513696281_5955230622740905984_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364750/wit/51041762_10156517511426281_6513131399724138496_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364740/wit/50658241_10156517512971281_9132307851027415040_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364716/wit/50217115_10156517506971281_2052493063200178176_n.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364737/wit/50620544_10156517512206281_167652201563422720_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364737/wit/50574137_10156517509276281_6065843180417318912_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364751/wit/51043326_10156517516441281_3833271011898294272_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364736/wit/50516670_10156517512531281_6651909377970143232_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364735/wit/50477400_10156517511881281_4236157524291616768_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364733/wit/50472914_10156517520146281_374996665515376640_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364733/wit/50545035_10155901301782623_3467518992904617984_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364732/wit/50472016_10156517517446281_1809569863262273536_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364731/wit/50464647_10156517514966281_1379655241934307328_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364729/wit/50448688_10156517515346281_8845736917094891520_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364729/wit/50411509_10156517518401281_1566992236393005056_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364740/wit/50558571_10156517515861281_4249838270734663680_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364727/wit/50444213_10156517519731281_738414734855897088_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364726/wit/50404247_10156517514536281_8459621307099643904_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364725/wit/50405231_10156517509511281_1045814567956905984_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364723/wit/50271442_10156517515326281_4900157385194078208_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364723/wit/50440739_10156517507176281_5094016029793714176_n.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364723/wit/50323530_10156517510261281_882855459977953280_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364722/wit/50309673_10156517509586281_5771227553696055296_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364721/wit/49947885_10155886004522623_2748167509046722560_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364721/wit/49572433_10155886004007623_1705833569701593088_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364721/wit/50107957_10155901301507623_4842355796928888832_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364748/wit/50995020_10156517517406281_2236550296077598720_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364720/wit/49827626_10155878744677623_5831500655121924096_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364720/wit/50270033_10156517518211281_3210567115517984768_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364719/wit/50306287_10156517508116281_971157191560003584_n.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364718/wit/51068803_10156517516456281_6937489553141792768_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364718/wit/49778152_10156517509011281_317672432800366592_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364716/wit/49719619_10155886003977623_7126765995917574144_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364716/wit/49625875_10155878744962623_3301573001459269632_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364715/wit/49599710_10156517513256281_8000442153006268416_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364714/wit/49504421_10155878744647623_6739767413660712960_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364713/wit/49348722_10155878744322623_7478756188075589632_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364713/wit/51243260_10156517508056281_4986750853663686656_n.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364713/wit/49900375_10155878744702623_7171154439972061184_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364712/wit/49841124_10155878745507623_3970289677050576896_o.jpg",
    },
    {
      url: "https://res.cloudinary.com/zeeshanshanif/image/upload/v1562364712/wit/49864686_10155886003927623_6068066380043780096_o.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newindex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newindex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newindex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newindex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Wrapper>
      <Box
        w="full"
        px={{ base: "25px", md: "100px", lg: "200px" }}
        className="relative group"
        bg="whiteAlpha.900"
      >
        <Heading
          fontSize={{ base: "34px", md: "44px", lg: "54px" }}
          letterSpacing="6px"
          color="blue.900"
          py="20px"
        >
          PIAIC WOMEN&apos;S GALLERY
        </Heading>
        <Flex flexDirection="column" height="full">
          <Box w="full">
            <Grid
              templateColumns={{
                lg: "repeat(1, 1fr)",
                md: "repeat(1, 1fr)",
                base: "repeat(1, 1fr)",
              }}
              pb="20px"
              gap="10"
              className="relative group px-4 py-16 w-full m-auto"
            >
              <GridItem boxShadow="dark-lg" rounded="md">
                <AspectRatio
                  ratio={16 / 9}
                  className="w-full h-full  bg-center bg-cover duration-500"
                >
                  <Image alt="imageslider" src={slides[currentIndex].url} />
                </AspectRatio>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
        <div className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-5  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </Box>
    </Wrapper>
  );
}
