import AppFooter from "@/components/common/AppFooter";
import AppHeader from "@/components/common/AppHeader";

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <AppHeader />
            {children}
            <AppFooter />
        </div>
    );
}

export default RootLayout;
