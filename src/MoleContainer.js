import React, { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

const MoleContainer = () => {
  const [displayMole, setDisplayMole] = useState(false);
  const [score, setScore] = useState(0);

  const handleBopMole = () => {
    setScore(score + 1);
    setDisplayMole(false);
  };

  // Determine which component to render based on displayMole state
  const moleComponent = displayMole ? <Mole handleBopMole={handleBopMole} /> : <EmptySlot />;

  return (
    <div>
      <h2>Score: {score}</h2>
      {moleComponent}
    </div>
  );
};

export default MoleContainer;
