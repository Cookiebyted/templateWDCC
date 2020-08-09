import Layout from '../components/layout'
import React from 'react'
import ReactPlayer from '../node_modules/react-player'

export default () =>{
  const [showRelatedVideos, setShowRelatedVideos] = React.useState(false)
  const filenames = ['demo.4mp4', 'demo2', 'demo3']
  return(
    <Layout>
      <article>
        <div style={{
          marginTop: 30
        }}>
          <bold><h1>COMPSCI335 - Functional Programming and Distributed Services</h1></bold>
        </div>
        <div style= {{ display: 'flex' }}>

</div>
<div class="flex mb-4">
  <div class="flex-1 h-12"><h2 class='button' onClick={() => {setShowRelatedVideos(!showRelatedVideos)}}>Lectures</h2></div>
  <div class="flex-1 h-12"></div>
  <div class="flex-1 h-12"></div>
  <div class="flex-1 h-12"></div>
  <div class="flex-1 h-12"></div>
  <div class="flex-1 h-12"></div>
</div>
{showRelatedVideos && <div class='flex '>
      {filenames.map(filename => {
        return (
          <div class='flex my-3 bg-white rounded-lg shadow-md mx-3'>
            <div className='flex'>
            <ReactPlayer url={`../${filename}.mp4`} display='flex'
          controls
          width='50%'
          height='auto' />
          <p style={{ marginLeft: '10px' }}><a href='/hello'>COMPSCI335 - (401-439) [L01C]</a></p>
            </div>
          </div>
        )
      })}
  </div>}
</article>
</Layout>
)}