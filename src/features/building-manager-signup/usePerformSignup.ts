import { useCustomErrorToast } from "@/hooks/useCustomErrorToast";
import { useCustomSuccessToast } from "@/hooks/useCustomSuccessToast";
import { useLandingPageStore } from "@/stores/useLandingPageStore";

import { useMutation } from "@tanstack/react-query";

type FormValues = {
  username: string;
  password: string;
};
interface ISignUpForm {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function usePerformSignup({ setIsOpen }: ISignUpForm) {
  // VARS

  const { showErrorToast } = useCustomErrorToast();
  const { showSuccessToast } = useCustomSuccessToast();
  const setBuildingManagerStatus = useLandingPageStore(
    (state) => state.setBuildingManagerStatus,
  );

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
      showSuccessToast("Sign up success");
      setBuildingManagerStatus("success");
      setIsOpen(false);
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
