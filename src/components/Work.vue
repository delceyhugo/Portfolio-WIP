<template>
    <div id="work" >
        <div id="work-header">
            <h1 id="work-header-title">Explore my work</h1>
        </div>
        <div class="content">
            <div id="work-content" @mousemove="moveList($event)">
                <ul id="work-list">
                    <li @mousemove="cursorEvent($event,'stroke')" @mouseleave="cursorEvent($event,'leave')" v-for="projet in projets" :key="projet.content">
                        <a :href="projet.href">{{ projet.content }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin);

export default {
    name: 'Work',
    props: ['content'],
    data() {
        return {
            projets: [
                {content: 'Les Films de Plein Air',
                href: ''},
                {content: 'ExpressFood',
                href: ''},
                {content: 'Générateur de sitations',
                href: 'https://delceyhugo.github.io/oc-projet5/docs/'},
                {content: 'Jeu de plateau tour par tour',
                href: 'https://delceyhugo.github.io/oc-projet6/'},
                {content: 'App avis de restaurants',
                href: ''},
                {content: 'To-do list',
                href: ''},
                {content: 'Tripper (WIP)',
                href: ''},
                {content: 'Starry Weather',
                href: 'https://starryweather.delceyhugo.dev/'}
            ]
        }
    },
    methods:{
        moveList: function(e){
            let eventY = e.pageY - window.scrollY
            gsap.to('#work-list', 1, {
                y: - ((document.querySelector('#work-list').clientHeight) * (eventY / window.innerHeight) - 400)
            })
        },
        cursorEvent: function(el, type){
            this.$emit('cursorEvent',{el,type})
        },
    }
}
</script>

<style scoped>
    
</style>