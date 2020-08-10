<template>
    <footer class="footer has-cards">
        <!-- <div class="container container-lg">
            <div class="row">
                <div class="col-md-6 mb-5 mb-md-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/landing" title="Landing Page">
                            <img v-lazy="'img/theme/landing.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-5 mb-lg-0">
                    <div class="card card-lift--hover shadow border-0">
                        <router-link to="/profile" title="Profile Page">
                            <img v-lazy="'img/theme/profile.jpg'" class="card-img">
                        </router-link>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="container">
            <card gradient="success" no-body shadow-size="lg" class="border-0">
                <div class="p-4">
                    <div class="row align-items-center">
                        <div class="col-lg-8">
                            <h5 class="text-white">جای نرم افزار شما در بازارچه دیپلوکا خالیست</h5>
                            <p class="text-white mt-3">

                                بازارچه دیپلوکا مجموعه ای از نرم افزارها و ابزارهای کاربردی است و تلاش ما این است که محتویات آن غنی تر و متنوع تر باشند.
                                از شما توسعه دهندگان گرامی دعوت میشود تا در رشد این مجموعه شرکت کرده و ما را یاری نمایید.
                            </p>
                            <b-button to="/developers">من آماده هستم</b-button>
                        </div>
                        <div class="col-lg-3 ml-lg-auto">
                            <img src="/img/manastronaut.svg" />
                        </div>
                    </div>
                </div>
            </card>
        </div>

        <div class="container">
            <!-- <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
                    <h4 class="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" rel="noopener" href="https://twitter.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://dribbble.com/creativetim"
                       class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-dribbble"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://github.com/creativetimofficial"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fa fa-github"></i>
                    </a>
                </div>
            </div> -->
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}, ساخته شده با <span style="color: rgb(226, 85, 85);">❤</span> برای همه
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <nuxt-link to="/" class="nav-link" rel="noopener"><i class="fa fa-home"></i> خانه</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <a href="https://console.deploca.com/" class="nav-link" rel="noopener"><i class="fa fa-code"></i> ورود</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/deploca" target="_blank"><i class="fab fa-github"></i> گیت هاب</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.linkedin.com/company/deploca" target="_blank"><i class="fab fa-linkedin"></i> لینکداین</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
