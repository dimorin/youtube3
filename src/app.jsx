import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';

function App({youtubeFetch}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
  }
  const onSearch = useCallback((query) => {
    setSelectedVideo(null);
    youtubeFetch.search(query).then(result => setVideos(result));
  }, [youtubeFetch])
  useEffect(() => {
     youtubeFetch.mostPopular().then(result => setVideos(result));
  }, [youtubeFetch]);
  
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={onSearch} ></SearchHeader>
      <section className={styles.content}>
        {
          selectedVideo && (
            <div className={styles.detail}>          
              <VideoDetail selectedVideo={selectedVideo} />         
            </div>
          )
        }
        <div className={styles.list}>
          <VideoList videos={videos} onSelectVideo={handleSelectVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>      
    </div>    
  );
}

export default App;
