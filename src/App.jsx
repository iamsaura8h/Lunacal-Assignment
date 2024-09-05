import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/index.css';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="flex h-screen bg-gray-900">
      <div className="w-1/2"></div> {/* Left half empty as per the design */}
      <div className="w-1/2 flex flex-col p-6 space-y-6">
        <Tabs />
        <Gallery />
      </div>
    </div>
  );
}

export default App;