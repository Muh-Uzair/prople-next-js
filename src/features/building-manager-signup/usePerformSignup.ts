import { useCustomErrorToast } from "@/hooks/useCustomErrorToast";
import { useCustomSuccessToast } from "@/hooks/useCustomSuccessToast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type FormValues = {
  username: string;
  password: string;
};

interface IUsePerformSignup {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function usePerformSignup({ setIsOpen }: IUsePerformSignup) {
  // VARS

  const { showErrorToast } = useCustomErrorToast();
  const { showSuccessToast } = useCustomSuccessToast();
  const router = useRouter();

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
      setIsOpen(false);
      router.push("/building-manager/dashboard/home");
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
