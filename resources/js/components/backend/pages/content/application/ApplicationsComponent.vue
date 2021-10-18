<template>
  <div>
        <Breadcrumb activename="Customer Applications" ></Breadcrumb>
        <div class="container-fluid">
            <div class="row project-cards">
              <div class="col-md-12 project-list">
                <div class="card">
                  <div class="row">
                    <div class="col-md-6 p-0">
                      <ul class="nav nav-tabs border-tab" id="top-tab" role="tablist">
                        <li class="nav-item"><a class="nav-link active" id="top-home-tab" data-bs-toggle="tab" href="#top-home" role="tab" aria-controls="top-home" aria-selected="true"><i data-feather="target"></i>All</a></li>
                        <li class="nav-item"><a class="nav-link" id="profile-top-tab" data-bs-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="false"><i data-feather="info"></i>Process</a></li>
                        <li class="nav-item"><a class="nav-link" id="contact-top-tab" data-bs-toggle="tab" href="#top-contact" role="tab" aria-controls="top-contact" aria-selected="false"><i data-feather="check-circle"></i>Done</a></li>
                      </ul>
                    </div>
                    <div class="col-md-6 p-0">
                      <div class="form-group mb-0 me-0"></div>
                      <!-- <PrimaryButton icon="fas fa-plus"  label="Create Application"  v-on:activemodal="openModal($event)"></PrimaryButton> -->
                      <!-- <a class="btn btn-primary" href="projectcreate.html"> <i data-feather="plus-square"> </i>Create New Application</a> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <div class="tab-content" id="top-tabContent">
                      <div class="tab-pane fade show active" id="top-home" role="tabpanel" aria-labelledby="top-home-tab">
                        <div class="row">
                                     <SearchInput :apiurl="'/customer/applications?page=' +this.page_num"
                        v-on:query="isquery($event)"
                        v-on:loading="loadingStart($event)"
                        v-on:reload="getApplications()"
                        v-on:filterList="filterdata($event)"

                        label="Search Roles"></SearchInput>
                                        <div class="col-xxl-4 col-lg-6" v-for="application in applications" :key="application.id">

                                <ApplicationCard :getApplications="getApplications" :application="application"></ApplicationCard>

                                   </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab">
                        <div class="row">
                            <div class="col-xxl-4 col-lg-6" v-for="application in process" :key="application.id">
                                <ApplicationCard :getApplications="getApplications" :application="application"></ApplicationCard>

                            </div>



                        </div>
                      </div>
                      <div class="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                        <div class="row">
                             <div class="col-xxl-4 col-lg-6" v-for="application in done" :key="application.id">
                                  <ApplicationCard :getApplications="getApplications" :application="application"></ApplicationCard>
                             </div>

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
import Breadcrumb from "../../../components/BreadcrumbComponent.vue";
import PrimaryButton from "../../../components/PrimaryButton.vue";
import ApplicationCard from "./components/ApplicationCard.vue";
import SearchInput from "../../../components/SearchInput.vue";
export default {
  components:{
        Breadcrumb,
        ApplicationCard,
        PrimaryButton,
        SearchInput,
    },
      data(){
        return {
            applications:{},
            process:{},
            done:{},
            query:"",
            loading:false,
            total_applications:0,
            page_num:1,
        };
    },
      mounted(){
        this.getApplications();


    },
     methods:{
          isquery(query) {
            return (this.query = query);
          },
            loadingStart(value) {
           console.log(value);
            this.loading = value;
          },
          async getApplications(page=1){

                this.loading =true;
                this.page_num = page;
                const url="/customer/applications?page=" + page + "&query=" + this.query;

               await axios.get(url).then((res)=>{

                   this.applications = res.data.applications.data;
                   this.total_application = res.data.total_applications;
                   this.process = res.data.process.data;
                   this.done = res.data.done.data;



                    // this.roles=res.data.roles;
                   this.loading =false;
               }).catch((err)=>{
                        this.$root.alertNotificationMessage(err.response.status,err.response.data);

                  });
            },
     }
}
</script>


<style>
.vs-button {
   float:right;
}
</style>

