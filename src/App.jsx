import React, { Component } from 'react';
import ChildComponent from './childComponent';
import { initialData } from './data';

class Kennel extends Component {
  constructor(props) {
    super(props);
    
    // TODO: Initialize state here
    this.state = {
      pets: initialData 
    };
  }
    // Method to handle state changes from children
  handleUpdate = (id) => {
    console.log("Parent received event for ID:", id);
    // TODO: Logic to update the specific child in this.state
  
    const updatedPets = this.state.pets.map(pet => {
      if(pet.id === id) {
        return { ...pet, curImg: pet.curImg === 0 ? 1 : 0 } 
      }
      return pet;
    });
    this.setState({ pets: updatedPets });
  };

  render() {
    return (
      <div className="app-container" style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Pet Kennel (Class-Based)</h1>
        
        <div className="children-container" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          {/* TODO: Map through your state characters here and render ChildComponents */}
          
              {this.state && this.state.pets.map(pet => (
                <ChildComponent 
                  key={pet.id}
                  id={pet.id}
                  name={pet.name}
                  image={pet.images[pet.curImg]}
                  onAction={this.handleUpdate}
                  buttonText={pet.curImg === 0 ? "Make Happy" : "Make Angry" }
                />
              ))} 
          
        </div>
      </div>
    );
  }
}

export default Kennel;
