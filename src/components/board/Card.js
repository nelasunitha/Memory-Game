import React from 'react';

import { useSelector } from 'react-redux';
import { selectVisibleIds,flipCard, selectMatchedIds,resetCards  } from  './boardAction.js'
import { useDispatch } from 'react-redux';



let cardLogo = "https://www.memozor.com/jeux/jquery/frozen_2/image10.jpg";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIds = useSelector(selectVisibleIds);
   const matchedIds = useSelector(selectMatchedIds);
  const dispatch = useDispatch();



  // flip card action
  const flipHandler = (id) => {
    dispatch(flipCard(id))

  };
   const tryAgainHandler = () => {
    dispatch(resetCards())

  };
  let cardStyle = 'resting'
  let click = () => flipHandler(id);

  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  if (visibleIds.includes(id) || matchedIds.includes(id)){
    cardText = contents;
    click = tryAgainHandler;
  }


  if (matchedIds.includes(id)) {
    cardStyle = 'matched';
  }

  if (visibleIds.length === 2) {
    click = tryAgainHandler;
  }

  if(visibleIds.length >= 2 && !matchedIds.includes(id)) {
    cardStyle = 'no-match'
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
