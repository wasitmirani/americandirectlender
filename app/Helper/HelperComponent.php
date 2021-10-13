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
                    "single_link" => setSingleLink( "Applications","applications",null,"/customer/applications"),
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
                    "single_link" => setSingleLink( "Notify","bell","notify-view","/send/notify"),
                ],

                [
                    "heading"=>"Content",
                ],
                [
                    "single_link" => setSingleLink( "Applications","file-minus","app-view","/customer/applications"),
                ],


     ];
    }
}
