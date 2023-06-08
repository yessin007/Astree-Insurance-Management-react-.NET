import { useState } from "react";
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
import jsPDF from "jspdf";

// import { HSeparator } from "components/separator/Separator";
// import { CalendarIcon } from "@chakra-ui/icons";

const LettreReass = ({ onSave, onRetour ,onDataFileReas}) => {
    const handleSave = () => {
        onSave(true);
    };
    const handleRetour = () => {
        onRetour(false);
    };
    const  generatePDf = () => {
        var doc = new jsPDF('p','pt', 'a4', true);
        doc.html(document.querySelector("#lettreReas"),{
            callback:function(pdf){
                pdf.save("lettreReas.pdf");
            }
        });
        };
        const Print = () =>{     
            //console.log('print');  
            let printContents = document.getElementById('lettreReas').innerHTML;
            let originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
           document.body.innerHTML = originalContents; 
          };
          const styleRight= {
            b :{
                position: "absolute",
                right: 0,
              } 
          }
    return (
        <Box >
            <Flex justifyContent="center" alignItems="center" mb="20px" >
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                    Lettre Reass
                    </Text>

                </Box>
            </Flex>

            <Flex px={4} justifyContent="center">   
                <Box w="100%" px={4}  id="lettreReas">
                    <FormLabel mt={4}>Aff. suivie par : {onDataFileReas.userName}</FormLabel>
                    <FormLabel mt={4}> Reassurence N° :  {onDataFileReas.reassureurName}</FormLabel>
                    <FormLabel mt={4}>VIREMENT </FormLabel>
                    <hr style={  {width : "9%"}}/>
                    <br/>
                    <br/>
                    <br/>
                    <FormLabel>Messieurs,
                    <br/>Nous avons l'honneur de vous informer que nous donnons ordre à notre 
                    <br/>
                    Banque afin de vous vivre la somme de : {onDataFileReas.somme}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    Représentant le réglement du solde de réassurance
                 </FormLabel>
                     <br/>
                      <br/>
                    <FormLabel>Veuillez agréer, Messieur, l'expression de nos salutation distinguées.</FormLabel>
                    <br/>
                    <br/>
                    <FormLabel style={styleRight.b}>{onDataFileReas.userName}</FormLabel>
                    <br/>
                    <FormLabel style={styleRight.b}>DEPARTEMENR REASSURANCE</FormLabel>               
                </Box>
            </Flex>

          
            <Flex justifyContent="center" alignItems="center" >
            <Button onClick={handleRetour} mt={4} ml={2} colorScheme="gray" >
                    retour
                </Button>
                <Button  mt={4} ml={2} colorScheme="blue" >
                Envoyer
                </Button>
                <Button onClick={Print} mt={4} ml={2} colorScheme="blue" >
                    Imprimer
                </Button>
                <Button onClick={generatePDf} mt={4} ml={2} colorScheme="blue" >
                Download
                </Button>
            </Flex>

        </Box>
    );
};

export default LettreReass;
