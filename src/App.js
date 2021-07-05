import React, { useContext } from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import urls from './urls'
import VideoPreview from './Components/VideoPreview/VideoPreview'
import { showPreviewContext, urlIdContext } from './store/Context'
import { Animated } from 'react-animated-css'

function App() {
  const { urlId } = useContext(urlIdContext)
  const {showPreview}=useContext(showPreviewContext)
  return (
    <div className="App">
      {urlId && <Animated animationInDuration={300} animationOutDuration={300} isVisible={showPreview}>
        <VideoPreview />
      </Animated>
      }
      <NavBar />
      <Banner />
      <RowPost url={urls.Originals} title='Netflix Originals' />
      <RowPost url={urls.Trending} title='Trending' isSmall />
      <RowPost url={urls.Actions} title='Actons' isSmall />
      <RowPost url={urls.Horror} title='Horror' isSmall />
      <RowPost url={urls.Comedy} title='Comedy' isSmall />
      <RowPost url={urls.Fantasy} title='Fantasy' isSmall />
      <RowPost url={urls.Animation} title='Animation' isSmall />
      <RowPost url={urls.Family} title='Family' isSmall />
      <RowPost url={urls.Crime} title='Crime' isSmall />
      <RowPost url={urls.Documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
