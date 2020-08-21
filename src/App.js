import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Logo from "./components/Logo/Logo";
import Result from "./components/Result/Result";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FireRecognition from "./components/FireRecognition/FireRecognition";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      probability: null,
      classification: null,
      imageUrl: "",
      error: null,
    }
  }

  componentDidMount() {
    fetch("https://hotspot-api-asathiya.herokuapp.com/");
  }

  onPictureSubmit = (imageUrl) => {
    fetch("https://hotspot-api-asathiya.herokuapp.com/classify", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({url: imageUrl})
    })
      .then(res => res.json())
      .then(data => {
        this.setState({imageUrl, 
          probability: data.confidence, 
          classification: data.classification, 
          error: data.error
        });
      }); 
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              size: {
                value: 3
              },
              line_linked: {
                width: 3
              },
              move: {
                speed: 12
              }
            }
          }} />
        <div className="mt5">
          <Logo />
          <ImageLinkForm onPictureSubmit={this.onPictureSubmit}/>
          <Result 
            probability={this.state.probability} 
            classification={this.state.classification} 
            error={this.state.error}
            imageUrl={this.state.imageUrl}
            />
          <FireRecognition imageUrl={this.state.imageUrl}/>
        </div>
      </div>
    );
  }
}

export default App;
