import { toast } from "sonner";

export function useCustomSuccessToast() {
  const showSuccessToast = (message = "Sign up successful") => {
    const isDark =
      typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark");

    toast.success(message, {
      style: {
        background: isDark ? "#323b4a" : "#fff",
        color: "#22c55e", // Tailwind's bright green-500
        border: "1px solid rgba(34, 197, 94, 0.5)", // brighter green border
      },
    });
  };

  return { showSuccessToast };
}
