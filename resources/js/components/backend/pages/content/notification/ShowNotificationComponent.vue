<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <h1>Notifications</h1>
        <div class="col-xl-9 xl-60 box-col-8">
                <div class="card"   v-for="notification in notifications" v-bind:key="notification.id" >
                  <div class="job-search">
                    <div class="card-body">
                      <div class="media"><img class="img-40 img-fluid m-r-20" src="" alt="">
                        <div class="media-body">
                          <h6 class="f-w-600"><a href="job-details.html" v-for="content in notification.data" v-bind:key="content.title">{{content.title}}</a><span class="badge badge-primary pull-right">New</span></h6>
                          <p v-for="content in notification.data" v-bind:key="content.title">{{content.body}}</p>
             
                        </div>
                      </div>
                       <p>
                       
                      </p>
                    </div>
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
    data(){ 
        return{

           notifications:""



    }
    },

    mounted(){
        var url = "/all/notification";
            axios.get(url).then((res)=>{
                   this.notifications = res.data.notifications
                   console.log(res.data.notifications)
                   this.loading =false;
               }).catch((err)=>{
                        this.$root.alertNotificationMessage(err.response.status,err.response.data);

                  });
    }

}
</script>
