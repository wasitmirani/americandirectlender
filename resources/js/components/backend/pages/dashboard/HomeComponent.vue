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
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minima veritatis nam iste soluta dolorum voluptate vero quam at cum blanditiis, repellendus cumque obcaecati, eligendi fuga facilis ex nulla eveniet.
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
          <div class="box-col-12 col-xl-12 des-xl-100">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5> </h5>
                  </div>
                  <div class="card-body apex-chart">
                    <!-- <div id="piechart"></div> -->
                      <div id="chart">
                   <lineChart :app_status="app_status" ></lineChart>
                </div>
                  </div>

                </div>

                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Prmissions Analytics</h5>
                  </div>
                  <div class="card-body">
                    <div id="circlechart"></div>
                  </div>
                </div>

          </div>


        </div>

        <div class="col-xl-6 box-col-12 des-xl-100 invoice-sec">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5></h5>
                  </div>
                  <div class="card-body">
                    <div id="basic-apex"></div>
                    <div id="chart">
                        <!-- <BarGraph :total_apps="total_apps" :dates="dates"></BarGraph> -->
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Users By Role</h5>
                  </div>
                    <div class="card-body p-0 chart-block">
                    <!-- <div class="chart-overflow" id="pie-chart3"></div> -->
                  </div>
                  <div id="chart">
                   <apexchart type="radialBar" height="390" :options="chartOptions" :series="series"></apexchart>
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
                    <span class="widget-t mb-1">

                    </span>
                    <h5 class="mb-0">Agents</h5>
                  </div>
                  <!-- <div class="media-body align-self-center ps-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up font-primary"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></div> -->
                  <div class="media-body ps-2">
                    <h5 class="mb-0"><span class="counter" v-for="role in roles" :key="role.id">{{role.users_count}}</span></h5>
                    <span class="mb-1"></span>
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
                      <div class="media-body recent-" >
                       <router-link :to="{ name: 'show-application', params: { id: app.id } }"><span>{{ app.name }}<i class="icofont icofont-link-alt"></i></span></router-link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p v-if="app.status === '1'" class="badge rounded-pill pill-badge-success">Approved</p>
                    <p v-if="app.status === '0'" class="badge rounded-pill pill-badge-warning">In Proccess</p>
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
import lineChart from './ChartComponent.vue'
import donutChart from './DonutChart.vue'
import BarGraph from './BarGraph.vue'
export default {
    components:{
       lineChart,
       donutChart,
       BarGraph
    },

  data() {
    return {
      series: [],
      chartOptions: {
            chart: {
              height: 390,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                  margin: 5,
                  size: '30%',
                  background: 'transparent',
                  image: undefined,
                },
                dataLabels: {
                  name: {
                    show: true,
                  },
                  value: {
                    show: true,
                  }
                }
              }
            },
            colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
            labels: ['admin'],
            legend: {
              show: true,
              floating: true,
              fontSize: '16px',
              position: 'left',
              offsetX: 160,
              offsetY: 15,
              labels: {
                useSeriesColors: true,
              },
              markers: {
                size: 0
              },
              formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              },
              itemMargin: {
                vertical: 3
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                    show: true
                }
              }
            }]
          },
      logs: [],
      user: {},
      app_name: "",
      total_users: 0,
      total_applications: 0,
      total_roles: 0,
      assigned_apps: 0,
      roles: {},
      apps: {},
      labels:[],
      chartOptions:{},
      userByRole:"",
      userWithRole:"",
      app_status:[],
      total_apps : [],
      userRoleLabel : [],
      userByPermission:[],
      userPermissionLabel:[],
      totalPermissions:0,
      dates:[],


    }

  },

  methods: {
      pieChart(){
          var options8 = {
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['Pending Apps', 'Approved Apps'],
    series: this.app_status,
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    colors: ['#46c93a', '#ffba00']
}

var chart8 = new ApexCharts(
    document.querySelector("#piechart"),
    options8
);

chart8.render();

      },

radialBar(){
          var options11 = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {

                    show: true,
                    label: 'Permissions',
                    formatter: function(w) {
                        return 5;
                    }
                }
            }
        }
    },
    series: this.userByPermission,
    labels: this.userPermissionLabel,
    colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, '#222222', '#717171']


}

var chart11 = new ApexCharts(
    document.querySelector("#circlechart"),
    options11
);

chart11.render();

     },
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
        data:this.total_apps,
        // data:this.applications,
    }],
    title: {
        text: 'Applications Analytics',
        align: 'left'
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    // labels:  this.total,
     labels:  this.dates,
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
},
// donutChart(){
//       var data = google.visualization.arrayToDataTable([

//         ['Role', 'Users'],
//         ['Admin', 2],
//         this.userByRole.forEach(function (arrayItem) {
//                     var x = arrayItem.name;
//                     var y = arrayItem.users_count;
//                     "['"+x+"',"+" "+y+"],"
//         })
//         ['Agent', 3]
//       ]);
//       var options = {
//         title: 'Users By Role',
//         pieHole: 0.4,
//         width:'100%',
//         height: 300,
//         colors: [vihoAdminConfig.secondary, vihoAdminConfig.primary]
//       };
//       var chart = new google.visualization.PieChart(document.getElementById('pie-chart3'));
//       chart.draw(data, options);
// },
async getDashboardData() {
      await axios.get("dashboard").then((res) => {
        //  console.log(res.data)
        this.total_users = res.data.users;
        this.total_applications = res.data.total_application;
        this.roles = res.data.roles;
        this.total_roles = res.data.total_roles;
        this.assigned_apps = res.data.assigned_apps;
        this.applications = res.data.total;
        let data=res.data.dateby_applications;
        // console.log(data);
        this.dates=[];
        this.total_apps=[];
        this.dates = data.map(x =>  moment(x.created_at).format("D MMM YYYY"));
        this.total_apps = data.map(x => parseInt(x.total));
        this.app_status = res.data.app_status.map(x => x.count)
        this.chartOptions.labels = res.data.userByRole.map(x => x.name)
        this.series =  res.data.userByRole.map(x => x.users_count)
        this.chartOptions.labels = res.data.userByRole.map(x => x.name)
        this.userByPermission = res.data.userByPermission.map(x => x.users_count)
        this.userPermissionLabel = res.data.userByPermission.map(x => x.name)
        this.totalPermissions = res.data.totalPermissions;
        // this.dates = res.data.dates;
        // series.applications =  data.map(x => x.created_at);
        // series.total = data.map(x => x.total);
        // var arr =  res.data.userByRole.map(x => x)
        // console.log(arr)
        // this.userByRole = arr.reduce(
        //   (obj, item) => Object.assign(obj, { [item.name]: item.users_count }), {}
        // );
        // this.userByRole.forEach(function (arrayItem) {
        //             var x = arrayItem.name;
        //             var y = arrayItem.users_count;
        //             "['"+x+"',"+" "+y+"],"
        //         })
        this.dashboardChart();
        // this.pieChart();
        this.radialBar();
        // this.donutChart();
        // this.userRoleChart();
      });
    },

  },

  mounted() {
    this.getDashboardData();
    // console.log("userss",user);
    this.user = user;
    this.app_name = "American Lender";
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
