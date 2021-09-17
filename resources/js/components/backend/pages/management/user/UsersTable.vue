<template>
    <div>
          <div class="table-responsive">
                        <table class="table table-bordernone">
                        <thead >
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Create By</th>
                            <th scope="col">Created</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users.data" :key="user.id">
                                <td>#</td>

                                <td class="bd-t-none u-s-tb">
                                <Avatar :name="user.name" thumbnail=""></Avatar>
                                <div class="align-middle image-sm-size">
                                    <div class="d-inline-block">
                                    <h6>{{user.name}} <span class="text-muted"></span></h6>
                                    </div>
                                </div>
                                </td>
                            <td>{{user.email}}</td>
                                <td>{{user.phone}}</td>
                                <td>Admin</td>
                                <td>{{user.created_at | timeformat}}</td>

                                <td><router-link :to="{name: 'edituser', params: { id: user.id }}"><i class="fa  fa-edit text-primary"></i></router-link> |  <a role="button"  v-on:click="dltUser(user.id)"><i class="fa  fa-trash text-danger"></i></a></td>
                            </tr>

                        </tbody>
                        </table>
                    </div>

                    <ul class="pagination pagination-primary mt-4">
                        <pagination :data="users" :limit="2" @pagination-change-page="getUsers"></pagination>
                    </ul>
    </div>
</template>

<script>
import Avatar from "../../../components/AvatarComponent.vue";

export default {
    props:['users','getUsers'],
     components:{
        Avatar,
    },
    methods:{
        dltUser(id){

         axios.delete('management/user/'+id)
                  .then((response)=>{

  
                  })
                  .catch((error)=>{
                      console.log(error)
                  })
        }

    }

}
</script>

<style>

</style>
