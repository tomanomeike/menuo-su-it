import React, { useState, useEffect } from 'react';
// import '../App.css';

const CAT_API_URL = 'https://cat-fact.herokuapp.com/facts';

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
    <div className='App'>
      <h1 className='App-intro'>Dogs are better than cats</h1>
      <div className='cats'>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className='errorMessage'>{errorMessage}</div>
        ) : (
          cats.map((cat, id) => (
            <h5 key={id}>{cat.text.replace(/cat/ig, 'dog')}</h5>
           
          ))
        )}
      </div>
    </div>
  );
};

export default App;
