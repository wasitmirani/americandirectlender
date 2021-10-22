<template>
<div>
   <div class="project-box" >

        <span class="badge badge-primary" style="margin-right: 31px;">
           <router-link :to="{name: 'show-application', params: { id: application.id }}"><i class="fa  fa-eye text-light"></i></router-link>
        </span>
        <span class="badge badge-primary">
           <router-link :to="{name: 'update-application', params: { id: application.id }}"><i class="fa  fa-edit text-light"></i></router-link>
        </span>
    
        
   
     


                              <h6>{{application.name}}</h6>
             
                          <div class="media">
                                <div class="media-body">
                                  <p></p>
                                </div>
                              </div>
                              <p>{{ application.property_detail }}.</p>
                              <div class="row details">
                                <div class="col-6"><span>Property Value</span></div>
                                <div class="col-6 font-primary">{{ application.property_value }} </div>
                                <div class="col-6"> <span>Property Type</span></div>
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
                                  <p v-if="application.status == '1'">Assigned</p>
                                   <p v-if="application.status == '0'">Pending</p>
                                  <div class="media-body text-end"><span></span></div>

                              <router-link :to="{name: 'assign-apps', params: { id: application.id }}">
                                  <vs-button >
                                    Assign
                                </vs-button>
                                </router-link>

                                </div>
     
                              </div>

       
</div>
            
 <ul class="pagination pagination-primary mt-4">
      <pagination :data="application" :limit="5" @pagination-change-page="getApplications"></pagination>
</ul>
      <vs-dialog v-model="active">
        <template #header>
          <h4 class="not-margin">
            Assign  to <b>Agent</b>
          </h4>
        </template>


        <div class="con-form">
        <div class="mb-3">

        <label class="col-form-label" for="recipient-name">Application:</label>
         <vs-select filter  collapse-chips placeholder="Applications" v-model="app"   v-if="applications.length>0">
            <vs-option v-for="item in applications" :key="item.id" :value="item.id" :label="item.name">
                {{ item.name }}
            </vs-option>
        </vs-select>
        </div>
        <div class="mb-3">
            <label class="col-form-label" for="recipient-name">Agents:</label>
                <vs-select filter  collapse-chips placeholder="Agents" v-model="agent"   v-if="roles.length>0">
                    <vs-option v-for="item in roles" :key="item.id" :label="item.name" :value="item.id">
                        {{ item.name }}
                    </vs-option>
                </vs-select>
        </div>
        <div class="mb-3">
            <label class="col-form-label" for="recipient-name">Comment:</label>
            <textarea class="form-control" v-model="comment"></textarea>
        </div>
        <div class="mb-3">
            <label class="mb-3"></label>
        </div>
        </div>

        <template #footer>
          <div class="footer-dialog">
            <vs-button color="rgb(30, 32, 79)" gradient  type="submit" @click="updateStatus"  >
                     Submit
            </vs-button>
          </div>
        </template>
      </vs-dialog>
</div>
</template>

<script>
export default {
    props:['application','getApplications','roles','getRoles','applications'],

   data(){
       return{
        app:"",
        agent:"",
        comment:"",
        active: false,


      }
   },
    methods:{
          openModal(val){
             this.resetForm();
             return this.active_modal=val;
            },
            resetForm(){
            this.active_modal=false;

            },
        updateStatus:function(){
               let formData = new FormData();

                    formData.append('app', this.app);
                    formData.append('agent', this.agent);

                  axios.put('/update/status/'+this.application.id,formData).then((res)=>{
                      this.$root.alertNotificationMessage(res.status,"Status has been updated successfully");
                        setTimeout(() => {
                            this.$router.push({ name: 'users' })
                        }, 1000);

                    }).catch((err)=>{
                        if(err.response.status==422){
                            this.errors=err.response.data.errors;
                            return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                        }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);

                });

        },

        onSubmit(){
              let formData = new FormData();

                    formData.append('app', this.app);
                    formData.append('agent', this.agent);
                  axios.post('/assign/app',formData).then((res)=>{
                        this.$root.alertNotificationMessage(res.status,"Application Assigned To Agent successfully");
                        setTimeout(() => {
                            this.$router.push({ name: 'users' })
                        }, 1000);
                    }).catch((err)=>{
                        if(err.response.status==422){
                            this.errors=err.response.data.errors;
                            return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                        }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);

                });

               }

    },


}


</script>

<style>
.vs-button{
    background-color:#4b4d72;
}
</style>
