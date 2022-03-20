import React from "react";
import ChannelRow from "./ChannelRow";
import "./SearchPage.css";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
 
function SearchPage() {
    return (
    <div className="searchPage">
        <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
        </div>
        <hr />

        <ChannelRow 
            Channel="MnetTV"
            image="https://yt3.ggpht.com/NLKnIGLdCfPuDOm-VDJWIPsX5Mr8bG9ea9IZ1hgAjHvLF5wR720CGGaUFHRbzQ5Towdb_-iHEio=s176-c-k-c0x00ffffff-no-rj"
            verified
            subs="878만명"
            noOfVideos={19554}
            description="다양한 음악 예능으로 즐거움을 선사하는 Mnet 음악 버라이어티 공식 채널 MnetTV"
        />

        <hr />    

        <VideoRow 
            views="2177만회"
            subs="878만명"
            description="마스터피스를 완성하는 자, 누가 될 것인가?"
            timestamp="2개월전"
            channel="MnetTV"
            image="https://i.ytimg.com/vi/tnAxZipkuWw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9CSUVTKkXIpIKd3uSy5q906afnw"
        />

    </div>
    );
}

export default SearchPage;