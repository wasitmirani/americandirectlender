<template>
   <div>
        <Breadcrumb activename="Assign App" ></Breadcrumb>
       <div class="container-fluid">
           <div>
               <div class="col-sm-12 col-xl-12">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="card">
                      <div class="card-header pb-0">
                       <h5>Assign To Agent</h5>
                      </div>
                      <div class="card-body">
                        <form class="theme-form">
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
                                <vs-select filter  collapse-chips placeholder="Agents" v-model="agent"   v-if="agents.length>0">
                                    <vs-option v-for="item in agents" :key="item.id" :label="item.name" :value="item.id">
                                        {{ item.name }}
                                    </vs-option>
                                </vs-select>
                          </div>
                        <div class="mb-3">
                            <label class="col-form-label" for="recipient-name">Comment:</label>
                            <textarea class="form-control" v-model="comment"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="col-form-label">Attach File</label>
                            <input  class="form-control" type="file"  id="file" ref="file" v-on:change="handleFileUpload()">
                        </div>

                <vs-button color="rgb(30, 32, 79)" gradient  type="submit" @click="onSubmit">
                     Submit
                  </vs-button>

                        </form>
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
   export default{

       components:{
           Breadcrumb
       },
       data(){
           return{
            applications:{},
            process:{},
            app:"",
            agent:"",
            comment:"",
            agents:{},
            query:"",
            loading:false,
            total_applications:0,
            page_num:1,
            roles:{},
            file:""
           }
        },


       methods:{
            handleFileUpload(){

               this.file = this.$refs.file.files[0];
            },
           isquery(query) {
            return (this.query = query);
          },
            loadingStart(value) {
           console.log(value);
            this.loading = value;
          },
            filterdata(data){
            this.users = data.users;
          },
            async getApplications(page=1){

                this.loading =true;
                this.page_num = page;
                const url="/customer/applications?page=" + page + "&query=" + this.query;

               await axios.get(url).then((res)=>{

                   this.applications = res.data.applications.data;
                   this.loading =false;
               }).catch((err)=>{
                        this.$root.alertNotificationMessage(err.response.status,err.response.data);

                  });
            },
              async getRoles(page=1){
             this.loading=true;
             this.page_num=page;
             const url="/management/role?page=" + page + "&query=" + this.query;
               await axios.get(url).then((res)=>{
                   this.roles = res.data.roles.data;
                    console.log(res)
                   this.loading=false;

               }).catch((err)=>{
                     this.$root.alertErrorMessage(err.response.status,err.response.data);
               });
            },
               onSubmit(){
              let formData = new FormData();

                formData.append('app', this.app);
                formData.append('agent', this.agent);
                formData.append('file', this.file);
                formData.append('comment', this.comment);
                  axios.post('/assign/app',formData).then((res)=>{
                        this.$root.alertNotificationMessage(res.status,"Application Assigned To Agent successfully");

                    }).catch((err)=>{
                        if(err.response.status==422){
                            this.errors=err.response.data.errors;
                            return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                        }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);

                });

               },
                   async getAgents(page=1){
             this.loading=true;
             this.page_num=page;
             const url="/management/agents?page=" + page + "&query=" + this.query;
              await axios.get(url).then((res)=>{
                this.agents = res.data.agents;
                console.log(res)
                this.loading=false;

               }).catch((err)=>{
                     this.$root.alertErrorMessage(err.response.status,err.response.data);
               });
            },

       },
        mounted(){
           this.getApplications();
           this.getRoles();
           this.getAgents();

       }


   }
</script>
<style>

.vs-button__content {
    width: 130px;
    height: 49px;
}

  .vs-input {
   width: 100%;
   }
   .vs-select-content {
   width: 100%;
   max-width: 100%;
   }
</style>

