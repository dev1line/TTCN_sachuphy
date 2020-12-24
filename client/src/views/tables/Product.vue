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
              <b-th style="width: 30%">Name</b-th>
              <b-th style="width: 25%">Slug</b-th>
              <b-th style="width: 8%">Option</b-th>
              <b-th style="width: 10%">Price</b-th>
              <b-th class="text-center" style="width:10%"
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
                  :src="`${API_SERVER_URL}images/${product.default_spec.images[0]}`"
                  alt="Avatar"
                />
              </b-td>
              <b-td class="font-w600 font-size-sm">
                <a
                  :href="`${CLIENT_URL}/product/${product.default_spec.slug}`"
                >
                  {{ product.default_spec.name }}
                </a>
              </b-td>
              <b-td class="font-size-sm">
                <em class="text-muted">{{ product.default_spec.slug }}</em>
              </b-td>
              <b-td class="font-size-sm text-center">
                <em class="text-muted">{{ product.options.length }}</em>
                <b-button
                  size="sm"
                  variant="alt-success"
                  @click="showOptions(product.options)"
                >
                  Edit
                </b-button>
              </b-td>
              <b-td>
                <em class="text-muted">{{ product.default_spec.price }} ₫</em>
              </b-td>
              <b-td class="text-center">
                <b-button size="sm" variant="alt-primary" @click="showEditProduct(product.default_spec.slug)">
                  <i class="fa fa-fw fa-pencil-alt"></i>
                </b-button>
                <b-button
                  size="sm"
                  variant="alt-danger"
                  @click="showDeleteProduct(product.default_spec.slug)"
                >
                  <i class="fa fa-fw fa-times"></i>
                </b-button>
                <!-- <b-button
                  size="sm"
                  variant="alt-success"
                  @click="showAddOption(product.default_spec.slug)"
                >
                  <i class="fa fa-fw fa-plus"></i>
                </b-button> -->
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Full Table -->
      <!-- Start Modal Add Option-->

      <!-- Start Modal Create Product-->
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
                  <b-row class="px-3">
                    <b-form-tags
                      disabled
                      class="col-11"
                      input-id="tags-basic"
                      v-model="form.default_spec.images"
                      placeholder="Add Images ..."
                    ></b-form-tags>
                    <b-button
                      variant="secondary"
                      class="col-1"
                      @click="showAddImages"
                      ><i class="si si-plus pr-2"></i
                    ></b-button>
                  </b-row>
                </b-form-group>

                <b-form-group label="Storage" label-for="block-form5-username">
                  <b-row class="px-3">
                    <!-- <b-form-tags
                      disabled
                      class="col-9"
                      input-id="tags-basic3"
                      tag-variant="primary"
                      v-model="tempStorage"
                      placeholder="Add Storage ..."
                    ></b-form-tags> -->
                    <b-button
                      v-for="storage in tempStorage"
                      :key="storage.index"
                      @click="
                        showEditStorage(
                          'modal-edit-storage',
                          storage,
                          tempStorage.indexOf(storage)
                        )
                      "
                      >Storage-{{ tempStorage.indexOf(storage) }}</b-button
                    >
                    <b-button
                      variant="secondary"
                      class="col-1"
                      @click="showAddStorage('product')"
                      ><i class="si si-plus pr-2"></i
                    ></b-button>
                  </b-row>
                </b-form-group>
                <b-form-group label="Display" label-for="block-form5-username">
                  <b-row class="px-3">
                    <!-- <b-form-tags
                      disabled
                      class="col-9"
                      input-id="tags-basic7"
                      tag-variant="primary"
                      v-model="tempDisplay"
                      placeholder="Add Display ..."
                    ></b-form-tags> -->
                    <b-button
                      v-for="display in tempDisplay"
                      :key="display.index"
                      @click="
                        showEditDisplay(
                          'modal-edit-display',
                          display,
                          tempDisplay.indexOf(display)
                        )
                      "
                    >
                      Display-{{ tempDisplay.indexOf(display) }}
                    </b-button>
                    <b-button
                      variant="secondary"
                      class="col-1"
                      @click="showAddDisplay('product')"
                      ><i class="si si-plus pr2"></i
                    ></b-button>
                  </b-row>
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
                <b-form-group
                  label="Visibility"
                  label-for="block-form5-username"
                >
                  <b-form-select
                    v-model="form.default_spec.visibility"
                    :options="visibilityOptions"
                  ></b-form-select>
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
                    <!-- <b-form-tags
                      disabled
                      class="col-9"
                      input-id="tags-basic5"
                      tag-variant="primary"
                      v-model="tempMemory"
                      placeholder="Add Memory ..."
                    ></b-form-tags> -->
                    <b-button
                      v-for="memory in tempMemory"
                      :key="memory.index"
                      @click="
                        showEditMemory(
                          'modal-edit-memory',
                          memory,
                          tempMemory.indexOf(memory)
                        )
                      "
                      >Memory-{{ tempMemory.indexOf(memory) }}</b-button
                    >
                    <b-button
                      variant="secondary"
                      class="col-1"
                      @click="showAddMemory('product')"
                      ><i class="si si-plus pr2"></i
                    ></b-button>
                  </b-row>
                </b-form-group>
                <b-form-group label="Features" label-for="block-form5-username">
                  <b-row class="px-3">
                    <b-button
                      v-for="feature in tempFeatures"
                      :key="feature.index"
                      @click="
                        showEditFeature(
                          'modal-edit-feature',
                          feature,
                          tempFeatures.indexOf(feature)
                        )
                      "
                    >
                      Feature-{{ tempFeatures.indexOf(feature) }}
                    </b-button>
                    <b-button
                      variant="secondary"
                      class="col-1"
                      @click="showAddFeature('product')"
                      ><i class="si si-plus pr2"></i
                    ></b-button>
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
      <!-- End Modal Create Product-->
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
                <b-button variant="success" @click="addMemoryConfirm(isOption)"
                  >Thêm</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button variant="light" @click="hideModal('modal-add-memory')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- End Modal Memory -->
      <!-- Modal Edit Memory -->
      <b-modal
        id="modal-edit-memory"
        size="sm"
        centered
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Edit Memory</h3>
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
                <b-button variant="success" @click="editMemoryConfirm"
                  >Chỉnh sửa</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="success"
                  @click="deleteElement('modal-edit-memory')"
                  >Xóa</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="hideModal('modal-edit-memory')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- End Modal Edit Memory -->
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
                <b-button variant="success" @click="addStorageConfirm(isOption)"
                  >Thêm</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="hideModal('modal-add-storage')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- End Modal Storage -->
      <!-- Modal Edit Storage -->
      <b-modal
        id="modal-edit-storage"
        size="sm"
        centered
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Edit Storage</h3>
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
                <b-button variant="success" @click="editStorageConfirm"
                  >Chỉnh sửa</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="success"
                  @click="deleteElement('modal-edit-storage')"
                  >Xóa</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="hideModal('modal-edit-storage')"
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
                <b-button
                  variant="success"
                  @click="addFeaturesConfirm(isOption)"
                  >Thêm</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="hideModal('modal-add-feature')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- End Modal Feature-->
      <!-- Modal Edit Feature -->
      <b-modal
        id="modal-edit-feature"
        size="sm"
        centered
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Edit Feature</h3>
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
                <b-button variant="success" @click="editFeatureConfirm"
                  >Chỉnh sửa</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="success"
                  @click="deleteElement('modal-edit-feature')"
                  >Xóa</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="hideModal('modal-edit-feature')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- End Modal Edit Feature-->
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
                  <b-form-input
                    v-model="tempForm.more_information"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-auto px-2">
                <b-button variant="success" @click="addDisplayConfirm(isOption)"
                  >Thêm</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="hideModal('modal-add-display')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- End Modal Display-->
      <!-- Modal Edit Display -->
      <b-modal
        id="modal-edit-display"
        size="sm"
        centered
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Edit Display</h3>
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
                  <b-form-input v-model="tempForm.more_info"></b-form-input>
                </b-form-group>
              </div>
              <div class="col-auto px-2">
                <b-button variant="success" @click="editDisplayConfirm"
                  >Chỉnh sửa</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="success"
                  @click="deleteElement('modal-edit-display')"
                  >Xóa</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="hideModal('modal-edit-display')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- End Modal Edit Display-->
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
      <!-- Modal Create Option -->
      <b-modal
        id="modal-create-option"
        size="xl"
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Add Option</h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <div class="col-6 px-2">
                <b-form-group label="Name" label-for="block-form5-username">
                  <b-form-input v-model="formOption.name"></b-form-input>
                </b-form-group>

                <b-form-group label="Quantity" label-for="block-form5-username">
                  <b-form-input v-model="formOption.quantity"></b-form-input>
                </b-form-group>
                <b-form-group label="Discount" label-for="block-form5-username">
                  <b-form-input v-model="formOption.discount"></b-form-input>
                </b-form-group>
                <b-form-group label="Memory" label-for="block-form5-username">
                  <b-button v-for="memory in tempMemory" :key="memory.index">
                    Memory-{{ tempMemory.indexOf(memory) + 1 }}
                  </b-button>
                  <b-button
                    variant="secondary"
                    class="col-1"
                    @click="showAddMemory('product')"
                    ><i class="si si-plus pr2"></i
                  ></b-button>
                </b-form-group>
                <b-form-group label="Display" label-for="block-form5-username">
                  <b-button v-for="display in tempDisplay" :key="display.index">
                    Display-{{ tempDisplay.indexOf(display) + 1 }}
                  </b-button>
                  <b-button
                    variant="secondary"
                    class="col-1"
                    @click="showAddDisplay('product')"
                    ><i class="si si-plus pr2"></i
                  ></b-button>
                </b-form-group>
              </div>
              <div class="col-6 px-2">
                <b-form-group
                  label="Processor"
                  label-for="block-form5-username"
                >
                  <b-form-input v-model="formOption.processor"></b-form-input>
                </b-form-group>
                <b-form-group
                  label="Graphic Card"
                  label-for="block-form5-username"
                >
                  <b-form-input
                    v-model="formOption.graphic_card"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Price" label-for="block-form5-username">
                  <b-form-input v-model="formOption.price"></b-form-input>
                </b-form-group>
                <b-form-group label="Feature" label-for="block-form5-username">
                  <b-button
                    v-for="feature in tempFeatures"
                    :key="feature.index"
                  >
                    Feature-{{ tempFeatures.indexOf(feature) + 1 }}
                  </b-button>
                  <b-button
                    variant="secondary"
                    class="col-1"
                    @click="showAddFeature('product')"
                    ><i class="si si-plus pr2"></i
                  ></b-button>
                </b-form-group>
                <b-form-group label="Storage" label-for="block-form5-username">
                  <b-button v-for="storage in tempStorage" :key="storage.index">
                    Storate-{{ tempStorage.indexOf(storage) + 1 }}
                  </b-button>
                  <b-button
                    variant="secondary"
                    class="col-1"
                    @click="showAddStorage('product')"
                    ><i class="si si-plus pr2"></i
                  ></b-button>
                </b-form-group>
              </div>
              <div class="col-auto px-2">
                <b-button variant="success" @click="createOptionConfirm"
                  >Thêm</b-button
                >
              </div>

              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="hideModal('modal-create-option')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>

      <b-modal
        id="modal-add-images"
        size="xl"
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Add Image</h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <GalleryForProduct :chosenImages="form.default_spec.images"></GalleryForProduct>
            </div>
          </div>
        </div>
      </b-modal>

      <b-modal
        id="modal-edit-product"
        size="xl"
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Edit Product</h3>
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
                  <b-row class="px-3">
                    <b-form-tags
                      disabled
                      class="col-11"
                      input-id="tags-basic"
                      v-model="form.default_spec.images"
                      placeholder="Add Images ..."
                    ></b-form-tags>
                    <b-button
                      variant="secondary"
                      class="col-1"
                      @click="showAddImages"
                      ><i class="si si-plus pr-2"></i
                    ></b-button>
                  </b-row>
                </b-form-group>

                <b-form-group label="Storage" label-for="block-form5-username">
                  <b-row class="px-3">
                    <!-- <b-form-tags
                      disabled
                      class="col-9"
                      input-id="tags-basic3"
                      tag-variant="primary"
                      v-model="tempStorage"
                      placeholder="Add Storage ..."
                    ></b-form-tags> -->
                    <b-button
                      v-for="storage in tempStorage"
                      :key="storage.index"
                      @click="
                        showEditStorage(
                          'modal-edit-storage',
                          storage,
                          tempStorage.indexOf(storage)
                        )
                      "
                      >Storage-{{ tempStorage.indexOf(storage) }}</b-button
                    >
                    <b-button
                      variant="secondary"
                      class="col-1"
                      @click="showAddStorage('product')"
                      ><i class="si si-plus pr-2"></i
                    ></b-button>
                  </b-row>
                </b-form-group>
                <b-form-group label="Display" label-for="block-form5-username">
                  <b-row class="px-3">
                    <!-- <b-form-tags
                      disabled
                      class="col-9"
                      input-id="tags-basic7"
                      tag-variant="primary"
                      v-model="tempDisplay"
                      placeholder="Add Display ..."
                    ></b-form-tags> -->
                    <b-button
                      v-for="display in tempDisplay"
                      :key="display.index"
                      @click="
                        showEditDisplay(
                          'modal-edit-display',
                          display,
                          tempDisplay.indexOf(display)
                        )
                      "
                    >
                      Display-{{ tempDisplay.indexOf(display) }}
                    </b-button>
                    <b-button
                      variant="secondary"
                      class="col-1"
                      @click="showAddDisplay('product')"
                      ><i class="si si-plus pr2"></i
                    ></b-button>
                  </b-row>
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
                <b-form-group
                  label="Visibility"
                  label-for="block-form5-username"
                >
                  <b-form-select
                    v-model="form.default_spec.visibility"
                    :options="visibilityOptions"
                  ></b-form-select>
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
                    <!-- <b-form-tags
                      disabled
                      class="col-9"
                      input-id="tags-basic5"
                      tag-variant="primary"
                      v-model="tempMemory"
                      placeholder="Add Memory ..."
                    ></b-form-tags> -->
                    <b-button
                      v-for="memory in tempMemory"
                      :key="memory.index"
                      @click="
                        showEditMemory(
                          'modal-edit-memory',
                          memory,
                          tempMemory.indexOf(memory)
                        )
                      "
                      >Memory-{{ tempMemory.indexOf(memory) }}</b-button
                    >
                    <b-button
                      variant="secondary"
                      class="col-1"
                      @click="showAddMemory('product')"
                      ><i class="si si-plus pr2"></i
                    ></b-button>
                  </b-row>
                </b-form-group>
                <b-form-group label="Features" label-for="block-form5-username">
                  <b-row class="px-3">
                    <b-button
                      v-for="feature in tempFeatures"
                      :key="feature.index"
                      @click="
                        showEditFeature(
                          'modal-edit-feature',
                          feature,
                          tempFeatures.indexOf(feature)
                        )
                      "
                    >
                      Feature-{{ tempFeatures.indexOf(feature) }}
                    </b-button>
                    <b-button
                      variant="secondary"
                      class="col-1"
                      @click="showAddFeature('product')"
                      ><i class="si si-plus pr2"></i
                    ></b-button>
                  </b-row>
                </b-form-group>
              </div>
              <div class="col-auto px-2">
                <!-- Sales -->
                <b-button variant="success" @click="editProductConfirm"
                  >Lưu</b-button
                >
                <!-- END Sales -->
              </div>
              <div class="col-auto px-2">
                <!-- Payments -->
                <b-button variant="light" @click="cancelEditProduct"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-edit-options"
        size="xl"
        centered
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Edit Options</h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
             <b-table
          responsive
          striped
          bordered
          hover
          class="text-center"
          :fields="fields"
          :items="currentOptions"
        ></b-table>
              <div class="col-auto px-2">
                <b-button
                  variant="success"
                  @click="addFeaturesConfirm(isOption)"
                  >Thêm</b-button
                >
              </div>
              <div class="col-auto px-2">
                <b-button
                  variant="light"
                  @click="hideModal('modal-add-feature')"
                  >Hủy</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from "vuex";
import { chunk } from "lodash";
import configs from "@/configs";
import GalleryForProduct from "@/components/GalleryForProduct";
import { pickBy,findIndex } from "lodash";
export default {
  data() {
    return {
      fields: [
        "slug",
        "name",
         "actions"
      ],
      currentOptions:[],
      CLIENT_URL: configs.CLIENT_URL,
      API_SERVER_URL: configs.API_SERVER_URL,
      currentSelectedProductIndex:-1,
      tempForm: {},
      tempStorage: [],
      tempMemory: [],
      tempFeatures: [],
      tempDisplay: [],
      tempOption: [],
      currentIndex: -1,
      isOption: true,
      storageTypeOptions: [
        { value: "SSD", text: "SSD" },
        { value: "HDD", text: "HDD" },
        { value: "SSD NVMe", text: "SSD NVMe" },
      ],
      currentSelectedProduct: "",
      currentPage: 1,
      perPage: 4,
      visibilityOptions: [
        { value: "public", text: "Public" },
        { value: "hidden", text: "Hidden" },
      ],
      form: {
        default_spec: {
          name: "",
          model: "",
          manufacturer: "",
          processor: "",
          visibility: "public",
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
      formOption: {
        name: "",
        processor: "",
        graphic_card: "",
        memory: [],
        storage: [],
        display: [],
        features: [],
        quantity: 5,
        price: 0,
        discount: 5,
      },
    };
  },
  components: {
    GalleryForProduct: GalleryForProduct,
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
    slugAutoOption() {
      return this.stringToSlug(
        this.currentSelectedProduct + this.formOption.name
      );
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
      createOption: "createOption",
      updateProduct: "updateProduct"
    }),
    showEditStorage(modalName, storage, index) {
      this.tempForm = storage;
      this.currentIndex = index;
      this.$bvModal.show(modalName);
    },
    editStorageConfirm() {
      const { capacity, type, text } = this.tempForm;
      this.tempStorage[this.currentIndex] = { capacity, type, text };
      this.form.default_spec.storage[this.currentIndex] = {
        capacity,
        type,
        text,
      };
      this.$bvModal.hide("modal-edit-storage");
      this.tempForm = {};
      this.currentIndex = -1;
    },
    showEditMemory(modalName, memory, index) {
      this.tempForm = memory;
      this.currentIndex = index;
      this.$bvModal.show(modalName);
    },
    editMemoryConfirm() {
      const { capacity, speed_bus, cas, text } = this.tempForm;
      this.tempMemory[this.currentIndex] = { capacity, speed_bus, cas, text };
      this.form.default_spec.memory[this.currentIndex] = {
        capacity,
        speed_bus,
        cas,
        text,
      };
      this.$bvModal.hide("modal-edit-memory");
      this.tempForm = {};
      this.currentIndex = -1;
    },
    showEditFeature(modalName, feature, index) {
      this.tempForm = feature;
      this.currentIndex = index;
      this.$bvModal.show(modalName);
    },
    editFeatureConfirm() {
      const { name, more_info } = this.tempForm;
      this.tempFeatures[this.currentIndex] = { name, more_info };
      this.form.default_spec.features[this.currentIndex] = { name, more_info };
      this.$bvModal.hide("modal-edit-feature");
      this.tempForm = {};
      this.currentIndex = -1;
    },
    showEditDisplay(modalName, display, index) {
      this.tempForm = display;
      this.currentIndex = index;
      this.$bvModal.show(modalName);
    },
    editDisplayConfirm() {
      const { resolution, size, panel, more_info } = this.tempForm;
      this.tempDisplay[this.currentIndex] = {
        resolution,
        size,
        panel,
        more_info,
      };
      this.form.default_spec.display[this.currentIndex] = {
        resolution,
        size,
        panel,
        more_info,
      };
      this.$bvModal.hide("modal-edit-display");
      this.tempForm = {};
      this.currentIndex = -1;
    },
    deleteElement(modalName) {
      if (modalName === "modal-edit-storage") {
        this.tempStorage = this.tempStorage.filter(
          (item) => this.tempStorage.indexOf(item) !== this.currentIndex
        );
        this.form.default_spec.storage = this.form.default_spec.storage.filter(
          (item) =>
            this.form.default_spec.storage.indexOf(item) !== this.currentIndex
        );
        this.$bvModal.hide(modalName);
        this.currentIndex = -1;
      }
      if (modalName === "modal-edit-memory") {
        this.tempMemory = this.tempMemory.filter(
          (item) => this.tempMemory.indexOf(item) !== this.currentIndex
        );
        this.form.default_spec.memory = this.form.default_spec.memory.filter(
          (item) =>
            this.form.default_spec.memory.indexOf(item) !== this.currentIndex
        );
        this.$bvModal.hide(modalName);
        this.currentIndex = -1;
      }
      if (modalName === "modal-edit-feature") {
        this.tempFeatures = this.tempFeatures.filter(
          (item) => this.tempFeatures.indexOf(item) !== this.currentIndex
        );
        this.form.default_spec.features = this.form.default_spec.features.filter(
          (item) =>
            this.form.default_spec.features.indexOf(item) !== this.currentIndex
        );
        this.$bvModal.hide(modalName);
        this.currentIndex = -1;
      }
      if (modalName === "modal-edit-display") {
        this.tempDisplay = this.tempDisplay.filter(
          (item) => this.tempDisplay.indexOf(item) !== this.currentIndex
        );
        this.form.default_spec.display = this.form.default_spec.features.filter(
          (item) =>
            this.form.default_spec.features.indexOf(item) !== this.currentIndex
        );
        this.$bvModal.hide(modalName);
        this.currentIndex = -1;
      }
    },
    hideModal(modalName) {
      this.$bvModal.hide(modalName);
      this.tempForm = {};
      this.tempStorage = [];
      this.tempMemory = [];
      this.tempDisplay = [];
      this.tempFeatures = [];
      this.tempOption = [];
      this.formOption = {
        name: "",
        processor: "",
        graphic_card: "",
        memory: [],
        storage: [],
        display: [],
        features: [],
        quantity: 5,
        price: 0,
        discount: 5,
      };
    },
    showCreateProduct() {
      this.$bvModal.show("modal-create-product");
      this.isOption = false;
    },
    showOptions(options){
      this.$bvModal.show("modal-edit-options")
      console.log(options);
      this.currentOptions=options;
    },
    showEditProduct(slug){
      this.$bvModal.show("modal-edit-product");
      this.currentSelectedProduct = slug;
      this.currentSelectedProductIndex = findIndex(this.productsList,function(o){return o.default_spec.slug===slug});
      const index = this.currentSelectedProductIndex;
      this.tempStorage=this.productsList[index].default_spec.storage;
      this.tempMemory=this.productsList[index].default_spec.memory;
      this.tempDisplay=this.productsList[index].default_spec.display;
      this.tempFeatures=this.productsList[index].default_spec.tempFeatures;
      Vue.set(this.form,"default_spec",this.productsList[index].default_spec);
    },
    showAddMemory(type) {
      if (type === "product") {
        this.$bvModal.show("modal-add-memory");
      }
    },
    showAddImages() {
      this.$bvModal.show("modal-add-images");
    },
    showAddStorage(type) {
      if (type === "product") {
        this.$bvModal.show("modal-add-storage");
      }
    },
    showAddFeature(type) {
      if (type === "product") {
        this.$bvModal.show("modal-add-feature");
      }
    },
    showAddDisplay(type) {
      if (type === "product") {
        this.$bvModal.show("modal-add-display");
      }
    },

    showDeleteProduct(slug) {
      this.$bvModal.show("modal-delete-product");
      this.currentSelectedProduct = slug;
    },
    createOptionConfirm() {
      const slug = this.currentSelectedProduct;
      this.formOption.slug = this.slugAutoOption;
      let dataSend = pickBy(this.formOption, (propertyValue) => {
        return (
          (Array.isArray(propertyValue) && propertyValue.length) ||
          (propertyValue !== "" && typeof propertyValue === "string") ||
          (typeof propertyValue === "number" && propertyValue >= 0)
        );
      });
      console.log(dataSend);
      this.createOption({ slug, data: dataSend });
    },
    showAddOption(slug) {
      this.currentSelectedProduct = slug;
      this.isOption = true;
      this.$bvModal.show("modal-create-option");
      console.log("Slug : " + slug);
    },
    editProductConfirm(){
      this.form.default_spec.slug=this.slugAuto;
      const slug = this.currentSelectedProduct;
      const index = this.currentSelectedProductIndex;
      const productPayload =this.form.default_spec;
      console.log("san pham edit");
      console.log(productPayload);
      console.log("slug"+slug);
      this.updateProduct({index,slug,productPayload});
      this.$bvModal.hide("modal-edit-product");
      this.tempForm = {};
      this.tempStorage = [];
      this.tempMemory = [];
      this.tempDisplay = [];
      this.tempFeatures = [];
      this.tempOption = [];
      this.form = {
        default_spec: {
          name: "",
          model: "",
          manufacturer: "",
          processor: "",
          visibility: "public",
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
    createProductConfirm() {
      this.form.default_spec.slug = this.slugAuto;
      const product = this.form;
      console.log(product);
      this.createProduct(product);
      this.$bvModal.hide("modal-create-product");
      this.tempForm = {};
      this.tempStorage = [];
      this.tempMemory = [];
      this.tempDisplay = [];
      this.tempFeatures = [];
      this.tempOption = [];
      this.form = {
        default_spec: {
          name: "",
          model: "",
          manufacturer: "",
          processor: "",
          visibility: "public",
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
      this.formOption = {
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
      };
    },
    deleteProductConfirm() {
      const productSlug = this.currentSelectedProduct;
      this.deleteProduct(productSlug);
      this.$bvModal.hide("modal-delete-product");
    },
    addStorageConfirm(isOption) {
      const { capacity, type, text } = this.tempForm;
      this.tempStorage.push({ capacity, type, text });
      if (isOption == false) {
        this.form.default_spec.storage.push({ capacity, type, text });
      }
      if (isOption == true) {
        this.formOption.storage.push({ capacity, type, text });
      }
      this.tempForm = {};
      this.$bvModal.hide("modal-add-storage");
    },
    addMemoryConfirm(isOption) {
      const { capacity, speed_bus, cas, text } = this.tempForm;
      this.tempMemory.push({ capacity, speed_bus, cas, text });
      if (isOption == false) {
        this.form.default_spec.memory.push({ capacity, speed_bus, cas, text });
      }
      if (isOption == true) {
        this.formOption.memory.push({ capacity, speed_bus, cas, text });
      }
      this.tempForm = {};
      this.$bvModal.hide("modal-add-memory");
    },
    addFeaturesConfirm(isOption) {
      const { name, more_info } = this.tempForm;
      this.tempFeatures.push({ name, more_info });
      if (isOption == false) {
        this.form.default_spec.features.push({ name, more_info });
      }
      if (isOption == true) {
        this.formOption.features.push({ name, more_info });
      }
      this.tempForm = {};
      this.$bvModal.hide("modal-add-feature");
    },
    addDisplayConfirm(isOption) {
      const { resolution, size, panel, more_info } = this.tempForm;
      this.tempDisplay.push({ resolution, size, panel, more_info });
      if (isOption == false) {
        this.form.default_spec.display.push({
          resolution,
          size,
          panel,
          more_info,
        });
      }
      if (isOption == true) {
        this.formOption.display.push({
          resolution,
          size,
          panel,
          more_info,
        });
      }
      this.tempForm = {};
      this.$bvModal.hide("modal-add-display");
    },
    cancelCreateProduct() {
      this.$bvModal.hide("modal-create-product");
      this.tempForm = {};
      this.tempStorage = [];
      this.tempMemory = [];
      this.tempDisplay = [];
      this.tempFeatures = [];
      this.tempOption = [];
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
      this.formOption = {
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
      };
    },
    cancelEditProduct() {
      this.$bvModal.hide("modal-edit-product");
      this.tempForm = {};
      this.tempStorage = [];
      this.tempMemory = [];
      this.tempDisplay = [];
      this.tempFeatures = [];
      this.tempOption = [];
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
      this.formOption = {
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