import React from 'react'

const useRandomNumberGenerator = (number) => {
  return Math.floor(Math.random() * number);
}

export default useRandomNumberGenerator;