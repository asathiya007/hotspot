import React from 'react';
import './App.css';
import Title from "./components/Title/Title";
import Result from "./components/Result/Result";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import ImageView from "./components/ImageView/ImageView";

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
        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div >
        <div className="mv5">
          <Title />
          <ImageLinkForm onPictureSubmit={this.onPictureSubmit}/>
          <Result 
            probability={this.state.probability} 
            classification={this.state.classification} 
            error={this.state.error}
            imageUrl={this.state.imageUrl}
            />
          <ImageView 
            imageUrl={this.state.imageUrl} 
            error={this.state.error}
            />
        </div>
      </div>
    );
  }
}

export default App;
