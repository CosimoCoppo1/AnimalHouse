<template>
  <div class="hero">
    <div class="hero__content">
      <p class="intro-text">la sapevi questa?</p>
      <h1 class="big-text">curiosità sul mondo animale</h1>
      <!-- <a href="" class="button">Discover more</a> -->
    </div>
    <video autoplay muted loop id="video-back">
      <source src="../assets/home/bg-video.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style>
.hero {
  height: 100vh;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  background-size: cover;
  overflow: hidden;
}

.hero:after {
  content: " ";
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.4;
}

.hero__content {
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 30px;
  z-index: 1;
  position: relative;
}

.hero__content h1,
.hero__content p {
  color: yellow;
}

.hero--small {
  height: 450px;
  text-align: center;
}

#video-back {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
  bottom: 0;
}
</style>
