<template>
    <div>
        <div class="container-fluid">
            <div class="edit-profile">
              <div class="row">
                <div class="col-xl-12">
                  <div class="card">
                    <div class="card-header pb-0">
                      <h4 class="card-title mb-0">Update Password</h4>
                      <div class="card-options"><a class="card-options-collapse" href="#" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a></div>
                    </div>
                    <div class="card-body">
                      <form>


                        <div class="mb-3">
                          <label class="form-label">Enter Password</label>
                          <input class="form-control" type="password" placeholder="Enter Password" v-model="passwords.password">
                            <span class="text-danger" v-if="errors.password">{{errors.password[0]}}</span>
                        </div>
                         <div class="mb-3">
                          <label class="form-label">Confirm Password</label>
                          <input class="form-control" type="password" placeholder="Confirm Password" v-model="passwords.password_confirmation">

                        </div>


                        <div class="form-footer">
                          <button class="btn btn-primary btn-block" @click="updatePassword">Update</button>
                        </div>
                      </form>
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
        return {
            passwords:{},
            user:{},
            errors:{}
        }
    },
    methods:{
        updatePassword(e){
            e.preventDefault();

               let formData = new FormData();
               formData=Object.assign(this.passwords,formData);
                axios.post('/password/setting/'+this.user.id,formData).then((res)=>{
                        this.$root.alertNotificationMessage(res.status,"Password Updated Successfully");
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

            axios.get("/profile/setting").then((res)=>{

                  this.user = res.data.user



            }).catch((err)=>{
                     if(err.response.status==422){
                         this.errors=err.response.data.errors;
                        return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                    }
                  this.$root.alertNotificationMessage(err.response.status,err.response.data);

            });





        }

}

</script>
