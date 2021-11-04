<template>
 <div>
    <apexchart type="donut"  :options="chartOptions" :series="series" ></apexchart>
 </div>
</template>
<script>
 export default{
     props:['userByRole','userRoleLabel'],
    data(){
    return {
        series: [44, 55, 13, 43, 22],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['admin','agent'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },



     }
    },
    methods:{
        init(){
            this.series = this.userByRole
        },
        label(){
            this.chartOptions.labels = this.userRoleLabel
        }
    },
    watch:{
           userRoleLabel: function(new_role){
            this.label();
        },
        userByRole: function(new_role){

            this.init();

        }

    }
 }
</script>
