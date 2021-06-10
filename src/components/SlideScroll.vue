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
        this.section = document.querySelectorAll('.section')
        this.nav = document.querySelectorAll('.nav-anchor')
        // Scrolling event
        window.addEventListener("wheel", (e) => this.onScroll(e))
        window.addEventListener('touchstart', (e) => (this.property.onload == false ? (this.swipe.xDown = e.touches[0].clientX, this.swipe.yDown = e.touches[0].clientY) : null) , false);        
        window.addEventListener('touchmove', (e) => (this.property.onload == false ? this.onSwipe(e) : null), false);


        this.nav.forEach(el => {
            el.addEventListener("click", (e) => this.onClick(e))
        });
    },
    methods: {
        onScroll: function(e){
            if(this.property.onload == false){
                switch (e.wheelDelta) {
                    case 120:
                        if(this.property.active > 0){
                            gsap.to(window, {duration: this.duration, ease: "Power2.easeInOut", scrollTo: this.section[(this.property.active - 1)], onStart: () => this.property.onload = true, onComplete: () => (this.property.onload = false, this.property.active--)})
                        }
                        break;
                    case -120:
                        if(this.property.active !== (this.section.length - 1)){
                            gsap.to(window, {duration: this.duration, ease: "Power2.easeInOut", scrollTo: this.section[(this.property.active + 1)], onStart: () => this.property.onload = true, onComplete: () => (this.property.onload = false, this.property.active++)})
                        }
                        break;
                }
            }
        },
        onSwipe: function(e){
            this.swipe.xUp = e.touches[0].clientX
            this.swipe.yUp = e.touches[0].clientY
            let xDiff = this.swipe.xDown - this.swipe.xUp
            let yDiff = this.swipe.yDown - this.swipe.yUp
            if(Math.abs(xDiff) > Math.abs(yDiff)){
                if( xDiff > 0){
                    // Left
                    console.log('Left')
                }
                else{
                    // Right
                    console.log('Right')
                }
            }
            else {
                if( yDiff > 0){
                    // Up
                    if((this.property.active !== (this.section.length - 1)) && this.property.onload == false){
                        gsap.to(window, {duration: this.duration, ease: "Power2.easeInOut", scrollTo: this.section[(this.property.active + 1)], onStart: () => this.property.onload = true, onComplete: () => (this.property.onload = false, this.property.active++)})
                    }
                }
                else{
                    // Down
                    if(this.property.active > 0 && this.property.onload == false){
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