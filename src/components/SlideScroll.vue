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
            scroll:{
                onload: false,
                active: 0,
                duration: 1.5,
                scrollTop: 0,
                scrollLeft: 0
            }
        }
    },
    mounted() {

        




        this.section = document.querySelectorAll('.section')
        this.nav = document.querySelectorAll('.nav')
        window.addEventListener("wheel", (e) => this.onScroll(e))
        this.nav.forEach(el => {
            el.addEventListener("click", (e) => this.onClick(e))
        });
        
    },
    methods: {
        onScroll: function(e){
            if(this.scroll.onload == false){
                switch (e.wheelDelta) {
                    case 120:
                        if(this.scroll.active > 0){
                            gsap.to(window, {duration: 1, ease: "Power2.easeInOut", scrollTo: this.section[(this.scroll.active - 1)], onStart: () => this.scroll.onload = true, onComplete: () => (this.scroll.onload = false, this.scroll.active--)})
                        }
                        break;
                    case -120:
                        if(this.scroll.active !== (this.section.length - 1)){
                            gsap.to(window, {duration: 1, ease: "Power2.easeInOut", scrollTo: this.section[(this.scroll.active + 1)], onStart: () => this.scroll.onload = true, onComplete: () => (this.scroll.onload = false, this.scroll.active++)})
                        }
                        break;
                }
            }
        },
        onClick: function(e){
            for(let i = 0; i < this.section.length; i++){
                if(e.target.hash.slice(1) == this.section[i].id && this.scroll.active !== i){
                    gsap.to(window, {duration: 1, ease: "Power2.easeInOut", scrollTo: this.section[i], onStart: () => this.scroll.onload = true, onComplete: () => (this.scroll.onload = false, this.scroll.active = i)})
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