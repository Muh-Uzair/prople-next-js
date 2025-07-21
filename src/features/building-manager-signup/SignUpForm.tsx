import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { usePerformSignup } from "./usePerformSignup";
import LoadingSpinner from "@/components/spinner-02";

// Zod
const formSchema = z
  .object({
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
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // 👈 put error on confirmPassword field
    message: "Passwords do not match.",
  });

type FormValues = z.infer<typeof formSchema>;

const SignUpForm: React.FC = () => {
  // VARS
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { signup, status: statusSignUp } = usePerformSignup();

  // FUNCTIONS
  const onSubmit = async (values: FormValues) => {
    signup(values);
  };

  // JSX
  return (
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

        {/*Confirm Password Field */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Confirm Password <span className="text-red-500">*</span>
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
          {statusSignUp === "pending" && (
            <>
              <LoadingSpinner />{" "}
            </>
          )}
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
