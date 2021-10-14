<template>
    <div>
      <div class="setup-content" id="step-1" style="">
            <div class="mb-3">
                <label class="col-form-label">Client Name</label>
                <vs-input  primary class="form-control" type="text" placeholder="your Name" v-model="application.name"></vs-input>
            </div>
            <div class="mb-3">
                <label class="col-form-label">Date Of Application</label>
                <input class="form-control" type="date" placeholder="" v-model="application.date">
            </div>
        </div>
    </div>
  </template>
  <script>
    export default{
        props:['application']

      }
  </script>
