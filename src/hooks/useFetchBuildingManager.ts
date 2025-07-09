import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCustomErrorToast } from "./useCustomErrorToast";
import { useCustomSuccessToast } from "./useCustomSuccessToast";
import { useBuildingManagerStore } from "@/stores/buildingManagerStore";

interface IUseFetchBuildingManager {
  performSignUp?: boolean | undefined;
}

export const useFetchBuildingManager = ({
  performSignUp,
}: IUseFetchBuildingManager) => {
  // VARS
  const queryClient = useQueryClient();
  const { showErrorToast } = useCustomErrorToast();
  const { showSuccessToast } = useCustomSuccessToast();
  const { setIsAuthBuildingManager, setDataBuildingManager } =
    useBuildingManagerStore();

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
      setIsAuthBuildingManager(true);
      setDataBuildingManager(data?.data?.buildingManager);
      if (performSignUp) {
        showSuccessToast("Sign up success");
      }
    },
    onError: () => {
      if (performSignUp) {
        showErrorToast("Sign up failed");
      }
    },
  });

  return {
    mutateCurrBuildingManager,
    dataCurrBuildingManager,
    statusCurrBuildingManager,
  };
};
