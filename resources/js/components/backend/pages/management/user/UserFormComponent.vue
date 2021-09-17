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
                  <form class="card"  >
                    <div class="card-header pb-0">
                      <h4 class="card-title mb-0" v-if="edit_mode">Edit Profile</h4>
                       <h4 class="card-title mb-0" v-else>Create Profile</h4>
                      <div class="card-options"><a class="card-options-collapse" href="#" data-bs-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a><a class="card-options-remove" href="#" data-bs-toggle="card-remove"><i class="fe fe-x"></i></a></div>
                    </div>
                    <div class="card-body">
                      <div class="row">
                            <div class="col-sm-6 col-md-4">
                          <div class="mb-3">
                            <label class="form-label">First Name</label>
                            <input :class="errors.name && user.name.length<1 ? 'is-invalid form-control' : 'form-control'"  type="text" placeholder="First Name" v-model="user.name" >
                            <span class="text-danger" v-if="errors.name && user.name.length<1">{{errors.name[0]}}</span>
                          </div>
                        </div>
                       <div class="col-sm-6 col-md-4">
                          <div class="mb-3">
                            <label class="form-label">Last Name</label>
                            <input class="form-control" type="text" placeholder="Last Name" v-model="user.last_name">
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                          <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input :class="errors.email && user.email.length<1 ? 'is-invalid form-control' : 'form-control'"  type="email" placeholder="Email Address" v-model="user.email" >
                            <span class="text-danger" v-if="(errors.email && user.email.length<1 || errors.email)">{{errors.email[0]}}</span>
                            <!-- <span class="text-danger" v-else> <p v-if="errors.email">{{errors.email[0]}}</p> </span> -->

                          </div>
                        </div>


                          <div class="col-sm-6 col-md-4">
                          <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input class="form-control" type="password" placeholder="Password" v-model="user.password">
                          </div>
                        </div>
                         <div class="col-sm-6 col-md-4">
                          <div class="mb-3">
                            <label class="form-label">Phone Number</label>
                            <input class="form-control" type="text" placeholder="Phone Number" v-model="user.phone">
                          </div>
                        </div>
                          <div class="col-sm-6 col-md-4">
                          <div class="mb-3">
                            <label class="form-label">Role</label>
                           <vs-select filter multiple collapse-chips placeholder="Roles" v-model="user.roles">
                                <vs-option label="Admin" value="1">
                                Admin
                                </vs-option>
                                <vs-option label="Manager" value="2">
                                Manger
                                </vs-option>
                                <vs-option label="Javascript" value="3">
                                Javascript
                                </vs-option>
                                <vs-option label="Sass" value="4">
                                Sass
                                </vs-option>
                                <vs-option label="Typescript" value="5">
                                Typescript
                                </vs-option>
                                <vs-option label="Webpack" value="6">
                                Webpack
                                </vs-option>
                             </vs-select>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-4" v-if="edit_mode">
                          <div class="mb-3">
                            <label class="form-label">Username</label>
                            <input class="form-control" type="text" placeholder="Username"  v-model="user.first_name">
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
                            <input class="form-control" type="number" placeholder="ZIP Code" v-model="user.postalcode">
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="mb-3">
                               <label class="form-label">Country</label>
                             <vs-select filter multiple collapse-chips placeholder="Collapse chips" v-model="user.country">
                                <vs-option label="Vuesax" value="1">
                                Vuesax
                                </vs-option>
                                <vs-option label="Vue" value="2">
                                Vue
                                </vs-option>
                                <vs-option label="Javascript" value="3">
                                Javascript
                                </vs-option>
                                <vs-option label="Sass" value="4">
                                Sass
                                </vs-option>
                                <vs-option label="Typescript" value="5">
                                Typescript
                                </vs-option>
                                <vs-option label="Webpack" value="6">
                                Webpack
                                </vs-option>
                             </vs-select>
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
                  <!-- <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox> -->
                        <vs-button color="rgb(121, 81, 170)" gradient  type="submit"  v-if="!edit_mode" @click="onSubmit">
                            Submit
                        </vs-button>
                        <vs-button  color="rgb(59,222,200)" gradient  type="submit"  v-else>
                            Update
                        </vs-button>
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
        user:{
            name:"",
            email:"",
            phone:"",
            last_name:"",
            password:"",
            address:"",
            postalcode:"",
            city:"",
            country:[],
            bio:"",
            roles:[],
        },
        errors:{},
    }},
     computed: {
    checkError: function () {
      console.log("hello");
    },
     },
     methods:{
          onSubmit(){
              let formData = new FormData();
                formData.append("name",this.user.name);
                formData.append('last_name',this.user.last_name);
                formData.append('email',this.user.email)
                formData.append('password',this.user.password)
                formData.append('phone',this.user.phone)
                formData.append('address',this.user.address)
                formData.append('postalcode',this.user.postalcode)
                formData.append('city',this.user.city)
                formData.append('country',this.user.country)
                formData.append('bio',this.user.bio)

                axios.post('/management/user',formData).then((response)=>{
                }).catch((err)=>{
                     if(err.response.status==422){
                       this.errors=err.response.data.errors;
                        }
                 this.$root.alertNotificationMessage(err.response.status,err.response.data);
                   //    console.log("erro",err.response.data.message);

                  });
      }






     },
    mounted(){
          if(this.$route.params.id){
            let url="/management/user/"+this.$route.params.id;
            axios.get(url).then((res)=>{
                this.user=res.data.user;
                this.edit_mode=true;
            }).catch((err)=>{
                this.$root.alertErrorMessage(err.response.status,err.response.data);
            });
        }
        else {
            this.edit_mode=false;
        }

    },
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
