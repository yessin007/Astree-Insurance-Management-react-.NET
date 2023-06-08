/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";


// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/ASS.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import axios from "axios";
import url from "../../../store/api";
function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = React.useState(false);
  
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur] = useState("");
  const [loggedIn, setloggedIn] = useState(null);
  const Login = () => {
  
    // Validate password
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    // const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);
    // const hasCommonWord = /(password|123456|qwerty)/i.test(password);
    // const hasPersonalInfo = /(name|username|email)/i.test(password);

    const isValid =
      password.length >= 8 && hasUppercase && hasLowercase && hasNumber;
    //  &&
    // hasSpecialChar &&
    // !hasCommonWord &&
    // !hasPersonalInfo;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    // alert(isValidEmail);
    // if (isValidEmail && isValid) {
    //   localStorage.setItem("Role","gestionnaire");
      
    //   //alert(localStorage.getItem("Role"));
    //      setloggedIn("true");
    //     //setErreur("Email or Password not valid !");
    //   }
    if (!isValidEmail && !isValid) {
      // setloggedIn("true");
      setErreur("E-mail ou mot de passe non valide !");
    }else {
     
      axios.post(url + "Auth/login", {
        email: email,
        password: password
      }).then(res=>{
        console.log("/api/Auth/login");
        console.log(res.data);
        setErreur("");
        localStorage.setItem("Id",res.data.id);
        localStorage.setItem("Email",res.data.email);
        localStorage.setItem("PhoneNumber",res.data.phoneNumber);
        localStorage.setItem("Token",res.data.token);
        localStorage.setItem("Email",res.data.user.email);
        localStorage.setItem("Role",res.data.role[0].toLowerCase());
        setloggedIn("true");
       }).catch(erreur=>{
        setErreur("Email or Password not valid !");
        console.log(erreur);
      });
    }
  };

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      {/* <DefaultAuth illustrationBackground={illustration} image={illustration}></DefaultAuth> */}
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign In
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your email and password to sign in!
          </Text>
        </Box>
        {erreur == "" ? (
          <></>
        ) : (
          <Text mb="36px" ms="4px" color="red" fontWeight="800" fontSize="md">
            {erreur}
          </Text>
        )}
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
    
          <FormControl>
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant="auth"
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="email"
              placeholder="mail@simmmple.com"
              mb="24px"
              fontWeight="500"
              size="lg"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Min. 8 characters"
                mb="24px"
                size="lg"
                type={show ? "text" : "password"}
                variant="auth"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent="space-between" align="center" mb="24px">
              <FormControl display="flex" alignItems="center">
               
              </FormControl>
              <NavLink to="/auth/forgot-password">
                <Text
                  color={textColorBrand}
                  fontSize="sm"
                  w="124px"
                  fontWeight="500"
                >
                  Forgot password ?
                </Text>
              </NavLink>
            </Flex>
            {loggedIn ? (
              <Redirect from="/" to="/gestionnaire" />
            ) : (
              <Button
                fontSize="sm"
                variant="brand"
                fontWeight="500"
                w="100%"
                h="50"
                mb="24px"
                onClick={Login}
              >
                Sign In
              </Button>
            )}
            
          </FormControl>
       
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
