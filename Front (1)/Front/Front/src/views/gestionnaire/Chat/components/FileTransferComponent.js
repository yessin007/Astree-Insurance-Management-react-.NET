import React, { useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import axios from "axios";
import url from "../../../../store/api";
function FileTransferComponent() {
    const connectionRef = useRef(null);

    useEffect(() => {
        const connection = new HubConnectionBuilder()
            .withUrl('http://localhost:5169/Chat/')
            .withAutomaticReconnect()
            .build();

        connection.on('SendFile', (fileData, fileName) => {
            // Handle received file data
            // You can save the file locally, display a download link, or perform any other desired action
            console.log(`Received file: ${fileName}`);
            console.log(fileData);
        });

        connection.start()
            .then(() => {
                console.log('Connected to File Hub');
            })
            .catch(error => {
                console.log('SignalR connection error: ', error);
            });

        connectionRef.current = connection;
    }, []);

    // Function to send a file to the server
    const sendFile = async (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const fileData = reader.result;
            const fileName = file.name;
           /* connectionRef.current.invoke('ImageMessage', fileData, fileName)
                .catch(error => {
                    console.log('Sending file failed: ', error);
                });*/
                const data = {
                    fileData:fileData,
                    fileName:fileName
                }
                const token = localStorage.getItem('Token');
                console.log('token'+token);
                const headers = {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
                };
                axios.post('http://localhost:5169/api/Chat/File',data,{ headers } ).then(res=>{
                console.log("res : ");
                console.log(res.data);
      
               }).catch(erreur=>{
                console.log(erreur);
              });
        };
        reader.readAsArrayBuffer(file);
    };

    // File input change handler
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            sendFile(file);
        }
    };

    // Render the file input
    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
}

export default FileTransferComponent;