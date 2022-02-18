import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({videos, onSelectVideo, display}) => {
    
    return (
        <ul className={styles.videos}>
            {
                videos.map(video => {
                    return <VideoItem key={video.id} video={video} onSelectVideo={onSelectVideo} display={display} />
                })
            }
        </ul>
    )
}

export default VideoList;