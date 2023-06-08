import React, { useMemo, useState,useEffect } from "react";
import {
    Box,
    Flex,
    Button,
    FormControl,
    FormLabel,
    Select,
    Radio,
    RadioGroup,
    Stack,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    InputRightElement,
    IconButton,
    FormHelperText,
    Text
} from "@chakra-ui/react";
import { HSeparator } from "components/separator/Separator";
import { CalendarIcon } from "@chakra-ui/icons";
import AddForm from "./AddForm";
import axios from "axios";
import url from "../../../../store/api";

const AddFormDetailBancaire = ({onSave,onRetour,onData}) => {
    const [inputDateValue, setInputDateValue] = useState("");
    const [aed, setAed] = useState("");
    const [solde, setSolde] = useState("");
    const [num, setNum] = useState("");
    const [taux, setTaux] = useState("");
    const [monnay, setMonnay] = useState("");
    const [refTransfert, setRefTransfert] = useState("");
    const [devise, setDevise] = useState("");
    const [assure, setAssure] = useState("");
    const [bordereau, setBordereau] = useState("");
    const [items, setItems] = useState();
    const handleInputDateChange = (event) => {
        setInputDateValue(event.target.value);
    };
    const handleInputAed = (event) => {
        setAed(event.target.value);
    };
    const handleInputAssure = (event) => {
        setAssure(event.target.value);
    };
    const handleInputBordereau = (event) => {
        setBordereau(event.target.value);
    };
    const handleInputDevice = (event) => {
        setDevise(event.target.value);
    };
    const handleInputMonnay = (event) => {
        setMonnay(event.target.value);
    };
    const handleInputNum = (event) => {
        setNum(event.target.value);
    };
    const handleInputRefTransfert = (event) => {
        setRefTransfert(event.target.value);
    };
    const handleInputSolde = (event) => {
        setSolde(event.target.value);
    };
    const handleInputTaux = (event) => {
        setTaux(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        // Do something with selectedOption, selectedRadio, inputTextValue, and inputDateValue
    };
    useEffect(()=>{
        // recuperation des donner 
          async function fetchData() {
            
             await axios.get(url + `SessionReassureur/conv/${onData.id}`).then(res=>{
              console.log("users : ");
              console.log(res.data);
              setAed(res.data.aed);
              setSolde(res.data.solde);
            setInputDateValue(res.data.dataAuDebit);
            setNum(res.data.num);
            setTaux(res.data.taux);
            setMonnay(res.data.monnay);
            setRefTransfert(res.data.refTransfert);
            setDevise(res.data.devise);
            setAssure(res.data.assure);
            setBordereau(res.data.bordereau);
             }).catch(erreur=>{
              console.log(erreur);
            });
        }
        fetchData();
    
      },[])
    const handleSave = () => {
        const newItem = {
            id:onData.id,
            reference:onData.reference,
            code:onData.code,
            effet:onData.effet,
            risque:onData.risque,
            exercice:inputDateValue,
            recours:onData.recours,
            commission:onData.commission,
            sinistre:onData.sinistre,
            rrcConstitue:onData.rrcConstitue,
            rssConstitue:onData.rssConstitue,
            pb:onData.pb,
            aed:aed,
            solde:solde,
            inputDateValue:inputDateValue,
            num:num,
            taux:taux,
            monnay:monnay,
            refTransfert:refTransfert,
            devise:devise,
            assure:assure,
            bordereau:bordereau
          };
          console.log("data : " + newItem);
          axios.post(url+'SessionReassureur/Conv',newItem).then(res=>{
            console.log("res : ");
        }).catch(erreur=>{
            console.log(erreur);
          });
          console.log({newItem});
          setItems(newItem);
          onSave(true);
      };

      const  handleRetour = () => {
        onRetour(false);
      };
    return (

        <Box >
            <Flex justifyContent="center" alignItems="center" mb="20px" >
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                    Conventionnel
                    </Text>

                </Box>
            </Flex>
            <HSeparator />
            <form onSubmit={handleSubmit} >
                <Flex px={4}>
                    <Box w="40%" px={4}>
                        <FormControl isRequired mt={4} >
                            <FormLabel>Monnay</FormLabel>
                            <Input
                                type="number"
                                placeholder="Entrez un Monnay"
                                value={monnay}
                                onChange={handleInputMonnay}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>referance Transfert</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un refTransfert"
                                value={refTransfert}
                                onChange={handleInputRefTransfert}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Devise</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un devise"
                                value={devise}
                                onChange={handleInputDevice}
                            />
                        </FormControl>

                        <FormControl isRequired mt={4}>
                            <FormLabel>Assure</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un assure"
                                value={assure}
                                onChange={handleInputAssure}
                            />
                        </FormControl>

                        <FormControl isRequired mt={4}>
                            <FormLabel>Bordereau</FormLabel>
                            <Input
                                type="number"
                                placeholder="Entrez un bordereau"
                                value={bordereau}
                                onChange={handleInputBordereau}
                            />
                        </FormControl>
                    </Box>
                    <Box w="40%" px={4}>
                        <FormControl isRequired mt={4}>
                            <FormLabel>aed</FormLabel>
                            <Input 
                              type="text"
                              placeholder="Entre le aed"
                              value={aed}
                              onChange={handleInputAed}
                           />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Solde</FormLabel>
                            <Input 
                              type="number"
                              placeholder="Entre le solde"
                              value={solde}
                              onChange={handleInputSolde}
                           />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                        <FormLabel>Date au debut</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children={<CalendarIcon />} />
                                <Input
                                    type="date"
                                    placeholder="Entrez une date"
                                    value={inputDateValue}
                                    onChange={handleInputDateChange}
                                />
                                <InputRightElement>
                                    <IconButton
                                        aria-label="Effacer la date"
                                        icon={<CalendarIcon />}
                                        onClick={() => setInputDateValue("")}
                                    />
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Numero</FormLabel>
                            <Input 
                              type="number"
                              placeholder="Entre le numéro"
                              value={num}
                              onChange={handleInputNum}
                           />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>taux</FormLabel>
                            <Input 
                              type="number"
                              placeholder="Entre le taux"
                              value={taux}
                              onChange={handleInputTaux}
                           />
                        </FormControl>
                    </Box>
                </Flex>

                <Flex justifyContent="center" alignItems="center" >
                    <Button mt={4} mr={2} colorScheme="gray" onClick={handleRetour}>
                        Retour
                    </Button>
                    <Button mt={4} ml={2} colorScheme="blue" onClick={handleSave}>
                       
                        Suivant
                    </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default AddFormDetailBancaire;
