import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { NavLink } from "react-router-dom";

export const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Submitted:", { email, password, rememberMe });

    // TODO: call your API or handle login logic here
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center">Login to your account</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-3">
            <Checkbox
              id="rememberMe"
              checked={rememberMe}
              onCheckedChange={() => setRememberMe(!rememberMe)}
            />
            <Label htmlFor="rememberMe">Remember me</Label>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <span className="text-sm">
          Don&apos;t have an account?{" "}
          <NavLink to="/signup">
            <Button variant="link" className="cursor-pointer px-1">
              Create one
            </Button>
          </NavLink>
        </span>
      </CardFooter>
    </Card>
  );
};
