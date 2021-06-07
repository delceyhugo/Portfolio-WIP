<template>
    <div id="about">
        <div class="section-container about">
            <h1>About me</h1>
            <p class="text"><span class="active">In love</span> about the Web and all that revolves around, I like new technologies, trends in web development as well and the study of new skills of all kinds!
                <br>I like to create websites with real added value, with features, a design and a user experience that stands out from others<br>
                <br>As Front-end developer, I master the majority of technologies related to this specialty.
                <br>I am also passionate about Javascript, which led me to discover Back-end with Node as well as other Back-end languages.<br>
                <br>I also have the basics in many fields and other languages that interest me (Motion Design, Vector graphics creation, Artificial intelligence, Deep learning).
            </p>
            <ul>
                <h3>Soft Skills</h3>
                <li class="about-li">✓ <span>Curious</span> by nature, I like to discover the functioning of what surrounds me.</li>
                <li class="about-li">✓ <span>Reliable</span>, I am a trustworthy person!</li>
                <li class="about-li">✓ <span>Independent</span>, thanks to self-learning, I know how to work independently.</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin);

export default {
    name: 'About',
    mounted() {
        gsap.from(".about-li", {
            scrollTrigger: ".about-li",
            x: -100,
            opacity: 0, 
            duration: 0.8, 
            delay: 2, 
            ease: 'power1',
            stagger: .3
        });
    },
}
</script>

<style scoped>

</style>