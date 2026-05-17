import React from 'react';

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img 
      src="https://i.ibb.co/39mWLkVC/Instagram-post-11.png" 
      alt="Логотип" 
      className={className} 
      referrerPolicy="no-referrer"
    />
  );
}
