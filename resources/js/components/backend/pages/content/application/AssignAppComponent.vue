<template>
   <div>
        <Breadcrumb activename="Assign App" ></Breadcrumb>

 <div class="col-sm-12 col-xl-12 xl-100">
      <div class="card">
          <div class="card-header pb-0">
            <h5></h5><span> <code></code> </span>
          </div>
          <div class="card-body">
            <ul class="nav nav-tabs border-tab" id="top-tab" role="tablist">
                <li class="nav-item"><a class="nav-link active" id="top-home-tab" data-bs-toggle="tab" href="#top-home" role="tab" aria-controls="top-home" aria-selected="true"><i class="icofont icofont-man-in-glasses"></i>Assign To Agent</a>
                </li>
                <li class="nav-item"><a class="nav-link" id="profile-top-tab" data-bs-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="false"><i class="icofont icofont-comment"></i>Comment</a>
                </li>
                <li class="nav-item"><a class="nav-link" id="contact-top-tab" data-bs-toggle="tab" href="#top-contact" role="tab" aria-controls="top-contact" aria-selected="false"><i class="icofont icofont-upload"></i>Upload Attachment</a>
                </li>
            </ul>
            <div class="tab-content" id="top-tabContent">
                <div class="tab-pane fade show active" id="top-home" role="tabpanel" aria-labelledby="top-home-tab">
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
                                               <!-- <label class="col-form-label" for="recipient-name">Application:</label>
                                               <vs-input v-model="app" placeholder=""></vs-input> -->

                                            </div>
                                            <div class="mb-3">
                                                <label class="col-form-label" for="recipient-name">Agents:</label>
                                                <vs-select primary filter   collapse-chips placeholder="Agents"  v-model="agent"  v-if="agents.length>0">
                                                    <vs-option v-for="item in agents" :key="item.id"  :label="item.name" :value="item.id" >
                                                        {{ item.name }}
                                                    </vs-option>
                                                </vs-select>
                                            </div>
                                            <vs-button color="rgb(30, 32, 79)" gradient  type="submit" @click="assignAgent">
                                               Submit
                                            </vs-button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                </div>
                <div class="tab-pane fade" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab">
                        <div class="col-sm-12 col-xl-12">
                          <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-header pb-0">
                                       <h5>Comment</h5>
                                    </div>
                                    <div class="card-body">
                                        <form class="theme-form">
                                              <div class="mb-3">
                                               <!-- <label class="col-form-label" for="recipient-name">Application:</label>
                                               <vs-input v-model="app"></vs-input> -->
                                            </div>
                                            <div class="mb-3">
                                                <label class="col-form-label" for="recipient-name">Comment:</label>
                                                <textarea class="form-control" v-model="comment"></textarea>
                                            </div>

                                            <vs-button color="rgb(30, 32, 79)" gradient  @click="postComment">
                                               Submit
                                            </vs-button>
                                        </form>

                                    </div>

                                    <ul class="list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-center"  v-for="comment in application_comments"  :key="comment.id" >
                                        <vs-alert shadow>
                                        <template #title>
                                             <p>{{comment.comment}}</p>
                                        </template>
                                        <template>
                                            <span>{{comment.created_at | timeformat}}</span>
                                        </template>
                                        </vs-alert>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                          </div>
                        </div>

                </div>
                <div class="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                         <div class="col-sm-12 col-xl-12">
                          <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-header pb-0">
                                       <h5>Upload File</h5>
                                    </div>
                                    <div class="card-body">
                                        <form class="theme-form">
                                                <div class="mb-3">
                                               <!-- <label class="col-form-label" for="recipient-name">Application:</label>
                                               <vs-input v-model="app"></vs-input> -->
                                                <!-- <vs-select filter  color="primary" collapse-chips placeholder="Applications" v-model="app"   v-if="applications.length>0">
                                                    <vs-option v-for="item in applications" :key="item.id" :value="item.id" :label="item.name">
                                                           {{ item.name }}
                                                    </vs-option>
                                                </vs-select> -->
                                            </div>
                                            <div class="mb-3">
                                                <!-- <label class="col-form-label" for="recipient-name">Agents:</label>
                                                <vs-select filter  collapse-chips placeholder="Agents" v-model="agent"   v-if="agents.length>0">
                                                <vs-option v-for="item in agents" :key="item.id" :label="item.name" :value="item.id" >
                                                         {{ item.name }}
                                                </vs-option>
                                                </vs-select> -->
                                            </div>
                                            <div class="mb-3">
                                              <label class="col-form-label">Attach File</label>
                                             <input  class="form-control" type="file"  id="file" ref="file" v-on:change="handleFileUpload()">
                                            </div>
                                            <vs-button color="rgb(30, 32, 79)" gradient  @click="uploadFile">
                                               Submit
                                            </vs-button>
                                        </form>
                                    </div>
                                    <!-- <ul class="list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="file in application_files" :key="file.id">{{file.file}}<span class="badge badge-primary counter">{{file.created_at}}</span></li>

                                    </ul> -->
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
   export default{

       components:{
           Breadcrumb
       },
       data(){
           return{
                page: 1,
            applications:{},
            application:{},
            process:{},
            application_agent:{},
            app:"",
            agent:"",
            comment:"",
            agents:{},
            query:"",
            loading:false,
            total_applications:0,
            page_num:1,
            roles:{},
            thumbnail:"",
            application_files:{},
            application_comments:{}
           }
        },


       methods:{
            handleFileUpload(){

               this.thumbnail = this.$refs.file.files[0];
            },
           isquery(query) {
            return (this.query = query);
          },
            loadingStart(value) {

            this.loading = value;
          },
            filterdata(data){
            this.users = data.users;
          },
            async getApplications(page=1){

                this.loading =true;
                this.page_num = page;
                const url="/customer/applications/?page=" + page + "&query=" + this.query;

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

                   this.loading=false;

               }).catch((err)=>{
                     this.$root.alertErrorMessage(err.response.status,err.response.data);
               });
            },
               postComment(){
                let formData = new FormData();
                formData.append('comment', this.comment);
                formData.append('app', this.app);
                  axios.post('/add/comment',formData).then((res)=>{
                        this.$root.alertNotificationMessage(res.status,"Comment Added Successfully");
                              setTimeout(() => {
                            this.$router.push({ name: 'assigned-apps' })
                        }, 1000);

                    }).catch((err)=>{
                        if(err.response.status==422){
                            this.errors=err.response.data.errors;
                            return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                        }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);

                });

               },
                uploadFile(){
                 let formData = new FormData();
                formData.append('thumbnail', this.thumbnail);
                formData.append('app', this.app);
                 formData.append('agent', this.agent);

                  axios.post('/upload/file',formData).then((res)=>{
                        this.$root.alertNotificationMessage(res.status,"File Uploaded Successfully");
                            setTimeout(() => {
                            this.$router.push({ name: 'assigned-apps' })
                        }, 1000);

                    }).catch((err)=>{
                        if(err.response.status==422){
                            this.errors=err.response.data.errors;
                            return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                        }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);

                });

               },
            assignAgent(){
                let formData = new FormData();
                formData.append('app', this.app);
                formData.append('agent', this.agent);
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
              getComments(){

                  axios.get('/application/comment/'+this.$route.params.id).then((res)=>{
                          this.application_comments = res.data.comments;

                    }).catch((err)=>{
                        if(err.response.status==422){
                            this.errors=err.response.data.errors;
                            return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                        }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);

                });

            },
            getFiles(){
                  axios.get('/application/file/'+this.$route.params.id).then((res)=>{
                              this.application_files = res.data.files;
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
              cosnole.log(res)
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
           this.getComments();
           this.getFiles();
           let url="/customer/applications/"+this.$route.params.id;
                axios.get(url).then((res)=>{
                // this.user=res.data.user;
                this.app = res.data.application.id
                this.application_agent = res.data.application.agents
                this.agent =  this.application_agent['0'].agent_id





            }).catch((err)=>{
                     if(err.response.status==422){
                         this.errors=err.response.data.errors;
                        return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                    }
                  this.$root.alertNotificationMessage(err.response.status,err.response.data);

            });

       },



   }
</script>
<style>



  .vs-input {
   width: 100%;
   }
   .vs-select-content {
   width: 100%;
   max-width: 100%;
   }

</style>

