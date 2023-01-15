import React from 'react';

class Pokemon extends React.Component {
    render() {
      return (
        <div className={`PokemonContainer 
        ${this.props.correct === true ? 'true' :
          this.props.correct=== false ? 'false' : ''}`}>        
          {this.props.data && (
            <img src={this.props.data.sprites.front_default} alt='A Pokemon is shown'/>
          )}
        </div>
      );
    }
  }
  
  export default Pokemon;
  