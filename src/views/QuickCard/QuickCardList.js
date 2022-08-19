import React from 'react'
import Flashcard from './QuickCard';

function QuickCardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
  )
};

export default QuickCardList;
