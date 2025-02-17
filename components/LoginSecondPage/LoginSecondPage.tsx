import { cn } from "@/lib/utils"
import { Button } from "@/components/Primitives/Button/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/Primitives/Card/card"
import { Input } from "@/components/Primitives/InputField/input"
import { Label } from "@/components/Primitives/Label/label"

export interface LoginFormProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onSubmit"> {
    onSubmit?: (password: string) => void;
    loading?: boolean;
}

export function LoginScreen({
    className,
    onSubmit,
    loading = false,
    ...props
}: LoginFormProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const password = formData.get('password') as string;
        onSubmit?.(password);
    };

    return (
        <div className={cn("flex flex-col gap-6 w-full max-w-[500px]", className)} {...props}>
            <Card className="w-full">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Login in to your account</CardTitle>
                    {/* <CardDescription>
                        Don't have an account?{" "}
                        <a href="#" className="underline underline-offset-4">Sign up</a>
                    </CardDescription> */}
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor=" password"> Enter Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <Button type="submit" disabled={loading} variant='info' >
                                    {loading ? "Logging in..." : "Login"}
                                </Button>
                                <a href="#" className=" hover:underline whitespace-nowrap">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sm">
                                <p className="text-muted-foreground">Don&apos;t have an account?{" "}</p>
                                <a href="#" className="text-blue-600 hover:underline">Sign up</a>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sm">
                                <p className="text-muted-foreground">Having trouble logging in?</p>
                                <a href="#" className="text-blue-600 hover:underline">Get help here</a>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}