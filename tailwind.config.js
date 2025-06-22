module.exports = {
    theme: {
        extend: {
          animation: {
            wiggle: 'wiggle 1.2s ease-in-out infinite',
          },
          keyframes: {
            wiggle: {
              '0%, 100%': { transform: 'rotate(15deg)' },
              '50%': { transform: 'rotate(-15deg)' },
            },
          },
        },
      }      
  }