<template>
  <div>
    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <base-block title="products">
        <template #options>
          <b-button
            variant="info"
            class="d-flex align-items-center"
            @click="showCreateProduct"
            ><i class="si si-plus pr-2"></i>New Product</b-button
          >
        </template>
        <b-pagination
          @change="onPageChanged"
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
        />
        <b-table-simple responsive bordered striped table-class="table-vcenter">
          <b-thead>
            <b-tr>
              <b-th class="text-center" style="width: 100px">
                <i class="far fa-file-image"></i>
              </b-th>
              <b-th>Name</b-th>
              <b-th style="width: 30%">Slug</b-th>
              <b-th style="width: 5%">Option</b-th>
              <b-th style="width: 10%">Price</b-th>
              <b-th class="text-center" style="min-width: 110px; width: 110px"
                >Actions</b-th
              >
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="product in productsList" :key="product.id">
              <b-td class="text-center">
                <img
                  class="img rounded"
                  style="width: 100px"
                  :src="`http://localhost:3000/api/v1/images/${product.default_spec.images[0]}`"
                  alt="Avatar"
                />
              </b-td>
              <b-td class="font-w600 font-size-sm">
                <a
                  :href="`http://localhost:3000/api/v1/product/${product.default_spec.slug}`"
                >
                  {{ product.default_spec.name }}
                </a>
              </b-td>
              <b-td class="font-size-sm">
                <em class="text-muted">{{ product.default_spec.slug }}</em>
              </b-td>
              <b-td class="font-size-sm text-center">
                <em class="text-muted">{{ product.options.length }}</em>
              </b-td>
              <b-td>
                <em class="text-muted">{{ product.default_spec.price }} ₫</em>
              </b-td>
              <b-td class="text-center">
                <b-button size="sm" variant="alt-primary">
                  <i class="fa fa-fw fa-pencil-alt"></i>
                </b-button>
                <b-button
                  size="sm"
                  variant="alt-danger"
                  @click="showDeleteProduct(product.default_spec.slug)"
                >
                  <i class="fa fa-fw fa-times"></i>
                </b-button>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Full Table -->
      <!-- Start Modal -->
      <b-modal
        id="modal-create-product"
        size="xl"
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Thêm sản phẩm mới</h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <div class="col-6 px-2">
                <b-form-group label="Name" label-for="block-form5-username">
                  <b-form-input v-model="form.default_spec.name"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Manufacturer"
                  label-for="block-form5-username"
                >
                  <b-form-input
                    v-model="form.default_spec.manufacturer"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Processor"
                  label-for="block-form5-username"
                >
                  <b-form-input
                    v-model="form.default_spec.processor"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Color" label-for="block-form5-username">
                  <b-form-tags
                    tag-variant="primary"
                    input-id="tags-basic1"
                    v-model="form.default_spec.color"
                    placeholder="Add color ..."
                  ></b-form-tags>
                </b-form-group>
                <b-form-group label="Price" label-for="block-form5-username">
                  <b-form-input
                    v-model="form.default_spec.price"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Discount" label-for="block-form5-username">
                  <b-form-input
                    v-model="form.default_spec.discount"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Image" label-for="block-form5-username">
                  <b-form-tags
                    input-id="tags-basic2"
                    tag-variant="primary"
                    v-model="form.default_spec.images"
                    placeholder="Add image ..."
                  ></b-form-tags>
                </b-form-group>
                <b-form-group label="Storage" label-for="block-form5-username">
                  <b-row class="px-3">
                    <b-form-tags
                      disabled
                      class="col-9"
                      input-id="tags-basic3"
                      tag-variant="primary"
                      v-model="tempStorage"
                      placeholder="Add Storage ..."
                    ></b-form-tags>
                    <b-button
                      variant="secondary"
                      class="col-3"
                      @click="showAddStorage"
                      >Storage</b-button
                    >
                  </b-row>
                </b-form-group>
                <b-form-group label="Option" label-for="block-form5-username">
                  <b-button variant="secondary" class="col-2">Option</b-button>
                </b-form-group>
              </div>
              <div class="col-6 px-2">
                <b-form-group label="Slug" label-for="block-form5-username">
                  <b-form-input v-model="this.slugAuto"></b-form-input>
                </b-form-group>
                <b-form-group label="Model" label-for="block-form5-username">
                  <b-form-input
                    v-model="form.default_spec.model"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Graphic Card"
                  label-for="block-form5-username"
                >
                  <b-form-input
                    v-model="form.default_spec.graphic_card"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Description"
                  label-for="block-form5-username"
                >
                  <b-form-input
                    v-model="form.default_spec.description"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Quantity" label-for="block-form5-username">
                  <b-form-input
                    v-model="form.default_spec.quantity"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Operating System"
                  label-for="block-form5-username"
                >
                  <b-form-tags
                    input-id="tags-basic4"
                    v-model="form.default_spec.operating_system"
                    placeholder="Add operating system ..."
                  ></b-form-tags>
                </b-form-group>
                <b-form-group label="Memory" label-for="block-form5-username">
                  <b-row class="px-3">
                    <b-form-tags
                      disabled
                      class="col-9"
                      input-id="tags-basic5"
                      tag-variant="primary"
                      v-model="tempMemory"
                      placeholder="Add Memory ..."
                    ></b-form-tags>
                    <b-button
                      variant="secondary"
                      class="col-3"
                      @click="showAddMemory"
                      >Memory</b-button
                    >
                  </b-row>
                </b-form-group>
                <b-form-group label="Features" label-for="block-form5-username">
                  <b-row class="px-3">
                    <b-form-tags
                      disabled
                      class="col-9"
                      input-id="tags-basic6"
                      tag-variant="primary"
                      v-model="tempFeatures"
                      placeholder="Add Features ..."
                    ></b-form-tags>
                    <b-button
                      variant="secondary"
                      class="col-3"
                      @click="showAddFeature"
                      >Feature</b-button
                    >
                  </b-row>
                </b-form-group>
                <b-form-group label="Display" label-for="block-form5-username">
                  <b-row class="px-3">
                    <b-form-tags
                      disabled
                      class="col-9"
                      input-id="tags-basic7"
                      tag-variant="primary"
                      v-model="tempDisplay"
                      placeholder="Add Display ..."
                    ></b-form-tags>
                    <b-button
                      variant="secondary"
                      class="col-3"
                      @click="showAddDisplay"
                      >Display</b-button
                    >
                  </b-row>
                </b-form-group>
              </div>

              <div class="col-auto px-2">
                <!-- Sales -->
                <b-button variant="success" @click="createProductConfirm"
                  >Lưu</b-button
                >
                <!-- END Sales -->
              </div>
              <div class="col-auto px-2">
                <!-- Payments -->
                <b-button variant="light" @click="cancelCreateProduct"
                  >Hủy</b-button
                >
                <!-- END Payments -->
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- End Modal  -->
      <!-- Modal Add Memory -->
      <b-modal
        id="modal-add-memory"
        size="sm"
        centered
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Add Memory</h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <div class="col-12 px-2">
                <b-form-group label="Capacity" label-for="block-form5-username">
                  <b-form-input v-model="tempForm.capacity"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Speed Bus"
                  label-for="block-form5-username"
                >
                  <b-form-input v-model="tempForm.speed_bus"></b-form-input>
                </b-form-group>
                <b-form-group label="Cas" label-for="block-form5-username">
                  <b-form-input v-model="tempForm.cas"></b-form-input>
                </b-form-group>
                <b-form-group label="Text" label-for="block-form5-username">
                  <b-form-input v-model="tempForm.text"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-auto px-2">
                <b-button variant="success" @click="addMemoryConfirm"
                  >Thêm</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="$bvModal.hide('modal-add-memory')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- End Modal Memory -->
      <!-- Modal Storage -->
      <b-modal
        id="modal-add-storage"
        size="sm"
        centered
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Add Storage</h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <div class="col-12 px-2">
                <b-form-group label="Capacity" label-for="block-form5-username">
                  <b-form-input v-model="tempForm.capacity"></b-form-input>
                </b-form-group>
                <b-form-group label="Type" label-for="block-form5-username">
                  <b-form-select
                    v-model="tempForm.type"
                    :options="storageTypeOptions"
                  ></b-form-select>
                </b-form-group>
                <b-form-group label="Text" label-for="block-form5-username">
                  <b-form-input v-model="tempForm.text"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-auto px-2">
                <b-button variant="success" @click="addStorageConfirm"
                  >Thêm</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="$bvModal.hide('modal-add-storage')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- End Modal Storage -->
      <!-- Modal feature -->
      <b-modal
        id="modal-add-feature"
        size="sm"
        centered
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Add Feature</h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <div class="col-12 px-2">
                <b-form-group label="Name" label-for="block-form5-username">
                  <b-form-input v-model="tempForm.name"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="More Info"
                  label-for="block-form5-username"
                >
                  <b-form-input v-model="tempForm.more_info"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-auto px-2">
                <b-button variant="success" @click="addFeaturesConfirm"
                  >Thêm</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="$bvModal.hide('modal-add-feature')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- End Modal Feature-->
      <!-- Modal Display -->
      <b-modal
        id="modal-add-display"
        size="sm"
        centered
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Add Display</h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <div class="col-12 px-2">
                <b-form-group
                  label="Resolution"
                  label-for="block-form5-username"
                >
                  <b-form-input v-model="tempForm.resolution"></b-form-input>
                </b-form-group>
                <b-form-group label="Size" label-for="block-form5-username">
                  <b-form-input v-model="tempForm.size"></b-form-input>
                </b-form-group>
                <b-form-group label="Panel" label-for="block-form5-username">
                  <b-form-input v-model="tempForm.panel"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="More Info"
                  label-for="block-form5-username"
                >
                  <b-form-input v-model="tempForm.more_infor"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-auto px-2">
                <b-button variant="success" @click="addDisplayConfirm"
                  >Thêm</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="$bvModal.hide('modal-add-display')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- End Modal Display-->
      <b-modal
        id="modal-delete-product"
        size="md"
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">
              Bạn muốn xóa sản phẩm có slug {{ currentSelectedProduct }} không ?
            </h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <div class="col-auto px-2">
                <!-- Sales -->
                <b-button variant="danger" @click="deleteProductConfirm"
                  >Đồng ý</b-button
                >
                <!-- END Sales -->
              </div>
              <div class="col-auto px-2">
                <!-- Payments -->
                <b-button
                  variant="light"
                  @click="$bvModal.hide('modal-delete-product')"
                  >Từ chối</b-button
                >
                <!-- END Payments -->
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { chunk } from "lodash";
// import configs from "@/configs";
export default {
  data() {
    return {
      tempForm: {},
      tempStorage: [],
      tempMemory: [],
      tempFeatures: [],
      tempDisplay: [],
      storageTypeOptions: [
        { value: "SSD", text: "SSD" },
        { value: "HDD", text: "HDD" },
        { value: "SSD NVMe", text: "SSD NVMe" },
      ],
      currentSelectedProduct: "",
      currentPage: 1,
      perPage: 4,
      form: {
        default_spec: {
          name: "",
          model: "",
          manufacturer: "",
          processor: "",
          color: ["Black", "Grey"],
          graphic_card: "",
          memory: [],
          storage: [],
          display: [],
          features: [],
          operating_system: ["Windows 10", "Ubuntu"],
          images: [],
          description: "",
          quantity: 0,
          price: 0,
          discount: 0,
          slug: "",
        },
        options: [],
      },
    };
  },
  computed: {
    totalRows() {
      return this.products.length;
    },
    pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    },
    chunkedProducts() {
      return chunk(this.products, this.perPage);
    },
    paginatedProducts() {
      return this.chunkedProducts[this.currentPage - 1];
    },
    productsList() {
      if (!this.products) return [];
      return this.paginatedProducts;
    },
    slugAuto() {
      return this.stringToSlug(this.form.default_spec.name);
    },
    ...mapState("products", {
      products: "products",
    }),
  },
  created() {
    console.log(this.fetchProducts());
    this.fetchProducts();
  },
  methods: {
    onPageChanged(page) {
      // this.paginate(this.perPage, page - 1);
      this.currentPage = page;
    },
    ...mapActions("products", {
      fetchProducts: "fetchProducts",
      deleteProduct: "deleteProduct",
      createProduct: "createProduct",
    }),
    showCreateProduct() {
      this.$bvModal.show("modal-create-product");
    },
    showAddMemory() {
      this.$bvModal.show("modal-add-memory");
    },
    showAddStorage() {
      this.$bvModal.show("modal-add-storage");
    },
    showAddFeature() {
      this.$bvModal.show("modal-add-feature");
    },
    showAddDisplay() {
      this.$bvModal.show("modal-add-display");
    },
    showDeleteProduct(slug) {
      this.$bvModal.show("modal-delete-product");
      this.currentSelectedProduct = slug;
    },
    createProductConfirm() {
      this.form.default_spec.slug = this.slugAuto;
      const product = this.form;
      // console.log(product);
      this.createProduct(product);
      this.$bvModal.hide("modal-create-product");
      this.tempForm={};
      this.tempStorage=[];
      this.tempMemory=[];
      this.tempDisplay=[];
      this.tempFeatures=[];
      this.form = {
        default_spec: {
          name: "",
          model: "",
          manufacturer: "",
          processor: "",
          color: ["Black", "Grey"],
          graphic_card: "",
          memory: [],
          storage: [],
          display: [],
          features: [],
          operating_system: ["Windows 10", "Ubuntu"],
          images: [],
          description: "",
          quantity: 0,
          price: 0,
          discount: 0,
          slug: "",
        },
        options: [],
      };
    },
    deleteProductConfirm() {
      const productSlug = this.currentSelectedProduct;
      this.deleteProduct(productSlug);
      this.$bvModal.hide("modal-delete-product");
    },
    addStorageConfirm() {
      const { capacity, type, text } = this.tempForm;
      this.tempStorage.push({ capacity, type, text });
      this.form.default_spec.storage.push({ capacity, type, text });
      this.tempForm = {};
      this.$bvModal.hide("modal-add-storage");
    },
    addMemoryConfirm() {
      const { capacity, speed_bus, cas, text } = this.tempForm;
      this.tempMemory.push({ capacity, speed_bus, cas, text });
      this.form.default_spec.memory.push({ capacity, speed_bus, cas, text });
      this.tempForm = {};
      this.$bvModal.hide("modal-add-memory");
    },
    addFeaturesConfirm() {
      const { name, more_info } = this.tempForm;
      this.tempFeatures.push({ name, more_info });
      this.form.default_spec.features.push({ name, more_info });
      this.tempForm = {};
      this.$bvModal.hide("modal-add-feature");
    },
    addDisplayConfirm() {
      const { resolution, size, panel, more_info } = this.tempForm;
      this.tempDisplay.push({ resolution, size, panel, more_info });
      this.form.default_spec.features.push({ resolution, size, panel, more_info });
      this.tempForm = {};
      this.$bvModal.hide("modal-add-display");
    },
    cancelCreateProduct() {
      this.$bvModal.hide("modal-create-product");
      this.tempForm={};
      this.tempStorage=[];
      this.tempMemory=[];
      this.tempDisplay=[];
      this.tempFeatures=[];
      this.form = {
        default_spec: {
          name: "",
          model: "",
          manufacturer: "",
          processor: "",
          color: ["Black", "Grey"],
          graphic_card: "",
          memory: [],
          storage: [],
          display: [],
          features: [],
          operating_system: ["Windows 10", "Ubuntu"],
          images: [],
          description: "",
          quantity: 0,
          price: 0,
          discount: 0,
          slug: "",
        },
        options: [],
      };
    },
    stringToSlug(str) {
      str = str.replace(/^\s+|\s+$/g, ""); // trim
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
      var to = "aaaaeeeeiiiioooouuuunc------";
      for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
      }

      str = str
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

      return str;
    },
  },
};
</script>

<style>
</style>