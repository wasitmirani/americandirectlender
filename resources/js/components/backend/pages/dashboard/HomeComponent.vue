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
        var dataSeries = [
    [
        {
        "date": "",
        "value": 20
        },
        {
            "date": "2014-01-02",
            "value": 10379978
        },
        {
            "date": "2014-01-03",
            "value": 30493749
        },
        {
            "date": "2014-01-04",
            "value": 10785250
        },
        {
            "date": "2014-01-05",
            "value": 33901904
        },
        {
            "date": "2014-01-06",
            "value": 11576838
        },
        {
            "date": "2014-01-07",
            "value": 14413854
        },
        {
            "date": "2014-01-08",
            "value": 15177211
        },
        {
            "date": "2014-01-09",
            "value": 16622100
        },
        {
            "date": "2014-01-10",
            "value": 17381072
        },
        {
            "date": "2014-01-11",
            "value": 18802310
        },
        {
            "date": "2014-01-12",
            "value": 15531790
        },
        {
            "date": "2014-01-13",
            "value": 15748881
        },
        {
            "date": "2014-01-14",
            "value": 18706437
        },
        {
            "date": "2014-01-15",
            "value": 19752685
        },
        {
            "date": "2014-01-16",
            "value": 21016418
        },
        {
            "date": "2014-01-17",
            "value": 25622924
        },
        {
            "date": "2014-01-18",
            "value": 25337480
        },
        {
            "date": "2014-01-19",
            "value": 22258882
        },
        {
            "date": "2014-01-20",
            "value": 23829538
        },
        {
            "date": "2014-01-21",
            "value": 24245689
        },
        {
            "date": "2014-01-22",
            "value": 26429711
        },
        {
            "date": "2014-01-23",
            "value": 26259017
        },
        {
            "date": "2014-01-24",
            "value": 25396183
        },
        {
            "date": "2014-01-25",
            "value": 23107346
        },
        {
            "date": "2014-01-26",
            "value": 28659852
        },
        {
            "date": "2014-01-27",
            "value": 25270783
        },
        {
            "date": "2014-01-28",
            "value": 26270783
        },
        {
            "date": "2014-01-29",
            "value": 27270783
        },
        {
            "date": "2014-01-30",
            "value": 28270783
        },
        {
            "date": "2014-01-31",
            "value": 29270783
        },
        {
            "date": "2014-02-01",
            "value": 30270783
        },
        {
            "date": "2014-02-02",
            "value": 31270783
        },
        {
            "date": "2014-02-03",
            "value": 32270783
        },
        {
            "date": "2014-02-04",
            "value": 33270783
        },
        {
            "date": "2014-02-05",
            "value": 28270783
        },
        {
            "date": "2014-02-06",
            "value": 27270783
        },
        {
            "date": "2014-02-07",
            "value": 35270783
        },
        {
            "date": "2014-02-08",
            "value": 34270783
        },
        {
            "date": "2014-02-09",
            "value": 28270783
        },
        {
            "date": "2014-02-10",
            "value": 35270783
        },
        {
            "date": "2014-02-11",
            "value": 36270783
        },
        {
            "date": "2014-02-12",
            "value": 34127078
        },
        {
            "date": "2014-02-13",
            "value": 33124078
        },
        {
            "date": "2014-02-14",
            "value": 36227078
        },
        {
            "date": "2014-02-15",
            "value": 37827078
        },
        {
            "date": "2014-02-16",
            "value": 36427073
        },
        {
            "date": "2014-02-17",
            "value": 37570783
        },
        {
            "date": "2014-02-18",
            "value": 38627073
        },
        {
            "date": "2014-02-19",
            "value": 37727078
        },
        {
            "date": "2014-02-20",
            "value": 38827073
        },
        {
            "date": "2014-02-21",
            "value": 40927078
        },
        {
            "date": "2014-02-22",
            "value": 41027078
        },
        {
            "date": "2014-02-23",
            "value": 42127073
        },
        {
            "date": "2014-02-24",
            "value": 43220783
        },
        {
            "date": "2014-02-25",
            "value": 44327078
        },
        {
            "date": "2014-02-26",
            "value": 40427078
        },
        {
            "date": "2014-02-27",
            "value": 41027078
        },
        {
            "date": "2014-02-28",
            "value": 45627078
        },
        {
            "date": "2014-03-01",
            "value": 44727078
        },
        {
            "date": "2014-03-02",
            "value": 44227078
        },
        {
            "date": "2014-03-03",
            "value": 45227078
        },
        {
            "date": "2014-03-04",
            "value": 46027078
        },
        {
            "date": "2014-03-05",
            "value": 46927078
        },
        {
            "date": "2014-03-06",
            "value": 47027078
        },
        {
            "date": "2014-03-07",
            "value": 46227078
        },
        {
            "date": "2014-03-08",
            "value": 47027078
        },
        {
            "date": "2014-03-09",
            "value": 48027078
        },
        {
            "date": "2014-03-10",
            "value": 47027078
        },
        {
            "date": "2014-03-11",
            "value": 47027078
        },
        {
            "date": "2014-03-12",
            "value": 48017078
        },
        {
            "date": "2014-03-13",
            "value": 48077078
        },
        {
            "date": "2014-03-14",
            "value": 48087078
        },
        {
            "date": "2014-03-15",
            "value": 48017078
        },
        {
            "date": "2014-03-16",
            "value": 48047078
        },
        {
            "date": "2014-03-17",
            "value": 48067078
        },
        {
            "date": "2014-03-18",
            "value": 48077078
        },
        {
            "date": "2014-03-19",
            "value": 48027074
        },
        {
            "date": "2014-03-20",
            "value": 48927079
        },
        {
            "date": "2014-03-21",
            "value": 48727071
        },
        {
            "date": "2014-03-22",
            "value": 48127072
        },
        {
            "date": "2014-03-23",
            "value": 48527072
        },
        {
            "date": "2014-03-24",
            "value": 48627027
        },
        {
            "date": "2014-03-25",
            "value": 48027040
        },
        {
            "date": "2014-03-26",
            "value": 48027043
        },
        {
            "date": "2014-03-27",
            "value": 48057022
        },
        {
            "date": "2014-03-28",
            "value": 49057022
        },
        {
            "date": "2014-03-29",
            "value": 50057022
        },
        {
            "date": "2014-03-30",
            "value": 51057022
        },
        {
            "date": "2014-03-31",
            "value": 52057022
        },
        {
            "date": "2014-04-01",
            "value": 53057022
        },
        {
            "date": "2014-04-02",
            "value": 54057022
        },
        {
            "date": "2014-04-03",
            "value": 52057022
        },
        {
            "date": "2014-04-04",
            "value": 55057022
        },
        {
            "date": "2014-04-05",
            "value": 58270783
        },
        {
            "date": "2014-04-06",
            "value": 56270783
        },
        {
            "date": "2014-04-07",
            "value": 55270783
        },
        {
            "date": "2014-04-08",
            "value": 58270783
        },
        {
            "date": "2014-04-09",
            "value": 59270783
        },
        {
            "date": "2014-04-10",
            "value": 60270783
        },
        {
            "date": "2014-04-11",
            "value": 61270783
        },
        {
            "date": "2014-04-12",
            "value": 62270783
        },
        {
            "date": "2014-04-13",
            "value": 63270783
        },
        {
            "date": "2014-04-14",
            "value": 64270783
        },
        {
            "date": "2014-04-15",
            "value": 65270783
        },
        {
            "date": "2014-04-16",
            "value": 66270783
        },
        {
            "date": "2014-04-17",
            "value": 67270783
        },
        {
            "date": "2014-04-18",
            "value": 68270783
        },
        {
            "date": "2014-04-19",
            "value": 69270783
        },
        {
            "date": "2014-04-20",
            "value": 70270783
        },
        {
            "date": "2014-04-21",
            "value": 71270783
        },
        {
            "date": "2014-04-22",
            "value": 72270783
        },
        {
            "date": "2014-04-23",
            "value": 73270783
        },
        {
            "date": "2014-04-24",
            "value": 74270783
        },
        {
            "date": "2014-04-25",
            "value": 75270783
        },
        {
            "date": "2014-04-26",
            "value": 76660783
        },
        {
            "date": "2014-04-27",
            "value": 77270783
        },
        {
            "date": "2014-04-28",
            "value": 78370783
        },
        {
            "date": "2014-04-29",
            "value": 79470783
        },
        {
            "date": "2014-04-30",
            "value": 80170783
        }
    ],
    [{
        "date": "2014-01-01",
        "value": 150000000
    },
        {
            "date": "2014-01-02",
            "value": 160379978
        },
        {
            "date": "2014-01-03",
            "value": 170493749
        },
        {
            "date": "2014-01-04",
            "value": 160785250
        },
        {
            "date": "2014-01-05",
            "value": 167391904
        },
        {
            "date": "2014-01-06",
            "value": 161576838
        },
        {
            "date": "2014-01-07",
            "value": 161413854
        },
        {
            "date": "2014-01-08",
            "value": 152177211
        },
        {
            "date": "2014-01-09",
            "value": 140762210
        },
        {
            "date": "2014-01-10",
            "value": 144381072
        },
        {
            "date": "2014-01-11",
            "value": 154352310
        },
        {
            "date": "2014-01-12",
            "value": 165531790
        },
        {
            "date": "2014-01-13",
            "value": 175748881
        },
        {
            "date": "2014-01-14",
            "value": 187064037
        },
        {
            "date": "2014-01-15",
            "value": 197520685
        },
        {
            "date": "2014-01-16",
            "value": 210176418
        },
        {
            "date": "2014-01-17",
            "value": 196122924
        },
        {
            "date": "2014-01-18",
            "value": 207337480
        },
        {
            "date": "2014-01-19",
            "value": 200258882
        },
        {
            "date": "2014-01-20",
            "value": 186829538
        },
        {
            "date": "2014-01-21",
            "value": 192456897
        },
        {
            "date": "2014-01-22",
            "value": 204299711
        },
        {
            "date": "2014-01-23",
            "value": 192759017
        },
        {
            "date": "2014-01-24",
            "value": 203596183
        },
        {
            "date": "2014-01-25",
            "value": 208107346
        },
        {
            "date": "2014-01-26",
            "value": 196359852
        },
        {
            "date": "2014-01-27",
            "value": 192570783
        },
        {
            "date": "2014-01-28",
            "value": 177967768
        },
        {
            "date": "2014-01-29",
            "value": 190632803
        },
        {
            "date": "2014-01-30",
            "value": 203725316
        },
        {
            "date": "2014-01-31",
            "value": 218226177
        },
        {
            "date": "2014-02-01",
            "value": 210698669
        },
        {
            "date": "2014-02-02",
            "value": 217640656
        },
        {
            "date": "2014-02-03",
            "value": 216142362
        },
        {
            "date": "2014-02-04",
            "value": 201410971
        },
        {
            "date": "2014-02-05",
            "value": 196704289
        },
        {
            "date": "2014-02-06",
            "value": 190436945
        },
        {
            "date": "2014-02-07",
            "value": 178891686
        },
        {
            "date": "2014-02-08",
            "value": 171613962
        },
        {
            "date": "2014-02-09",
            "value": 157579773
        },
        {
            "date": "2014-02-10",
            "value": 158677098
        },
        {
            "date": "2014-02-11",
            "value": 147129977
        },
        {
            "date": "2014-02-12",
            "value": 151561876
        },
        {
            "date": "2014-02-13",
            "value": 151627421
        },
        {
            "date": "2014-02-14",
            "value": 143543872
        },
        {
            "date": "2014-02-15",
            "value": 136581057
        },
        {
            "date": "2014-02-16",
            "value": 135560715
        },
        {
            "date": "2014-02-17",
            "value": 122625263
        },
        {
            "date": "2014-02-18",
            "value": 112091484
        },
        {
            "date": "2014-02-19",
            "value": 98810329
        },
        {
            "date": "2014-02-20",
            "value": 99882912
        },
        {
            "date": "2014-02-21",
            "value": 94943095
        },
        {
            "date": "2014-02-22",
            "value": 104875743
        },
        {
            "date": "2014-02-23",
            "value": 116383678
        },
        {
            "date": "2014-02-24",
            "value": 125028841
        },
        {
            "date": "2014-02-25",
            "value": 123967310
        },
        {
            "date": "2014-02-26",
            "value": 133167029
        },
        {
            "date": "2014-02-27",
            "value": 128577263
        },
        {
            "date": "2014-02-28",
            "value": 115836969
        },
        {
            "date": "2014-03-01",
            "value": 119264529
        },
        {
            "date": "2014-03-02",
            "value": 109363374
        },
        {
            "date": "2014-03-03",
            "value": 113985628
        },
        {
            "date": "2014-03-04",
            "value": 114650999
        },
        {
            "date": "2014-03-05",
            "value": 110866108
        },
        {
            "date": "2014-03-06",
            "value": 96473454
        },
        {
            "date": "2014-03-07",
            "value": 104075886
        },
        {
            "date": "2014-03-08",
            "value": 103568384
        },
        {
            "date": "2014-03-09",
            "value": 101534883
        },
        {
            "date": "2014-03-10",
            "value": 115825447
        },
        {
            "date": "2014-03-11",
            "value": 126133916
        },
        {
            "date": "2014-03-12",
            "value": 116502109
        },
        {
            "date": "2014-03-13",
            "value": 130169411
        },
        {
            "date": "2014-03-14",
            "value": 124296886
        },
        {
            "date": "2014-03-15",
            "value": 126347399
        },
        {
            "date": "2014-03-16",
            "value": 131483669
        },
        {
            "date": "2014-03-17",
            "value": 142811333
        },
        {
            "date": "2014-03-18",
            "value": 129675396
        },
        {
            "date": "2014-03-19",
            "value": 115514483
        },
        {
            "date": "2014-03-20",
            "value": 117630630
        },
        {
            "date": "2014-03-21",
            "value": 122340239
        },
        {
            "date": "2014-03-22",
            "value": 132349091
        },
        {
            "date": "2014-03-23",
            "value": 125613305
        },
        {
            "date": "2014-03-24",
            "value": 135592466
        },
        {
            "date": "2014-03-25",
            "value": 123408762
        },
        {
            "date": "2014-03-26",
            "value": 111991454
        },
        {
            "date": "2014-03-27",
            "value": 116123955
        },
        {
            "date": "2014-03-28",
            "value": 112817214
        },
        {
            "date": "2014-03-29",
            "value": 113029590
        },
        {
            "date": "2014-03-30",
            "value": 108753398
        },
        {
            "date": "2014-03-31",
            "value": 99383763
        },
        {
            "date": "2014-04-01",
            "value": 100151737
        },
        {
            "date": "2014-04-02",
            "value": 94985209
        },
        {
            "date": "2014-04-03",
            "value": 82913669
        },
        {
            "date": "2014-04-04",
            "value": 78748268
        },
        {
            "date": "2014-04-05",
            "value": 63829135
        },
        {
            "date": "2014-04-06",
            "value": 78694727
        },
        {
            "date": "2014-04-07",
            "value": 80868994
        },
        {
            "date": "2014-04-08",
            "value": 93799013
        },
        {
            "date": "2014-04-09",
            "value": 99042416
        },
        {
            "date": "2014-04-10",
            "value": 97298692
        },
        {
            "date": "2014-04-11",
            "value": 83353499
        },
        {
            "date": "2014-04-12",
            "value": 71248129
        },
        {
            "date": "2014-04-13",
            "value": 75253744
        },
        {
            "date": "2014-04-14",
            "value": 68976648
        },
        {
            "date": "2014-04-15",
            "value": 71002284
        },
        {
            "date": "2014-04-16",
            "value": 75052401
        },
        {
            "date": "2014-04-17",
            "value": 83894030
        },
        {
            "date": "2014-04-18",
            "value": 90236528
        },
        {
            "date": "2014-04-19",
            "value": 99739114
        },
        {
            "date": "2014-04-20",
            "value": 96407136
        },
        {
            "date": "2014-04-21",
            "value": 108323177
        },
        {
            "date": "2014-04-22",
            "value": 101578914
        },
        {
            "date": "2014-04-23",
            "value": 115877608
        },
        {
            "date": "2014-04-24",
            "value": 112088857
        },
        {
            "date": "2014-04-25",
            "value": 112071353
        },
        {
            "date": "2014-04-26",
            "value": 101790062
        },
        {
            "date": "2014-04-27",
            "value": 115003761
        },
        {
            "date": "2014-04-28",
            "value": 120457727
        },
        {
            "date": "2014-04-29",
            "value": 118253926
        },
        {
            "date": "2014-04-30",
            "value": 117956992
        }
    ],
    [{
        "date": "2014-01-01",
        "value": 50000000
       },
        {
            "date": "2014-01-02",
            "value": 60379978
        },
        {
            "date": "2014-01-03",
            "value": 40493749
        },
        {
            "date": "2014-01-04",
            "value": 60785250
        },
        {
            "date": "2014-01-05",
            "value": 67391904
        },
        {
            "date": "2014-01-06",
            "value": 61576838
        },
        {
            "date": "2014-01-07",
            "value": 61413854
        },
        {
            "date": "2014-01-08",
            "value": 82177211
        },
        {
            "date": "2014-01-09",
            "value": 103762210
        },
        {
            "date": "2014-01-10",
            "value": 84381072
        },
        {
            "date": "2014-01-11",
            "value": 54352310
        },
        {
            "date": "2014-01-12",
            "value": 65531790
        },
        {
            "date": "2014-01-13",
            "value": 75748881
        },
        {
            "date": "2014-01-14",
            "value": 47064037
        },
        {
            "date": "2014-01-15",
            "value": 67520685
        },
        {
            "date": "2014-01-16",
            "value": 60176418
        },
        {
            "date": "2014-01-17",
            "value": 66122924
        },
        {
            "date": "2014-01-18",
            "value": 57337480
        },
        {
            "date": "2014-01-19",
            "value": 100258882
        },
        {
            "date": "2014-01-20",
            "value": 46829538
        },
        {
            "date": "2014-01-21",
            "value": 92456897
        },
        {
            "date": "2014-01-22",
            "value": 94299711
        },
        {
            "date": "2014-01-23",
            "value": 62759017
        },
        {
            "date": "2014-01-24",
            "value": 103596183
        },
        {
            "date": "2014-01-25",
            "value": 108107346
        },
        {
            "date": "2014-01-26",
            "value": 66359852
        },
        {
            "date": "2014-01-27",
            "value": 62570783
        },
        {
            "date": "2014-01-28",
            "value": 77967768
        },
        {
            "date": "2014-01-29",
            "value": 60632803
        },
        {
            "date": "2014-01-30",
            "value": 103725316
        },
        {
            "date": "2014-01-31",
            "value": 98226177
        },
        {
            "date": "2014-02-01",
            "value": 60698669
        },
        {
            "date": "2014-02-02",
            "value": 67640656
        },
        {
            "date": "2014-02-03",
            "value": 66142362
        },
        {
            "date": "2014-02-04",
            "value": 101410971
        },
        {
            "date": "2014-02-05",
            "value": 66704289
        },
        {
            "date": "2014-02-06",
            "value": 60436945
        },
        {
            "date": "2014-02-07",
            "value": 78891686
        },
        {
            "date": "2014-02-08",
            "value": 71613962
        },
        {
            "date": "2014-02-09",
            "value": 107579773
        },
        {
            "date": "2014-02-10",
            "value": 58677098
        },
        {
            "date": "2014-02-11",
            "value": 87129977
        },
        {
            "date": "2014-02-12",
            "value": 51561876
        },
        {
            "date": "2014-02-13",
            "value": 51627421
        },
        {
            "date": "2014-02-14",
            "value": 83543872
        },
        {
            "date": "2014-02-15",
            "value": 66581057
        },
        {
            "date": "2014-02-16",
            "value": 65560715
        },
        {
            "date": "2014-02-17",
            "value": 62625263
        },
        {
            "date": "2014-02-18",
            "value": 92091484
        },
        {
            "date": "2014-02-19",
            "value": 48810329
        },
        {
            "date": "2014-02-20",
            "value": 49882912
        },
        {
            "date": "2014-02-21",
            "value": 44943095
        },
        {
            "date": "2014-02-22",
            "value": 104875743
        },
        {
            "date": "2014-02-23",
            "value": 96383678
        },
        {
            "date": "2014-02-24",
            "value": 105028841
        },
        {
            "date": "2014-02-25",
            "value": 63967310
        },
        {
            "date": "2014-02-26",
            "value": 63167029
        },
        {
            "date": "2014-02-27",
            "value": 68577263
        },
        {
            "date": "2014-02-28",
            "value": 95836969
        },
        {
            "date": "2014-03-01",
            "value": 99264529
        },
        {
            "date": "2014-03-02",
            "value": 109363374
        },
        {
            "date": "2014-03-03",
            "value": 93985628
        },
        {
            "date": "2014-03-04",
            "value": 94650999
        },
        {
            "date": "2014-03-05",
            "value": 90866108
        },
        {
            "date": "2014-03-06",
            "value": 46473454
        },
        {
            "date": "2014-03-07",
            "value": 84075886
        },
        {
            "date": "2014-03-08",
            "value": 103568384
        },
        {
            "date": "2014-03-09",
            "value": 101534883
        },
        {
            "date": "2014-03-10",
            "value": 95825447
        },
        {
            "date": "2014-03-11",
            "value": 66133916
        },
        {
            "date": "2014-03-12",
            "value": 96502109
        },
        {
            "date": "2014-03-13",
            "value": 80169411
        },
        {
            "date": "2014-03-14",
            "value": 84296886
        },
        {
            "date": "2014-03-15",
            "value": 86347399
        },
        {
            "date": "2014-03-16",
            "value": 31483669
        },
        {
            "date": "2014-03-17",
            "value": 82811333
        },
        {
            "date": "2014-03-18",
            "value": 89675396
        },
        {
            "date": "2014-03-19",
            "value": 95514483
        },
        {
            "date": "2014-03-20",
            "value": 97630630
        },
        {
            "date": "2014-03-21",
            "value": 62340239
        },
        {
            "date": "2014-03-22",
            "value": 62349091
        },
        {
            "date": "2014-03-23",
            "value": 65613305
        },
        {
            "date": "2014-03-24",
            "value": 65592466
        },
        {
            "date": "2014-03-25",
            "value": 63408762
        },
        {
            "date": "2014-03-26",
            "value": 91991454
        },
        {
            "date": "2014-03-27",
            "value": 96123955
        },
        {
            "date": "2014-03-28",
            "value": 92817214
        },
        {
            "date": "2014-03-29",
            "value": 93029590
        },
        {
            "date": "2014-03-30",
            "value": 108753398
        },
        {
            "date": "2014-03-31",
            "value": 49383763
        },
        {
            "date": "2014-04-01",
            "value": 100151737
        },
        {
            "date": "2014-04-02",
            "value": 44985209
        },
        {
            "date": "2014-04-03",
            "value": 52913669
        },
        {
            "date": "2014-04-04",
            "value": 48748268
        },
        {
            "date": "2014-04-05",
            "value": 23829135
        },
        {
            "date": "2014-04-06",
            "value": 58694727
        },
        {
            "date": "2014-04-07",
            "value": 50868994
        },
        {
            "date": "2014-04-08",
            "value": 43799013
        },
        {
            "date": "2014-04-09",
            "value": 4042416
        },
        {
            "date": "2014-04-10",
            "value": 47298692
        },
        {
            "date": "2014-04-11",
            "value": 53353499
        },
        {
            "date": "2014-04-12",
            "value": 71248129
        },
        {
            "date": "2014-04-13",
            "value": 75253744
        },
        {
            "date": "2014-04-14",
            "value": 68976648
        },
        {
            "date": "2014-04-15",
            "value": 71002284
        },
        {
            "date": "2014-04-16",
            "value": 75052401
        },
        {
            "date": "2014-04-17",
            "value": 83894030
        },
        {
            "date": "2014-04-18",
            "value": 50236528
        },
        {
            "date": "2014-04-19",
            "value": 59739114
        },
        {
            "date": "2014-04-20",
            "value": 56407136
        },
        {
            "date": "2014-04-21",
            "value": 108323177
        },
        {
            "date": "2014-04-22",
            "value": 101578914
        },
        {
            "date": "2014-04-23",
            "value": 95877608
        },
        {
            "date": "2014-04-24",
            "value": 62088857
        },
        {
            "date": "2014-04-25",
            "value": 92071353
        },
        {
            "date": "2014-04-26",
            "value": 81790062
        },
        {
            "date": "2014-04-27",
            "value": 105003761
        },
        {
            "date": "2014-04-28",
            "value": 100457727
        },
        {
            "date": "2014-04-29",
            "value": 98253926
        },
        {
            "date": "2014-04-30",
            "value": 67956992
        }
    ]
]
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
        data: series.monthDataSeries1.prices
    }],
    title: {
        text: 'Applications Statistics',
        align: 'left'
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    labels: series.monthDataSeries1.dates,
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
      var options17 = {
        series: [10022, 67, 61, 90],
        chart: {
          height: 380,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: [
          vihoAdminConfig.primary,
          vihoAdminConfig.secondary,
          vihoAdminConfig.primary,
          vihoAdminConfig.secondary,
        ],
        labels: ["Total order", "Total product", "Quantity", "Page views"],
        legend: {
          show: true,
          floating: true,
          fontSize: "14px",
          position: "left",
          fontFamily: "Roboto",
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
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 5,
            horizontal: 2,
          },
        },
        stroke: {
          lineCap: "round",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: true,
                fontSize: "10px",
              },
            },
          },
        ],
      };
    },

    async getDashboardData() {
      await axios.get("dashboard").then((res) => {
        //   console.log(res)
        this.total_users = res.data.users;
        this.total_applications = res.data.total_application;
        this.roles = res.data.roles;
        this.total_roles = res.data.total_roles;
        this.assigned_apps = res.data.assigned_apps;

      });
    },
  },

  mounted() {
    this.getDashboardData();
    // console.log("userss",user);
    this.user = user;
    this.app_name = "American Lender";
    this.dashboardChart();

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
