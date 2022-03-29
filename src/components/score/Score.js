import React from 'react';
// Add import statement below
import { useSelector } from 'react-redux';
import { selectMatchedIds}  from '../board/boardAction.js';


export const Score = () => {
  // Add selected data variable below
  const cardsMatched = useSelector(selectMatchedIds)


  return (
    // implement selected data inside <div>
    <div className="score-container">Matched: {cardsMatched.length}</div>
  );
};