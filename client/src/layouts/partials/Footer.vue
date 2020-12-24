<template>
  <!-- Footer -->
  <footer id="page-footer">
    <slot>
      <div class="content py-3">
        <b-row class="font-size-sm">
          <b-col sm="6" order-sm="2" class="py-1 text-center text-sm-right">
            Crafted with <i class="fa fa-heart text-danger"></i> by SACHUPHY
          </b-col>
          <b-col sm="6" order-sm="1" class="py-1 text-center text-sm-left">
            <a class="font-w600" href="https://www.facebook.com/holehuy23.it/" target="_blank">{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</a> &copy; {{ $store.getters.appCopyright }}
          </b-col>
        </b-row>
      </div>
    </slot>
  </footer>
  <!-- END Footer -->
</template>

<script>
export default {
  name: 'BaseFooter',
  props: {
    classes: String
  }
}
</script>
