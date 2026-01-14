
import { createTheme } from "@mui/material/styles";

/* ---------------- COMMON SETTINGS ---------------- */
const commonSettings = {
  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontSize: "2rem", fontWeight: 600 },
    h2: { fontSize: "1.75rem", fontWeight: 700 },
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
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },

   MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#000", // default border (black)
        },

        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#ccc", // hover border
        },

        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#7E22CE", // focus border (purple)
          borderWidth: "2px",
        },
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      size: "small",
    },
  },

  MuiSelect: {
    defaultProps: {
      variant: "outlined",
      size: "small",
    },
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#000",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#ccc",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#7E22CE",
          borderWidth: "2px",
        },
      },
    },
  },

  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: "#000",
        "&.Mui-checked": {
          color: "#7E22CE",
        },
      },
    },
  },

  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: "#555",
        "&.Mui-focused": {
          color: "#7E22CE",
        },
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
  },
};

/* ---------------- LIGHT THEME ---------------- */
export const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: "light",
     primary: {
      main: "#fff",
      dark: "#7E22CE",
    },

    secondary: {
      main: "#F3E8FF",
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

    action: {
      hover: "rgba(0,0,0,0.04)",
      selected: "rgba(0,0,0,0.08)",
    },
  },
});

/* ---------------- DARK THEME ---------------- */
export const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: "dark",

    primary: {
      main: "#000",
      dark: "#000",
    },

    secondary: {
      main: "#9333EA", // ✅ REQUIRED
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

    action: {
      hover: "rgba(255,255,255,0.08)",
      selected: "rgba(255,255,255,0.12)",
    },
  },

  components: {
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
