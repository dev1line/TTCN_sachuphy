<template>
  <!-- Page Content -->
  <div class="hero">
    <div class="hero-inner text-center">
      <div class="bg-white overflow-hidden">
        <div class="content content-full">
          <div class="py-4">
            <!-- Error Header -->
            <h1 class="display-1 text-modern">500</h1>
            <h2 class="h3 font-w300 text-muted mb-5">We are sorry but our server encountered an internal error..</h2>
            <!-- END Error Header -->

            <!-- Search Form -->
            <b-form @submit.prevent>
              <b-row class="form-group justify-content-center">
                <b-col sm="6" xl="4">
                  <b-input-group>
                    <b-form-input placeholder="Search application.."></b-form-input>
                    <b-input-group-append>
                      <b-button type="submit" variant="secondary">
                        <i class="fa fa-search"></i>
                      </b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-col>
              </b-row>
            </b-form>
            <!-- END Search Form -->
          </div>
        </div>
      </div>
      <div class="content content-full font-size-sm text-muted">
        <!-- Error Footer -->
        <p class="mb-1">
          Would you like to let us know about it?
        </p>
        <a href="javascript:void(0)" class="link-fx">
          Report it
        </a>
        or
        <router-link to="/backend/pages/errors/all" class="link-fx">
          Go Back to Dashboard
        </router-link>
        <!-- END Error Footer -->
      </div>
    </div>
  </div>
  <!-- END Page Content -->
</template>
