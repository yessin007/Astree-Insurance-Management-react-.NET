
import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import axios from "axios";
import url from "../../../../store/api";

const Lobby = (props) => {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);
    const [inputValue, setValue] = useState('');
    const fetchUsers = () => {
        return  axios.get(url + 'Users').then(result => {
          const res =  result.data;
          return res;
        });
      };
    const handleInputChange = value => {
        setValue(value);
      };
      const handleChange = value => {
        setUser(value);
        setSelectedValue(value);
      };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("selectedValue.id"+selectedValue.id);

        const isUserProvided = selectedValue && selectedValue !== '';
        const isMessageProvided = message && message !== '';

        if (isUserProvided && isMessageProvided) {
            props.sendMessage(selectedValue.id, message);
        } 
        else {
            alert('Please insert an user and a message.');
        }
    }

    const onUserUpdate = (e) => {
        setUser(e.target.value);
    }

    const onMessageUpdate = (e) => {
        setMessage(e.target.value);
    }

    return (
        <form 
            onSubmit={onSubmit}>
            <label htmlFor="user">User:</label>
            <br />
      {/*  <input 
                id="user" 
                name="user" 
                value={user}
                onChange={onUserUpdate} /> */}     
                            <AsyncSelect
                              cacheOptions
                              defaultOptions
                              value={selectedValue}
                              getOptionLabel={e => e.firstName + ' ' + e.lastName}
                              getOptionValue={e => e.id}
                              loadOptions={fetchUsers}
                              onInputChange={handleInputChange}
                              onChange={handleChange}
                              />
            <br/>
            <label htmlFor="message">Message:</label>
            <br />
            <input 
                type="text"
                id="message"
                name="message" 
                value={message}
                onChange={onMessageUpdate} />
            <br/><br/>
            <button>Submit</button>
        </form>
    )
};


export default Lobby;