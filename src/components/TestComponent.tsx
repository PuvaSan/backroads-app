// src/components/TestComponent.tsx
import React from 'react';

type Props = {
  message: string;
};

const TestComponent: React.FC<Props> = ({ message }) => {
  return <div> {message} </div>
};

export default TestComponent;
