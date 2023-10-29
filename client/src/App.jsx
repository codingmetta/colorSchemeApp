import './App.css'
import { useState, useEffect } from 'react';
import HeaderTools from './components/HeaderTools.jsx'
import MainScheme from './components/MainScheme.jsx'
import FooterHex from './components/FooterHex.jsx'

function App() {

  const [mode, setMode] = useState('monochrome');
  const [scheme, setScheme] = useState({
    first: '#F55A5A',
    second: '#FFFFFF',
    third: '#FFFFFF',
    fourth: '#FFFFFF',
    fifth: '#FFFFFF'
  });

  useEffect(() => {
    let seed = scheme.first.substring(1);
    let fetchString = `https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}&count=4`;

    fetch(fetchString)
      .then((res) => res.json())
      .then((data) =>
        setScheme(prevScheme => {
          return {
            ...prevScheme,
            second: data.colors[0].hex.value,
            third: data.colors[1].hex.value,
            fourth: data.colors[2].hex.value,
            fifth: data.colors[3].hex.value,
          }

        }));
  }, [mode, scheme])

  function handleChange(value) {
    setScheme({
      ...scheme,
      first: value.toUpperCase()
    });
  }
  
  function handleMode(mode) {
    let res;
    switch (mode) {
      case "0":
        res = "monochrome";
        break;
      case "1":
        res = "monochrome-dark";
        break;
      case "2":
        res = "monochrome-light";
        break;
      case "3":
        res = "analogic";
        break;
      case "4":
        res = "complement";
        break;
      case "5":
        res = "analogic-complement";
        break;
      case "6":
        res = "triad";
        break;
      default:
        res = "";
    }
    setMode(res)
  }

  return (
    <div className="app">
      <HeaderTools 
        colorScheme={scheme} 
        handleChange={handleChange} 
        currentMode={mode} 
        handleMode={handleMode}
      />
      <MainScheme colorScheme={scheme} />
      <FooterHex hexScheme={scheme} />
    </div>
  )
}

export default App
