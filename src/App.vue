<template>
  <div id="wrapper" @click='cursorEvent({el:$event,type:"click"})' @mousemove='cursorEvent({el:$event,type:"stick"})' @mouseleave='cursorEvent({el:$event,type:"blur"})'>
    <div id="cursor"></div>
    <Header v-on:cursorEvent="cursorEvent($event)"/>
    <SlideScroll>
      <Home class="section" @cursorEvent="cursorEvent($event)"/>
      <About class="section" @cursorEvent="cursorEvent($event)"/>
      <Work class="section" @cursorEvent="cursorEvent($event)"/>
      <Contact class="section" @cursorEvent="cursorEvent($event)"/>
    </SlideScroll>
  </div>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin);

// Components
import SlideScroll from './components/SlideScroll.vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Work from './components/Work'
import Contact from './components/Contact'

export default {
  name: 'App',
  watch: {
    title: {
        immediate: true,
        handler() {
            document.title = 'Delcey Hugo || Portfolio';
        }
    }
  },
  components: {
    Header,
    Home,
    About,
    Work,
    Contact,
    SlideScroll
  },
  data() {
    return {
      cursor: {
        elCursor : null,
        cursorFollow : true
      },
    }
  },
  mounted() {
    this.cursor.elCursor = document.querySelector('#cursor')
    gsap.from("#header", {y: -200, opacity: 0, duration: 0.5, delay: 0, ease: 'power1'})
    gsap.from('.nav-link', {y: -100, opacity: 0, duration: 0.4, delay: 0, ease: 'power1', stagger: .2})
  },
  methods: {
    // Cursor methods
    cursorEvent: function(event) {
      switch (event.type) {
        case 'stick':
          if(this.cursor.cursorFollow == true){
            this.cursor.elCursor.style.opacity = 1
            this.cursor.elCursor.style.width = 30 +'px'
            this.cursor.elCursor.style.height = 30 + 'px'
            this.cursor.elCursor.style.borderRadius = '50%'
            this.cursor.elCursor.style.transform = 'translate('+ (event.el.pageX + 5) +'px,'+ ((event.el.pageY + 5)) + 'px)'
          }
          break
        case 'click':
          document.querySelector('#cursor').classList.add('click-event')
          setTimeout(() => {
            document.querySelector('#cursor').classList.remove('click-event')
          }, 500)
          break
        case 'hover':
          this.cursor.cursorFollow = false
          this.cursor.elCursor.style.borderRadius = '0%'
          this.cursor.elCursor.style.width = (event.el.target.clientWidth + 'px')
          this.cursor.elCursor.style.height = (event.el.target.clientHeight + 'px')
          this.cursor.elCursor.style.transform = 'translate('+ (event.el.target.getBoundingClientRect().left + 20) +'px,'+ (event.el.target.getBoundingClientRect().top + 20 + window.scrollY) + 'px)'
          break
        case 'leave':
          this.cursor.cursorFollow = true
          break
        case 'hoverCenter':
          if(event.el.target.nodeName !== 'path'){
            this.cursor.cursorFollow = false
            this.cursor.elCursor.style.width = (event.el.target.clientWidth + 'px')
            this.cursor.elCursor.style.height = (event.el.target.clientHeight + 'px')
            this.cursor.elCursor.style.transform = 'translate('+ (event.el.target.getBoundingClientRect().left + 20) +'px,'+ (event.el.target.getBoundingClientRect().top + 20 + window.scrollY) + 'px)'
          }
          break
        case 'side':
          this.cursor.cursorFollow = false
          this.cursor.elCursor.style.transform = 'translate('+ (event.el.target.getBoundingClientRect().left - 15 ) +'px,'+ (event.el.target.getBoundingClientRect().top + 25) + 'px)'
          break
        case 'blur':
          this.cursor.elCursor.style.opacity = 0
          break
        case 'off':
          this.cursor.cursorFollow = false
          break
      }
    },
  }
}
</script>

<style lang="scss">
  @import "./assets/css/style.scss";
</style>
