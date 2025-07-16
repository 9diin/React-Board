import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SignUpState {
    id: string;
    email: string;
}

interface SignUpStore {
    setId: (id: string) => void;
    setEmail: (email: string) => void;
}

export const useSignUpStore = create<SignUpStore & SignUpState>()(
    persist(
        (set) => ({
            id: "",
            email: "",
            setId: (id) => set({ id }),
            setEmail: (email) => set({ email }),
        }),
        {
            name: "signUp-test", // 로컬 스토리지에 저장될 키 이름 (필수)
        }
    )
);
