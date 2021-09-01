<?php
namespace App\Helper;

class HelperComponent {

    public static function SideBar(){
        return [
                [
                    "heading"=>"Main",
                    "menu"=>[
                        "title"=>'Dashboards',
                        "icon"=>"fa fa-linux",
                        "v-can"=>"",
                        "sub_menu"=>[
                            setSubMenu(
                              "Test",
                                null,
                                null,
                                 "/",
                            ),
                        ]
                    ]
                ],
                [
                    "heading"=>"DIRECTORIES",
                    "menu"=>[
                        "title"=>'Variations',
                        "icon"=>"fa fa-comment",
                        "sub_menu"=>[
                            setSubMenu(
                              "Dashboard",
                                null,
                                null,
                                 "/",
                            ),
                            setSubMenu(
                                "Dashboard",
                                  null,
                                  null,
                                   "/",
                              ),
                        ]

                    ],

                ],
                [
                    "single_link" => setSingleLink( "Dashboard","fa fa-users",null,"/"),
                ],

     ];
    }
}
