import Layout from '../components/layout'
import React from 'react'
import ReactPlayer from '../node_modules/react-player'
import Transcript from '../components/transcript'
// React Components can be very very terse
const name = 'Matthew'

export default () =>{
const [showRelatedVideos, setShowRelatedVideos] = React.useState(false)
const filenames = ['demo.4mp4', 'demo2', 'demo3']
return(
  <Layout>
    <article>
      <div style={{
        marginTop: 30
      }}>
        <bold><h1>COMPSCI335 - WK01L03</h1></bold>
      </div>
      <div style= {{ display: 'flex' }}>
        <ReactPlayer  url='../demo.m4v' 
                    display='inline-block'
                    controls
                    width='70%'
                    height='auto'
                    playIcon
                    config={{ file: {
                      tracks: [
                        {kind: 'subtitles', src: 'my_captions.vtt', srcLang: 'en', default: true},
                        {kind: 'subtitles', src: 'my_captions.vtt', srcLang: 'zh'},

                      ]
                    }}}/>
        <div style={{ width: '30%', display: 'flex', marginLeft:'30px' }}>
          <Transcript/>
        </div >

      </div>
      <div class="flex mb-4">
        <div class="flex-1 h-12"><h2>About</h2></div>
        <div class="flex-1 h-12"><a target="_blank" href="https://piazza.com/class/kc2ufpcfqzx4rp" style={{ text: '#FFF' }} ><h2>Piazza</h2></a></div>
        <div class="flex-1 h-12"><h2 onClick={() => {setShowRelatedVideos(!showRelatedVideos)}}>Lectures</h2></div>
        <div class="flex-1 h-12"></div>
        <div class="flex-1 h-12"></div>
        <div class="flex-1 h-12"></div>
        <div class="flex-1 h-12"></div>
        <div class="flex-1 h-12"></div>
      </div>
      {showRelatedVideos && <div class='flex flex-wrap'>
        
          {/* <ReactPlayer url='../demo2.mp4'
            display='inline-block'
            controls
            width='30%'
            height='auto'
        
            ></ReactPlayer> */}
            {filenames.map(filename => {
              return (
                <div class='flex my-3 bg-white rounded-lg shadow-md mx-3'>
                  <div className='flex-col flex-grow'>
                  <ReactPlayer url={`../${filename}.mp4`} display='inline-block'
                controls
                width='30%'
                height='auto' />
                  </div>
                </div>
              )
            })}
        </div>}
    </article>
  </Layout>
)}