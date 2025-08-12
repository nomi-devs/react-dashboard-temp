// src/constants/index.ts
export const THEME = {
  colors: {
    primary: "#2563eb", // blue-600
    secondary: "#f97316", // orange-500
  },
  darkModeClass: "dark",
};


export const COLORS = {
  primary: {
    DEFAULT: "#4F46E5", // Indigo-600
    light: "#6366F1",   // Indigo-500
    dark: "#4338CA",    // Indigo-700
  },
  secondary: {
    DEFAULT: "#14B8A6", // Teal-500
    light: "#2DD4BF",   // Teal-400
    dark: "#0D9488",    // Teal-600
  },
  background: {
    light: "#F9FAFB",   // Gray-50
    dark: "#111827",    // Gray-900
  },
};


export const mockUsers = [
  {
    id: "1",
    email: "admin@gmail.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: "2",
    email: "user@gmail.com",
    password: "user123",
    role: "user",
  },
];
