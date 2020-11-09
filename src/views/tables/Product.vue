<template>
  <div>
    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <base-block title="products">
        <template #options>
          <button type="button" class="btn-block-option">
            <i class="si si-settings"></i>
          </button>
        </template>
        <b-table-simple responsive bordered striped table-class="table-vcenter">
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
                  {{ user.name }}
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
                <b-button size="sm" variant="alt-primary">
                  <i class="fa fa-fw fa-pencil-alt"></i>
                </b-button>
                <b-button size="sm" variant="alt-danger">
                  <i class="fa fa-fw fa-times"></i>
                </b-button>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Full Table -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Adam McCoy",
          avatar: "avatar10",
          href: "javascript:void(0)",
          labelVariant: "success",
          labelText: "VIP",
        },
        {
          id: 2,
          name: "Betty Kelley",
          avatar: "avatar2",
          href: "javascript:void(0)",
          labelVariant: "info",
          labelText: "Business",
        },
        {
          id: 3,
          name: "Jesse Fisher",
          avatar: "avatar9",
          href: "javascript:void(0)",
          labelVariant: "primary",
          labelText: "Personal",
        },
        {
          id: 4,
          name: "Ryan Flores",
          avatar: "avatar12",
          href: "javascript:void(0)",
          labelVariant: "warning",
          labelText: "Trial",
        },
        {
          id: 5,
          name: "Alice Moore",
          avatar: "avatar4",
          href: "javascript:void(0)",
          labelVariant: "danger",
          labelText: "Disabled",
        },
      ],
    };
  },
};
</script>
