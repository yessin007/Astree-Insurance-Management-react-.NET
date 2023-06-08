import React, { useMemo, useState,useEffect } from "react";
import {
    Box,
    Flex,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text
} from "@chakra-ui/react";
import { HSeparator } from "components/separator/Separator";
import { CalendarIcon } from "@chakra-ui/icons";
import AsyncSelect from 'react-select/async';
import axios from "axios";
import url from "../../../../store/api";

const AddFormFac = ({onSave,onRetour,handleAdd,onData}) => {
    const [reference,setReference] = useState("");
    const [code,setCode] = useState("");
    const [effet,setEffet] = useState("");
    const [risque,setRisque] = useState("");
    const [recours,setRecours] = useState("");
    const [commission,setCommission] = useState("");
    const [sinistre,setSinistre] = useState("");
    const [rrcConstitue,setRrcConstitue] = useState("");
    const [rssConstitue,setRssConstitue] = useState("");
    const [pb,setPb] = useState("");
    const handleChangeReference = event => {
        setReference(event.target.value);
      };
      const handleChangeCode = event => {
        setCode(event.target.value);
      };
      const handleChangeEffet = event =>{
        setEffet(event.target.value);
      };
      const handleChangeRisque = event =>{
        setRisque(event.target.value);
      };
      const handleChangeRecours = event =>{
        setRecours(event.target.value);
      };
      const handleChangeCommission = event =>{
        setCommission(event.target.value);
      };
      const handleChangeSinistre = event=>{
        setSinistre(event.target.value);
      };
      const handleChangeRrcConstitue = event =>{
        setRrcConstitue(event.target.value);
      };
      const handleChangeRssConstitue = event =>{
        setRssConstitue(event.target.value);
      };
      const handleChangePb = event =>{
        setPb(event.target.value);
      };
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const  handleRetour = () => {
        onRetour(false);
      };
      useEffect(()=>{
        // recuperation des donner 
          async function fetchData() {
            
             await axios.get(url + `SessionReassureur/Fac/${onData}`).then(res=>{
              console.log("users : ");
              console.log(res.data);
              setReference(res.data.reference);
              setCode(res.data.code);
           setEffet(res.data.effet);
            setRisque(res.data.risque);
            setRecours(res.data.recours);
            setCommission(res.data.commission);
            setSinistre(res.data.sinistre);
            setRrcConstitue(res.data.rrcConstitue);
            setRssConstitue(res.data.rssConstitue);
            setPb(res.data.pb);
             }).catch(erreur=>{
              console.log(erreur);
            });
        }
        fetchData();
    
      },[])
    const handleSave = () => {
        const newItem = {
            id:onData,
            reference:reference,
            code:code,
            effet:effet,
            risque:risque,
            exercice:"",
            recours:recours,
            commission:commission,
            sinistre:sinistre,
            rrcConstitue:rrcConstitue,
            rssConstitue:rssConstitue,
            pb:pb
        }
         handleAdd(newItem);  
        onSave(true);
      };
    return (

        <Box >
            <Flex justifyContent="center" alignItems="center" mb="20px" >
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                    Facultative
                    </Text>

                </Box>
            </Flex>
            <HSeparator />
            <form onSubmit={handleSubmit}>
                <Flex px={4}>
                    <Box w="40%" px={4}>
                        <FormControl isRequired mt={4}>
                            <FormLabel >Reference</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un texte"
                                value={reference}
                                onChange={handleChangeReference}
                            />
                                             
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Code</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un texte"
                                value={code}
                                onChange={handleChangeCode}
                            />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Effet</FormLabel>
                            <Input
                                type="text"
                                placeholder="Entrez un texte"
                                value={effet}
                                onChange={handleChangeEffet}
                            />
                        </FormControl>

                        <FormControl isRequired mt={4}> 
                            <FormLabel>Risque</FormLabel>
                            <Input 
                               type="text"
                               placeholder="Entrez le risque"
                               value={risque}
                               onChange={handleChangeRisque}
                            />
                        </FormControl>

                        <FormControl  isRequired mt={4}>
                            <FormLabel>Recours</FormLabel>
                            <Input
                               type="text"
                               placeholder="Entre le recours"
                               value={recours}
                               onChange={handleChangeRecours}
                            />
                            </FormControl>
                    </Box>
                    <Box w="40%" px={4}>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Commission</FormLabel>
                            <Input
                               type="text"
                               placeholder="Entre commission"
                               value={commission}
                               onChange={handleChangeCommission}
                            />
                        </FormControl>
                        <FormControl isRequired  mt={4}>
                            <FormLabel>Sinistre</FormLabel>
                           <Input 
                              type="text"
                              placeholder="Entre le Sinistre"
                              value={sinistre}
                              onChange={handleChangeSinistre}
                           />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>RrcConstitue</FormLabel>
                            <Input 
                              type="text"
                              placeholder="Entre le rrcConstitue"
                              value={rrcConstitue}
                              onChange={handleChangeRrcConstitue}
                           />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>RssConstitue</FormLabel>
                            <Input 
                              type="text"
                              placeholder="Entre le rssConstitue"
                              value={rssConstitue}
                              onChange={handleChangeRssConstitue}
                           />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>PB</FormLabel>
                            <Input 
                              type="text"
                              placeholder="Entre le pb"
                              value={pb}
                              onChange={handleChangePb}
                           />
                        </FormControl>
                    </Box>
                    
                </Flex>

                <Flex justifyContent="center" alignItems="center">
                <Button mt={4} mr={2} colorScheme="gray" onClick={handleRetour}>
                        Retour
                    </Button>
                <Button mt={4} colorScheme="blue" onClick={handleSave}>
                        Suivant
                    </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default AddFormFac;
