module.exports = {
  content: [
    "./src/*.js",
    "./src/Pages/*.js",
    "./src/Components/*.js",

  ],
  theme: {
    extend: {
      fontFamily:{
        body: ['Open sans', 'sans-serif']
      },
      animation: { 
        blob: "blob 2s infinite"
      },
      keyframes: {
        blob : {
          "0%": {
            transform: "tranlate(0px, 0px) scale(1)"
          },
          "33%":{
            transform: "tranlate(30px, -80px) scale(1.5)"
          },
          "66%": {
            transform: "tranlate(-80px, 20px) scale(0.5)"
          },
          "100%":{
            transform: "tranlate(0px, 0px) scale(15px)"
          }
        }
      }
    },
  },
  plugins: [],
}


