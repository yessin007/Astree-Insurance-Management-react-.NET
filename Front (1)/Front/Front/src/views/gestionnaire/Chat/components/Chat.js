import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

import ChatWindow from './ChatWindow';
import Lobby from './Lobby';
import axios from "axios";
import url from "../../../../store/api";

const Chat = () => {
    const [ chat, setChat ] = useState([]);
    const latestChat = useRef(null);

    latestChat.current = chat;
    const fetchUsers = () => {
        return  axios.get(url + 'Users/Gestionnaire').then(result => {
          const res =  result.data;
          return res;
        });
      };

    useEffect(() => {
        const connection = new HubConnectionBuilder()
            .withUrl('http://localhost:5169/Chat/')
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(result => {
                console.log('Connected!');

                connection.on('ReceiveMessage', ( user,message)  => {
                    const updatedChat = [...latestChat.current];
                    updatedChat.push(user, message );
                
                    setChat(updatedChat);
                });
            })
            .catch(e => console.log('Connection failed: ', e));
    }, []);

    const sendMessage = async (user, message) => {
        console.log("id "+user);
        const chatMessage = {

            message: message,
            when: new Date(),
            receivedId: user,
            senderId : localStorage.getItem('Id')
        };

        try {
            const token = localStorage.getItem('Token');
            console.log('token'+token);
            const headers = {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            };
            /*
            await  fetch('http://localhost:5169/api/Chat/messages', { 
                method: 'POST', 
                body: JSON.stringify(chatMessage),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });*/
            axios.post('http://localhost:5169/api/Chat/messages',chatMessage ,{ headers }).then(res=>{
                console.log("res : ");
                console.log(res.data);
      
               }).catch(erreur=>{
                console.log(erreur);
              });

              
        }
        catch(e) {
            console.log('Sending message failed.', e);
        }
    }

    return (
        <div>
            <Lobby sendMessage={sendMessage} />
            <hr />
            <ChatWindow chat={chat}/>
        </div>
    );
};

export default Chat;