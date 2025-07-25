import { useCustomErrorToast } from "@/hooks/useCustomErrorToast";
import { useCustomSuccessToast } from "@/hooks/useCustomSuccessToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

interface IUsePerformLogout {
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const usePerformSignout = ({ setOpenDialog }: IUsePerformLogout) => {
  const queryClient = useQueryClient();
  const { showErrorToast } = useCustomErrorToast();
  const { showSuccessToast } = useCustomSuccessToast();

  const { mutate: mutateSignout, status: statusSignout } = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/signout`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Logout failed");
      }

      return res.json();
    },
    onSuccess: () => {
      setOpenDialog(false);
      showSuccessToast("Sign out success");
      signOut({ redirect: false });
      queryClient.removeQueries({
        queryKey: ["buildingManager", "byJwt"],
      });
      queryClient.removeQueries({
        queryKey: ["buildingManager", "byEmail"],
        exact: false,
      });
    },
    onError: () => {
      showErrorToast("Unable to sign out");
    },
  });

  return { mutateSignout, statusSignout };
};
