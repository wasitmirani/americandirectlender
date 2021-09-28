<template>
    <div>
        <div class="container-fluid">
    <div class="row">
              <div class="col-xl-6 col-md-6 box-col-6 des-xl-50">
                    <div class="card profile-greeting">
                      <div class="card-header">
                        <div class="header-top">
                          <div class="setting-list bg-primary position-unset">
                            <ul class="list-unstyled setting-option">
                              <li>
                                <div class="setting-white"><i class="icon-settings"></i></div>
                              </li>
                              <li><i class="view-html fa fa-code font-white"></i></li>
                              <li><i class="icofont icofont-maximize full-card font-white"></i></li>
                              <li><i class="icofont icofont-minus minimize-card font-white"></i></li>
                              <li><i class="icofont icofont-refresh reload-card font-white"></i></li>
                              <li><i class="icofont icofont-error close-card font-white"> </i></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="card-body text-center p-t-0">
                        <h3 class="font-light">Wellcome Back, {{user.name}}!!</h3>
                        <p>Welcome to the {{appname}} Family! we are glad that you are visite this dashboard. we will be happy to help you grow your business.</p>

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

      <div class="col-xl-8 col-md- des-xl-100 box-col-12">
        <div class="row">
          <div class="col-xl-3 col-sm-6 box-col-3 chart_data_right">
            <div class="card income-card card-secondary">
              <div class="card-body align-items-center">
                <div class="round-progress knob-block text-center">
                  <div class="progress-circle">
                    <input class="knob1" data-width="10" data-height="70" data-thickness=".3" data-angleoffset="0" data-linecap="round" data-fgcolor="#ba895d" data-bgcolor="#e0e9ea" value="60">
                  </div>
                  <h5>$9,84,235</h5>
                  <p>Our Annual Income</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 box-col-3 chart_data_right second">
            <div class="card income-card card-primary">
              <div class="card-body">
                <div class="round-progress knob-block text-center">
                  <div class="progress-circle">
                    <input class="knob1" data-width="50" data-height="70" data-thickness=".3" data-fgcolor="#665ed" data-linecap="round" data-angleoffset="0" value="60">
                  </div>
                  <h5>$4,55,462</h5>
                  <p>Our Annual Income</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6 box-col-6">
            <div class="card">
              <div class="card-header">
                <div class="header-top d-sm-flex justify-content-between align-items-center">
                  <h5>Total Selling</h5>
                  <div class="center-content">
                    <ul class="week-date">
                      <li class="font-primary">Today</li>
                      <li>Month                                     </li>
                    </ul>
                  </div>
                  <div class="setting-list">
                    <ul class="list-unstyled setting-option">
                      <li>
                        <div class="setting-primary"><i class="icon-settings"></i></div>
                      </li>
                      <li><i class="view-html fa fa-code font-primary"></i></li>
                      <li><i class="icofont icofont-maximize full-card font-primary"></i></li>
                      <li><i class="icofont icofont-minus minimize-card font-primary"></i></li>
                      <li><i class="icofont icofont-refresh reload-card font-primary"></i></li>
                      <li><i class="icofont icofont-error close-card font-primary"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body chart-block p-0">
                <div id="chart-dash-2-line"></div>
                <div class="code-box-copy">
                  <button class="code-box-copy__btn btn-clipboard" data-clipboard-target="#total-selling" title="Copy"><i class="icofont icofont-copy-alt"></i></button>
                  <pre><code class="language-html" id="total-selling">       </code></pre>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 box-col-6">
            <div class="card target-sec">
              <div class="card-header pb-0">
                <ul class="target-list">
                  <li>
                    <h6>Our Target</h6>
                    <p>Completed</p><span>$687.780</span>
                  </li>
                  <li class="bg-primary">
                    <h6>We Archieve</h6>
                    <p>Completed in After 3 Hours</p><span>$687.780k                                     </span>
                  </li>
                </ul>
              </div>
              <div class="card-body p-0">
                <div class="traget-img-sec"></div>
                <div class="animat-block"><i class="fa fa-times close1"></i><i class="fa fa-times close2"></i><i class="fa fa-times close3"></i>
                  <div class="circle1"></div>
                  <div class="circle2"></div>
                  <div class="circle3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 des-xl-50 box-col-12 activity-sec chart_data_left">
        <div class="card">
          <div class="card-header">
            <div class="header-top d-sm-flex justify-content-between align-items-center">
              <h5 class="m-0">Activity Timeline</h5>
              <div class="center-content">
                <p>Yearly User 24.65k</p>
              </div>
              <div class="setting-list">
                <ul class="list-unstyled setting-option">
                  <li>
                    <div class="setting-primary"><i class="icon-settings"></i></div>
                  </li>
                  <li><i class="view-html fa fa-code font-primary"></i></li>
                  <li><i class="icofont icofont-maximize full-card font-primary"></i></li>
                  <li><i class="icofont icofont-minus minimize-card font-primary"></i></li>
                  <li><i class="icofont icofont-refresh reload-card font-primary"></i></li>
                  <li><i class="icofont icofont-error close-card font-primary"></i></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="chart-main activity-timeline update-line">
              <div class="media"  v-for="log in logs" :key="log.id">
                <div class="activity-line"></div>
                <div class="activity-dot-primary"></div>
                <div class="media-body d-block">

                  <h6> <span class="font-primary"> {{log.created_at  | timeformat}} </span> </h6>
                  <h5>{{log.log_name}}<i class="fa fa-circle circle-dot-primary pull-right"></i></h5>
                  <p>{{log.description}}</p>
                </div>
              </div>





            </div>

          </div>
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
    },

        mounted(){
            console.log("userss",user);
            this.user=user;
            this.app_name=appname;
            this.dashboardChart();


        }



    }
</script>

<style lang="scss" scoped>

</style>
