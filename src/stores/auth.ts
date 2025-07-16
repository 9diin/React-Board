import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// 1. User 인터페이스 정의: 사용자 데이터의 형태를 명확히 합니다.
interface User {
    id: string;
    email: string;
    // 필요한 경우 다른 사용자 정보 필드를 추가할 수 있습니다.
    // name?: string;
    // token?: string;
}

// 2. AuthStore 인터페이스 정의: 스토어의 상태(state)와 액션(actions)을 정의합니다.
interface AuthStore {
    user: User | null; // 현재 로그인된 사용자 정보 (로그아웃 시 null)
    isAuthenticated: boolean; // 사용자가 로그인되어 있는지 여부

    // 액션: 사용자 설정 (로그인)
    setUser: (newUser: User | null) => void;

    // 액션: 사용자 정보 삭제 (로그아웃)
    clearUser: () => void;
}

// 3. Zustand 스토어 생성
export const useAuthStore = create<AuthStore>()(
    // persist 미들웨어를 사용하여 상태를 로컬 스토리지에 저장합니다.
    persist(
        (set) => ({
            // 초기 상태 (Initial State)
            user: null, // 초기에는 사용자 정보가 없습니다.
            isAuthenticated: false, // 초기에는 인증되지 않은 상태입니다.

            // 액션: 사용자 설정 (로그인 처리)
            setUser: (newUser: User | null) => {
                set({ user: newUser, isAuthenticated: true });
            },

            // 액션: 사용자 정보 삭제 (로그아웃 처리)
            clearUser: () => {
                useAuthStore.persist.clearStorage(); // 로컬스토리지의 저장된 상태 삭제
            },
        }),
        {
            name: "auth-storage", // 로컬 스토리지에 저장될 키 이름 (필수)
            storage: createJSONStorage(() => localStorage), // localStorage를 사용하도록 지정

            // (선택 사항) partialize: 스토어의 특정 부분만 저장하고 싶을 때 사용
            // 예를 들어, user 객체만 저장하고 싶다면 다음과 같이 설정합니다.
            // partialize: (state) => ({ user: state.user }),
        }
    )
);
