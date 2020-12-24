<template>
  <div>
    <!-- Page Content -->
    <!-- <div>{{orders}}</div> -->
    <div class="content">
      <!-- Full Table -->
      <base-block title="users">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
        ></b-pagination>
        <b-table
          responsive
          striped
          bordered
          hover
          class="text-center"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          :items="orders"
        >
          <template #cell(actions)="order">
            <b-button
              size="sm"
              variant="alt-primary"
              v-b-modal.modal-order
              @click="showOrderDetails(order.item)"
            >
              <i class="fa fa-fw fa-eye"></i>
            </b-button>
          </template>
        </b-table>
      </base-block>
      <b-modal
        id="modal-order"
        size="lg"
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Chi tiết Order</h3>
          </div>
          <div class="block-content block-content-full">
            <b-table
              responsive
              striped
              bordered
              hover
              :fields="fieldsOrder"
              :items="currentOrder"
            >
              <template #cell(link)="currentOrderitem">
                <a target="_blank"
                  :href="`http://192.168.31.229:3001/product/${currentOrderitem.item.slug}`"
                  >Xem sản phẩm</a
                >
              </template>
            </b-table>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import { validationMixin } from 'vuelidate'
// import { required, minLength,maxLength,alphaNum } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      fields: [
        "order_id",
        "name",
        "address",
        "phone_number",
        "created_at",
        "actions",
      ],
      fieldsOrder: ["detail.name", "quantity", "price", "link"],
      currentPage: 1,
      perPage: 5,
      currentOrder: [],
    };
  },
  computed: {
    rows() {
      return this.orders.length;
    },
    ...mapState("orders", {
      orders: "orders",
    }),
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    showOrderDetails(order) {
      this.currentOrder = order.products;
    },
    ...mapActions("orders", {
      fetchOrders: "fetchOrders",
    }),
  },
};
</script>
<style scope>
</style>
