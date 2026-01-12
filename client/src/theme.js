
import { createTheme } from "@mui/material/styles";


const commonSettings = {
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontSize: "2rem", fontWeight: 600 },
    h2: { fontSize: "1.75rem", fontWeight: 600 },
    h3: { fontSize: "1.5rem", fontWeight: 600 },
    h4: { fontSize: "1.25rem", fontWeight: 600 },
    h5: { fontSize: "1.1rem", fontWeight: 600 },
    body1: { fontSize: "0.95rem" },
    body2: { fontSize: "0.85rem" },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
};

//*  LIGHT THEME 
export const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: "light",

    primary: {
      main: "#2563EB", // Blue (Admin professional)
      light: "#3B82F6",
      dark: "#1E40AF",
    },

    secondary: {
      main: "#9333EA", // Violet
    },

    success: {
      main: "#16A34A",
    },

    warning: {
      main: "#F59E0B",
    },

    error: {
      main: "#DC2626",
    },

    background: {
      default: "#F4F6F8",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#111827",
      secondary: "#6B7280",
    },

    divider: "#E5E7EB",
  },
});

//* DARK THEME 
export const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: "dark",

    primary: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#1D4ED8",
    },

    secondary: {
      main: "#A855F7",
    },

    success: {
      main: "#22C55E",
    },

    warning: {
      main: "#FBBF24",
    },

    error: {
      main: "#EF4444",
    },

    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },

    text: {
      primary: "#F9FAFB",
      secondary: "#9CA3AF",
    },

    divider: "#334155",
  },

  components: {
    ...commonSettings.components,

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E293B",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
        },
      },
    },
  },
});

