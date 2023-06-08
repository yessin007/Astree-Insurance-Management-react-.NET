import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import Astree from "assets/img/auth/Astree.jpg"
export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <img src={Astree} style={{height: '4Opx'}}></img>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
