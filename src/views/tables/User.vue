<template>
  <div>
    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <base-block title="users">
        <template #options>
          <b-button
            variant="info"
            class="d-flex align-items-center"
            @click="showCreateUser"
            ><i class="si si-plus pr-2"></i>New user</b-button
          >
          <!-- <button type="button" class="btn-block-option">
            <i class="si si-settings"></i>
          </button> -->
        </template>
        <b-table
        striped
        bordered
          hover
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          :items="users"
        >
          <template #cell(actions)="user">
            <b-button
              size="sm"
              variant="alt-primary"
              v-b-modal.modal-edit-user
              @click="showEditUser(user.item)"
            >
              <i class="fa fa-fw fa-pencil-alt"></i>
            </b-button>
            <b-button
              size="sm"
              variant="alt-danger"
              v-b-modal.modal-delete-user
              @click="showDeleteUser(user.item)"
            >
              <i class="fa fa-fw fa-times"></i>
            </b-button>
          </template>
        </b-table>
        <!-- <b-table-simple

          :per-page="perPage"
          :current-page="currentPage"
          :items="users"
          responsive
          bordered
          striped
          table-class="table-vcenter"
        >
          <b-thead>
            <b-tr>
              <b-th class="text-center" style="width: 100px">
                <i class="far fa-user"></i>
              </b-th>
              <b-th>Name</b-th>
              <b-th style="width: 30%">Created At</b-th>
              <b-th style="width: 15%">Access</b-th>
              <b-th class="text-center" style="min-width: 110px; width: 110px"
                >Actions</b-th
              >
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="user in users" :key="user.id">
              <b-td class="text-center">
                <img
                  class="img-avatar img-avatar48"
                  :src="`img/avatars/${user.avatar}.jpg`"
                  alt="Avatar"
                />
              </b-td>
              <b-td class="font-w600 font-size-sm">
                <a :href="`${user.href}`">
                  {{ user.username }}
                </a>
              </b-td>
              <b-td class="font-size-sm">
                client{{ user.id }}<em class="text-muted">@example.com</em>
              </b-td>
              <b-td>
                <b-badge :variant="user.labelVariant">{{
                  user.labelText
                }}</b-badge>
              </b-td>
              <b-td class="text-center">
                <b-button
                  size="sm"
                  variant="alt-primary"
                  v-b-modal.modal-edit-user
                  @click="showEditUser(user)"
                >
                  <i class="fa fa-fw fa-pencil-alt"></i>
                </b-button>
                <b-button
                  size="sm"
                  variant="alt-danger"
                  v-b-modal.modal-delete-user
                  @click="showDeleteUser(user)"
                >
                  <i class="fa fa-fw fa-times"></i>
                </b-button>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple> -->
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
        ></b-pagination>
      </base-block>
      <b-modal
        id="modal-delete-user"
        size="md"
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Bạn muốn xóa người dùng này không ?</h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <div class="col-auto px-2">
                <!-- Sales -->
                <b-button variant="danger" @click="deleteUserConfirm"
                  >Đồng ý</b-button
                >
                <!-- END Sales -->
              </div>
              <div class="col-auto px-2">
                <!-- Payments -->
                <b-button variant="light" @click="deleteUserConfirm"
                  >Từ chối</b-button
                >
                <!-- END Payments -->
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-edit-user"
        size="md"
        body-class="p-0"
        hide-footer
        hide-header
        @hidden="shouldShowPasswordInput = false"
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Chỉnh sửa thông tin người dùng</h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <div class="col-12 px-2">
                <b-form-group label="Username" label-for="block-form5-username">
                  <b-form-input
                    readonly
                    class="form-control-alt"
                    :value="currentSelectedUser"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Password" label-for="block-form5-password">
                  <b-button
                    variant="danger"
                    v-if="!shouldShowPasswordInput"
                    @click="shouldShowPasswordInput = true"
                    >Change</b-button
                  >
                  <b-form-input
                    v-else
                    type="password"
                    class="form-control-alt"
                    v-model="form.password"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Role" label-for="block-form5-username">
                  <b-form-select
                    v-model="form.role"
                    :options="roleOptions"
                  ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-auto px-2">
                <!-- Sales -->
                <b-button @click="editUserConfirm" variant="success"
                  >Lưu</b-button
                >
                <!-- END Sales -->
              </div>
              <div class="col-auto px-2">
                <!-- Payments -->
                <b-button
                  variant="light"
                  @click="$bvModal.hide('modal-edit-user')"
                  >Hủy</b-button
                >
                <!-- END Payments -->
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <b-modal
        id="modal-create-user"
        size="md"
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Tạo người dùng mới</h3>
          </div>
          <div class="block-content block-content-full">
            <div class="row gutters-tiny" style="justify-content: center">
              <div class="col-12 px-2">
                <b-form-group label="Username" label-for="block-form5-username">
                  <b-form-input
                    class="form-control-alt"
                    v-model="form.username"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Password" label-for="block-form5-password">
                  <b-form-input
                    class="form-control-alt"
                    type="password"
                    v-model="form.password"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Role" label-for="block-form5-username">
                  <b-form-select
                    v-model="form.role"
                    :options="roleOptions"
                  ></b-form-select>
                </b-form-group>
              </div>
              <div class="col-auto px-2">
                <!-- Sales -->
                <b-button @click="createUserConfirm" variant="success"
                  >Lưu</b-button
                >
                <!-- END Sales -->
              </div>
              <div class="col-auto px-2">
                <!-- Payments -->
                <b-button
                  variant="light"
                  @click="$bvModal.hide('modal-create-user')"
                  >Hủy</b-button
                >
                <!-- END Payments -->
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- END Full Table -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["username", "role", "created at", "actions"],
      currentSelectedUser: -1,
      form: {},
      currentPage: 1,
      perPage: 5,
      shouldShowPasswordInput: false,
      roleOptions: [
        { value: "user", text: "User" },
        { value: "admin", text: "Admin" },
      ],
      users: [
        {
          id: 1,
          username: "Adam McCoy",
          avatar: "avatar10",
          href: "javascript:void(0)",
          labelVariant: "success",
          labelText: "VIP",
          actions: null,
        },
        {
          id: 2,
          username: "Betty Kelley",
          avatar: "avatar2",
          href: "javascript:void(0)",
          labelVariant: "info",
          labelText: "Business",
          actions: null,
        },
        {
          id: 3,
          username: "Jesse Fisher",
          avatar: "avatar9",
          href: "javascript:void(0)",
          labelVariant: "primary",
          labelText: "Personal",
        },
        {
          id: 4,
          username: "Ryan Flores",
          avatar: "avatar12",
          href: "javascript:void(0)",
          labelVariant: "warning",
          labelText: "Trial",
        },
        {
          id: 5,
          username: "Alice Moore",
          avatar: "avatar4",
          href: "javascript:void(0)",
          labelVariant: "danger",
          labelText: "Disabled",
        },
        {
          id: 6,
          username: "Alice Moore",
          avatar: "avatar4",
          href: "javascript:void(0)",
          labelVariant: "danger",
          labelText: "Disabled",
        },
        {
          id: 7,
          username: "Alice Moore",
          avatar: "avatar4",
          href: "javascript:void(0)",
          labelVariant: "danger",
          labelText: "Disabled",
        },
      ],
    };
  },
      computed: {
      rows() {
        return this.users.length
      }
    },
  methods: {
    showDeleteUser(user) {
      this.currentSelectedUser = user.username;
      console.log(this.currentSelectedUser);
      // code
    },
    deleteUserConfirm() {
      this.$bvModal.hide("modal-delete-user");
      this.currentSelectedUser = -1;
      console.log(this.currentSelectedUser);
    },
    showEditUser(user) {
      console.log(user);
      this.currentSelectedUser = user.username;
      //code
    },
    editUserConfirm() {
      this.$bvModal.hide("modal-edit-user");
    },
    showCreateUser() {
      this.$bvModal.show("modal-create-user");
      this.form = {};
    },
    createUserConfirm() {
      this.$bvModal.hide("modal-create-user");
    },
  },
};
</script>
