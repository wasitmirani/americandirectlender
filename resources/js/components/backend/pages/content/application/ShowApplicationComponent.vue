<template>
    <div>
        <div class="col-lg-12">
            <div class="header-faq">
                <h5 class="mb-0">Application Detail</h5>
                <div class="kanban-item">
                            <a class="kanban-box" href="#"><span class="date">{{this.application.date}}</span><span class="badge badge-danger f-right"  v-if="this.application.status == '1'">In Process</span>
                            <span class="badge badge-danger f-right" v-if="this.application.status == '0'">Done</span>
                                <h6 >{{this.application.name}}</h6>
                                <div class="media">
                                  <div class="media-body">
                                    <p><span>Property Value: $ *:{{application.property_value}}</span></p>
                                    <p><span>Property Type:{{application.property_type}}</span></p>
                                  </div>
                                </div>
                            </a>
                </div>
            </div>
            <div class="row default-according style-1 faq-accordion" id="accordionoc">
                <div class="col-xl-8 xl-60 col-lg-6 col-md-7 box-col-8">
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Any updates or changes to the property (*which can change value)? </button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.property_update}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon2" aria-expanded="false" aria-controls="collapseicon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg> Property Address (if known, confirm loan limits in Lending Pad, as they are based on city/county and might be jumbo under $822k):</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon2" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.property_address}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon3" aria-expanded="false" aria-controls="collapseicon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>HOA?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon3" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.hoa}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon4" aria-expanded="false" aria-controls="collapseicon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Any Mello-Roos/Other Fees or Special Taxes</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon4" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.fee}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon5" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Cash Out</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon5" aria-labelledby="collapseicon5" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.cash_out}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon7" aria-expanded="false" aria-controls="collapseicon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Refinance</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon7" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.refinance}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon8" aria-expanded="false" aria-controls="collapseicon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Payments On-Time in the last 12 Months?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon8" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.payment_assurance}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon9" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg> If Payments Have Been Deferred, have you Made Payments on Time in the Last 3 Months?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon9" aria-labelledby="collapseicon9" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.payment_surity}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon10" aria-expanded="false" aria-controls="collapseicon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Purchase</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon10" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.purchase}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon11" aria-expanded="false" aria-controls="collapseicon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Do You Have a Second Loan?</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon11" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.second_loan}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon12" aria-expanded="false" aria-controls="collapseicon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>If Have Loan</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon12" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.is_second_loan}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon13" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Loan Amount</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon13" aria-labelledby="collapseicon13" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.loan_amount}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon14" aria-expanded="false" aria-controls="collapseicon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Cash Reserve</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon14" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.is_second_loan}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon16" aria-expanded="false" aria-controls="collapseicon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Loan Doc Type </button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon16" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.doc_type}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon17" aria-expanded="false" aria-controls="collapseicon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg> Occupant</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon17" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.Occupant}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-header">
                          <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon18" aria-expanded="false" aria-controls="collapseicon2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Income Type</button>
                          </h5>
                        </div>
                        <div class="collapse" id="collapseicon18" data-parent="#accordionoc">
                          <div class="card-body">
                            <p>{{application.income_type}}</p>
                          </div>
                        </div>
                      </div>
                </div>
                <div class="col-xl-4 xl-40 col-lg-6 col-md-5 box-col-4">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>other applicable sources of income: </button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.source_income}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Recent Promotions, Changes in Salary, and Whether You are Paying Yourself:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.promotion_detail}}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Type Of Business:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.business_type}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Social Media Existance:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.is_oline}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Reason Why No Exist In Social Media:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.is_online_rason}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Tax Return:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.tax_return}}</p>
                                    </div>
                                </div>
                            </div>
                             <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Recently Closed / Opened Business:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.recent_business}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Experience In Same Business:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p><{{application.business_line}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Business Partner:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.business_partner}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Credit/Financial History:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.financial_history}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>If Investment Property: Monthly Rent $:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.investment_property}}</p>
                                    </div>
                                </div>
                            </div>
                              <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Renovation:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.renovation}}</p>
                                    </div>
                                </div>
                            </div>
                              <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Mortgage Statement Provided::</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.mortgage_statement}}</p>
                                    </div>
                                </div>
                            </div>
                              <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>Is Property Insured:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.property_insured}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                               <div class="card-header">
                                <h5 class="mb-0">
                                   <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseicon" aria-expanded="false" aria-controls="collapseicon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>List all Liabilities/Liens/Loans/Investments/Cosign on Loans:</button>
                                </h5>
                                </div>
                                <div class="collapse" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
                                    <div class="card-body">
                                      <p>{{application.liabilities_loans}}</p>
                                    </div>
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
export default{
    data(){
        return{
            application : {},

        }
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
