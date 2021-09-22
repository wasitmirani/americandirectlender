<template>
  <div>
      <Breadcrumb activename="Users Management" ></Breadcrumb>

        <div class="row">
            <div class="col-12">
                   <div class="card">
                  <div class="card-header pb-0">
                    <h5>Roles

                     <div style="float: right;">
                    <PrimaryButton icon="fas fa-plus"  label="Add Role"  v-on:activemodal="openModal($event)"></PrimaryButton>
                        </div>

                    </h5>


                  </div>

                  <div class="card-body">
                   <RoleTable :getRoles="getRoles" :roles="roles"></RoleTable>
                  </div>
            </div>
        </div>
        </div>
        <vs-dialog blur   v-model="active_modal" width="50%">
         <template #header>
            <h4 class="not-margin" v-if="!edit_mode">
               Create New <b>Role</b>
            </h4>
            <h4 class="not-margin" v-else>
               Update <b>{{brand.name}}</b> Role
            </h4>
         </template>
         <div class="con-form">
            <form>
                  <div class="mb-3">
                   <label class="col-form-label" for="recipient-name">Role Name:</label>
                   <vs-input   :color="this.$root.primary_color" v-model="role.name" placeholder="Role Name"  required/>
                   <span class="mt-1 text-danger">{{ this.errors.name}}</span>
                  </div>
               <div class="mb-3">
                <label class="col-form-label" for="recipient-name">Users:</label>
                      <vs-select  filter placeholder="Select Users"  :color="this.$root.primary_color"   collapse-chips multiple  v-model="role.selected_users" v-if="users">
                      <vs-option v-for="item in users" :key="item.id"
                                :label="item.name" :value="item.id">
                                 {{ item.name }}
                        </vs-option>
                     </vs-select>
               </div>
               <div class="flex">
                  <!-- <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox> -->
                  <vs-button color="rgb(121, 81, 170)" gradient  type="submit" @click="onSubmit"  v-if="!edit_mode">
                     Submit
                  </vs-button>
                   <vs-button  color="rgb(59,222,200)" gradient  type="submit"  v-else>
                     Update
                  </vs-button>
               </div>
            </form>
         </div>
      </vs-dialog>
  </div>

</template>

<script>
import Breadcrumb from "../../../components/BreadcrumbComponent.vue";
import PrimaryButton from "../../../components/PrimaryButton";
import RoleTable from "./RoleTable.vue";
export default {

    components:{
        Breadcrumb,
        RoleTable,
        PrimaryButton,
    },
     data(){
            return {
            roles:{},
            role:{
                selected_users:[],
            },
            active_modal:false,
            edit_mode:false,
            users:[],
            errors:[],
            }

     },
     mounted(){
       this.getRoles();


     },
        methods:{
            test(event) {
            console.log(event);
            },
            openModal(val){
             this.resetForm();
                return this.active_modal=val;
            },
            resetForm(){

            },
           async getRoles(){
             const url="/management/role";
               await axios.get(url).then((res)=>{
                   this.roles = res.data.roles;
                   this.users=res.data.users;

               }).catch((err)=>{
                     this.$root.alertErrorMessage(err.response.status,err.response.data);
                //    console.log("erro",err.response.data.message);

               });
            },
            onSubmit(){
                let formData = new FormData();
                formData=Object.assign(this.role,formData);
                const url="/management/role";
                axios.post(url,formData).then((res)=>{
                     this.$root.alertNotificationMessage(res.status,"New role has been created successfully");
                     this.active_modal=false;
                     this.resetForm();
                     this.getRoles();

                }).catch((err)=>{
                     if(err.response.status==422){
                        this.errors=err.response.data.errors;
                        return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                    }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);
                  });
            },


    }



}
</script>

<style lang="stylus">
.vs-select-content {
    width: 100%;
    max-width: 100%;
}
    getColor(vsColor, alpha = 1)
        unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
    getVar(var)
        unquote("var(--vs-"+var+")")
    .not-margin
      margin 0px
      font-weight normal
      padding 10px
    .con-form
      width 100%
      .flex
        display flex
        align-items center
        justify-content space-between
        a
          font-size .8rem
          opacity .7
          &:hover
            opacity 1
      .vs-checkbox-label
        font-size .8rem
      .vs-input-content
        margin 10px 0px
        width calc(100%)
        .vs-input
          width 100%
    .footer-dialog
      display flex
      align-items center
      justify-content center
      flex-direction column
      width calc(100%)
      .new
        margin 0px
        margin-top 20px
        padding: 0px
        font-size .7rem
        a
          color getColor('primary') !important
          margin-left 6px
          &:hover
            text-decoration underline
      .vs-button
        margin 0px
</style>
