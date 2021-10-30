<template>
    <div id="contact">
        <div class="content">
            <aside id="work-header-title">
                <h1>{{content.title.one}}</h1>
                <h1 class="right">{{content.title.two}}</h1> 
                <h1>{{content.title.three}}</h1>
            </aside>
            <section id="work-main">
                <main>
                    <form action="mailto:delcey.hugo@outlook.fr" method="get" name="contact" autocomplete="nope">
                        <label for="name">{{content.form.name}}</label>
                        <input type="text" name="name" id="form-name" autocomplete="no-name">
                        <div class="form-wrapper">
                            <div>
                                <label for="email">{{content.form.email}}</label>
                                <input type="email" name="email" id="form-email" required="required" >
                            </div>
                            <div>
                                <label for="phone">{{content.form.phone}}</label>
                                <input type="tel" name="phone" id="form-phone" autocomplete="no-tel">
                            </div>
                        </div>
                        <label for="message">{{content.form.message}}</label>
                        <textarea name="message" id="form-message" cols="1" rows="1" required="required"></textarea>
                        <div class="form-button">
                            <button>
                                <img src="../assets/img/arrow-right.svg" alt="Submit Form">
                            </button>
                        </div>
                    </form>
                </main>
                <footer>

                </footer>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    props: ['content']
}
</script>

<style scoped>
    
</style>