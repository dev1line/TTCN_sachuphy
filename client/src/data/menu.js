/*
 * Main and demo navigation arrays
 */

export default {
  main: [
    {
      name: "Dashboard",
      to: "/backend/dashboard",
      icon: "si si-speedometer"
    },
    {
      name: "Users",
      heading: true
    },
    {
      name: "Tables",
      icon: "si si-grid",
      to: "/backend/tables/user",
    },
    {
      name: "Products",
      heading: true
    },
    {
      name: "Tables",
      icon: "si si-grid",
      to: "/backend/tables/product"
    },
    {
      name: "Gallery",
      heading: true
    },
    {
      name: "Media",
      icon: "si si-picture",
      to: "/backend/plugins/gallery"
    },
    {
      name: "Orders",
      heading: true
    },
    {
      name: "Tables",
      icon: "si si-picture",
      to: "/backend/tables/orders"
    },
    {
      name: "Pages",
      heading: true
    },
    {
      name: "Generic",
      icon: "si si-layers",
      subActivePaths: "/backend/pages/generic",
      sub: [
        {
          name: "Blank",
          to: "/backend/pages/generic/blank"
        },
        {
          name: "Blank (Block)",
          to: "/backend/pages/generic/blank-block"
        },
        {
          name: "Search",
          to: "/backend/pages/generic/search"
        },
        {
          name: "Profile",
          to: "/backend/pages/generic/profile"
        },
        {
          name: "Invoice",
          to: "/backend/pages/generic/invoice"
        },
        {
          name: "FAQ",
          to: "/backend/pages/generic/faq"
        },
        {
          name: "Maintenance",
          to: "/maintenance"
        },
        {
          name: "Status",
          to: "/status"
        },
        {
          name: "Coming Soon",
          to: "/coming-soon"
        }
      ]
    },
    {
      name: "Authentication",
      icon: "si si-lock",
      subActivePaths: "/backend/pages/auth",
      sub: [
        {
          name: "All",
          to: "/backend/pages/auth/all"
        },
        {
          name: "Sign In",
          to: "/auth/signin"
        },
        {
          name: "Sign In 2",
          to: "/auth/signin2"
        },
        {
          name: "Sign Up",
          to: "/auth/signup"
        },
        {
          name: "Sign Up 2",
          to: "/auth/signup2"
        },
        {
          name: "Lock Screen",
          to: "/auth/lock"
        },
        {
          name: "Lock Screen 2",
          to: "/auth/lock2"
        },
        {
          name: "Pass Reminder",
          to: "/auth/reminder"
        },
        {
          name: "Pass Reminder 2",
          to: "/auth/reminder2"
        }
      ]
    },
    {
      name: "Error Pages",
      icon: "si si-fire",
      subActivePaths: "/backend/pages/errors",
      sub: [
        {
          name: "All",
          to: "/backend/pages/errors/all"
        },
        {
          name: "400",
          to: "/errors/400"
        },
        {
          name: "401",
          to: "/errors/401"
        },
        {
          name: "403",
          to: "/errors/403"
        },
        {
          name: "404",
          to: "/errors/404"
        },
        {
          name: "500",
          to: "/errors/500"
        },
        {
          name: "503",
          to: "/errors/503"
        }
      ]
    }
  ],
  demo: [
    {
      name: "Home",
      to: "#",
      icon: "fa fa-home",
      badge: 5
    },
    {
      name: "Manage",
      heading: true
    },
    {
      name: "Products",
      icon: "fa fa-briefcase",
      sub: [
        {
          name: "HTML Templates",
          icon: "fab fa-html5",
          sub: [
            {
              name: "Description",
              to: "#",
              icon: "fa fa-pencil-alt"
            },
            {
              name: "Statistics",
              to: "#",
              icon: "fa fa-chart-line"
            },
            {
              name: "Sales",
              to: "#",
              icon: "fa fa-chart-area",
              badge: 320
            },
            {
              name: "Media",
              to: "#",
              icon: "far fa-images",
              badge: 18
            },
            {
              name: "Files",
              to: "#",
              icon: "far fa-file-alt",
              badge: 32
            }
          ]
        },
        {
          name: "WordPress Themes",
          icon: "fab fa-wordpress",
          sub: [
            {
              name: "Description",
              to: "#",
              icon: "fa fa-pencil-alt"
            },
            {
              name: "Statistics",
              to: "#",
              icon: "fa fa-chart-line"
            },
            {
              name: "Sales",
              to: "#",
              icon: "fa fa-chart-area",
              badge: 680
            },
            {
              name: "Media",
              to: "#",
              icon: "far fa-images",
              badge: 15
            },
            {
              name: "Files",
              to: "#",
              icon: "far fa-file-alt",
              badge: 20
            }
          ]
        },
        {
          name: "Web Applications",
          icon: "fab fa-medapps",
          sub: [
            {
              name: "Description",
              to: "#",
              icon: "fa fa-pencil-alt"
            },
            {
              name: "Statistics",
              to: "#",
              icon: "fa fa-chart-line"
            },
            {
              name: "Sales",
              to: "#",
              icon: "fa fa-chart-area",
              badge: 158
            },
            {
              name: "Media",
              to: "#",
              icon: "far fa-images",
              badge: 65
            },
            {
              name: "Files",
              to: "#",
              icon: "far fa-file-alt",
              badge: 78
            }
          ]
        },
        {
          name: "Video Templates",
          icon: "fab fa-youtube",
          sub: [
            {
              name: "Description",
              to: "#",
              icon: "fa fa-pencil-alt"
            },
            {
              name: "Statistics",
              to: "#",
              icon: "fa fa-chart-line"
            },
            {
              name: "Sales",
              to: "#",
              icon: "fa fa-chart-area",
              badge: 920
            },
            {
              name: "Media",
              to: "#",
              icon: "far fa-images",
              badge: 7
            },
            {
              name: "Files",
              to: "#",
              icon: "far fa-file-alt",
              badge: 19
            }
          ]
        },
        {
          name: "Add Product",
          to: "#",
          icon: "fa fa-plus"
        }
      ]
    },
    {
      name: "Payments",
      icon: "fa fa-money-bill-wave",
      sub: [
        {
          name: "Scheduled",
          to: "#",
          badge: 3,
          "badge-variant": "success"
        },
        {
          name: "Recurring",
          to: "#"
        },
        {
          name: "Manage",
          to: "#"
        },
        {
          name: "New Payment",
          to: "#",
          icon: "fa fa-plus"
        }
      ]
    },
    {
      name: "Services",
      icon: "fa fa-globe-americas",
      sub: [
        {
          name: "Hosting",
          to: "#"
        },
        {
          name: "Web Design",
          to: "#"
        },
        {
          name: "Web Development",
          to: "#"
        },
        {
          name: "Graphic Design",
          to: "#"
        },
        {
          name: "Legal",
          to: "#"
        },
        {
          name: "Consulting",
          to: "#"
        }
      ]
    },
    {
      name: "Personal",
      heading: true
    },
    {
      name: "Profile",
      icon: "far fa-user",
      sub: [
        {
          name: "Edit",
          to: "#"
        },
        {
          name: "Settings",
          to: "#"
        },
        {
          name: "Log out",
          to: "#"
        }
      ]
    }
  ]
};
