import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";

import "./home.css";
import MobileBottomNav from "../../components/mobileBottomNav/MobileBottomNav";
import MobileNav from "../../components/mobileNav/MobileNav";

export default function Home() {
  return (
    <div>
      <MobileNav />
      <Topbar />
      <div className="bodyContent">
        <Sidebar />
        <Feed />
        <MobileBottomNav />
      </div>
    </div>
  );
}
