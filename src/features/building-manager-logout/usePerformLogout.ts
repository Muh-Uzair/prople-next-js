import { useCustomErrorToast } from "@/hooks/useCustomErrorToast";
import { useCustomSuccessToast } from "@/hooks/useCustomSuccessToast";
import { useBuildingManagerStore } from "@/stores/buildingManagerStore";
import { useMutation } from "@tanstack/react-query";

interface IUsePerformLogout {
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const usePerformLogout = ({ setOpenDialog }: IUsePerformLogout) => {
  const { showErrorToast } = useCustomErrorToast();
  const { showSuccessToast } = useCustomSuccessToast();
  const { resetBuildingManager } = useBuildingManagerStore();

  const { mutate: mutateLogout, status: statusLogout } = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/logout`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Signup failed");
      }

      return res.json();
    },
    onSuccess: () => {
      resetBuildingManager();
      setOpenDialog(false);
      showSuccessToast("Sign out success");
    },
    onError: () => {
      showErrorToast("Unable to sign out");
    },
  });

  return { mutateLogout, statusLogout };
};
