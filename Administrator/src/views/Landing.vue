<template>
  <div>
    <!-- Hero -->
    <div class="hero bg-white overflow-hidden">
      <div class="hero-inner align-self-stretch d-flex flex-column">
        <div class="pt-5 pb-3 text-center">
          <i class="fa fa-2x fa-circle-notch text-primary"></i>
        </div>
        <div class="content content-full flex-fill d-flex align-items-center px-0 px-md-4 px-lg-6 px-xl-8 overflow-hidden">
          <b-row class="w-100">
            <b-col lg="6" class="text-center text-lg-left d-flex align-items-center bg-landing-left">
              <div class="w-100">
                <h1 class="display-4 font-w700 mb-3">
                  OneUI <span class="font-w300">Vue Edition</span>
                </h1>
                <p class="font-size-lg text-muted mb-3">
                  Build all your projects with one super flexible UI framework.<br>Now rebuilt from scratch with Vue.js. Based on<br><a href="https://1.envato.market/AVD6j">OneUI Remastered</a> design!
                </p>
                <b-button variant="alt-success" class="px-4 py-2 mr-2 mt-2" href="https://1.envato.market/5Noyb" v-click-ripple>
                  <i class="fa fa-fw fa-shopping-cart mr-1"></i> Purchase
                </b-button>
                <b-button variant="alt-primary" class="px-4 py-2 mr-2 mt-2" to="/backend/dashboard" v-click-ripple>
                  <i class="fa fa-fw fa-rocket mr-1"></i> Live Preview
                </b-button>
              </div>
            </b-col>
            <b-col lg="6" class="d-none d-lg-block py-6">
              <div class="w-100 d-flex align-items-center position-relative bg-landing-right">
                <b-row no-gutters>
                  <b-col lg="7">
                    <div>
                      <img class="promo-image" src="img/various/promo-dashboard.png" alt="OneUI Vue Promo Dashboard Image">
                    </div>
                    <div class="ml-4 mt-4">
                      <img class="promo-image" src="img/various/promo-search.png" alt="OneUI Vue Promo Search Image">
                    </div>
                  </b-col>
                  <b-col lg="5">
                    <div class="ml-4 mt-5">
                      <img class="promo-image" src="img/various/promo-side.png" alt="OneUI Vue Promo Side Image">
                    </div>
                    <div class=" ml-5 mt-4">
                      <img class="promo-image" src="img/various/promo-code-vue.png" alt="OneUI Vue Promo Code Image">
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <div class="hero-meta">
        <div class="animated slideInDown infinite">
          <i class="fa fa-chevron-down text-black-50"></i>
        </div>
      </div>
    </div>
    <!-- END Hero -->

    <!-- Vue Edition -->
    <div class="bg-body-light">
      <div class="content content-full content-boxed overflow-hidden">
        <div class="py-5">
          <h2 class="h1 font-w700 mb-3 text-center">
            Vue Edition
          </h2>
          <p class="font-size-lg text-muted mb-6 text-center mx-sm-6 mx-lg-10">
            OneUI Vue Edition was carefully crafted for all your projects using the latest and greatest technology.
          </p>
          <b-row>
            <b-col order-md="1" md="6" offset-lg="1" class="d-flex align-items-center">
              <div class="w-100 mb-5 mb-md-0 px-lg-6 position-relative bg-landing-right">
                <b-row>
                  <b-col cols="6" md="12">
                    <base-block rounded fx-shadow content-full>
                      <div class="py-4 py-md-6 text-center">
                        <svg version="1.1" width="8em" height="8em" viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)"><g transform="translate(178.06 235.01)"><path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/></g><g transform="translate(178.06 235.01)"><path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e"/></g></g></svg>
                      </div>
                    </base-block>
                  </b-col>
                  <b-col cols="6" md="12">
                    <base-block rounded fx-shadow content-full>
                      <div class="py-4 py-md-6 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8em" height="8em" viewBox="0 0 2041 2160" clip-rule="evenodd" fill-rule="evenodd"><title data-v-555a030c="">BootstrapVue logo</title> <path data-v-555a030c="" d="m1397 271-370 642-371-642h-592l963 1667 962-1667z" fill="#34495e"></path> <path data-v-555a030c="" d="m44 0h1952l-979 1696z" fill="#563d7c" fill-rule="nonzero"></path> <path data-v-555a030c="" d="m1633 392-612 1061-613-1061h-408l1021 1768 1020-1768z" fill="#41b883"></path> <path data-v-555a030c="" d="m767 196h339c62 0 112 14 150 43 38 28 56 71 56 129 0 36-8 66-25 91s-42 44-74 58v2c43 9 75 29 98 61 22 31 33 71 33 118 0 28-5 53-15 77s-25 44-46 61c-21 18-47 31-80 41-32 11-71 16-116 16h-320zm122 292h199c29 0 54-9 73-25 20-17 29-41 29-72 0-35-8-60-26-75-17-14-43-21-76-21h-199zm0 305h216c37 0 66-10 86-29s31-46 31-81-10-61-31-80-49-28-86-28h-216z" fill="#fff"></path></svg>
                      </div>
                    </base-block>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col order-md="0" md="6" lg="5">
              <h4 class="h2 font-w700 mb-3">
                Amazing tools under the hood
              </h4>
              <p class="font-size-lg text-muted mb-5">
                We used the best toolkits, built by passionate people, to recreate OneUI from scratch and craft a pure Vue.js based version.
              </p>
              <div class="d-flex push">
                <div class="item item-rounded bg-success-light flex-shrink-0">
                  <i class="fa fa-2x fa-tools text-success"></i>
                </div>
                <div class="ml-4">
                  <h5 class="h4 mb-2">
                    Vue CLI
                  </h5>
                  <p class="text-muted">
                    Standard tooling for Vue.js development. Out-of-the-box support for Babel, TypeScript, ESLint, PostCSS, PWA, Unit Testing &amp; End-to-end Testing.
                  </p>
                </div>
              </div>
              <div class="d-flex push">
                <div class="item item-rounded bg-danger-light flex-shrink-0">
                  <i class="fa fa-2x fa-table text-danger"></i>
                </div>
                <div class="ml-4">
                  <h5 class="h4 mb-2">
                    Vuex
                  </h5>
                  <p class="text-muted">
                    A state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.
                  </p>
                </div>
              </div>
              <div class="d-flex push">
                <div class="item item-rounded bg-amethyst-lighter flex-shrink-0">
                  <i class="fa fa-2x fa-fire text-amethyst"></i>
                </div>
                <div class="ml-4">
                  <h5 class="h4 mb-2">
                    BootstrapVue
                  </h5>
                  <p class="text-muted">
                    You can build responsive, mobile-first, and ARIA accessible projects on the web using Vue.js and the world's most popular front-end CSS library — Bootstrap 4.
                  </p>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <!-- END Vue Edition -->

    <!-- Sophisticated Features -->
    <div class="bg-white">
      <div class="content content-full content-boxed">
        <div class="py-5 text-center">
          <h2 class="h1 font-w700 mb-3 text-center">
            Sophisticated Features
          </h2>
          <p class="font-size-lg text-muted mb-6 text-center mx-sm-6 mx-lg-10">
            Comes packed with great features and development tools, based on OneUI Remastered design
          </p>
          <b-row class="row-deck">
            <b-col sm="6" md="4" xl="3">
              <!-- Bootstrap 4 -->
              <base-block rounded fx-pop content-full>
                <div class="item item-rounded bg-amethyst-lighter mx-auto my-4">
                  <i class="fa fa-2x fa-fire text-amethyst"></i>
                </div>
                <h4 class="mb-2">Bootstrap 4</h4>
                <p class="font-size-sm text-muted text-left">
                  The latest Bootstrap version powers the framework. Flexbox support and tons of new features are ready for you to use.
                </p>
              </base-block>
              <!-- END Bootstrap 4 -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- Sass -->
              <base-block rounded fx-pop content-full>
                <div class="item item-rounded bg-danger-light mx-auto my-4">
                  <i class="fab fa-2x fa-sass text-danger"></i>
                </div>
                <h4 class="mb-2">Sass</h4>
                <p class="font-size-sm text-muted text-left">
                  Sass is used to override and extent Bootstrap in an intelligent way to ensure a perfect and modular workflow.
                </p>
              </base-block>
              <!-- END Sass -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- ES6 -->
              <base-block rounded fx-pop content-full>
                <div class="item item-rounded bg-warning-light mx-auto my-4">
                  <span class="font-w700 text-warning">ES6</span>
                </div>
                <h4 class="mb-2">ECMAScript 6</h4>
                <p class="font-size-sm text-muted text-left">
                  ES6, the new major JavaScript release, is used, which enables us writing cleaner and better code.
                </p>
              </base-block>
              <!-- END ES6 -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- FontAwesome 5 -->
              <base-block rounded fx-pop content-full>
                <div class="item item-rounded bg-flat-lighter mx-auto my-4">
                  <i class="fab fa-2x fa-font-awesome text-flat"></i>
                </div>
                <h4 class="mb-2">FontAwesome 5</h4>
                <p class="font-size-sm text-muted text-left">
                  The latest Font Awesome version is available, bringing you over 1300 freshly made icons to be used in your projects.
                </p>
              </base-block>
              <!-- END FontAwesome 5 -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- webpack -->
              <base-block rounded fx-pop content-full>
                <div class="item item-rounded bg-default-lighter mx-auto my-4">
                  <i class="fa fa-2x fa-boxes text-default"></i>
                </div>
                <h4 class="mb-2">webpack + Babel</h4>
                <p class="font-size-sm text-muted text-left">
                  Babel makes your JS code compatible with older browsers and webpack bundles your asset files together. Works out-of-the-box with Vue CLI.
                </p>
              </base-block>
              <!-- END webpack -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- User Interface -->
              <base-block rounded fx-pop content-full>
                <div class="item item-rounded bg-modern-lighter mx-auto my-4">
                  <i class="fa fa-2x fa-columns text-modern"></i>
                </div>
                <h4 class="mb-2">User Interface</h4>
                <p class="font-size-sm text-muted text-left">
                  Develop and manage your projects through an accompanying graphical user interface. Perfect for managing your tasks &amp; dependencies.
                </p>
              </base-block>
              <!-- END User Interface -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- Hot Reload -->
              <base-block rounded fx-pop content-full>
                <div class="item item-rounded bg-city-lighter mx-auto my-4">
                  <i class="fa fa-2x fa-sync-alt text-city"></i>
                </div>
                <h4 class="mb-2">Hot Reload</h4>
                <p class="font-size-sm text-muted text-left">
                  When you edit a .vue file, all instances of that component will be swapped in without reloading the page. It also preserves current state.
                </p>
              </base-block>
              <!-- END Hot Reload -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- Autoprefixer -->
              <base-block rounded fx-pop content-full>
                <div class="item item-rounded bg-smooth-lighter mx-auto my-4">
                  <i class="fab fa-2x fa-autoprefixer text-smooth"></i>
                </div>
                <h4 class="mb-2">Autoprefixer</h4>
                <p class="font-size-sm text-muted text-left">
                  Peace of mind when working with Sass. Use the latest CSS syntax and Autoprefixer will auto add any required prefixes for older browsers.
                </p>
              </base-block>
              <!-- END Autoprefixer -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- Components -->
              <base-block rounded fx-pop content-full>
                <div class="item item-rounded bg-gray-light mx-auto my-4">
                  <i class="fa fa-2x fa-truck-loading text-dark"></i>
                </div>
                <h4 class="mb-2">Components</h4>
                <p class="font-size-sm text-muted text-left">
                  Custom vital components are available to be used in your Vue.js templates, making it easier to structure your page content.
                </p>
              </base-block>
              <!-- END Components -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- Remastered  Design -->
              <base-block rounded fx-pop content-full>
                <div class="item item-rounded bg-info-light mx-auto my-4">
                  <i class="fa fa-2x fa-brush text-info"></i>
                </div>
                <h4 class="mb-2">Remastered Design</h4>
                <p class="font-size-sm text-muted text-left">
                  Using the latest styles from OneUI Remastered version, you can be sure that all design elements are available in the Vue Edition as well.
                </p>
              </base-block>
              <!-- END Remastered  Design -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- Layout Features -->
              <base-block rounded fx-pop content-full>
                <div class="item item-rounded bg-success-light mx-auto my-4">
                  <i class="fa fa-2x fa-smile-wink text-success"></i>
                </div>
                <h4 class="mb-2">Layout Features</h4>
                <p class="font-size-sm text-muted text-left">
                  Dark header, light sidebar, flexbox based layout, page overlay, header search and even more layout features are all available.
                </p>
              </base-block>
              <!-- END Layout Features -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- APIs -->
              <base-block rounded fx-pop content-full>
                <div class="item item-rounded bg-warning-light mx-auto my-4">
                  <i class="fa fa-2x fa-wrench text-warning"></i>
                </div>
                <h4 class="mb-2">APIs</h4>
                <p class="font-size-sm text-muted text-left">
                  Easily manipulate blocks and layout features on the fly from any component in your application. Either with buttons or JS code.
                </p>
              </base-block>
              <!-- END APIs -->
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <!-- END Sophisticated Features -->

    <!-- Stats -->
    <div class="bg-primary-darker border-top border-bottom border-5x">
      <div class="content content-full content-boxed">
        <div class="py-5 text-center">
          <h2 class="h1 font-w700 mb-3 text-white">
            Trusted by over 3.900 developers and teams
          </h2>
          <p class="font-size-lg text-white-75 mb-6 mx-sm-6 mx-lg-9">
            <a class="text-primary-light" href="https://1.envato.market/AVD6j">OneUI</a> is one of the Best Seller and Best Rated admin templates on Themeforest. Its success made possible the development of Vue Edition.
          </p>
          <b-row no-gutters class="mx-lg-8">
            <b-col sm="4" class="p-3">
              <p class="display-4 font-w700 text-primary-light mb-0">
                3.900+
              </p>
              <p class="font-size-lg text-white-75 mb-0">
                Purchases
              </p>
            </b-col>
            <b-col sm="4" class="p-3">
              <p class="display-4 font-w700 text-primary-light mb-0">
                250+
              </p>
              <p class="font-size-lg text-white-75 mb-0">
                5 Star Ratings
              </p>
            </b-col>
            <b-col sm="4" class="p-3">
              <p class="display-4 font-w700 text-primary-light mb-0">
                20
              </p>
              <p class="font-size-lg text-white-75 mb-0">
                Free Updates
              </p>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <!-- END Stats -->

    <!-- Call To Action -->
    <div class="bg-white">
      <div class="content content-full content-boxed">
        <div class="py-5 py-md-8 text-center">
          <h2 class="h1 font-w700 mb-3">
            Crafted with <i class="fa fa-fw fa-heart text-city"></i> by <a class="link-fx" href="https://1.envato.market/5Noyb">pixelcave</a>
          </h2>
          <p class="font-size-lg mb-6 mx-sm-6 mx-lg-9">
            Elite author on Themeforest.<br>Passionate web design and development with over 13.000 customers worldwide.
          </p>
          <b-button variant="alt-success" class="px-4 py-2 mr-2 mt-2" href="https://1.envato.market/5Noyb" v-click-ripple>
            <i class="fa fa-fw fa-shopping-cart mr-1"></i> Purchase
          </b-button>
          <b-button variant="alt-primary" class="px-4 py-2 mr-2 mt-2" to="/backend/dashboard" v-click-ripple>
            <i class="fa fa-fw fa-rocket mr-1"></i> Live Preview
          </b-button>
        </div>
      </div>
    </div>
    <!-- END Call To Action -->

    <!-- Footer -->
    <footer class="bg-body-light">
      <div class="content content-boxed py-5">
        <b-row class="font-size-sm">
          <b-col sm="6" order-sm="2" class="py-1 text-center text-sm-right">
            Crafted with <i class="fa fa-heart text-danger"></i> by <a class="font-w600" href="https://1.envato.market/5Noyb">pixelcave</a>
          </b-col>
          <b-col sm="6" order-sm="1" class="py-1 text-center text-sm-left">
            <a class="font-w600" href="https://1.envato.market/5Noyb">{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</a> &copy; {{ $store.getters.appCopyright }}
          </b-col>
        </b-row>
      </div>
    </footer>
    <!-- END Footer -->
  </div>
</template>

<style lang="scss" scoped>
// Custom backgrounds only for the hero of this page
.bg-landing-left,
.bg-landing-right {
  position: relative;
  z-index: 0;

  > div {
    z-index: 1;
  }

  &::before {
    position: absolute;
    z-index: 0;
    content: '';
  }
}

.bg-landing-left::before {
  top: -10%;
  right: -35%;
  width: 336px;
  height: 264px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%232C4E9B' fill-opacity='0.05'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-landing-right::before {
  bottom: -10%;
  right: -10%;
  width: 440px;
  height: 280px;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%232C4E9B' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.promo-image {
  max-width: 100%;
  height: auto;
  border-radius: .375rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .15);
}
</style>