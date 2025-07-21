import { Loader2Icon } from "lucide-react";

interface ILoadingSpinner {
  spinnerPrimaryColor?: boolean;
}

export default function LoadingSpinner({
  spinnerPrimaryColor = false,
}: ILoadingSpinner) {
  if (spinnerPrimaryColor) {
    return <Loader2Icon className="text-primary animate-spin" />;
  }
  return <Loader2Icon className="animate-spin text-white" />;
}
