module.exports = {
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "assets/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        azur: azur_colors(),
        primary: azur_colors(),
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};


// Azur (blueish) colors for Etheria Magazine. See https://palettte.app for
// further color customizations. 600 variant corresponds to the logo.
function azur_colors() {

  let colorsJSON = ` 
    [
      {
        "paletteName": "azur",
        "swatches": [
          {
            "name": "50",
            "color": "f0fbff"
          },
          {
            "name": "100",
            "color": "e0f6fe"
          },
          {
            "name": "200",
            "color": "baedfd"
          },
          {
            "name": "300",
            "color": "7ddafc"
          },
          {
            "name": "400",
            "color": "38c8f8"
          },
          {
            "name": "500",
            "color": "0eb6e9"
          },
          {
            "name": "600",
            "color": "009ed0"
          },
          {
            "name": "700",
            "color": "0377a1"
          },
          {
            "name": "800",
            "color": "076185"
          },
          {
            "name": "900",
            "color": "0c516e"
          },
          {
            "name": "950",
            "color": "083449"
          }
        ]
      }
    ]
`;

  // transform to tailwind format
  return JSON.parse(colorsJSON)
    .at(0)
    .swatches.reduce(
      (acc, item) => ({ ...acc, [item.name]: `#${item.color}` }),
      {}
    );

}
