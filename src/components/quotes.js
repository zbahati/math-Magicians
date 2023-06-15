import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasErro, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?limit=2', {
          method: 'GET',
          headers: { 'X-Api-Key': 'Vc3iSyFJFKVX135wZqUKKA==D5jzMqA0BsjtNfMl' },
        });
        const res = await response.json();
        setQuotes(res);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setHasError, setIsLoading, setQuotes]);

  if (isLoading) return <div>Loading ...</div>;
  if (hasErro) return <div>Something Went Wrong!</div>;

  return (
    <div className="quotes-container">
      <h1> Quotes </h1>
      <ul>
        {
          quotes.map((quote) => (
            <li key={quote.author}>{quote.quote}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default Quotes;
