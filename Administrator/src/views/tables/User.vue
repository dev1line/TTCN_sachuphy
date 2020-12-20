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
        </template>
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
              :disabled="!!user.item.deleted_at"
            >
              <i class="fa fa-fw fa-pencil-alt"></i>
            </b-button>
            <b-button
              size="sm"
              variant="alt-danger"
              v-b-modal.modal-delete-user
              @click="showDeleteUser(user.item)"
              :disabled="!!user.item.deleted_at"
            >
              <i class="fa fa-fw fa-times"></i>
            </b-button>
          </template>
        </b-table>
        
      </base-block>
      <!-- Delete Modal Start -->
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
                <b-button
                  variant="light"
                  @click="$bvModal.hide('modal-delete-user')"
                  >Từ chối</b-button
                >
                <!-- END Payments -->
              </div>
            </div>
          </div>
        </div>
      </b-modal>
      <!-- Delete Modal End -->

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
                    :class="stateUsername"
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
                    :class="statePassword"
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
                <b-button @click="handleOkEdit" variant="success">Lưu</b-button>
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
                    :class="stateUsername"
                    v-model="form.username"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Password" label-for="block-form5-password">
                  <b-form-input
                    :class="statePassword"
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
                <b-button @click="handleOk" variant="success">Lưu</b-button>
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
import { mapActions, mapState } from "vuex";
// import { validationMixin } from 'vuelidate'
// import { required, minLength,maxLength,alphaNum } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      fields: ["username", "role", "created_at", "deleted_at", "actions"],
      currentSelectedUser: -1,
      form: { username: "", password: "", role: "user" },
      currentPage: 1,
      perPage: 5,
      shouldShowPasswordInput: false,
      roleOptions: [
        { value: "user", text: "User" },
        { value: "admin", text: "Admin" },
      ],
    };
  },
  computed: {
    stateUsername() {
      if (this.form.username.length === 0) return "form-control-alt";
      if (
        this.form.username.length < 6 ||
        this.form.username.length > 20 ||
        this.alphanumeric(this.form.username) === false
      ) {
        return {
          dirty: false,
          error: true,
        };
      } else {
        return {
          dirty: true,
          error: false,
        };
      }
    },
    statePassword() {
      if (this.form.password.length === 0) return "form-control-alt";
      if (this.form.password.length >= 6 && this.form.password.length <= 20) {
        return {
          dirty: true,
          error: false,
        };
      } else {
        return {
          dirty: false,
          error: true,
        };
      }
    },
    rows() {
      return this.users.length;
    },
    ...mapState("users", {
      users: "users",
    }),
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    alphanumeric(inputtxt) {
      var letters = /^[0-9a-zA-Z]+$/;
      if (inputtxt.match(letters)) {
        return true;
      } else {
        return false;
      }
    },
    handleOkEdit() {
      if (
        this.statePassword.error === true ||
        this.statePassword === "form-control-alt"
      ) {
        return;
      } else {
        this.editUserConfirm();
      }
    },
    handleOk() {
      if (
        this.stateUsername.error === true ||
        this.statePassword.error === true ||
        this.stateUsername === "form-control-alt" ||
        this.statePassword === "form-control-alt"
      ) {
        return;
      } else {
        this.createUserConfirm();
      }
    },
    showDeleteUser(user) {
      if (user.deleted_at) return;
      this.currentSelectedUser = user.username;
      console.log(this.currentSelectedUser);
      // code
    },
    deleteUserConfirm() {
      const username = this.currentSelectedUser;
      this.deleteUser(username);
      this.$bvModal.hide("modal-delete-user");
    },
    showEditUser(user) {
      if (user.deleted_at) this.form = {};
      this.form.role = user.role;
      this.currentSelectedUser = user.username;
      //code
    },
    editUserConfirm() {
      const username = this.currentSelectedUser;
      this.updateUser({ username, data: this.form });
      this.$bvModal.hide("modal-edit-user");
    },
    showCreateUser() {
      this.$bvModal.show("modal-create-user");
      this.form = { username: "", password: "", role: "user" };
      // this.form = {
      //   role: "user",
      // };
    },
    createUserConfirm() {
      this.$bvModal.hide("modal-create-user");
      const { username, password, role } = this.form;
      this.createUser({ username, password, role });
    },
    ...mapActions("users", {
      fetchUsers: "fetchUsers",
      createUser: "createUser",
      deleteUser: "deleteUser",
      updateUser: "updateUser",
    }),
  },
};
</script>
<style>
b-form-input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
}
.dirty {
  border-color: #5A5;
  background: #EFE;
}
.dirty:focus {
  border-color: #5A5;
  background: #EFE;
}

.error {
  border-color: red;
  background: #FDD;
}
.error:focus {
  border-color: red;
  background: #FDD;
}
</style>
