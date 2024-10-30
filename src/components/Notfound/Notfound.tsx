// NotFound.tsx
import React from 'react';

// Define the props interface
interface NotFoundProps {
  errorMessage?: string; // Define the type for the errorMessage prop
}

const Notfound: React.FC<NotFoundProps> = ({ errorMessage }) => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>{errorMessage || "An unexpected error occurred."}</p>
    </div>
  );
};

export default Notfound;
