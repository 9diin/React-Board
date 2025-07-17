import { useState } from "react";

import AppFooter from "@/components/common/AppFooter";
import AppHeader from "@/components/common/AppHeader";
import TextEditor from "@/components/common/text-editor";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Asterisk, ImageOff, Rocket } from "lucide-react";

import { CREATE_TOPIC_CATEGORY } from "@/constants/topic-category.constant";

function NewTopicPage() {
    const [title, setTitle] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [thumbnail, setThumbnail] = useState<string>("");
    const [content, setContent] = useState<string>("");

    return (
        <div className="page">
            <AppHeader />
            <div className="container">
                <div className="w-full flex flex-col p-6 gap-6">
                    {/* 토픽 제목 입력 UI */}
                    <Input placeholder="토픽 제목을 입력하세요." maxLength={50} className="border-none h-16 px-6 !text-lg placeholder:text-lg" />
                    <div className="w-full flex items-start gap-6">
                        {/* 카테고리 & 썸네일 영역 */}
                        <img src="서버에 저장된 이미지 URL" alt="" />
                        <div className="w-full sm:max-w-[308px] h-full flex flex-col gap-4 sm:gap-6 lg:w-1/4 lg:min-w-[308px]">
                            <div className="flex items-center gap-2">
                                <Button variant="outline">
                                    <ArrowLeft />
                                </Button>
                                <Button variant="outline">임시 저장</Button>
                                <Button variant="destructive" className="flex-1">
                                    <Rocket />
                                    토픽 발행하기
                                </Button>
                            </div>
                            <Separator />
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center">
                                    <Asterisk className="text-[#f96859] w-[14px] h-[14px]" />
                                    <Label htmlFor="category">카테고리</Label>
                                </div>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="토픽 주제 선택" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>토픽 Topic</SelectLabel>
                                            {CREATE_TOPIC_CATEGORY.map((item) => {
                                                return (
                                                    <SelectItem key={item.id} value={item.category}>
                                                        {item.label}
                                                    </SelectItem>
                                                );
                                            })}
                                            {/* <SelectItem value="humanity">인문학</SelectItem>
                                            <SelectItem value="start-up">스타트업</SelectItem>
                                            <SelectItem value="programming">IT&middot;프로그래밍</SelectItem>
                                            <SelectItem value="planning">서비스&middot;전략 기획</SelectItem>
                                            <SelectItem value="marketing">마케팅</SelectItem>
                                            <SelectItem value="design">디자인&middot;일러스트</SelectItem>
                                            <SelectItem value="self-development">자기계발</SelectItem> */}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center">
                                    <Asterisk className="text-[#f96859] w-[14px] h-[14px]" />
                                    <Label htmlFor="category">카테고리</Label>
                                </div>
                                <Skeleton className="w-full aspect-video" />
                            </div>
                            <Separator className="-my-4" />
                            <Button variant="outline">
                                <ImageOff />
                                썸네일 제거
                            </Button>
                        </div>
                        {/* 텍스트 Editor 영역 */}
                        <div className="w-[70%]">
                            <TextEditor />
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter />
        </div>
    );
}

export default NewTopicPage;
