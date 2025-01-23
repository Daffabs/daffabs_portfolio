import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          100: "#3b82f6", // Ganti dengan kode warna yang sesuai untuk primary
        },
        green: {
          500: "#22c55e", // Ganti dengan kode warna yang sesuai untuk green
        },
        greenfont: {
          1: "#00B215", // Ganti dengan kode warna yang sesuai untuk green
        },
        birutua: {
          1: "#000A14"
        },
        birufontA: {
          1: "#00478F"
        },
        birufontB: {
          2: "#0066CC"
        },
        kuninglangsat: {
          1: "#c1fb28"
        },
        abuGelap: {
          1: "#0c0d0b"
        },
        kuningNew: {
          1: "#FFA600",
          2: "#CC8500"
        },
        hijauNew: {
          1: "#3E751F"
        },
        dark: {
          1: "#181C14",
          2: "#3C3D37",
          3: "#697565",
          4: "#ECDFCC",
          5: "#3E751F",
        },
      },
      backgroundImage: {
        'grid': "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(180deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'kotak': '22px 22px', // Ukuran kotak
      },
      boxShadow: {
        'custom': '6px 2px 35px rgb(236, 223, 204)', // Mengganti warna bayangan menjadi #22c55e
      },
      boxShadowAtas: {
        'custom': '6px 2px 35px rgb(166, 225, 12)', // Mengganti warna bayangan menjadi #22c55e
      },
    },
  },
  
  plugins: [],
} satisfies Config;