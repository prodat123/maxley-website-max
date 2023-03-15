module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'maxley-orange': '#f86c04',
        'darker-orange': '#f86c0477',
      },
      backgroundImages:{
        'maxley-gym': 'url(../images/Gym.jpg)',
        'maxley-billiard': 'url(../images/Billiard.jpg)',
        'maxley-suite-room-1': 'url(../images/DSC_5809-HDR.jpeg)',
        'maxley-study-room': 'url(../images/Study Room.jpg)',
        'maxley-single-bed': 'url(../images/Single Bed.jpeg)',
        'maxley-double-bed': 'url(../images/IMG_4634.JPG)',
        'maxley-suite-room-2': 'url(../images/DSC_5818-HDR.jpeg)',
      },
      zIndex:{
        '3':'3',
      }
       
    },
  },
  plugins: [require("autoprefixer"), require("daisyui")],
}