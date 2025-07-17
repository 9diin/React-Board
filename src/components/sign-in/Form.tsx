import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Eye, EyeOff } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/auth";

const formSchema = z.object({
    email: z.email({
        message: "올바른 형식의 이메일 주소를 입력해주세요.",
    }),
    password: z.string().min(8, {
        message: "비밀번호는 최소 8자 이상이어야 합니다.",
    }),
});

function SignInForm() {
    const navigate = useNavigate();
    // Zustand 스토어에서 상태와 액션을 가져옵니다.
    // const user = useAuthStore((state) => state.user);
    // const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const setUser = useAuthStore((state) => state.setUser);
    // const clearUser = useAuthStore((state) => state.clearUser);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleToggle = () => setShowPassword((prev) => !prev);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: values.email,
            password: values.password,
        });

        if (error) {
            toast.error("회원정보가 일치하지 않습니다.");
        } else if (!error && data.user && data.session) {
            toast.success("로그인을 성공하였습니다.");
            navigate("/"); // 메인 페이지로 리다이렉션
            console.log(data);

            // 실제 애플리케이션에서는 API호출을 통해 사용자 정보를 받아옵니다.
            const loggedInUser = { id: data.user.id, email: data.user.email ?? "" };
            setUser(loggedInUser);

            // Zustand 측으로 Supabase 쪽에서 전달받은 User 정보를 Store에 저장한다.
        }
    };

    const signInWithKakao = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "kakao",
            options: {
                redirectTo: `https://epqivibtzsohrzojvoqw.supabase.co/auth/v1/callback`,
            },
        });
        console.log(error);

        console.log(data);
    };

    return (
        <Card className="w-full max-w-100 border-0 sm:border bg-transparent sm:bg-card">
            <CardHeader className="px-0 sm:px-6">
                <CardTitle className="text-lg">로그인</CardTitle>
                <CardDescription>로그인을 위한 정보를 입력해주세요.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 px-0 sm:px-6">
                {/* 소셜 로그인 */}
                <div className="grid grid-cols-1 gap-3">
                    <Button type="button" className="bg-[#FEE500] hover:bg-[#FEE500] font-medium" onClick={signInWithKakao}>
                        <img src={"/assets/icons/kakao.svg"} alt="img" width={18} height={18} className="mr-1" />
                        카카오 로그인
                    </Button>
                    <Button type="button" variant="outline">
                        <img src={"/assets/icons/google.svg"} alt="img" width={18} height={18} className="mr-1" />
                        구글 로그인
                    </Button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="px-2 text-muted-foreground bg-black sm:bg-card">Or continue with</span>
                    </div>
                </div>
                {/* 로그인 폼 */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>이메일</FormLabel>
                                    <FormControl>
                                        <Input placeholder="이메일을 입력하세요." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <div className="w-full flex items-center justify-between">
                                        <FormLabel>비밀번호</FormLabel>
                                        <Link to={"/sign-in/credentials"} className="text-sm underline">
                                            비밀번호를 잊으셨나요?
                                        </Link>
                                    </div>
                                    <FormControl>
                                        <Input type={showPassword ? "text" : "password"} placeholder="비밀번호를 입력하세요." {...field} />
                                    </FormControl>
                                    <Button type="button" size={"icon"} className="absolute top-7 right-1 bg-transparent hover:bg-transparent" onClick={handleToggle}>
                                        {showPassword ? <Eye className="text-muted-foreground" /> : <EyeOff className="text-muted-foreground" />}
                                    </Button>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className=" flex flex-col mt-3 gap-3">
                            <Button type="submit" variant="destructive">
                                로그인
                            </Button>
                            <div className="text-sm text-center">
                                계정이 없으신가요?
                                <Link to={"/sign-up"} className="underline ml-1">
                                    회원가입
                                </Link>
                            </div>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

export default SignInForm;
