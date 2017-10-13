<template>
  <div id="videos">
    <video
        id="my-player"
        class="video-js"
        controls
        data-setup='{}'>
      <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
    </video>
  </div>
</template>
<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
export default {
  name: 'videos',
  data(){
    return {

    }
  }
}
</script>
<style media="screen">
#my-player{
  width: 100%;
  height: 200px;
}
</style>
