import { toast } from "sonner";

export function useCustomErrorToast() {
  const showErrorToast = (message = "Sign up failed") => {
    const isDark =
      typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark");

    toast.error(message, {
      style: {
        background: isDark ? "#323b4a" : "#fff",
        color: "red",

        border: "1px solid rgba(255, 0, 0, 0.3)",
      },
    });
  };

  return { showErrorToast };
}
