import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const SignUp: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign Up</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create your building manager account</DialogTitle>
          <DialogDescription className="text-muted-foreground pt-1">
            Use a custom username like <code>manager@burj-khalifa</code>. This
            will be your primary login.
          </DialogDescription>
        </DialogHeader>

        <form className="mt-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="userName">
              Username <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              id="userName"
              placeholder="e.g. manager@burj-khalifa"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="accountPassword">
              Password <span className="text-red-500">*</span>
            </Label>
            <Input
              type="password"
              id="accountPassword"
              placeholder="Enter a secure password"
              required
            />
          </div>

          <Separator className="my-[30px]" />

          <div className="space-y-2">
            <Label htmlFor="email">
              Email{" "}
              <span className="font-light text-gray-500">(optional)</span>{" "}
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="e.g. manager@yourdomain.com"
            />
            <p className="text-muted-foreground text-sm">
              Add a valid email to enable email-based login and recovery.
            </p>
          </div>

          <Button type="submit" className="mt-2 w-full">
            Sign Up
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;
