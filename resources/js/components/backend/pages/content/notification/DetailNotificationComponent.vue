<template>
<div>
    <div class="container">
           <div class="col-xl-12 col-sm-6">
                    <div class="card">
                      <div class="blog-box blog-list row">
                        <div class="col-xl-7 col-12">
                          <div class="blog-details">
                            <div class="blog-date"><span>{{ notification.created_at | timeformat }}</span></div><a href="learning-detailed.html">
                              <h6 v-for="notify in this.body" :key="notify.title">  {{ notify }} </h6></a>
                            <div class="blog-bottom-content">
                              <ul class="blog-social">
                                <!-- <li>by: Paige Turner</li>
                                <li>15 Hits</li> -->
                              </ul>
                              <hr>
                              <p class="mt-0">inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
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
export default {
    data(){
        return {
            notification:"",
            body:""
        }

    },
       mounted(){
           if(this.$route.params.id){
                var url = "/notification/"+this.$route.params.id;
                    axios.get(url).then((res)=>{
                // this.user=res.data.user;

                this.notification = res.data.notification
                this.body = JSON.parse(res.data.notification.data)
                  console.log(this.notification)

            }).catch((err)=>{
                     if(err.response.status==422){
                         this.errors=err.response.data.errors;
                        return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                    }
                  this.$root.alertNotificationMessage(err.response.status,err.response.data);

            });
           }


        }
}


</script>
