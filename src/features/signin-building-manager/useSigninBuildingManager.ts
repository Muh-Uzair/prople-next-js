import { useCustomErrorToast } from "@/hooks/useCustomErrorToast";
import { useCustomSuccessToast } from "@/hooks/useCustomSuccessToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type FormValues = {
  username: string;
  password: string;
};

interface IUseSigninBuildingManager {
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export const useSigninBuildingManager = ({
  setIsDialogOpen,
}: IUseSigninBuildingManager) => {
  //VARS
  const { showErrorToast } = useCustomErrorToast();
  const { showSuccessToast } = useCustomSuccessToast();
  const queryClient = useQueryClient();
  const router = useRouter();

  // FUNCTION
  const {
    mutate: mutateSigninBuildingManager,
    data: dataSigninBuildingManager,
    status: statusSigninBuildingManager,
  } = useMutation({
    mutationFn: async (values: FormValues) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/login`,
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

      const json = await res.json();
      return json.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["buildingManager", "byJwt"], data);
      showSuccessToast("Sign in successful");
      setIsDialogOpen(false);
      router.push("/building-manager/dashboard/home");
    },
    onError: () => {
      showErrorToast("Sign in failed");
    },
  });

  return {
    mutateSigninBuildingManager,
    dataSigninBuildingManager,
    statusSigninBuildingManager,
  };
};
