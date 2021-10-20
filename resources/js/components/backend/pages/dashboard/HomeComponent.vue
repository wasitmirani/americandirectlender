<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 col-xl-3 col-lg-6">
                <div class="card o-hidden border-0">
                  <div class="bg-primary b-r-4 card-body">
                    <div class="media static-top-widget">
                      <div class="align-self-center text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg></div>
                      <div class="media-body"><span class="m-0">Total Users</span>
                        <h4 class="mb-0 counter">{{total_users}}</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus icon-bg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xl-3 col-lg-6" v-for="item in roles" :key="item.id" >
                <div class="card o-hidden border-0">
                  <div class="bg-primary b-r-4 card-body">
                    <div class="media static-top-widget">
                      <div class="align-self-center text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg></div>
                      <div class="media-body"><span class="m-0"> {{item.name}}s</span>
                        <h4 class="mb-0 counter">{{item.users_count}}</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus icon-bg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
    <div class="row">
              <div class="col-xl-6 col-md-4 box-col-4 des-xl-50">
                    <div class="card profile-greeting">
                      <div class="card-header">
                        <div class="header-top">

                        </div>
                      </div>
                      <div class="card-body text-center p-t-0">
                        <h3 class="font-light">Wellcome Back, {{user.name}}!!</h3>
                        <p>Welcome to the {{app_name}} Family! we are glad that you are visite this dashboard. we will be happy to help you grow your business.</p>

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
          <div class="card income-card">
            <div class="card-header">
                <div class="header-top d-sm-flex align-items-center">
                <h5> yearly overview  </h5>
                <div class="center-content" >
                    <p>
                    <span class="font-primary fontbold-600" > $859.25k </span>
                    <i class="toprightarrow-primary fa fa-arrow-up m-l-10 m-r-10" > </i>
                        86% More than last year
                    </p>
                </div>
                <div class="setting-list">
                    <ul class="list-unstyled setting-option">
                    <li><div class="setting-primary"><i class="icon-settings"></i></div></li>
                    <li><i class="view-html fa fa-code font-primary"></i></li>
                    <li><i class="icofont icofont-maximize full-card font-primary"></i></li>
                    <li><i class="icofont icofont-minus minimize-card font-primary"></i></li>
                    <li><i class="icofont icofont-refresh reload-card font-primary"></i></li>
                    <li><i class="icofont icofont-error close-card font-primary"> </i></li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="card-body p-0">
                <div id="chart-timeline-dashbord"></div>
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
                        <div class="align-self-center me-3 text-start"><span class="widget-t mb-1"></span>
                          <h5 class="mb-0">Total Applications</h5>
                        </div>
                        <div class="media-body align-self-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down font-primary"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg></div>
                        <div class="media-body">
                          <h5 class="mb-0">{{this.total_applications}}<span class="counter"></span></h5><span class="mb-1"></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 ps-0">
                      <div class="media">
                        <div class="align-self-center me-3 text-start"><span class="widget-t mb-1"></span>
                          <h5 class="mb-0">Approved Applications</h5>
                        </div>
                        <div class="media-body align-self-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up font-primary"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></div>
                        <div class="media-body ps-2">
                          <h5 class="mb-0">{{this.assigned_apps}}<span class="counter"></span></h5><span class="mb-1"></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 pe-0">
                      <div class="media border-after-xs">
                        <div class="align-self-center me-3 text-start"><span class="widget-t mb-1"> </span>
                          <h5 class="mb-0">Pending Application</h5>
                        </div>
                        <div class="media-body align-self-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up font-primary"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></div>
                        <div class="media-body">
                          <h5 class="mb-0"><span class="counter">{{parseInt(this.total_applications) - parseInt(this.assigned_apps)}}</span></h5><span class="mb-1"></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 ps-0">
                      <div class="media">
                        <div class="align-self-center me-3 text-start"><span class="widget-t mb-1"></span>
                          <h5 class="mb-0">Agents</h5>
                        </div>
                        <!-- <div class="media-body align-self-center ps-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up font-primary"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></div> -->
                        <div class="media-body ps-2">
                          <h5 class="mb-0"><span class="counter"></span></h5><span class="mb-1">         </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  </div>
  <div class="row">
        <div class="col-xl-4 col-sm-6 ">
                <div class="card browser-widget">
                  <div class="media card-body">
                    <div class="media-img"><img src="assets/images/dashboard/chrome.png" alt=""></div>
                    <div class="media-body align-self-center">
                      <div>
                        <p>Daily </p>
                        <h4><span class="counter">20</span>%</h4>
                      </div>
                      <div>
                        <p>Month </p>
                        <h4><span class="counter">53</span>%</h4>
                      </div>
                      <div>
                        <p>Week </p>
                        <h4><span class="counter">25</span>%</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div class="col-xl-4 col-sm-6">
                <div class="card browser-widget">
                  <div class="media card-body">
                    <div class="media-img"><img src="assets/images/dashboard/firefox.png" alt=""></div>
                    <div class="media-body align-self-center">
                      <div>
                        <p>Daily </p>
                        <h4><span class="counter">20</span>%</h4>
                      </div>
                      <div>
                        <p>Month </p>
                        <h4><span class="counter">53</span>%</h4>
                      </div>
                      <div>
                        <p>Week </p>
                        <h4><span class="counter">25</span>%</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-sm-6">
                <div class="card browser-widget">
                  <div class="media card-body">
                    <div class="media-img"><img src="/assets/images/dashboard/safari.png" alt=""></div>
                    <div class="media-body align-self-center">
                      <div>
                        <p>Daily </p>
                        <h4><span class="counter">19</span>%</h4>
                      </div>
                      <div>
                        <p>Month </p>
                        <h4><span class="counter">52</span>%</h4>
                      </div>
                      <div>
                        <p>Week </p>
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
                              <tr >
                                <th>Application Name</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="app in apps">
                                <td>
                                  <div class="media"><img class="img-fluid rounded-circle" src="" alt="" data-original-title="" title="">
                                    <div class="media-body"><a href="product-page.html"><span>{{app.name}}</span></a></div>
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

          data(){
              return{
                 logs:[],
                 user:{},
                 app_name:"",
                 total_users:0,
                 total_applications:0,
                 total_roles:0,
                 assigned_apps:0,
                 roles: {},
                 apps:{}

        }
    },

    methods:{
        dashboardChart(){
            $(".knob1").knob({

        'width': 65,
        'height': 65,
        'max': 100,

        change: function(value) {
            //console.log("change : " + value);
        },
        release: function(value) {
            //console.log(this.$.attr('value'));
            console.log("release : " + value);
        },
        cancel: function() {
            console.log("cancel : ", this);
        },
        format: function(value) {
            return value + '%';
        },
        draw: function() {

            // "tron" case
            if (this.$.data('skin') == 'tron') {

                this.cursorExt = 1;

                var a = this.arc(this.cv) // Arc
                    ,
                    pa // Previous arc
                    , r = 1;

                this.g.lineWidth = this.lineWidth;

                if (this.o.displayPrevious) {
                    pa = this.arc(this.v);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                    this.g.stroke();
                }

                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                this.g.stroke();

                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();

                return false;
            }
        }
    });
            var charttimeline = new ApexCharts(document.querySelector("#chart-timeline-dashbord"), options);
charttimeline.render();
// second chart dashbord dafault
var options17 = {
  series: [100, 67, 61, 90],
  chart: {
      height: 380,
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
                  show: false,
              },
              value: {
                  show: false,
              }
          }
      }
  },
  colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, vihoAdminConfig.primary, vihoAdminConfig.secondary],
  labels: ['Total order', 'Total product', 'Quantity', 'Page views'],
  legend: {
      show: true,
      floating: true,
      fontSize: '14px',
      position: 'left',
      fontFamily: 'Roboto',
      fontweight: 400,
      // offsetX:30,
      offsetY: 20,
      labels: {
          useSeriesColors: true,
      },
      markers: {
          size: 0,
          show: false,
      },
      formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
          vertical: 5,
          horizontal: 2
      }
  },
  stroke: {
      lineCap: 'round'
  },
  responsive: [{
      breakpoint: 480,
      options: {
          legend: {
              show: true,
              fontSize: '10px',
          }
      }
  }]
};
        },

          async  getDashboardData(){
          await  axios.get('dashboard').then((res)=>{
              console.log(res)
              this.total_users=res.data.users;
              this.total_applications=res.data.total_application;
              this.roles = res.data.roles;
              this.total_roles = res.data.total_roles;
              this.assigned_apps = res.data.assigned_apps
            });
        }
    },




        mounted(){
            this.getDashboardData();
            console.log("userss",user);
            this.user=user;
            this.app_name="American Lender";
            this.dashboardChart();


            axios.get('/recent/applications/').then((res)=>{
                   this.apps = res.data.applications
                   console.log(res.data.applications)
                   this.loading =false;
               }).catch((err)=>{
                        this.$root.alertNotificationMessage(err.response.status,err.response.data);

                });


        }



    }
</script>

<style lang="scss" scoped>

</style>
