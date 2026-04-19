import React, { useState, useEffect } from 'react';
import Cover from './components/Cover';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mempelai from './components/Mempelai';
import Acara from './components/Acara';
import Lokasi from './components/Lokasi';
import Cerita from './components/Cerita';
import Galeri from './components/Galeri';
import Video from './components/Video';
import Kado from './components/Kado';
import Ucapan from './components/Ucapan';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');

  useEffect(() => {
    // Parse URL Parameters
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setGuestName(decodeURIComponent(to));
    }

    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpened]);

  return (
    <div className="bg-sahkita-bg min-h-screen font-sans text-sahkita-dark">
      <Cover isOpened={isOpened} guestName={guestName} onOpen={() => setIsOpened(true)} />
      
      {isOpened && (
        <>
          <Navbar />
          <AudioPlayer isOpened={isOpened} />
          
          <main className="pb-20 md:pb-24">
            <Hero />
            <Mempelai />
            <Acara />
            <Lokasi />
            <Cerita />
            <Galeri />
            <Video />
            <Kado />
            <Ucapan />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
