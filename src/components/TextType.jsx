import React, { useState, useEffect } from 'react';

export default function TextType({ 
  text = ["Typing effect"], 
  typingSpeed = 75, 
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|"
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const currentFullText = text[currentTextIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        // Deleting backward
        if (currentText.length > 0) {
          setCurrentText(currentFullText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % text.length);
          return;
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, text, typingSpeed, pauseDuration]);

  // Cursor blink effect
  useEffect(() => {
    if (!showCursor) return;
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <span className="inline-block">
      {currentText}
      {showCursor && (
        <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}

