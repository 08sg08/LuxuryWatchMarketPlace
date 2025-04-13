import React, { useState, useEffect } from 'react';
import WatchCard from './WatchCard';
import watches from './data';

function App() {
  const [selectedWatch, setSelectedWatch] = useState(null);
  const [themeColor, setThemeColor] = useState('#ffffff');

  useEffect(() => {
    if (selectedWatch) {
      setThemeColor(selectedWatch.color);
    } else {
      setThemeColor('#ffffff');
    }
  }, [selectedWatch]);

  return (
    <div style={{ backgroundColor: themeColor, minHeight: '100vh', padding: '2rem' }}>
      <h1 className="title">Luxury Watch Price Comparison</h1>
      <div className="watch-grid">
        {watches.map((watch, index) => (
          <WatchCard key={index} watch={watch} onClick={() => setSelectedWatch(watch)} />
        ))}
      </div>
    </div>
  );
}

export default App;