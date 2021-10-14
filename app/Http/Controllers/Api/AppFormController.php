<?php

namespace App\Http\Controllers\Api;

use App\Models\Application;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppFormController extends Controller
{
    public function getApplications(){

         //
        $q=request('query');
        $applications = Application::where('name', 'like', '%' .$q. '%')
        ->orderBy('name','ASC')
        ->with('agents','attachments')->paginate(env('PAR_PAGE'));

        if($applications){
            return response()->json(['applications'=>$applications]);

        }else{
            return response()->json('No Application Found');
        }

    }


    public function edit($id){
        $application = Application::find($id);
        if($application){

            return response()->json(['application' => $application]);

        }else{
            return response()->json('No Application Found');
        }

    }


    public function update(Request $request, $id){


        $application = Application::find($id);

        $application->date = $request->date;
        $application->name = $request->name;
        $application->property_value = $request->property_value;
        $application->property_update = $request->property_update;
        $application->property_address =  $request->property_address;
        $application->promotion_detail =$request->property_detail;
        $application->property_type = $request->property_type;
        $application->hoa = $request->hoa;
        $application->fee = $request->fee;
        $application->cash_out = $request->cash_out;
        $application->refinance = $request->refinance;
        $application->payment_assurance = $request->assurance;
        $application->payment_surity = $request->payment_surity;
        $application->purchase = $request->purchase;
        $application->second_loan = $request->second_loan;
        $application->loan_amount = $request->loan_amount;
        $application->investment_property = $request->investment_property;
        $application->is_second_loan = $request->is_second_loan;
        $application->cash_reserve = $request->cash_reserve;
        $application->fico = $request->fico;
        $application->doc_type = $request->doc_type;
        $application->occupant = $request->occupant;
        $application->income_source = $request->income_source;
        $application->income_type = $request->income_type;
        $application->recent_business_Activity = $request->recent_business;
        $application->business_type = $request->business_Type;
        $application->is_online = $request->is_online;
        $application->tax_return = $request->tax_return;
        $application->recent_business = $request->recent_business;
        $application->is_online_reason = $request->is_online_reason;
        $application->business_line = $request->business_line;
        $application->advice = $request->advice;
        $application->is_business_partner = $request->is_business_partner;
        $application->financial_history = $request->financial_history;
        $application->monthly_rent = $request->monthly_rent;
        $application->renovation = $request->renovation;
        $application->mortgage_statement = $request->mortgage_statement;
        $application->property_insured = $request->property_insured;
        $application->liabilities_loans = $request->liabilities_loans;
        $application->save();

        return response()->json();
    }


    public function updateStatus($id){

        $application = Application::find($id);
        $application->status = '1';
        if($application->upadate()){

            return response()->json(['message'=>'Status Updated Successfully']);
        }else{
            return response()->json(['message'=>'Failed To Update Status']);
        }
    }


}
