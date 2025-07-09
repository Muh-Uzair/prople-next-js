"use client";

import { useCustomErrorToast } from "@/hooks/useCustomErrorToast";
import { useFetchBuildingManager } from "@/hooks/useFetchBuildingManager";
import { useMutation } from "@tanstack/react-query";

type FormValues = {
  username: string;
  password: string;
};

export function usePerformSignup() {
  // VARS

  const { mutateCurrBuildingManager } = useFetchBuildingManager({
    performSignUp: true,
  });
  const { showErrorToast } = useCustomErrorToast();

  // FUNCTION
  const mutation = useMutation({
    mutationFn: async (values: FormValues) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        },
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Signup failed");
      }

      return res.json(); // Or return res if you don't need to parse it
    },
    onSuccess: () => {
      mutateCurrBuildingManager();
    },
    onError: () => {
      showErrorToast("Sign up failed");
    },
  });

  return {
    signup: mutation.mutate,
    status: mutation.status,
  };
}
