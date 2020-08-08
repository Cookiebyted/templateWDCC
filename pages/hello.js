import Layout from '../components/layout'
import React from 'react'
import ReactPlayer from '../node_modules/react-player'

// React Components can be very very terse
const name = 'Matthew'
export default () =>
  <Layout>
    <article>
      <div style={{
        marginTop: 30
      }}>
        <h1>COMPSCI335 - WK01L03</h1>
      </div>
      <div style={{
        height: 200,
        width: 200,
        marginTop: 5
      }} >
        <ReactPlayer  url='../demo.m4v' 
                    controls
                    width='400px'
                    height='200px'
                    config={{ file: {
                      tracks: [
                        {kind: 'subtitles', src: 'my_captions.vtt', srcLang: 'en', default: true},
                      ]
                    }}} />
        </div>
      <div class="flex mb-4">
        <div class="flex-1 h-12"><h2>About</h2></div>
        <div class="flex-1 h-12"><h2>Piazza</h2></div>
        <div class="flex-1 h-12"><h2>Lectures</h2></div>
        <div class="flex-1 h-12"></div>
        <div class="flex-1 h-12"></div>
        <div class="flex-1 h-12"></div>
        <div class="flex-1 h-12"></div>
      </div>
    </article>
  </Layout>
