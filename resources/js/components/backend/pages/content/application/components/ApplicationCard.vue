<template>
<div>
  <div class="col-xxl-4 col-lg-6" v-for="application in applications" :key="application.id">



   <div class="project-box" >
     <span class="badge badge-primary">
         <router-link :to="{name: 'update-application', params: { id: application.id }}"><i class="fa  fa-edit text-primary"></i></router-link>
         </span>
                              <h6>Endless admin Design</h6>
                              <div class="media"><img class="img-20 me-2 rounded-circle" src="assets/images/user/3.jpg" alt="" data-original-title="" title="">
                                <div class="media-body">
                                  <p>Themeforest, australia</p>
                                </div>
                              </div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                              <div class="row details">
                                <div class="col-6"><span>Issues </span></div>
                                <div class="col-6 font-primary">12 </div>
                                <div class="col-6"> <span>Resolved</span></div>
                                <div class="col-6 font-primary">5</div>
                                <div class="col-6"> <span>Comment</span></div>
                                <div class="col-6 font-primary">7</div>
                              </div>
                              <div class="customers">
                                <ul>
                                  <li class="d-inline-block"><img class="img-30 rounded-circle" src="assets/images/user/3.jpg" alt="" data-original-title="" title=""></li>
                                  <li class="d-inline-block"><img class="img-30 rounded-circle" src="assets/images/user/5.jpg" alt="" data-original-title="" title=""></li>
                                  <li class="d-inline-block"><img class="img-30 rounded-circle" src="assets/images/user/1.jpg" alt="" data-original-title="" title=""></li>
                                  <li class="d-inline-block ms-2">
                                    <p class="f-12">+10 More</p>
                                  </li>
                                </ul>
                              </div>
                              <div class="project-status mt-4">
                                <div class="media mb-0">
                                  <p>70% </p>
                                  <div class="media-body text-end"><span>Done</span></div>
                                </div>
                                <div class="progress" style="height: 5px">
                                  <div class="progress-bar-animated bg-primary progress-bar-striped" role="progressbar" style="width: 70%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                              </div>
                            </div>

</div>
 <ul class="pagination pagination-primary mt-4">
      <pagination :data="applications" :limit="5" @pagination-change-page="getApplications"></pagination>
</ul>
</div>
</template>

<script>
export default {
    props:['applications','getApplications']

}
</script>

<style>

</style>
