import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({selectedVideo, selectedVideo:{snippet}}) => {
    return (
        <section className={styles.detail}>
            <iframe className={styles.video} title={snippet.title} type="text/html" width="100%" height="500px" src={`https://www.youtube.com/embed/${selectedVideo.id}`} frameBorder="0" allowFullScreen >
            </iframe>
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <pre>{snippet.description}</pre>
        </section>
    )
}

export default VideoDetail;