import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCustomErrorToast } from "./useCustomErrorToast";
import { useCustomSuccessToast } from "./useCustomSuccessToast";

export const useFetchBuildingManager = () => {
  // VARS
  const queryClient = useQueryClient();
  const { showErrorToast } = useCustomErrorToast();
  const { showSuccessToast } = useCustomSuccessToast();

  // FUNCTION
  const {
    mutate: mutateCurrBuildingManager,
    data: dataCurrBuildingManager,
    status: statusCurrBuildingManager,
  } = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/current`,
        {
          method: "GET",
          credentials: "include",
        },
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Unable to get current building manager");
      }

      return res.json();
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["currBuildingManager"], data);
      showSuccessToast("Sign up success");
    },
    onError: () => {
      showErrorToast("Sign up failed");
    },
  });

  return {
    mutateCurrBuildingManager,
    dataCurrBuildingManager,
    statusCurrBuildingManager,
  };
};
