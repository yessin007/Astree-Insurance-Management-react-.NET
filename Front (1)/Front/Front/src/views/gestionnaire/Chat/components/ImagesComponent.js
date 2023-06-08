import React, { Component } from 'react';
import * as signalR from "@microsoft/signalr";
class ImagesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      images: []
    };
    this._hubConnection = null;
  }

  componentDidMount() {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5169/Filehub/")
      .configureLogging(signalR.LogLevel.Trace)
      .build();
    this._hubConnection.stop();
    this._hubConnection.start().catch(err => console.error(err.toString()));
    this._hubConnection.on("ImageMessage", (data) => {
      console.log(data);
      this.setState({ images: [...this.state.images, data] });
    });
  }

  render() {
    return (
      <div>
        {this.state.images.map((image, index) => (
          <img src={image.url} key={index} alt={image.alt} />
        ))}
        <div class="container-fluid">
  <h1>Images</h1>
 
 
  <button onClick={this.componentDidMount}>Send</button>
</div>

      </div>
      
    );
  }
}

export default ImagesComponent;