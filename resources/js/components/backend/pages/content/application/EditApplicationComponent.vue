<template>
    <div>
       <FormWizard></FormWizard>
    </div>
</template>
<script>
import FormWizard from "./components/FormWizard.vue";
export default {
  components:{
      FormWizard


    },
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
        fico :"",
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

    }
    },
       onSubmit(){
              let formData = new FormData();
                formData=Object.assign(this.application,formData);
                //  formData=Object.assign({selected_roles:this.selected_roles},formData)
                    axios.put('/add/appform/'+this.user.id,formData).then((res)=>{
                        this.$root.alertNotificationMessage(res.status,"User has been updated successfully");
                        setTimeout(() => {
                            this.$router.push({ name: 'application' })
                        }, 1000);
                    }).catch((err)=>{
                        if(err.response.status==422){
                            this.errors=err.response.data.errors;
                            return this.$root.alertNotificationMessage(err.response.status,err.response.data.errors);
                        }
                    this.$root.alertNotificationMessage(err.response.status,err.response.data);
                });
       }


}

</script>
