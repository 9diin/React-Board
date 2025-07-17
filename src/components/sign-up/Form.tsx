import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

// 유효성 체크 - Validation Check
const formSchema = z.object({
    email: z.email({
        message: "올바른 형식의 이메일 주소를 입력해주세요.",
    }),
    password: z.string().min(8, {
        message: "비밀번호는 최소 8자 이상입니다.",
    }),
    confirmPassword: z.string().min(8, {
        message: "비밀번호를 확인 후 입력해주세요.",
    }),
});

function SignUpForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const handleToggle = (field: string) => {
        if (field === "password") setShowPassword(!showPassword);
        else if (field === "confirmPassword") setShowConfirmPassword(!showPassword);
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email: values.email,
                password: values.password,
            });

            if (data.user && data.session) {
                toast.success("회원가입을 완료하였습니다.");
                navigate("/sign-in"); // 로그인 페이지로 리다이렉션
            }

            if (error) {
                toast.error("회원가입을 실패하였습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            console.log(error);
            throw new Error("요청을 처리하는 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        }
    };

    return (
        <Card className="w-full md:w-100 bg-transparent md:bg-accent/25 border-0 md:border">
            <CardHeader className="px-0 sm:px-6">
                <CardTitle className="text-lg">회원가입</CardTitle>
                <CardDescription>회원가입을 위한 정보를 입력해주세요.</CardDescription>
            </CardHeader>
            <CardContent className="gird gap-4 px-0 sm:px-6">
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
                                    <FormMessage className="text-xs font-normal" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel>비밀번호</FormLabel>
                                    <FormControl>
                                        <Input type={showPassword ? "text" : "password"} placeholder="비밀번호를 입력하세요." {...field} />
                                    </FormControl>
                                    <Button type="button" size="icon" className="absolute top-[22px] right-1 bg-transparent hover:bg-transparent" onClick={() => handleToggle("password")}>
                                        {showPassword ? <Eye className="text-muted-foreground" /> : <EyeOff className="text-muted-foreground" />}
                                    </Button>
                                    <FormMessage className="text-xs font-normal" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel>비밀번호 확인</FormLabel>
                                    <FormControl>
                                        <Input type={showConfirmPassword ? "text" : "password"} placeholder="비밀번호 획인란을 입력하세요." {...field} />
                                    </FormControl>
                                    <Button type="button" size="icon" className="absolute top-[22px] right-1 bg-transparent hover:bg-transparent" onClick={() => handleToggle("confirmPassword")}>
                                        {showConfirmPassword ? <Eye className="text-muted-foreground" /> : <EyeOff className="text-muted-foreground" />}
                                    </Button>
                                    <FormMessage className="text-xs font-normal" />
                                </FormItem>
                            )}
                        />
                        <div className="relative my-2">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t"></span>
                            </div>
                            <div className="flex justify-center text-xs">
                                <span className="relative px-2 text-muted-foreground bg-black sm:bg-[#121212]">간편 회원가입을 원하시면 로그인 링크를 클릭하세요.</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-full grid grid-cols-2 gap-4">
                                <Button type="button" variant="secondary" className="w-full">
                                    이전
                                </Button>
                                <Button type="submit" variant="destructive" className="w-full">
                                    회원가입
                                </Button>
                            </div>
                        </div>
                        <div className="text-center text-sm">
                            이미 계정이 있으신가요?
                            <Link to="/sign-in" className="underline text-sm ml-1">
                                로그인
                            </Link>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

export default SignUpForm;
