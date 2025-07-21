import { useCustomErrorToast } from "@/hooks/useCustomErrorToast";
import { useCustomSuccessToast } from "@/hooks/useCustomSuccessToast";
import { useBuildingManagerStore } from "@/stores/buildingManagerStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type FormValues = {
  username: string;
  password: string;
};

export const useSigninBuildingManager = () => {
  //VARS
  const { showErrorToast } = useCustomErrorToast();
  const { showSuccessToast } = useCustomSuccessToast();
  const queryClient = useQueryClient();
  const { setIsAuthBuildingManager, setDataBuildingManager } =
    useBuildingManagerStore();

  // FUNCTION
  const {
    mutate: mutateCurrBuildingManager,
    data: dataCurrBuildingManager,
    status: statusCurrBuildingManager,
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

      return res.json();
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["currBuildingManager"], data);
      setIsAuthBuildingManager(true);
      setDataBuildingManager(data?.data?.buildingManager);
      showSuccessToast("Sign in successful");
    },
    onError: () => {
      showErrorToast("Sign in failed");
    },
  });

  return {
    mutateCurrBuildingManager,
    dataCurrBuildingManager,
    statusCurrBuildingManager,
  };
};
