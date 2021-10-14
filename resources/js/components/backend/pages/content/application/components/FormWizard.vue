<template>
<div>
    <form-wizard>

            <tab-content title="Step One">

<StepOne></StepOne>

        </tab-content>
        <tab-content title="Step Two">
    <StepTwo></StepTwo>

  </tab-content>
  <tab-content title="Step Three">
     <StepThree></StepThree>
   </tab-content>
     <tab-content title="Step Four">
     <StepFour></StepFour>
   </tab-content>




</form-wizard>
</div>
</template>
<script>
import StepOne from './StepOneComponent.vue';
import StepTwo from './StepTwoComponent.vue';
import StepThree from './StepThreeComponent.vue';
import StepFour from './StepFourComponent.vue';
export default{
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
}

</script>

