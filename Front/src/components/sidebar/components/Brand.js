import React from "react";

// Chakra imports
import { Flex, useColorModeValue,Image  } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import imm from "../../../assets/logo.jpg"
export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <Image src={imm} alt="Ma super image" h='120px' w='150px'  />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
