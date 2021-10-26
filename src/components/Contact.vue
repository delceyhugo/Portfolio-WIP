<template>
    <div id="contact">
        <div class="content">
            <aside id="work-header-title">
                <h1>Let's</h1>
                <h1 class="right">get in</h1>
                <h1>touch</h1>
            </aside>
            <section id="work-main">
                <main>
                    <form action="mailto:delcey.hugo@outlook.fr" method="get" name="contact" autocomplete="nope">
                        <label for="name">Full Name</label>
                        <input type="text" name="name" id="form-name" autocomplete="no-name">
                        <div class="form-wrapper">
                            <div>
                                <label for="email">Email</label>
                                <input type="email" name="email" id="form-email" required="required" >
                            </div>
                            <div>
                                <label for="phone">Phone</label>
                                <input type="tel" name="phone" id="form-phone" autocomplete="no-tel">
                            </div>
                        </div>
                        <label for="message">Message</label>
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
}
</script>

<style scoped>
    
</style>