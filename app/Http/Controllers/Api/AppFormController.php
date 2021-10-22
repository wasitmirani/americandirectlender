<?php

namespace App\Http\Controllers\Api;

use App\Mail\AppAssignMail;
use App\Models\Application;
use Illuminate\Http\Request;
use App\Models\ApplicationAgents;
use App\Models\ApplicationComment;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Models\ApplicationAttachment;

class AppFormController extends Controller
{
    public function getApplications(){

         //
        $q=request('query');


        $applications = Application::where('name', 'like', '%' .$q. '%')
        ->orderBy('name','ASC')
        ->with('agents','attachments')->paginate(env('PAR_PAGE'));

        $process = Application::where('status','=','0')
        ->orderBy('name','ASC')
        ->with('agents','attachments')->paginate(env('PAR_PAGE'));

        $done = Application::where('status','=','1')
        ->orderBy('name','ASC')
        ->with('agents','attachments')->paginate(env('PAR_PAGE'));

        if($applications){
            return response()->json(['applications'=>$applications,'process'=>$process,'done'=>$done]);
        }else{
            return response()->json('No Application Found');
        }

    }


    public function edit($id){
        $application = Application::with('agents')->find($id);
        if($application){

            return response()->json(['application' => $application]);

        }else{
            return response()->json('No Application Found');
        }

    }

    public function getAppComment($id){
        $comments = ApplicationComment::where('application_id',$id)->get();
        return response()->json(['comments'=>$comments]);
    }

    public function getAppFile($id){
        $files = ApplicationAttachment::where('application_id',$id)->get();
        return response()->json(['files'=>$files]);
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
        $application->update();





        // $attachment = ApplicationAttachment::create([



        //      'application_id'=>$application->id,

        //  ]);



        return response()->json();
    }




    public function updateStatus(Request $request,$id){

        $application = Application::find($id);
        $application->status = '1';
        $application->update();
        $agent = ApplicationAgents::create([
            'application_id' => $request->app,
            'agent_id' => $request->agent
        ]);

        if($agent){

            return response()->json(['message'=>'Status Updated Successfully']);
        }else{
            return response()->json(['message'=>'Failed To Update Status']);
        }
    }

    public function assignApp(Request $request){


        $application = Application::find($request->app);
        $application->status = '1';
        $application->update();
        $agent = ApplicationAgents::create([
            'application_id' => $request->app,
            'agent_id' => $request->agent
        ]);

         return response()->json();



    }

    public function getAssignedApp(){
        $assignedApps = Application::where('status','1')->with('agent')->paginate((int)env('PER_PAGE'));
        return response()->json(['assignedApps'=>$assignedApps]);
    }

    public function deleteAssignedApp(Request $request){

        $application_agent =ApplicationAgents::where('application_id',$request->id)->delete();
        // $application_attachment =ApplicationAttachment::where('application_id',$request->id)->delete();
        // $application_comment =ApplicationComment::where('application_id',$request->id)->delete();
        // $application =  Application::destroy($request->id);
        return response()->json();

    }


    public function postComment(Request $request){
        $comment = ApplicationComment::create([
            'application_id' => $request->app,
            'comment' => $request->comment
        ]);
        return response()->json();




    }
    public function uploadFile(Request $request){

        $file = singleImgUpload($request, '/app/agent/file');
         ApplicationAttachment::create([
             'application_id' => $request->app,
             'agent_id' => $request->agent,
             'file' => $file
         ]);

        return response()->json();


    }

}
