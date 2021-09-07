<template>
  <div>
      <Breadcrumb activename="Users Management" ></Breadcrumb>

        <div class="row">
            <div class="col-12">
                   <div class="card">
                  <div class="card-header pb-0">
                    <h5>Roles</h5><span>List of roles opend by customers</span>

                  </div>

                  <div class="card-body">
                    <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead class="table-primary">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Roles</th>

                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>

                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Mark</td>

                          <td>@TwBootstrap</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Jacob</td>

                          <td>@fat</td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                  </div>
            </div>
        </div>
        </div>

  </div>

</template>

<script>
import Breadcrumb from "../../../components/BreadcrumbComponent.vue";
export default {
    components:{
        Breadcrumb,


    },



}
</script>

<style>

</style>
