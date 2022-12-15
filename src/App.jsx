import React from 'react';
import Navbar from './components/Navbar';
import BlogPost from './components/BlogPost';
import journalData from './journalData';
import './App.css';

function App() {
  const posts = journalData.map(item => {
    return <BlogPost item={item} key={item.key} />;
  });

  return (
    <>
      <Navbar />
      <section className="journal-list">{posts}</section>
    </>
  );
}

export default App;
