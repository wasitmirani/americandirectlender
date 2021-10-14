<template>
<div>
    <div class="setup-content" id="step-3" style="">
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">Loan Amount</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">0-548k</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">0-548k</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">$822k+</label>
                            </div>
                            (*category A has lowest rates, then followed by category B and then C)
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="mb-3">
                <label class="col-form-label">Cash Reserve</label>
                <input class="form-control" type="number" placeholder="$" value="$">
                (this can be approximate, not held after escrow close, jumbo/investment loans usually require 6-12 months depending on the program (must be checked later))
            </div>
            <div class="mb-3">
                <label class="col-form-label">FICO Score(s): *</label>
                <input class="form-control" type="text" placeholder="Experian___" >
                <input class="form-control" type="text" placeholder="Equifax___" >
                <input class="form-control" type="text" placeholder="Transunion___" >
                (*we use the middle score)
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">Loan Doc Type</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">Full </label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">Bank Statement</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">No Doc</label>
                            </div>

                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">Occupant</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">Owner </label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">Investment</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">Income Type</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">W5 </label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">1099</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="mb-3">
                <label class="col-form-label">  Please explain/clarify any other applicable sources of income:</label>
                <input class="form-control" type="text" placeholder="$" value="$">
            </div>
            <div class="mb-3">
                <label class="col-form-label">Please Note any Recent Promotions, Changes in Salary, and Whether You are Paying Yourself:</label>
                <input class="form-control" type="text" placeholder="$" value="$">
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">If a Business, which type?</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">DB</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">LLC</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">C-Corp</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label"> Is Business Listed Online or on Social Media?</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">Yes</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">No</label>
                            </div>

                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="mb-3">
                <label class="col-form-label">If not Why?:</label>
                <input class="form-control" type="text" placeholder="">
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">Tax Return Provided?</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">Yes</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">No</label>
                            </div>

                        </div>
                    </div>
                </fieldset>
            </div>
             <div class="mb-3">
                <label class="col-form-label">List Any Recently Closed/Opened Business(es):</label>
                <input class="form-control" type="text" placeholder="">
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">Number of Years in Same Line of Business:</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">1-2 Year(s)</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">2-5 Years 2-5 Years</label>
                            </div>
                               <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">5+ Years</label>
                            </div>
                            (*2 years required unless you received a recent degree, certificate, training etc.)
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="mb-3">
                <label class="col-form-label">Please Advice:</label>
                <input class="form-control" type="text" placeholder="">
            </div>
             <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">Are any Business Partners a Spouse/Domestic/Civil Partner?</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">yes</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">no</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
              <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">Credit/Financial History?</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">Foreclosure</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">Bankruptcy</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">Late Payment</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">Collection</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
             <div class="mb-3">
                <label class="col-form-label">If Investment Property: Monthly Rent $:</label>
                <input class="form-control" type="text" placeholder="$">
            </div>
            <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">Rnovation</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">Yes</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">No</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
               <div class="col-auto">
                <fieldset class="mb-3">
                    <div class="row">
                        <label class="col-form-label">Mortgage Statement Provided:</label>
                        <div class="col-sm-9">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio11" type="radio" name="hoa" value="yes">
                                <label class="form-check-label" for="radio11">Yes</label>
                            </div>
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" id="radio22" type="radio" name="hoa" value="no">
                                <label class="form-check-label" for="radio22">No</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
    </div>
</div>
</template>
