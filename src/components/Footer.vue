<script setup>
    import { ref } from 'vue';

    const logo = ref('Phirom Shop')
    const phoneNumber = ref('085 394 984');
    const currentYear = ref(new Date().getFullYear());
</script>

<template>
    <section>
        <footer class="footer">
            <div class="container">
                <div class="my-footer">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-12 d-lg-flex align-items-lg-center">
                            <div class="logo text-lg-start text-center">
                                <a href="">{{ logo }}</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="footer-menu">
                                <ul class="list-unstyled text-lg-start text-md-start text-center">
                                    <li><a href=""><i class="bi bi-house-door-fill"></i> Home</a></li>
                                    <li><a href=""><i class="bi bi-gender-male"></i> Male</a></li>
                                    <li><a href=""><i class="bi bi-gender-female"></i> Female</a></li>
                                    <li><a href=""><i class="bi bi-file-earmark-person-fill"></i> About</a></li>
                                    <li><a href=""><i class="bi bi-person-lines-fill"></i> Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="footer-madiel">
                                <ul class="list-unstyled text-lg-start text-md-start text-center">
                                    <li><a :href="`tel:${phoneNumber}`"><i class="bi bi-telephone-fill"></i> Tel: {{ phoneNumber }}</a></li>
                                    <li><a href=""><i class="bi bi-facebook"></i> Facebook</a></li>
                                    <li><a href=""><i class="bi bi-instagram"></i> Instagram</a></li>
                                    <li><a href=""><i class="bi bi-tiktok"></i> Tik Tok</a></li>
                                    <li><a href=""><i class="bi bi-youtube"></i> YouTube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright text-center">
                    <p>&copy; {{ currentYear }} Created by Eng Phirom</p>
                </div>
            </div>
        </footer>
    </section>
</template>

<style scoped>
@font-face {
    font-family: roboto;
    src: url(../assets/fonts/Roboto-Light.ttf);
}
@font-face {
    font-family: IrishGrover;
    src: url(../assets/fonts/IrishGrover-Regular.ttf);
}
.footer{
    width: 100%;
    height: auto;
    padding: 50px 0px;
    /* background: rgba(128, 128, 128, 0.615); */
}
.my-footer{
    width: 100%;
    height: 100%;
}
a{
    text-decoration: none;
}
.logo > a{
    color: #000;
    font-family: IrishGrover;
    font-size: 35px;
    font-weight: bold;
}
.footer-menu > ul > li{
    padding: 8px 0px;
}
.footer-menu > ul > li > a{
    color: #000;
    font-family: roboto;
    font-size: 18px;
    font-weight: bold;
}
.footer-madiel > ul > li{
    padding: 8px 0px;
}
.footer-madiel > ul > li > a{
    color: #000;
    font-family: roboto;
    font-size: 18px;
    font-weight: bold;
}
</style>