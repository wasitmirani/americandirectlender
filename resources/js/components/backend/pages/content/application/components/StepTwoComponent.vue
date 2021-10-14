<template>
    <div>
        <div class="setup-content" id="step-2" style="">
            <div class="mb-3">
                <label class="col-form-label">Property Value: $ *</label>
                <input class="form-control" type="text"  value="" placeholder="$" v-model="application.property_value">
                (this can be an approximation)
            </div>
            <div class="mb-3">
                <label class="col-form-label">Any updates or changes to the property (*which can change value)?</label>
                <input class="form-control" type="text" placeholder="Company Name" v-model="application.property_update">
            </div>
            <div class="mb-3">
                <label class="col-form-label">Property Address (if known, confirm loan limits in Lending Pad, as they are based on city/county and might be jumbo under $822k):</label>
                <input class="form-control" type="text" placeholder="" v-model="application.property_address">
            </div>
            <div class="col-auto">
                <label  class="col-form-label">Type Of Property</label>
                    <select class="form-control" v-model="application.property_type">
                        <option value="house">House</option>
                        <option value="Condo">Condo</option>
                        <option value="Town House">Town House</option>
                        <option value="Gated Community">Gated Community</option>
                        <option value="2-4-unit-property">2-4-unit-property</option>
                    </select>
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">HOA?</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes" v-model="application.hoa">
                                <label class="form-check-label" for="radio11">Yes</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="yes" v-model="application.hoa">
                                <label class="form-check-label" for="radio22">Yes</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="col-auto">
                <label class="form-check-label">Any Mello-Roos/Other Fees or Special Taxes</label>
                <select class="form-control" v-model="application.fee">
                    <option value="house">House</option>
                    <option value="Condo">Condo</option>
                    <option value="Town House">Town House</option>
                    <option value="Gated Community">Gated Community</option>
                    <option value="2-4-unit-property">2-4-unit-property</option>
                </select>
            </div>
            <div class="row mb-0">
                <label class="col-sm-3 col-form-label pb-0">Refinance</label>
                <div class="col-sm-9">
                    <div class="mb-0">
                        <div class="form-check form-check-inline checkbox checkbox-primary">
                            <input class="form-check-input" id="inline-form-1" value="yes" type="checkbox"  v-model="application.refinance">
                            <label class="form-check-label" for="inline-form-1">Yes</label>
                            (if refinance, closing costs to be included?)
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">Have You Made all Your Payments On-Time in the last 12 Months?</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes" v-model="application.payment_assurance">
                                <label class="form-check-label" for="radio11">Yes</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no" v-model="application.payment_assurance">
                                <label class="form-check-label" for="radio22">No</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">If Payments Have Been Deferred, have you Made Payments on Time in the Last 3 Months?</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes" v-model="application.payment_surity">
                                <label class="form-check-label" for="radio11">Yes</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio"  value="no" v-model="application.payment_surity">
                                <label class="form-check-label" for="radio22">No</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="row mb-0">
                <label class="col-sm-3 col-form-label pb-0">Purchase</label>
                <div class="col-sm-9">
                    <div class="mb-0">
                        <div class="form-check form-check-inline checkbox checkbox-primary">
                            <input class="form-check-input" id="inline-form-1" value="yes" type="checkbox" v-model="application.purchase">
                            <label class="form-check-label" for="inline-form-1">Yes</label>
                            (*Closing costs cannot be financed on new purchase)
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">Do You Have a Second Loan?</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                  <input class="form-check-input" id="radio11" type="radio"  value="yes" v-model="application.second_loan">
                                  <label class="form-check-label" for="radio11">Yes</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                  <input class="form-check-input" id="radio22" type="radio"  value="no" v-model="application.second_loan">
                                  <label class="form-check-label" for="radio22">No</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">If Yes</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">Payof</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                  <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                  <label class="form-check-label" for="radio22">Subordinate</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    </div>
</template>
