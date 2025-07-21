import OrSeparator from "@/components/OrSeparator";

import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useSigninBuildingManager } from "./useSigninBuildingManager";

interface ISigninBuildingManager {
  setIdentity: Dispatch<SetStateAction<"buildingManager" | "tenant" | "idle">>;
}

// Zod
const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .regex(/^manager@[\w\-]+$/, {
      message:
        "Username must start with 'manager@' and be followed by a valid building name (letters, numbers, hyphens).",
    }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
      message:
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

// CMP CMP CMP
const SigninBuildingManager: React.FC<ISigninBuildingManager> = ({
  setIdentity,
}) => {
  // VARS
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { mutateCurrBuildingManager } = useSigninBuildingManager();

  // FUNCTIONS
  const onSubmit = async (values: FormValues) => {
    mutateCurrBuildingManager(values);
  };

  // JSX
  return (
    <div className="space-y-4">
      <DialogHeader>
        <DialogTitle>Building Manager Sign In</DialogTitle>
        <DialogDescription>
          Enter your credentials to continue.
        </DialogDescription>
      </DialogHeader>
      <div className="mt-[10px] w-full">
        <Button className="w-full">Sign up with Google</Button>
      </div>

      <OrSeparator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Username Field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Username <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. manager@burj-khalifa"
                    autoComplete="username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Password <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4 w-full">
            Sign In
          </Button>
        </form>
      </Form>
      <Button variant="ghost" onClick={() => setIdentity("idle")}>
        Back
      </Button>
    </div>
  );
};

export default SigninBuildingManager;
