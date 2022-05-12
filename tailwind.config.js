module.exports = {
  content: ['./joker.html'],
  theme: {
    extend: {
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
