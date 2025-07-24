import { useCustomErrorToast } from "@/hooks/useCustomErrorToast";
import { useCustomSuccessToast } from "@/hooks/useCustomSuccessToast";
import { useLandingPageStore } from "@/stores/useLandingPageStore";
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
  const setBuildingManagerStatus = useLandingPageStore(
    (state) => state.setBuildingManagerStatus,
  );

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
      setBuildingManagerStatus("success");
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
