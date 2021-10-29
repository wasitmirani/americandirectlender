<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-6 col-md-4 box-col-4 des-xl-50">
          <div class="card profile-greeting">
            <div class="card-header">
              <div class="header-top"></div>
            </div>
            <div class="card-body text-center p-t-0">
              <h3 class="font-light">Wellcome Back, {{ user.name }}!!</h3>
              <p>
                Welcome to the {{ app_name }} Family! we are glad that you are
                visite this dashboard. we will be happy to help you grow your
                business.
              </p>
            </div>
            <div class="confetti">
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
            </div>
          </div>
        </div>

        <div class="col-xl-6 box-col-12 des-xl-100 invoice-sec">
             <div class="card">
                  <div class="card-header pb-0">
                    <h5>Daily Register Applications</h5>
                  </div>
                  <div class="card-body">
                    <div id="basic-apex"></div>
                  </div>
                </div>

        </div>

      </div>
      <div class="row">
        <div class="col-sm-6 col-xl-3 col-lg-6">
          <div class="card o-hidden border-0">
            <div class="bg-primary b-r-4 card-body">
              <div class="media static-top-widget">
                <div class="align-self-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user-plus"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <div class="media-body">
                  <span class="m-0">Total Users</span>
                  <h4 class="mb-0 counter">{{ total_users }}</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user-plus icon-bg"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-sm-6 col-xl-3 col-lg-6"
          v-for="item in roles"
          :key="item.id"
        >
          <div class="card o-hidden border-0">
            <div class="bg-primary b-r-4 card-body">
              <div class="media static-top-widget">
                <div class="align-self-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user-plus"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <div class="media-body">
                  <span class="m-0"> {{ item.name }}s</span>
                  <h4 class="mb-0 counter">{{ item.users_count }}</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user-plus icon-bg"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="col-xl-12 xl-50 box-col-12">
          <div class="widget-joins card widget-arrow">
            <div class="row">
              <div class="col-sm-6 pe-0">
                <div class="media border-after-xs">
                  <div class="align-self-center me-3 text-start">
                    <span class="widget-t mb-1"></span>
                    <h5 class="mb-0">Total Applications</h5>
                  </div>
                  <div class="media-body align-self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-down font-primary"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                    </svg>
                  </div>
                  <div class="media-body">
                    <h5 class="mb-0">
                      {{ this.total_applications }}<span class="counter"></span>
                    </h5>
                    <span class="mb-1"></span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 ps-0">
                <div class="media">
                  <div class="align-self-center me-3 text-start">
                    <span class="widget-t mb-1"></span>
                    <h5 class="mb-0">Approved Applications</h5>
                  </div>
                  <div class="media-body align-self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-up font-primary"
                    >
                      <line x1="12" y1="19" x2="12" y2="5"></line>
                      <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                  </div>
                  <div class="media-body ps-2">
                    <h5 class="mb-0">
                      {{ this.assigned_apps }}<span class="counter"></span>
                    </h5>
                    <span class="mb-1"></span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 pe-0">
                <div class="media border-after-xs">
                  <div class="align-self-center me-3 text-start">
                    <span class="widget-t mb-1"> </span>
                    <h5 class="mb-0">Pending Application</h5>
                  </div>
                  <div class="media-body align-self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-up font-primary"
                    >
                      <line x1="12" y1="19" x2="12" y2="5"></line>
                      <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                  </div>
                  <div class="media-body">
                    <h5 class="mb-0">
                      <span class="counter">{{
                        parseInt(this.total_applications) -
                        parseInt(this.assigned_apps)
                      }}</span>
                    </h5>
                    <span class="mb-1"></span>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 ps-0">
                <div class="media">
                  <div class="align-self-center me-3 text-start">
                    <span class="widget-t mb-1"></span>
                    <h5 class="mb-0">Agents</h5>
                  </div>
                  <!-- <div class="media-body align-self-center ps-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up font-primary"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></div> -->
                  <div class="media-body ps-2">
                    <h5 class="mb-0"><span class="counter"></span></h5>
                    <span class="mb-1"> </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4 col-sm-6">
        <div class="card browser-widget">
          <div class="media card-body">
            <div class="media-img">
              <img src="/assets/images/dashboard/chrome.png" alt="" />
            </div>
            <div class="media-body align-self-center">
              <div>
                <p>Daily</p>
                <h4><span class="counter">20</span>%</h4>
              </div>
              <div>
                <p>Month</p>
                <h4><span class="counter">53</span>%</h4>
              </div>
              <div>
                <p>Week</p>
                <h4><span class="counter">25</span>%</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card browser-widget">
          <div class="media card-body">
            <div class="media-img">
              <img src="assets/images/dashboard/firefox.png" alt="" />
            </div>
            <div class="media-body align-self-center">
              <div>
                <p>Daily</p>
                <h4><span class="counter">20</span>%</h4>
              </div>
              <div>
                <p>Month</p>
                <h4><span class="counter">53</span>%</h4>
              </div>
              <div>
                <p>Week</p>
                <h4><span class="counter">25</span>%</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card browser-widget">
          <div class="media card-body">
            <div class="media-img">
              <img src="/assets/images/dashboard/safari.png" alt="" />
            </div>
            <div class="media-body align-self-center">
              <div>
                <p>Daily</p>
                <h4><span class="counter">19</span>%</h4>
              </div>
              <div>
                <p>Month</p>
                <h4><span class="counter">52</span>%</h4>
              </div>
              <div>
                <p>Week</p>
                <h4><span class="counter">25</span>%</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <h5>Recent Applications</h5>
            <table class="table table-bordernone">
              <thead>
                <tr>
                  <th>Application Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="app in apps" :key="app.id">
                  <td>
                    <div class="media">
                      <img
                        class="img-fluid rounded-circle"
                        src=""
                        alt=""
                        data-original-title=""
                        title=""
                      />
                      <div class="media-body">
                       <router-link
            :to="{ name: 'show-application', params: { id: app.id } }"
          ><span>{{ app.name }}</span></router-link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p v-if="app.status === '1'">Done</p>
                    <p v-if="app.status === '0'">In Proccess</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logs: [],
      user: {},
      app_name: "",
      total_users: 0,
      total_applications: 0,
      total_roles: 0,
      assigned_apps: 0,
      roles: {},
      apps: {},
    };
  },

  methods: {
    dashboardChart() {

    var options = {
    chart: {
        height: 350,
        type: 'area',
        zoom: {
            enabled: false
        },
        toolbar:{
          show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },

    series: [{
        name: "Applications",
        data: series.applications
    }],
    title: {
        text: 'Applications Statistics',
        align: 'left'
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    labels: series.applications,
    xaxis: {
        type: 'datetime',
    },
    yaxis: {
        opposite: true
    },
    legend: {
        horizontalAlign: 'left'
    },
    colors:[vihoAdminConfig.primary]

}

    var chart = new ApexCharts(
    document.querySelector("#basic-apex"),
    options
);

chart.render();
      // second chart dashbord dafault

    },


    getDate(){

    console.log(series)
    },

    async getDashboardData() {
      await axios.get("dashboard").then((res) => {
        //   console.log(res)
        this.total_users = res.data.users;
        this.total_applications = res.data.total_application;
        this.roles = res.data.roles;
        this.total_roles = res.data.total_roles;
        this.assigned_apps = res.data.assigned_apps;

        series.applications = Object.assign({},res.data.applications)

      });
    },
  },

  mounted() {
    this.getDashboardData();
    // console.log("userss",user);
    this.user = user;
    this.app_name = "American Lender";
    this.dashboardChart();
    this.getDate()

    axios
      .get("/recent/applications/")
      .then((res) => {
        this.apps = res.data.applications;
        //    console.log(res.data.applications)
        this.loading = false;
      })
      .catch((err) => {
        this.$root.alertNotificationMessage(
          err.response.status,
          err.response.data
        );
      });
  },
};
</script>

<style lang="scss" scoped>
</style>
