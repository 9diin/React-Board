import { ChartNoAxesCombined, CodeXml, DraftingCompass, Footprints, Goal, Lightbulb, List, Rocket } from "lucide-react";

export const TOPIC_CATEGORY = [
    { id: 1, label: "전체", category: "", icon: <List /> },
    { id: 2, label: "인문학", category: "humanity", icon: <Lightbulb /> },
    { id: 3, label: "스타트업", category: "start-up", icon: <Rocket /> },
    { id: 4, label: "IT·프로그래밍", category: "programming", icon: <CodeXml /> },
    { id: 5, label: "서비스·전략 기획", category: "planning", icon: <Goal /> },
    { id: 6, label: "마케팅", category: "marketing", icon: <ChartNoAxesCombined /> },
    { id: 7, label: "디자인·일러스트", category: "design", icon: <DraftingCompass /> },
    { id: 8, label: "자기계발", category: "self-development", icon: <Footprints /> },
];
