import React, { useState } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume'

function App() {
  const [data, setData] = useState(null);
  
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  // Call our fetch function below once the component mounts
  callBackendAPI()
  .then(res => {
    setData( res.express )
  })
  .catch(err => console.log(err));

  const [currentPage, handlePageChange] = useState('About');
  const renderPage = () => {
    switch(currentPage) {
      case 'Portfolio':
        return <Portfolio></Portfolio>;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="overflow-hidden">
      <Header handlePageChange={handlePageChange}></Header>
      <main>
        <div>{data}</div>
       {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
