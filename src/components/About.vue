<template>
    <div id="about">
        <div class="content">
            <h1 id="about-header">{{content.header.title}}</h1>
            <div id="about-content">
                <p class="text" id="text-1"><span class="active">{{content.header.text1.title}}</span>{{content.header.text1.content1}}<br/>{{content.header.text1.content2}}</p>
                <p class="text" id="text-2">{{content.header.text2.content1}}<br/>{{content.header.text2.content2}}</p>
                <p class="text" id="text-3">{{content.header.text3}}</p>
            </div>
            <ul id="about-footer">
                <h2 class="about-f-header">Hard Skills</h2>
                <div class="hard-skill">
                    <div class="hs-front">
                        <h3 class="hs-title">FrontEnd</h3>
                        <div class="card">
                            <h4>HTML & Css</h4>
                            <li>Sass</li>
                            <li>Bootstrap</li>
                            <li>Css grid & Flexbox</li>
                        </div>
                        <div class="card">
                            <h4>JavaScript</h4>
                            <li>jQuery</li>
                            <li>GSAP</li>
                            <li>JsDoc</li>
                            <li>Jasmine</li>
                        </div>
                        <div class="card">
                            <h4>Vue</h4>
                            <li>VueX</li>
                            <li>VueRouter</li>
                        </div>
                        <div class="card">
                            <h4>React</h4>
                            <li>ReactRouter</li>
                        </div>
                        <div class="card">
                            <h4>CMS</h4>
                            <li>WordPress</li>
                        </div>
                    </div>
                    <div class="hs-back">
                        <h3 class="hs-title">BackEnd</h3>
                        <div class="card">
                            <h4>Node.js</h4>
                            <li>Express.js</li>
                            <li>Socket.io</li>
                            <li>Api Rest</li>
                        </div>
                        <div class="card">
                            <h4>Php</h4>
                        </div>
                        <div class="card">
                            <h4>MongoDB</h4>
                        </div>
                        <div class="card">
                            <h4>MySQL</h4>
                            <li>PhpMyAdmin</li>
                        </div>
                    </div>
                    <div class="hs-other">
                        <h3 class="hs-title">Other</h3>
                        <div class="card">
                            <h4>Git</h4>
                        </div>
                        <div class="card">
                            <h4>Gantt</h4>
                        </div>
                        <div class="card">
                            <h4>UML</h4>
                        </div>
                    </div>
                </div>
                <h2 class="about-f-header" >Soft Skills</h2>
                <ul class="soft-skill">
                    <li class="about-li">✓ <span>{{content.softskill.curious.title}}</span>{{content.softskill.curious.content}}</li>
                    <li class="about-li">✓ <span>{{content.softskill.reliable.title}}</span>{{content.softskill.reliable.content}}</li>
                    <li class="about-li">✓ <span>{{content.softskill.independent.title}}</span>{{content.softskill.independent.content}}</li>
                </ul>
            </ul>
        </div>
    </div>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin);

export default {
    name: 'About',
     props: ['content'],
    methods: {
        cursorEvent: function(el, type){
            this.$emit('cursorEvent',{el,type})
        }
    }
}
</script>

<style scoped>

</style>