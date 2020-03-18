import React from "react";
import { connect } from "react-redux";

const CardList = props => {
    console.log('list props', props)
  return (
    <div className="cards-container">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.cards.map(card => <div className='card' key={card.id}>
                                    <p>{card.name}</p>   
                                    <img className='card-image' src={card.imageUrl} alt={`for ${card.name}`}/> 
                                </div>)
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.cards,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {}
)(CardList);
