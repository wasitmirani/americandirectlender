<?php

namespace App\Http\Controllers\backend\notify;

use App\Models\User;
use Illuminate\Http\Request;
use App\Notifications\NotifyUser;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Notification;

class NotificationController extends Controller
{
    //

    public function sendNotifyUser(Request $request){
        $userSchema = User::where('id',2)->latest()->first();

        $offerData =(object)[
            'title' => 'Hello world '.$userSchema->name,
            'body' => 'You received an offer.',
            'thanks' => 'Thank you',
            'offerText' => 'Check out the offer',
            'offerUrl' => url('/'),
            'offer_id' => 007
        ];

        Notification::send($userSchema, new NotifyUser($offerData));

    }
}
