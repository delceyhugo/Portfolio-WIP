<template>
    <slot></slot>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin);

export default {
    name: 'SlideScroll',
    data() {
        return {
            section: [],
            nav: [],
            property:{
                onload: false,
                active: 0,
            },
            swipe:{
                xDown: null,
                yDown: null,
                xUp: null,
                yUp: null
            }
        }
    },
    props: ['duration'],
    mounted() {
        // Get El
        this.section = document.querySelectorAll('.section')
        this.nav = document.querySelectorAll('.nav-anchor')

        // Scrolling event
        window.addEventListener("wheel", (e) => this.onScroll(e))

        // Link Nav 
        this.nav.forEach(el => {
            el.addEventListener("click", (e) => this.onClick(e))
        });
    },
    methods: {
        onScroll: function(e){
            if(this.property.onload == false){
                if(e.wheelDelta == -120 && (this.section[this.property.active].scrollTop + this.section[this.property.active].clientHeight) == (this.section[this.property.active].firstChild.clientHeight)){
                    if(this.property.active !== (this.section.length - 1)){
                        gsap.to(window, {duration: this.duration, ease: "Power2.easeInOut", scrollTo: this.section[(this.property.active + 1)], onStart: () => this.property.onload = true, onComplete: () => (this.property.onload = false, this.property.active++)})
                    }
                }
                else if(e.wheelDelta == 120 && (this.section[this.property.active].scrollTop) == 0){
                    if(this.property.active > 0){
                        gsap.to(window, {duration: this.duration, ease: "Power2.easeInOut", scrollTo: this.section[(this.property.active - 1)], onStart: () => this.property.onload = true, onComplete: () => (this.property.onload = false, this.property.active--)})
                    }
                }
            }
        },
        onClick: function(e){
            for(let i = 0; i < this.section.length; i++){
                if(e.target.getAttribute("href").slice(1) == this.section[i].id && this.property.active !== i){
                    gsap.to(window, {duration: this.duration, ease: "Power2.easeInOut", scrollTo: this.section[i], onStart: () => this.property.onload = true, onComplete: () => (this.property.onload = false, this.property.active = i)})
                }
            }
        },
        cursorEvent: function(el, type){
            this.$emit('cursorEvent',{el,type})
        }
    }
}
</script>

<style>

</style>