import AppHeader from "@/components/common/AppHeader";
import AppFooter from "@/components/common/AppFooter";
import SideBar from "@/components/home/side-bar";

function HomePage() {
    return (
        <div className="page">
            <AppHeader />
            <div className="container">
                <div className="w-full h-full flex items-start p-6">
                    {/* 카테고리 UI */}
                    <SideBar />
                    {/* 토픽 콘텐츠 UI */}
                    <div className="w-4/5"></div>
                </div>
            </div>
            <AppFooter />
        </div>
    );
}

export default HomePage;
