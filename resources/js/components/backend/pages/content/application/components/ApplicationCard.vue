<template>
<div>
   <div class="project-box" >
     <span class="badge badge-primary">
         <router-link :to="{name: 'update-application', params: { id: application.id }}"><i class="fa  fa-edit text-primary"></i></router-link>
         </span>
                              <h6>{{application.name}}</h6>
                              <div class="media"><img class="img-20 me-2 rounded-circle" src="assets/images/user/3.jpg" alt="" data-original-title="" title="">
                                <div class="media-body">
                                  <p>Themeforest, australia</p>
                                </div>
                              </div>
                              <p>{{ application.property_detail }}.</p>
                              <div class="row details">
                                <div class="col-6"><span>Propert Value</span></div>
                                <div class="col-6 font-primary">{{ application.property_value }} </div>
                                <div class="col-6"> <span>Propert Type</span></div>
                                <div class="col-6 font-primary">{{application.property_type}}</div>
                                <div class="col-6"> <span>Property Update</span></div>
                                <div class="col-6 font-primary">{{application.property_update}}</div>
                              </div>
                              <div class="customers">
                                <ul>
                                  <!-- <li class="d-inline-block"><img class="img-30 rounded-circle" src="assets/images/user/3.jpg" alt="" data-original-title="" title=""></li>
                                  <li class="d-inline-block"><img class="img-30 rounded-circle" src="assets/images/user/5.jpg" alt="" data-original-title="" title=""></li>
                                  <li class="d-inline-block"><img class="img-30 rounded-circle" src="assets/images/user/1.jpg" alt="" data-original-title="" title=""></li> -->
                                  <!-- <li class="d-inline-block ms-2">
                                    <p class="f-12">+10 More</p>
                                  </li> -->
                                </ul>
                              </div>
                              <div class="project-status mt-4">
                                <div class="media mb-0">
                                  <!-- <p>70% </p>
                                  <div class="media-body text-end"><span>Done</span></div> -->
                                    <vs-button
        :active="active == 0"
        @click="active = 0"
        v-on:click="updateStatus"
      >
       Assign
      </vs-button>
                                </div>
                                <!-- <div class="progress" style="height: 5px">
                                  <div class="progress-bar-animated bg-primary progress-bar-striped" role="progressbar" style="width: 70%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div> -->
                              </div>


</div>
 <ul class="pagination pagination-primary mt-4">
      <pagination :data="application" :limit="5" @pagination-change-page="getApplications"></pagination>
</ul>
</div>
</template>

<script>
export default {
    props:['application','getApplications'],
    methods:{

        updateStatus:function(){

             axios.put('/update/status/'+this.application.id).then((res)=>{
                      this.$root.alertNotificationMessage(res.status,"Status has been updated successfully");

                    }).catch((err)=>{
                        if(err.response.status==422){
                            this.errors=err.response.data.errors;
                            return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                        }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);

                });

        }

    }

}
</script>

<style>

</style>
