<template>
  <div>
     <Breadcrumb activename="Update User" ></Breadcrumb>
      <div class="edit-profile">
              <div class="row">

                <div class="col-xl-4" v-if="edit_mode">
                  <div class="card">
                    <div class="card-header pb-0">
                      <h4 class="card-title mb-0">My Profile</h4>
                      <div class="card-options"><a class="card-options-collapse" href="#" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a></div>
                    </div>
                    <div class="card-body">
                      <form >
                        <div class="row mb-2">
                          <div class="profile-title">
                            <div class="media">      <img class="img-70 rounded-circle" alt="" src="/assets/images/user/7.jpg">
                              <div class="media-body">
                                <h3 class="mb-1 f-20 txt-primary">{{user.name}}</h3>
                                <p class="f-12">DESIGNER</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <h6 class="form-label">Bio</h6>
                          <textarea class="form-control" rows="5">On the other hand, we denounce with righteous indignation</textarea>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Email-Address</label>
                          <input class="form-control" placeholder="your-email@domain.com" v-model="user.email">
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Password</label>
                          <input class="form-control" type="password" v-model="user.password">
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Website</label>
                          <input class="form-control" placeholder="http://Uplor .com">
                        </div>
                        <div class="form-footer">
                          <button class="btn btn-primary btn-block">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div :class="edit_mode ? 'col-xl-8' : 'col-xl-12'">
                  <form class="card" v-on:submit.prevent="updateUser">
                    <div class="card-header pb-0">
                      <h4 class="card-title mb-0" v-if="edit_mode">Edit Profile</h4>
                       <h4 class="card-title mb-0" v-else>Create Profile</h4>
                      <div class="card-options"><a class="card-options-collapse" href="#" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a></div>
                    </div>
                    <div class="card-body">
                      <div class="row">
                            <div class="col-sm-6 col-md-6">
                          <div class="mb-3">
                            <label class="form-label">First Name</label>
                            <input class="form-control" type="text" placeholder="First Name" v-model="user.f_name">
                          </div>
                        </div>
                       <div class="col-sm-6 col-md-6">
                          <div class="mb-3">
                            <label class="form-label">Last Name</label>
                            <input class="form-control" type="text" placeholder="Last Name" v-model="user.l_name">
                          </div>
                        </div>
                          <div class="col-md-12">
                          <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input class="form-control" type="password" placeholder="Password" v-model="user.password">
                          </div>
                        </div>
                          <div class="col-md-5">
                          <div class="mb-3">
                            <label class="form-label">Role</label>
                            <select class="form-control btn-square" v-model="user.role">
                              <option value="0">--Select--</option>
                              <option value="1">Admin</option>
                              <option value="2">User</option>
                         
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Username</label>
                            <input class="form-control" type="text" placeholder="Username"  v-model="user.name">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                          <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input class="form-control" type="email" placeholder="Email"  v-model="user.email">
                          </div>
                        </div>
                
                        <div class="col-md-12">
                          <div class="mb-3">
                            <label class="form-label">Address</label>
                            <input class="form-control" type="text" placeholder="Home Address" v-model="user.address">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                          <div class="mb-3">
                            <label class="form-label">City</label>
                            <input class="form-control" type="text" placeholder="City" v-model="user.city">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="mb-3">
                            <label class="form-label">Postal Code</label>
                            <input class="form-control" type="number" placeholder="ZIP Code" v-model="user.postal_code">
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="mb-3">
                            <label class="form-label">Country</label>
                            <select class="form-control btn-square" v-model="user.country">
                              <option value="0">--Select--</option>
                              <option value="1">Germany</option>
                              <option value="2">Canada</option>
                              <option value="3">Usa</option>
                              <option value="4">Aus</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div>
                            <label class="form-label">About Me</label>
                            <textarea class="form-control" rows="5" placeholder="Enter About your description" v-model="user.bio"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer text-end">
                      <button class="btn btn-primary" type="submit">Update Profile</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

  </div>

</template>

<script>
import Breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    components:{ Breadcrumb},
    data(){ return{
        edit_mode:false,
        user:[],
      
    }},
     methods:{
         
         updateUser(){

                var formData = new FormData();
                formData.append("f_name",this.user.f_name);
                formData.append('l_name',this.user.l_name)
                formData.append('email',this.user.email)
                formData.append('role',this.user.email)
                formData.append('name',this.user.name)
                formData.append('password',this.user.password)
                formData.append('address',this.user.address)
                formData.append('postalcode',this.user.postal_code)
                formData.append('city',this.user.city)
                formData.append('country',this.user.country)
                formData.append('bio',this.user.bio)

 
     axios.put('/management/user/'+this.$route.params.id,formData)
      .then((response)=>{
    console.log(response)
     

      })
      .catch((error)=>{
        console.log(error)

      })

         }
        



       
     },
     methods:{

         getRole(){

         }

     },
    created(){
             axios.get('management/user/'+this.$route.params.id).then((response)=>{
              
                this.user = response.data.user
                   console.log(response)

            }).catch((error)=>{
                console.log(error)

            })
          
    
    },
}
</script>

<style>

</style>
