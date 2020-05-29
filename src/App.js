import React, { useState, useEffect } from 'react';
import dog from './assets/dog.jpg';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import './App.css';

const CAT_API_URL = 'https://cat-fact.herokuapp.com/facts';
const Bounce = styled.div`
  animation: 4s ${keyframes`${bounce}`} ease-in-out;
`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(CAT_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setCats(jsonResponse.all);
        setLoading(false);
      });
  }, []);

  return (
    <div className='container'>
      <Bounce>
        <h1 className='title'>Dogs are better than cats</h1>
      </Bounce>
      <div className='cats'>
        <img src={dog} alt='girl with dog'></img>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className='errorMessage'>{errorMessage}</div>
        ) : (
          cats.map((cat, id) => (
            <h3 className='text' key={id}>
              {cat.text.replace(/\b[C-c]ats?’?s?\b/, 'dog')}
            </h3>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
