import React from 'react';
import hourglassIcon from '../../assets/hourglass.png';
import GreenRectangleContainer from '../../Components/GreenRectangleContainer';

function BobWorkInProgress() {
  return (
    <GreenRectangleContainer>
      <img src={hourglassIcon} alt="Hourglass" className="w-24 h-24 mb-6 animate-spin-slow" />
      <h1 className="text-3xl font-bold text-green-700 mb-2">Work in Progress</h1>
      <p className="text-lg text-green-700 font-semibold text-center px-8">This page is under construction. Please check back soon!</p>
    </GreenRectangleContainer>
  );
}

export default BobWorkInProgress;
