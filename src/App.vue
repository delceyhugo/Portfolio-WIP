<template>
  <div id="wrapper" @mousemove='cursorEvent({el:$event,type:"stick"})' @mouseleave='cursorEvent({el:$event,type:"blur"})' ref="wrapper">
    <div id="cursor"></div>
    <Header :content = 'tradContent.header' @cursorEvent="cursorEvent($event)" @internationalization="international($event)"/>
    <SlideScroll :duration = 1 >
      <Home :content = 'tradContent.home' class="section" @cursorEvent="cursorEvent($event)" />
      <About :content = 'tradContent.about' class="section" @cursorEvent="cursorEvent($event)"/>
      <Work :content = 'tradContent.work' class="section" @cursorEvent="cursorEvent($event)"/>
      <Contact :content = 'tradContent.contact' class="section" @cursorEvent="cursorEvent($event)"/>
    </SlideScroll>
  </div>
</template>

<script>
import * as data from './assets/json/internationalization.json'
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
            document.title = 'Hugo Delcey || Portfolio';
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
      languageToggle: 'en',
      tradContent: data.en
    }
  },
  mounted() {
    this.cursor.elCursor = document.querySelector('#cursor')
    gsap.from("#header", {y: -200, opacity: 0, duration: 0.5, delay: 0, ease: 'power1'})
    gsap.from('.nav-link', {y: -100, opacity: 0, duration: 0.4, delay: 0, ease: 'power1', stagger: .2})

    window.addEventListener('deviceorientation', e => {
      console.log(e)
    })


    document.querySelector('#wrapper').addEventListener('mousemove', e => {
      // Header
      this.cursorParalax(e, '#header', -50)
      // Home
      this.cursorParalax(e, '#home-header', -100)
      this.cursorParalax(e, '#home-content', -85)
      this.cursorParalax(e, '#home-footer', -100)
      // About
      this.cursorParalax(e, '#about-header', -100)
      this.cursorParalax(e, '.text', -85)

      this.cursorParalax(e, '.about-f-header', -100)
      this.cursorParalax(e, '.hs-title', -90)
      this.cursorParalax(e, '.card', -80)
      this.cursorParalax(e, '.soft-skill', -80)
      this.cursorParalax(e, '.codewars', -80)
      // Work
      this.cursorParalax(e, '#work-header-title', -100)
      this.cursorParalax(e, '#work-main', -50)

      
    })
  },
  methods: {
    // Cursor methods
    cursorEvent: function(event) {
      let cursorStyle = this.cursor.elCursor.style
      switch (event.type) {
        case 'stick':
          if(this.cursor.cursorFollow == true){
            cursorStyle.backgroundColor = 'currentColor'
            cursorStyle.opacity = 1
            cursorStyle.width = 30 +'px'
            cursorStyle.height = 30 + 'px'
            cursorStyle.borderRadius = '50%'
            cursorStyle.transform = 'translate('+ (event.el.pageX - 15) +'px,'+ ((event.el.screenY - 85)) + 'px)'
          }
          break
        // case 'click':
        //   document.querySelector('#cursor').classList.add('click-event')
        //   setTimeout(() => {
        //     document.querySelector('#cursor').classList.remove('click-event')
        //   }, 500)
        //   break
        case 'hover':
          this.cursor.cursorFollow = false
          cursorStyle.backgroundColor = 'currentColor'
          cursorStyle.borderRadius = '0%'
          cursorStyle.width = (event.el.target.clientWidth + 'px')
          cursorStyle.height = (event.el.target.clientHeight + 'px')
          cursorStyle.transform = 'translate('+ (event.el.target.getBoundingClientRect().left) +'px,'+ (event.el.target.getBoundingClientRect().top) + 'px)'
          break
        case 'leave':
          this.cursor.cursorFollow = true
          break
        case 'hoverCenter':
          if(event.el.target.nodeName !== 'path'){
            this.cursor.cursorFollow = false
            cursorStyle.backgroundColor = 'currentColor'
            cursorStyle.width = (event.el.target.clientWidth + 'px')
            cursorStyle.height = (event.el.target.clientHeight + 'px')
            cursorStyle.transform = 'translate('+ (event.el.target.getBoundingClientRect().left) +'px,'+ (event.el.target.getBoundingClientRect().top) + 'px)'
          }
          break
        case 'stroke':
            this.cursor.cursorFollow = false
            cursorStyle.width = 40 +'px'
            cursorStyle.height = 40 + 'px'
            cursorStyle.border = '2px solid #DEDEDE'
            cursorStyle.backgroundColor = 'rgba(255, 255, 255, 0)'
            cursorStyle.transform = 'translate('+ (event.el.pageX - 20) +'px,'+ ((event.el.screenY - 90)) + 'px)'
          break
        case 'side':
          this.cursor.cursorFollow = false
          cursorStyle.transform = 'translate('+ (event.el.target.getBoundingClientRect().left) +'px,'+ (event.el.target.getBoundingClientRect().top) + 'px)'
          break
        case 'blur':
          cursorStyle.opacity = 0
          break
        case 'off':
          this.cursor.cursorFollow = false
          break
      }
    },
    cursorParalax: function(e, el, move){
      let wrapper = document.querySelector('#wrapper')
      let elX = e.pageX - wrapper.getBoundingClientRect().left + window.scrollX
      let elY = e.pageY - window.scrollY
      gsap.to(el, 1, {
        x: (elX - wrapper.clientWidth / 2) / wrapper.clientWidth * move,
        y: (elY - wrapper.clientHeight / 2) / wrapper.clientHeight * move
      })
    },
    international: function(event){
      if(event == 'fr'){
        this.tradContent = data.fr
      }
      else if(event == 'en'){
        this.tradContent = data.en
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/css/style.scss";
</style>
