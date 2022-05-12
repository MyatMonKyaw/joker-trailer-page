module.exports = {
  content: ['./src/joker.html'],
  theme: {
    extend: {
      dropShadow: {
        'lg': '0 10px 8px rgba(22, 78, 99, 0.5)',
      },
      animation: {
        'roll': 'roll 25s linear infinite',
      },
      keyframes: {
        roll: {
          '0%, 100%': {
            'background-position': 'top',
          },
          '45%, 55%': {
            'background-position': 'bottom',
          },
        },
      },
      button: ['hover','active'],
    },
  },
  plugins: [],
}
