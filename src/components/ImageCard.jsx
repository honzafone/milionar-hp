import React, { useState, useEffect } from 'react';

const ImageCard = ({ src, alt, className, containerClassName }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;

      // Získáme velikost okna a polohu kurzoru vůči středu obrazovky
      const x = (mouseX / window.innerWidth - 0.5) * 30; // Nastavení intenzity rotace
      const y = (mouseY / window.innerHeight - 0.5) * 30; // Nastavení intenzity rotace

      setRotation({
        x: y, // Rotace podle Y
        y: x, // Rotace podle X
      });
    };

    // Přidání listeneru pro pohyb kurzoru po celém dokumentu
    window.addEventListener('mousemove', handleMouseMove);

    // Úklid po odpojení komponenty (odstranění event listeneru)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`w-96 h-96 shadow-2xl shadow-black ${containerClassName}`}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full rounded-2xl shadow-[inset_0_40px_60px_rgba(0,0,0,0.2)] ${className}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
};

export default ImageCard;
