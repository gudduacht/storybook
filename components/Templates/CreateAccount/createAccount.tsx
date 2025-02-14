import { cn } from "@/lib/utils";
import { Button } from "@/components/Primitives/Button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Primitives/Card/card";
import { Input } from "@/components/Primitives/InputField/input";
import { Label } from "@/components/Primitives/Label/label";
interface LoginPageProps {
  className: string;
  props?: object;
  onSubmit: (password: string, conformPassword: string) => void;
}
export const CreateAccount: React.FC<LoginPageProps> = ({
  className,
  onSubmit,
  ...props
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password") as string;
    const conformPassword = formData.get("conformPassword") as string;
    onSubmit(password, conformPassword);
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Log in
              </a>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="grid gap-2">
                <Label htmlFor="password">Enter New Password</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="conformPassword"> Conform Password</Label>

                <Input
                  id="conformPassword"
                  type="password"
                  placeholder="Conform Password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </div>
          </form>
        </CardContent>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary py-6 ">
          <p>
            {" "}
            By clicking &quot;Create account &quot;, you agree to the{" "}
            <a href="#" className="underline underline-offset-4">
              Penfield T&C
            </a>{" "}
            <a href="#" className="underline underline-offset-4">
              and Privacy Policy
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
};
