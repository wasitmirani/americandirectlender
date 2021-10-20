<template>
<div>

    <form-wizard @on-complete="onComplete" color="#4b4d72">
         <h2 slot="title">Edit Customer Application</h2>
        <tab-content title="Step One" color="#4b4d72">
            <StepOne :application="application"></StepOne>
        </tab-content>
        <tab-content title="Step Two">
            <StepTwo :application="application"></StepTwo>
        </tab-content>
        <tab-content title="Step Three">
            <StepThree :application="application"></StepThree>
        </tab-content>
          <tab-content title="Step Three">
            <StepFour :application="application" :handleFileUpload="handleFileUpload"></StepFour>
        </tab-content>
            <vs-button slot="prev">Back</vs-button>
            <vs-button slot="next">Next</vs-button>
            <vs-button slot="finish">Update</vs-button>
    </form-wizard>
</div>
</template>
<script>
import StepOne from './StepOneComponent.vue';
import StepTwo from './StepTwoComponent.vue';
import StepThree from './StepThreeComponent.vue';
import StepFour from './StepFourComponent.vue';
export default{
    data(){
        return{
        application:{
        date :"",
        name :"",
        property_value :"",
        property_update :"",
        property_address :"",
        property_type:"",
        fee :"",
        cash_reserve :"",
        fico :[],
        hoa :"",
        income_source :"",
        cash_out : "",
        refinance :"",
        payment_assurance: "",
        payment_surity :"",
        purchase :"",
        second_loan : "",
        is_second_loan :"",
        doc_type :"",
        occupant :"",
        income_type:"",
        income_source : "",
        promotion_detail :"",
        business_type : "",
        is_online :"",
        is_online_reason : "",
        is_business_partner :"",
        financial_history :"",
        investment_property :"",
        renovation :"",
        mortgage_statement :"",
        property_insured :"",
        loan_amount :"",
        cash_reserve :"",
        is_online_reason :"",
        recent_business_Activity :"",
        recent_business :"",
        advice :"",
        tax_return :"",
        business_line :"",
        liabilities_loans :"",
        investment_property :"",
        },
        file:"",
          errors:{},

        }
    },
    components:{

        StepOne,
        StepTwo,
        StepThree,
        StepFour,

    },
    props: {
        title: {
            type: String,
            default: 'Edit Customer Application'
        }

    },
    methods: {
    handleFileUpload(){
        this.file = event.target.files[0];
    },
    onComplete: function(){
        let formData = new FormData();
        formData=Object.assign(this.application,formData);
        formData.append('attachment',this.file);
         axios.put('/customer/applications/'+this.application.id,formData).then((res)=>{
                        this.$root.alertNotificationMessage(res.status,"Application has been updated successfully");
                        setTimeout(() => {
                            this.$router.push({ name: 'Customer Applications' })
                        }, 1000);
                    }).catch((err)=>{
                        if(err.response.status==422){
                            this.errors=err.response.data.errors;
                            return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                        }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);

                });

   },
    },
    mounted(){
        if(this.$route.params.id){
              let url="/customer/applications/"+this.$route.params.id;
                axios.get(url).then((res)=>{
                // this.user=res.data.user;

                this.application = res.data.application
                  console.log(this.application)


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
<style>

.vs-button__content {
    width: 130px;
    height: 49px;
}
.vs-button{
    background-color:#4b4d72;
}
  .vs-input {
   width: 100%;
   }
   .vs-select-content {
   width: 100%;
   max-width: 100%;
   }

.wizard-icon-container {
    background-color:#4b4d72;
}
.wizard-icon-circle {
      border-color:#4b4d72;
}

</style>


