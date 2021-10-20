<template>
  <div>
       <Breadcrumb activename="Assigned Apps" ></Breadcrumb>
      <div class="container-fluid">
            <div class="row">
                <div class="card">
                  <div class="card-header pb-0">
                  </div>
                </div>
                <div class="card-body">
                     <div class="table-responsive">
                         <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">App Name</th>
                          <th scope="col">Agent Name</th>
                          <th scope="col">Action</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="application in applications" v-bind:key="application.id">
                          <th scope="row">{{application.id}}</th>
                          <td>{{application.name}}</td>
                          <td >
                              <span v-for="user in application.agent" :key="user.id" class="primary">
                              {{ user.name }}||
                              </span>
                          </td>
                          <td><a role="button"  @click="deleteItem(application.id)"><i class="fa  fa-trash text-danger"></i></a></td>

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
import Breadcrumb from "../../../components/BreadcrumbComponent.vue";
   export default{
       components:{
           Breadcrumb
       },
       data(){
           return{
               applications:{}
           }

       },
       mounted(){
           this.getApplications();
       },
       methods:{


           async getApplications(page=1){
                this.loading =true;
                this.page_num = page;
                const url="/assigned/app?page=" + page + "&query=" + this.query;
               await axios.post(url).then((res)=>{
                   this.applications = res.data.assignedApps.data;
                   this.loading =false;
               }).catch((err)=>{
                        this.$root.alertNotificationMessage(err.response.status,err.response.data);

                  });
            },
            deleteItem: function (id) {
                alert(id)
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",

                }).then((result) => {
                    if (result.isConfirmed) {
                        let form_data= new FormData();
                      form_data.append('id', id);
                         axios.post("/delete/app",form_data).then((res) => {
                             Swal.fire("Deleted!", "Your file has been deleted.", "success");

                         }).catch((err)=>{
                               this.$root.alertNotificationMessage(err.response.status,err.response.data);

                         })

                    }

                })

            }






            },
       }


</script>
