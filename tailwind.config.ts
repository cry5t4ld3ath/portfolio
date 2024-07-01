import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      screens : {
        'mobile' : {"max" : "1023px"},
        'desktop' : "1024px",
      },


      fontFamily: {
        custom: ["evance"]
      },

    },
  },
  plugins: [
    plugin(
      function ({ addVariant }) {
        addVariant("glow", ".glow-capture .glow-overlay &")
      },
      {
        theme: {
          extend: {
            colors: {
              // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
              glow: "color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)",
            },
          },
        },
      }
    ),
  ],
};
export default config;
