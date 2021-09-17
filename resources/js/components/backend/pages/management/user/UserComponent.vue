<template>
  <div>
      <Breadcrumb activename="Users Management" ></Breadcrumb>
        <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Users Listing</h5><span>List of users opend by Admin</span>
                    <router-link class="btn btn-primary align-right" to="/create/users">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus" ><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                    </router-link>


                  </div>
                  <div class="card-body">
                    <div class="row">
                        <div class="col-xl-4 col-sm-6">
                            <div class="card o-hidden border-0">
                            <div class="bg-primary b-r-4 card-body">
                        <div class="media static-top-widget">
                        <div class="align-self-center text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg></div>
                        <div class="media-body"><span class="m-0">New Users</span>
                            <h4 class="mb-0 counter">4531</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus icon-bg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                        </div>
                        </div>
                    </div>
                    </div>
                        </div>

                    </div>

                  <!-- List  -->

                  </div>
                </div>
              </div>
        </div>
        <div class="row">
            <div class="col-12">
                   <div class="card">
                  <div class="card-header pb-0">
                    <h5>
                      <div class="mb-3 col-4">
                        <vs-input success v-model="query" placeholder="Search Users" />
                    </div>
                    </h5>

                  </div>


                  <div class="card-body">
                      <UserTable :getUsers="getUsers" :users="users"></UserTable>
                  </div>
            </div>
        </div>
        </div>

  </div>

</template>

<script>
import Breadcrumb from "../../../components/BreadcrumbComponent.vue";
import UserTable from "./UsersTable.vue";

export default {
    components:{
        Breadcrumb,
        UserTable,
    },
    data(){
        return {
            users:{},
            query:"",
            form:{
                name:"",
            },
            page_num:1,
        };
    },
    mounted(){
        this.getUsers();

      
    },
    methods:{
           async getUsers(page=1){
                 const url="/management/user?page=" + page + "&query=" + this.query;
                 this.page_num = page;
               await axios.get(url).then((res)=>{
                   this.users = res.data.users;
               }).catch((err)=>{
                     this.$root.alertErrorMessage(err.response.status,err.response.data);
                //    console.log("erro",err.response.data.message);

               });
            },

       
    }


}
</script>

<style>
.dashboard-2-main .card-body .table-bordernone .u-s-tb {
    display: inline-flex;
    align-items: center;
}
.dashboard-2-main .card-body .d-inline-block h6 {
    padding: 0 0 0 15px;
}
</style>
