<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Calendar" subtitle="A solid foundation to build your calendar based web application. Powered by Full Calendar.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
          <b-breadcrumb-item active>Calendar</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block content-full>
        <b-row class="items-push">
          <b-col md="8" lg="7" xl="9">
            <!-- Full Calendar Component -->
            <full-calendar
              ref="fullCalendar"
              default-view="dayGridMonth"
              :header="{
                left: 'title',
                right: 'prev,next today dayGridMonth,timeGridWeek,timeGridDay,listWeek'
              }"
              :plugins="calendarPlugins"
              :weekends="true"
              :events="calendarEvents"
              theme-system="bootstrap"
              :editable="true"
              :droppable="true"
              :first-day="1"
              @dateClick="handleDateClick"
              @eventDrop="handleEventDrop"
              @eventReceive="handleExternalDrop"
            ></full-calendar>
            <!-- END Full Calendar Component -->
          </b-col>
          <b-col md="4" lg="5" xl="3">
            <!-- Add Event Form -->
            <b-form @submit.prevent="addNewEvent" class="push">
              <b-input-group>
                <b-form-input ref="inputAddEvent" v-model="calendarNewEvent" placeholder="Add Event.."></b-form-input>
                <template #append>
                  <b-input-group-text class="input-group-text-alt">
                    <i class="fa fa-fw fa-plus-circle"></i>
                  </b-input-group-text>
                </template>
              </b-input-group>
            </b-form>
            <!-- END Add Event Form -->

            <!-- Event List -->
            <ul id="calendar-events" class="list list-events">
              <li v-for="(event, index) in calendarNewEvents" :key="`events-${index}`" class="p-0">
                <div class="js-event p-2 font-size-sm font-w600" :style="`background-color: ${event.color};`">{{ event.title }}</div>
              </li>
            </ul>
            <div class="text-center">
              <em class="font-size-sm text-muted">
                <i class="fa fa-arrows-alt"></i> Drag and drop events on the calendar
              </em>
            </div>
            <!-- END Event List -->
          </b-col>
        </b-row>
      </base-block>
    </div>
    <!-- END Page Content -->
  </div>
</template>

<style lang="scss">
// FullCalendar + Custom overrides
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
@import '~@fullcalendar/list/main.css';
@import './src/assets/scss/vendor/fullcalendar';
</style>

<script>
// FullCalendar, for more info and examples you can check out https://fullcalendar.io/
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import bootstrapPlugin from '@fullcalendar/bootstrap'

export default {
  components: {
    FullCalendar
  },
  data () {
    return {
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        listPlugin,
        bootstrapPlugin
      ],
      calendarEvents: [],
      calendarNewEvent: '',
      calendarNewEvents: [
        {
          title: 'Work',
          color: '#fac5a5'
        },
        {
          title: 'Relax',
          color: '#b5d0eb'
        },
        {
          title: 'Gym',
          color: '#faeab9'
        },
        {
          title: 'Secret Project',
          color: '#fac5a5'
        },
        {
          title: 'Cinema',
          color: '#c8e2b3'
        },
        {
          title: 'Biking',
          color: '#b6d1ec'
        },
        {
          title: 'Trip',
          color: '#c8e2b3'
        },
        {
          title: 'Swimming',
          color: '#faeab9'
        }
      ]
    }
  },
  created () {
    // Get current year, month and day
    let date = new Date()
    let y = date.getFullYear()
    let m = date.getMonth()
    let d = date.getDate()

    // Populate calendar with predefined events
    this.calendarEvents = [
      {
        title: 'Free day',
        start: new Date(y, m, 1),
        allDay: true,
        color: '#faeab9'
      },
      {
        title: 'Skype Meeting',
        start: new Date(y, m, 2)
      },
      {
        title: 'Secret Project',
        start: new Date(y, m, 5),
        end: new Date(y, m, 8),
        allDay: true,
        color: '#fac5a5'
      },
      {
        title: 'Work',
        start: new Date(y, m, 9),
        end: new Date(y, m, 11),
        allDay: true,
        color: '#fac5a5'
      },
      {
        id: 999,
        title: 'Biking (repeated)',
        start: new Date(y, m, d - 3, 15, 0)
      },
      {
        id: 999,
        title: 'Biking (repeated)',
        start: new Date(y, m, d + 2, 15, 0)
      },
      {
        title: 'Landing Template',
        start: new Date(y, m, d - 1),
        end: new Date(y, m, d - 1),
        allDay: true,
        color: '#faeab9'
      },
      {
        title: 'Lunch Meeting',
        start: new Date(y, m, d + 5, 14, 0),
        color: '#fac5a5'
      },
      {
        title: 'Admin Template',
        start: new Date(y, m, d, 9, 0),
        end: new Date(y, m, d, 12, 0),
        allDay: true,
        color: '#faeab9'
      },
      {
        title: 'Party',
        start: new Date(y, m, 15),
        end: new Date(y, m, 16),
        allDay: true,
        color: '#faeab9'
      },
      {
        title: 'Reading',
        start: new Date(y, m, d + 8, 21, 0),
        end: new Date(y, m, d + 8, 23, 30),
        allDay: true
      },
      {
        title: 'Follow us on Twitter',
        start: new Date(y, m, 23),
        end: new Date(y, m, 25),
        allDay: true,
        url: 'http://twitter.com/pixelcave',
        color: '#32ccfe'
      }
    ]
  },
  mounted () {
    // Init draggable calendar events
    new Draggable(document.getElementById('calendar-events'), {
      itemSelector: '.js-event',
      eventData (eventEl) {
        return {
          title: eventEl.innerText,
          backgroundColor: eventEl.style.backgroundColor,
          borderColor: eventEl.style.backgroundColor,
          create: true
        }
      }
    })
  },
  methods: {
    handleDateClick (arg) {
      // Add new event data to the calendar on date click
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.calendarEvents.push({
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      }
    },
    handleEventDrop (eventDropInfo) {
      // When dropping an existing event to another date
      window.console.log(eventDropInfo)
    },
    handleExternalDrop (info) {
      // When dropping an external event and is added to the calendar
      window.console.log(info)
    },
    addNewEvent () {
      // Add event form submission
      if (this.calendarNewEvent) {
        // Add the event to the draggable list
        this.calendarNewEvents.unshift({
          title: this.calendarNewEvent,
          color: '#edf6fd'
        })

        // Reset and focus the input 
        this.calendarNewEvent = ''
        this.$refs.inputAddEvent.$el.focus()
      }
    }
  }
}
</script>
