<template>
    <div id="home" class="container-fluid">
      <div class="home row content-container">
          <div class="col">
              <p>I'm <span id="name">Hugo Delcey</span></p> 
              <h1>FrontEnd Developer<br>&amp; Fullstack Javascript<br><span class="color-active">from France</span></h1>
              <button class="home-button nav-anchor" @mouseover="cursorEvent($event,'side')" @mouseleave="cursorEvent($event,'leave')" v-on:click.prevent href="#work">Check my work</button>
              <button class="home-button nav-anchor" @mouseover="cursorEvent($event,'side')" @mouseleave="cursorEvent($event,'leave')" v-on:click.prevent href="#contact">Get in Touch</button>
          </div>
      </div>
    </div>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin);

export default {
  name: 'Home',
  mounted() {
    let tl = gsap.timeline({ default: {ease: 'power4'}})
    tl.from(".home", {scrollTrigger: ".home",y: -100, duration: 0.8, opacity: 0, delay: 1})  
      .from('.home-button', {scrollTrigger: ".home-button",y: +50, duration: 0.8, opacity: 0, stagger: .4})
  },
  methods: {
    cursorEvent: function(el, type){
      this.$emit('cursorEvent',{el,type})
    }
  },
}
</script>

<style scoped>
</style>