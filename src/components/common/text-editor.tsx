import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

async function uploadFile(file: File) {
    if (!file) throw new Error("파일이 없습니다.");

    const fileExt = file.name.split(".").pop() || "bin";
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `topic_contents/temp/${fileName}`;

    console.log("📦 업로드 파일 경로:", filePath);

    const { error } = await supabase.storage.from("files").upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
    });

    if (error) {
        console.error("❌ 업로드 오류:", error);
        throw new Error("파일 업로드 실패: " + error.message);
    }

    const { data } = supabase.storage.from("files").getPublicUrl(filePath);

    console.log(data.publicUrl);
    return data.publicUrl;
}

export default function TextEditor() {
    // Creates a new editor instance.
    const editor = useCreateBlockNote({
        uploadFile,
    });

    // Renders the editor instance using a React component.
    return <BlockNoteView editor={editor} />;
}
