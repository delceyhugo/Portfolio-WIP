<template>
    <div id="home">
      <div class="content">
        <div id="home-header">
          <p>Hey, {{content.head}}<br/><span id="name">Hugo Delcey</span></p>
        </div>
        <h1 id="home-content">{{content.title.front}}<br>&amp; Fullstack Javascript<br><span class="color-active">{{content.title.from}}</span></h1>
        <div id="home-footer">
          <button class="home-button nav-anchor" @mousemove="cursorEvent($event,'hover')" @mouseover="cursorEvent($event,'hover')" @mouseleave="cursorEvent($event,'leave')" v-on:click.prevent href="#work">{{content.button.work}}</button>
          <button class="home-button nav-anchor" @mousemove="cursorEvent($event,'hover')" @mouseover="cursorEvent($event,'side')" @mouseleave="cursorEvent($event,'leave')" v-on:click.prevent href="#contact">{{content.button.touch}}</button>
        </div>
      </div>
    </div>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin);

export default {
  name: 'Home',
  props: ['content'],
  mounted() {
    let tl = gsap.timeline({ default: {ease: 'power4'}})
    tl.from(".content", {scrollTrigger: ".content",y: -100, duration: 0.8, opacity: 0, delay: 1})  
      .from('.home-button', {scrollTrigger: ".home-button",y: +50, duration: 0.8, opacity: 0, stagger: .4})
  },
  methods: {
    cursorEvent: function(el, type){
      this.$emit('cursorEvent',{el,type})
    },
  },
}
</script>

<style scoped>
</style>