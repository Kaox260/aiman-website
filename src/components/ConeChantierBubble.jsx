import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import safetyCone from '../assets/emojis.com safety-cone.png';

function ConeChantierBubble() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/travaux');
  };

  // Style CSS fourni pour le bouton
  const buttonStyle = {
    backgroundColor: '#ffffff',
    whiteSpace: 'nowrap',
    border: '1px solid rgb(209, 213, 219)',
    borderRadius: '0.5rem',
    color: '#111827',
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: '1.25rem',
    padding: '0.75rem 1rem',
    textAlign: 'center',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    cursor: 'pointer',
    userSelect: 'none',
    touchAction: 'manipulation',
    outline: 'none',
    marginTop: '0.25rem',
    transition: 'background 0.2s',
  };

  return (
    <div
      className="absolute top-4 right-8 z-50 select-none cursor-pointer"
      tabIndex={0}
      aria-label="Ce site est en chantier"
      style={{ display: 'inline-block', position: 'absolute' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
    >
      <img
        src={safetyCone}
        alt="Cône de chantier"
        onClick={handleClick}
        style={{
          height: '2.5rem',
          width: '2.5rem',
          objectFit: 'contain',
          display: 'inline-block',
          transform: hovered ? 'scale(1.35)' : 'scale(1)',
          transition: 'transform .2s cubic-bezier(.4,2,.6,1)',
          filter: hovered ? 'drop-shadow(0 4px 16px #fbbf24aa)' : 'none',
          borderRadius: '0.5rem',
        }}
      />
      {hovered && (
        <div
          className="card"
          style={{
            position: 'absolute',
            right: 0,
            top: '110%',
            zIndex: 1111,
            width: 240,
            height: 170,
            borderRadius: 14,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
            background: 'transparent',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className="bg"
            style={{
              position: 'absolute',
              top: 5,
              left: 5,
              width: 230,
              height: 160,
              zIndex: 2,
              background: 'rgba(255,255,255,.95)',
              backdropFilter: 'blur(24px)',
              borderRadius: 10,
              overflow: 'hidden',
              outline: '2px solid white',
            }}
          ></div>
          <div
            className="blob"
            style={{
              position: 'absolute',
              zIndex: 1,
              top: '50%',
              left: '50%',
              width: 90,
              height: 90,
              borderRadius: '50%',
              backgroundColor: '#ff0000',
              opacity: 1,
              filter: 'blur(12px)',
              animation: 'blob-bounce 5s infinite ease',
              transform: 'translate(-100%, -100%)',
            }}
          ></div>
          <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', width: '100%' }}>
            <span className="text-lg font-bold text-orange-600 mb-1" style={{ display: 'block', marginTop: 16 }}>Ce site est en chantier</span>
            <span className="text-orange-400 text-sm font-light mb-2 text-center" style={{ display: 'block', marginBottom: 8 }}>Certaines parties sont en cours d'évolution ou d'amélioration.</span>
            <button
              onClick={handleClick}
              style={buttonStyle}
              tabIndex={0}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#ffffff'}
              onFocus={e => e.currentTarget.style.outline = '2px solid rgba(0,0,0,0.1)'}
              onBlur={e => e.currentTarget.style.outline = 'none'}
            >
              Qu'est-ce que ça veut dire ?
            </button>
          </div>
          {/* Animation keyframes pour le blob */}
          <style>{`
            @keyframes blob-bounce {
              0% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
              25% { transform: translate(-100%, -100%) translate3d(100%, 0, 0); }
              50% { transform: translate(-100%, -100%) translate3d(100%, 100%, 0); }
              75% { transform: translate(-100%, -100%) translate3d(0, 100%, 0); }
              100% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}

export default ConeChantierBubble; 