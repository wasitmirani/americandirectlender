<template>
    <div>
        <div class="container-fluid">
            <div class="row">


                <div class="col-xl-9 xl-60 box-col-8">


                       <div class="media"><img class="img-40 img-fluid m-r-20" src="" alt="">
                        <div class="media-body"  >
                            <div class="alert alert-primary alert-dismissible fade show" role="alert" v-for="notie in noties" :key="notie.title">
                                <router-link  :to="{ name: 'ViewNotify', params: { id: cont.id } }"><span>{{ notie }}</span></router-link>

                            </div>
                            <!-- <vs-alert title="Lorem ipsum dolor sit amet" color="rgb(231, 154, 23)" active="true" v-for="notie in noties" :key="notie.title">
                            </vs-alert> -->
                          <!-- <vs-alert v-for="notie in noties" :key="notie.title">
                               <router-link  :to="{ name: 'ViewNotify', params: { id: cont.id } }"><span>{{ notie }}</span></router-link>
                          </vs-alert> -->
                       </div>

                    </div>




                <!-- <div class="job-pagination">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination pagination-primary">
                      <li class="page-item disabled"><a class="page-link" href="javascript:void(0)">Previous</a></li>
                      <li class="page-item active"><a class="page-link" href="javascript:void(0)">1</a></li>
                      <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                      <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                      <li class="page-item"><a class="page-link" href="javascript:void(0)">Next</a></li>
                    </ul>
                  </nav>
                </div> -->
        </div>
    </div>
</div>
    </div>
</template>
<script>
export default{
       props:['cont','getNotifications'],
    data(){
        return{


           noties:"",
           content:""

    }
    },

    mounted(){

        this.noties = JSON.parse(this.cont.data)
        var url = "/all/notification";
            axios.get(url).then((res)=>{
                //    this.notifications = res.data.notifications;
                //    this.content = res.data.notifications.content
                //    console.log(res.data.notifications.content)
                   this.loading =false;
               }).catch((err)=>{
                        this.$root.alertNotificationMessage(err.response.status,err.response.data);

                  });
    }

}
</script>
<style>
.vs-alert a{
      text-decoration:none;
  }
</style>
