import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SidebarRow from "./SidebarRow";

import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="홈" />
            <SidebarRow Icon={WhatshotIcon} title="탐색" />
            <SidebarRow Icon={SubscriptionsIcon} title="구독" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="보관함" />
            <SidebarRow Icon={HistoryIcon} title="시청기록" />
            <SidebarRow Icon={OndemandVideoIcon} title="내 동영상" />
            <SidebarRow Icon={WatchLaterIcon} title="나중에 볼 동영상" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="좋아요 표시한 동영상" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="더보기" />
        </div>
    );
}

export default Sidebar;