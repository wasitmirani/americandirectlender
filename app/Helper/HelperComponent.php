<?php
namespace App\Helper;

class HelperComponent {

    public static function SideBar(){
        return [
                [
                    "heading"=>"Main",
                ],
                [
                    "single_link" => setSingleLink( "Dashboard","home",null,"/"),
                ],
                [
                    "single_link" => setSingleLink( "Applications","file-text",null,"/customer/applications"),
                ],


                [
                    "heading"=>"Management",
                    "menu"=>[
                        "title"=>'User Management',
                        "icon"=>"user",
                        "sub_menu"=>[
                            setSubMenu(
                              "Users",
                                null,
                                "users-view",
                                 "/users",
                            ),
                            setSubMenu(
                                "Roles",
                                  null,
                                  "roles-view",
                                   "/roles",
                            ),
                            setSubMenu(
                                "Permissions",
                                  null,
                                  "permissions-view",
                                   "/permissions",
                              ),


                        ]

                    ],

                ],


                [
                    "heading"=>"Config",

                ],
                [
                    "single_link" => setSingleLink( "Settings","settings",null,"/password/setting"),
                ],
                [
                    "single_link" => setSingleLink( "Assigned Apps","file-text",null,"/assigned/apps"),
                ],
                // [
                //     "single_link" => setSingleLink( "Assign App","file-text",null,"/assign/apps"),
                // ],
                // [
                //     "single_link" => setSingleLink("Logout","arrow",null,"logout"),
                // ],
                [
                    "single_link" => setSingleLink( "Notify","bell","notify-view","/send/notify"),
                ],


                [
                    "heading"=>"Content",
                ],

     ];
    }
}
