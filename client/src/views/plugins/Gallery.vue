<template>
  <div>
    <div class="content">
      <base-block title="Gallery">
        <template #options>
          <b-button
            variant="info"
            class="d-flex align-items-center"
            @click="showUploadImage"
            ><i class="si si-plus pr-2"></i>New Image</b-button
          >
        </template>
        <b-pagination
          @change="onPageChanged"
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
        />
        <gallery
          :images="galleryPaginatedImages"
          :index="index"
          :options="{ indicatorOptions: { thumbnailIndicators: true } }"
          @close="index = null"
        ></gallery>
        <b-row>
          <b-col sm="9">
            <b-row class="items-push">
              <b-col
                md="6"
                lg="4"
                xl="3"
                class="animated fadeIn"
                v-for="(image, imageIndex) in paginatedImages"
                :key="imageIndex"
              >
                <b-form-checkbox
                  size="lg"
                  v-model="imagesSelected[image.name]"
                  @click="imagesSelected[image.name] = true"
                ></b-form-checkbox>
                <!-- <input class="checkbox" type="checkbox" @click.self="imagesSelected[photoIndex] = !imagesSelected[photoIndex]" id="vehicle1" name="vehicle1" :value="imagesSelected[photoIndex]" > -->
                <a
                  class="img-link img-link-zoom-in img-thumb"
                  href="javascript:void(0)"
                  :style="{'width': '100%'}"
                  @click="index = imageIndex"
                >
                  <div
                    style="
                      width: 100%;
                      padding-top: 56.25%;
                      position: relative;
                      overflow: hidden;
                    "
                  >
                    <img
                      class="img-fluid"
                      :src="`${serverAPIURL}images/${image.name}`"
                      alt="Photo"
                      style="position: absolute; top: 0; left: 0; z-index: 2"
                    />
                  </div>
                </a>
              </b-col>
            </b-row>
          </b-col>
          <b-col sm="3">
            <b-card
              title="Danh sách đã chọn"
              text-variant="black"
              class="text-center"
              style="overflow-y: auto;"
            >
              
              <b-card
              text-variant="black"
              class="text-center"
              style="overflow-y: auto ;height:30vh;"
              >
                <li class="card-text" v-for="i in imagesToDo" :key="i">
                {{i}}
              </li>
              </b-card>
              <b-button @click="showDeleteImages(imagesToDo)" variant="danger"
                >Delete</b-button
              >
            </b-card>
          </b-col>
        </b-row>
      </base-block>

      <b-modal
        id="modal-upload-image"
        size="md"
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Tải lên một ảnh mới</h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <div class="col-12 px-2"></div>
              <!-- Styled -->
              <b-form-file
                v-model="file1"
                :state="Boolean(file1)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
              <b-form-input
                :value="file1 ? file1.name : ''"
                readonly
                class="mt-3"
              ></b-form-input>
              <!-- <div class="mt-3" >Selected file: {{ file1 ? file1.name : "" }}</div> -->
              <div class="col-auto px-2 mt-3">
                <b-button variant="success" @click="handleOk">OK</b-button>
              </div>
              <div class="col-auto px-2 mt-3">
                <b-button
                  variant="light"
                  @click="$bvModal.hide('modal-upload-image')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-delete-images"
        size="md"
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">
              Bạn có chắc chắn muốn XÓA những ảnh đã chọn ?
            </h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <div class="col-auto px-2">
                <!-- Sales -->
                <b-button variant="danger" @click="deleteImagesConfirm"
                  >Đồng ý</b-button
                >
                <!-- END Sales -->
              </div>
              <div class="col-auto px-2">
                <!-- Payments -->
                <b-button
                  variant="light"
                  @click="$bvModal.hide('modal-delete-images')"
                  >Từ chối</b-button
                >
                <!-- END Payments -->
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- Delete Modal End -->
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
import { chunk, forIn } from "lodash";
import { mapActions, mapState } from "vuex";
import configs from "@/configs";
export default {
  components: {
    gallery: VueGallery,
  },
  name: "MyBootstrapGrid",
  data() {
    return {
      imagesSelected: {},
      index: null,
      serverAPIURL: configs.API_SERVER_URL,
      perPage: 8,
      currentImageToBeDeleted: null,
      currentPage: 1,
      file1: null,
    };
  },
  computed: {
    galleryPaginatedImages() {
      if (!this.paginatedImages) return [];
      return this.paginatedImages.map(
        (image) => `${this.serverAPIURL}images/${image.name}`
      );
    },
    totalRows() {
      return this.images.length;
    },
    pageCount() {
      let l = this.totalRows,
        s = this.perPage;
      return Math.floor(l / s);
    },
    chunkedPhotos() {
      return chunk(this.images, this.perPage);
    },
    imagesToDo() {
      let im = [];
      forIn(this.imagesSelected, (value, key) => {
        if (value === true) {
          im.push(key);
        }
      });
      return im;
    },
    ...mapState("images", {
      images: "images",
    }),
    paginatedImages() {
      return this.chunkedPhotos[this.currentPage - 1];
    },
  },
  created() {
    this.fetchImages();
  },
  methods: {
    onPageChanged(page) {
      // this.paginate(this.perPage, page - 1);
      this.currentPage = page;
    },
    showUploadImage() {
      this.$bvModal.show("modal-upload-image");
    },
    handleOk() {
      if (this.file1 === null) {
        return;
      } else {
        this.uploadImageConfirm();
      }
    },
    uploadImageConfirm() {
      this.$bvModal.hide("modal-upload-image");
      const formData = new FormData();
      formData.append("image", this.file1);
      this.uploadImage(formData);
      this.file1 = null;
    },
    showDeleteImages(imagesToDo) {
      if (imagesToDo.length === 0) return;
      this.currentImageToBeDeleted = imagesToDo;
      this.$bvModal.show("modal-delete-images");
    },
    deleteImagesConfirm() {
      this.deleteImages(this.currentImageToBeDeleted);
      this.$bvModal.hide("modal-delete-images");
      this.imagesSelected = {};
    },

    ...mapActions("images", {
      fetchImages: "fetchImages",
      uploadImage: "uploadImage",
      deleteImages: "deleteImages",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>