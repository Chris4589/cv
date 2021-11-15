import { useEffect, useState } from 'react';
import './App.css';
import { Index } from './pages/Index';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="preloder" >
        <div className="loader"> </div>
      </div>
    );
  }

  return (
    <Index />
  );
}

export default App;
