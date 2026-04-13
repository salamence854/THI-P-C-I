/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./components/Hero";
import { Invitation } from "./components/Invitation";
import { Calendar } from "./components/Calendar";
import { Timeline } from "./components/Timeline";
import { DressCode } from "./components/DressCode";
import { Gallery } from "./components/Gallery";
import { RSVP } from "./components/RSVP";
import { Countdown } from "./components/Countdown";
import { MusicPlayer } from "./components/MusicPlayer";
import { EnvelopeCover } from "./components/EnvelopeCover";
import { useState, useEffect } from "react";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpened]);

  return (
    <main className="min-h-screen bg-wedding-bg font-sans text-wedding-text overflow-x-hidden selection:bg-wedding-primary selection:text-white">
      {!isOpened && <EnvelopeCover onOpen={() => setIsOpened(true)} />}
      
      <Hero />
      <Invitation />
      <Calendar />
      <Timeline />
      <DressCode />
      <Gallery />
      <RSVP />
      <Countdown />
      
      <footer className="py-12 text-center bg-wedding-bg border-t border-wedding-secondary/30">
        <p className="font-script text-3xl text-wedding-primary mb-4">Phạm Ngọc Minh & Đỗ Thu Hương</p>
        <p className="text-sm text-wedding-text/50 uppercase tracking-widest">Wedding Invitation</p>
      </footer>

      <MusicPlayer autoPlayTrigger={isOpened} />
    </main>
  );
}

