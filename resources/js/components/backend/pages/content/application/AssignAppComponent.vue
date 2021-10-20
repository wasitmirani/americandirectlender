<template>
   <div>
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
                              <vs-option v-for="item in applications" :key="item.id"
                                :label="item.name" :value="item.id">
                                 {{ item.name }}
                                 </vs-option>
                             </vs-select>

                          </div>
                          <div class="mb-3">
                               <label class="col-form-label" for="recipient-name">Agents:</label>
                            <vs-select filter  collapse-chips placeholder="Roles" v-model="agent"   v-if="roles.length>0">
                                <vs-option v-for="item in roles" :key="item.id"
                                 :label="item.name" :value="item.id">
                                 {{ item.name }}
                                </vs-option>
                            </vs-select>

                          </div>

                        </form>
                      </div>
                      <div class="card-footer">
                        <vs-button color="rgb(30, 32, 79)" gradient  type="submit" @click="onSubmit"  >
                     Submit
                  </vs-button>

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
   export default{
       data(){
           return{
            applications:{},
            process:{},
            app:"",
            agent:"",
            query:"",
            loading:false,
            total_applications:0,
            page_num:1,
            roles:{}
           }
        },


       methods:{
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
        mounted(){
           this.getApplications();
           this.getRoles();

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

