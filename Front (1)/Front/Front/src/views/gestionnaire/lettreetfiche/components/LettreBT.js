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
import { useReactToPrint } from "react-to-print";
import axios from "axios";
  import url from "../../../../store/api";
  import { Document, Page } from '@react-pdf/renderer';
import PdfViewerComponent from "views/financier/PdfViewerComponent";
  // import { HSeparator } from "components/separator/Separator";
// import { CalendarIcon } from "@chakra-ui/icons";

const LettreReass = ({ onSave, onRetour ,onData}) => {
    const [pdfUrl, setPdfUrl] = useState(null);
    const [data, setData] = useState('');
    const handleSave = () => {
        onSave(true);
    };
    const handleRetour = () => {
        onRetour(false);
    };
   const  generatePDf = () => {
    var doc = new jsPDF('p','pt', 'a4', true);
    doc.html(document.querySelector("#content"),{
        callback:function(pdf){
            pdf.save("mypdf.pdf");
        }
    });
    };
    const Print = () =>{     
        //console.log('print');  
        let printContents = document.getElementById('content').innerHTML;
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
      };
      
  const generatePdf = async () => {
     try {
    const response = await axios.post('http://localhost:5169/api/DemandeTransfert/generate-pdf', data, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'arraybuffer',
    });

    const file = new Blob([response.data], { type: 'application/pdf' });
    const fileUrl = URL.createObjectURL(file);
    setPdfUrl(fileUrl);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
  const handleInputChange = (event) => {
    setData(event.target.value);
  };
    
    return (

        <Box >
            <Flex justifyContent="center" alignItems="center" mb="20px" >
                <Box>
                    <Text fontSize="2xl" fontWeight="bold">
                        Lettre BT
                    </Text>

                </Box>
            </Flex>

            <Flex px={4} justifyContent="center">
               
                <Box w="100%" px={4}  id="content">
                <FormLabel style={styleRight.b}  mt={4}>BANQUE DE TUNISIE</FormLabel>
                <br/>
                <FormLabel style={styleRight.b}  mt={4}>RUE DE TURQUIE</FormLabel>
                <br/>
                <FormLabel style={styleRight.b}  mt={4}>1000 TUNIS RP</FormLabel>
                    <FormLabel mt={4}>Aff. suivie par : {onData.userName}</FormLabel>
                    <FormLabel mt={4}> Reassurence N°</FormLabel>
                    <FormLabel mt={4}>VIREMENT </FormLabel>
                    <hr style={  {width : "9%"}}/>
                    <br/>
                    <br/>
                    <br/>
                    <FormLabel>Messieurs,
                    <br/>Nous vous prions de bien vouloir virer en {onData.date} par le débit de notre compte
                 </FormLabel>
                    <FormLabel mt={4}>N°IBAN: {onData.iban} </FormLabel>
                    <FormLabel mt={4}>La somme de : {onData.somme} </FormLabel>
                    <FormLabel mt={4}>Au profit de : {onData.reassureurName}</FormLabel>
                    <FormLabel mt={4}>Compte N° : {onData.numeroCompte} </FormLabel>
                    <FormLabel mt={4}>Code SWIFT : {onData.codeSwift} </FormLabel>
                    <FormLabel mt={4}>Code BIC : {onData.codeBic} </FormLabel>
                    <FormLabel mt={4}>Bank : {onData.bank} </FormLabel>
                    <br/>
                    <FormLabel> (Je confirme les coordonnées bancaires de mon réassureur)</FormLabel>
                   
                    <FormLabel>(Conformément à l’article 45 § II du code de l’impot sur le revenu et de l’impot sur les sociétés ; 
                    tel que modifié par l’article 24 de loi de finances pour l’années 2014)
                    Représentant le règlement du solde de réassurance</FormLabel>
                    <br/>
                    <br/>

                    <FormLabel>(Voir détail ci-joint)</FormLabel>
                     <br/>
                      <br/>

                    <FormLabel>Veuillez agréer, Messieur, l’assurance de nos salutation distinguées.</FormLabel>
                    <FormLabel style={styleRight.b}>L’ASTREE PAR DELEGATION</FormLabel>
                   
               
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
          
      {/*   
        <Flex justifyContent="center" alignItems="center" >
           
        {pdfUrl && (
                 <div className="App-viewer">
                 <PdfViewerComponent document={"document.pdf"} />
               </div>
 
      )}  <Document file={pdfUrl}>
          <Page pageNumber={1} />
        </Document>  <div>
            <textarea value={data} onChange={handleInputChange} />
               <Button onClick={generatePdf} mt={4} ml={2} colorScheme="blue">Generate PDF</Button>
             
       {pdfUrl && (
         <Document file={pdfUrl}>
         <Page pageNumber={1} />
       </Document> 
      )}            </Flex>

      */}  
        </Box>
    );
};

export default LettreReass;
