// Chakra imports
import { Avatar, Box, Flex, FormLabel, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React, { useMemo, useState,useEffect } from "react";
import axios from "axios";
import url from "../../../../store/api";
import { FaPhoneAlt,FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Banner(props) {
  const { banner, avatar } = props;
  const id = localStorage.getItem('Id');
  const [user,setUser]=useState("");
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  useEffect(()=>{
    // recuperation des donner 
      async function fetchData() {
        
         await axios.get(url + `Users/${id}`).then(res=>{
          console.log("users : ");
          console.log(res.data);
          setUser(res.data)

         }).catch(erreur=>{
          console.log(erreur);
        });
        //const json = await response.json();
       // setData(json);
    }
    fetchData();

  },[]);
  return (
    <>
    <Card mb={{ base: "0px", lg: "20px" }}  h="100%"   w="50%" align='center'>
      <Box
        bg={`url(${banner})`}
        bgSize='cover'
        borderRadius='16px'
        h='131px'
        w='100%'
      />
      <Avatar
        mx='auto'
        src={avatar}
        h='87px'
        w='87px'
        mt='-43px'
        border='4px solid'
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
        {user.firstName} {user.lastName}
      </Text>
      <Text color={textColorSecondary} fontSize='sm'>
        {user.email}
      </Text>
    <Flex w='max-content' mx='auto' mt='26px' direction='column'>
    <Flex mx='auto' me='60px' align='center' direction='row'>
      <FaUser/>
      <Text color={textColorSecondary} fontSize='2xl' fontWeight='700'>
          Nom
        </Text>
        <FormLabel></FormLabel>
        <FormLabel></FormLabel>
        <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
          {user.lastName}
        </Text>
        </Flex>
        <Flex mx='auto' me='60px' align='center' direction='row'>
        <FaUser/>
      <Text color={textColorSecondary} fontSize='2xl' fontWeight='700'>
          Prenom
        </Text>
        <FormLabel></FormLabel>
        <FormLabel></FormLabel>
        <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
          {user.firstName}
        </Text>
        </Flex>
        <Flex mx='auto' me='60px' align='center' direction='row'>
        <MdEmail/>
        <Text color={textColorSecondary} fontSize='2xl' fontWeight='700'>
        Email
        </Text>
        <FormLabel></FormLabel>
        <FormLabel></FormLabel>
        <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
          {user.email}
        </Text>
      </Flex>
        <Flex mx='auto' me='60px' align='center' direction='row'>
        <FaPhoneAlt></FaPhoneAlt>
        <Text color={textColorSecondary} fontSize='2xl' fontWeight='700'>
        Telephone
        </Text>
        <FormLabel></FormLabel>
        <FormLabel></FormLabel>
        <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
          {user.phoneNumber}
        </Text>
      </Flex>
    </Flex>
  </Card>
  </>
  );
}
