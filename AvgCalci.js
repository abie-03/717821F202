import React, { useState, useEffect } from 'react';
import NumberList from './NumberList';

const AvgCalci = () => {
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(0);

  const fetchNumbers = async (type) => {
    const endpointMap = {
      primes: 'http://20.244.56.144/numbers/primes',
      fibo: 'http://20.244.56.144/numbers/fibo',
      even: 'http://20.244.56.144/numbers/even',
      rand: 'http://20.244.56.144/numbers/rand'
    };

    try {
      const response = await fetch(endpointMap[type]);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setNumbers(data.numbers);
    } catch (error) {
      console.error(`Error fetching ${type} numbers:`, error);
      // Handle error (e.g., display a message to the user)
    }
  };

  useEffect(() => {
    // Fetch initial numbers when component mounts
    fetchNumbers('primes');
  }, []);
  useEffect(() => {
    // Fetch initial numbers when component mounts
    fetchNumbers('even');
  }, []);
  useEffect(() => {
    // Fetch initial numbers when component mounts
    fetchNumbers('rand');
  }, []);
  useEffect(() => {
    // Fetch initial numbers when component mounts
    fetchNumbers('fibo');
  }, []);

  useEffect(() => {
    // Calculate average whenever numbers change
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const avg = sum / numbers.length || 0;
    setAverage(avg.toFixed(2));
  }, [numbers]);

  const handleButtonClick = (type) => {
    fetchNumbers(type);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="card-title">Average Calculator</h2>
        </div>
        <div className="card-body">
          <div className="btn-group" role="group">
            <button className="btn btn-primary" onClick={() => handleButtonClick('primes')}>
              Fetch Prime Numbers
            </button>
            <button className="btn btn-primary" onClick={() => handleButtonClick('fibo')}>
              Fetch Fibonacci Numbers
            </button>
            <button className="btn btn-primary" onClick={() => handleButtonClick('even')}>
              Fetch Even Numbers
            </button>
            <button className="btn btn-primary" onClick={() => handleButtonClick('rand')}>
              Fetch Random Numbers
            </button>
          </div>
          <NumberList numbers={numbers} />
          <div>
            <pre>{JSON.stringify({ numbers, avg: average }, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvgCalci;



