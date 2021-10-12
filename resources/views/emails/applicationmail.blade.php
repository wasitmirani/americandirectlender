<!-- Codepen doesn't allow the DOCTYPE statement below, as they add it in themselves behind the scene, but when sending this as an email you would need to include it uncommented for it to work. It is an older DOCTYPE statement rather than the newer HTML5 version, as the old one currently works best for email as most email providers still use the old standard for all their emails.-->
<!-- The unsubscribe link isn't set to an actual link, this would be done with the sender's actual link details. -->
<!-- The content can be changed (ie different banner, text, extra images etc) just remember that the css styles may have to be changed to reposition new elements correctly. Also any additional elements added rather than changes to existing ones would require new html to be created for those elements. -->

<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> -->
<html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<!--[if gte mso 9]><xml>
		<o:OfficeDocumentSettings>
		<o:AllowPNG/>
		<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
		</xml><![endif]-->
		<title>Test Email Sample</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="format-detection" content="telephone=no">
		<!--[if !mso]><!-->
			<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
		<!--<![endif]-->
		<style>
			body {
				margin: 0 !important;
				padding: 0 !important;
				-webkit-text-size-adjust: 100% !important;
				-ms-text-size-adjust: 100% !important;
				-webkit-font-smoothing: antialiased !important; 	/*style only recognised by some browsers*/
			}

			img {
				border: 0 !important;
				outline: none !important;
			}

			p {
				Margin: 0px !important; /*Old versions of Outlook ignore margin if it is lower case as usual*/
				padding: 0px !important;
			}

			table {
				border-collapse: collapse;
				mso-table-lspace: 0px;	/*Microsoft Office only styling*/
				mso-table-rspace: 0px;	/*Microsoft Office only styling*/
			}

			td, a, span {
				border-collapse: collapse;
				mso-line-height-rule: exactly;	 /*Microsoft Office only styling*/
			}

			.ExternalClass * {
				line-height: 100%;
			}

			@media yahoo {
			  	.em_img {
			  		min-width:700px !important;
			  	}
			}

			.em_img {
				width: 700px !important;
				height: auto !important;
			}

			/* Text decoration removed */
			.em_defaultlink a {
				color: inherit !important;
				text-decoration: none !important;
			}

			span.MsoHyperlink {
				mso-style-priority: 99; 	/*Microsoft Office only styling*/
				color: inherit;
			}

			span.MsoHyperlinkFollowed {
				mso-style-priority: 99; 	/*Microsoft Office only styling*/
				color: inherit;
			}

			/* Media Query for desktop layout */
			@media only screen and (min-width:481px) and (max-width:699px) {
				.em_main_table {
					width: 100% !important;
				}
				.em_wrapper {
					width: 100% !important;
				}
				.em_hide {
					display: none !important;
				}
				.em_img {
					width: 100% !important;
					height: auto !important;
				}
				.em_h20 {
					height: 20px !important;
				}
				.em_padd {
					padding: 20px 10px !important;
				}
			}

			/* Media Query for mobile layout */
			@media screen and (max-width: 480px) {
				.em_main_table {
					width: 100% !important;
				}
				.em_wrapper {
					width: 100% !important;
				}
				.em_hide {
					display: none !important;
				}
				.em_img {
					width: 100% !important;
					height: auto !important;
				}
				.em_h20 {
					height: 20px !important;
				}
				.em_padd {
					padding: 20px 10px !important;
				}
				.em_text1 {
					font-size: 16px !important;
					line-height: 24px !important;
				}
				u + .em_body .em_full_wrap {
					width: 100% !important;
					width: 100vw !important;
				}
			}
    </style>

	</head>
	<body class="em_body" style="margin:0px; padding:0px;" bgcolor="#efefef">
		<table class="em_full_wrap" valign="top" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#efefef" align="center">
  			<tbody>
  				<tr>
    				<td valign="top" align="center">
    					<table class="em_main_table" style="width:700px;" width="700" cellspacing="0" cellpadding="0" border="0" align="center">
					        <!--Header section-->
					        <tbody>
					        	<tr>
					          		<td style="padding:15px;" class="em_padd" valign="top" bgcolor="#f6f7f8" align="center">
					          			<table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
					              			<tbody>
					              				<tr>
					                				<td style="font-family:'Open Sans', Arial, sans-serif;
                                             font-size:12px;
                                             line-height:15px;
                                             color:#0d1121;"
                                      valign="top"
                                      align="center">

					                					Test Email Sample | <a href="https://chrismuster.co.uk/email-template.html"
                                                           target="_blank"
                                                           style="color:#0d1121;
                                                                  text-decoration:underline;">View Online</a>
					                				</td>
					              				</tr>
					            			</tbody>
					            		</table>
					            	</td>
					        	</tr>
					        <!--//Header section ends-->

        					<!--Banner section-->
       							<tr>
          							<td valign="top" align="center">
          								<table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              								<tbody>
              									<tr>
                									<td valign="top" align="center">
                										<img class="em_img"
                                         alt="Welcome to EmailWeb Newsletter"
                                         style="display:block;
                                                font-family:Arial, sans-serif;
                                                font-size:30px;
                                                line-height:34px;
                                                color:#000000;
                                                min-width:700px"
                                         {{-- src="https://i1.lensdump.com/i/ZBA2zx.png" --}}
                                         width="700"
                                         border="0"
                                         height="230">
                                         Welcome To American Lender
                									</td>
              									</tr>
            								</tbody>
            							</table>
            						</td>
        						</tr>
        					<!--//Banner section ends-->

        					<!--Content Text Section-->
                 		<tr>
          							<td style="padding:35px 70px 30px;" class="em_padd" valign="top" bgcolor="#0d1121" align="center">
          								<table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              								<tbody>
              									<tr>
                									<td style="font-family:'Open Sans', Arial, sans-serif;
                                             font-size:16px;
                                             line-height:30px;
                                             color:#ffffff;"
                                      valign="top"
                                      align="center">

                									Your Application Submited Succssfully

                									</td>
              									</tr>
              									<tr>
                                  <!--—Start-this is space of 15px to separate two paragraphs ---->
                									<td style="font-size:0px;
                                             line-height:0px;
                                             height:15px;"
                                      height="15">
                                    &nbsp;
                                  </td>
													      <!--—End-this is space of 15px to separate two paragraphs ---->
              									</tr>
              									<tr>
                									<td style="font-family:'Open Sans', Arial, sans-serif;
                                             font-size:18px;
                                             line-height:22px;
                                             color:#fbeb59;
                                             letter-spacing:2px;
                                             padding-bottom:12px;"
                                      valign="top"
                                      align="center">
Let's Start Discovering

                									</td>
              									</tr>
								              	<tr>
                                  <!--—Start-this is space of 25px to separate two paragraphs ---->
								                	<td class="em_h20"
                                      style="font-size:0px;
                                             line-height:0px;
                                             height:25px;"
                                      height="25">
                                    &nbsp;
                                  </td>
													      <!--—End-this is space of 25px to separate two paragraphs ---->
								              	</tr>
												        <tr>
                									<td style="font-family:'Open Sans', Arial, sans-serif;
                                             font-size:18px;
                                             line-height:22px;
                                             color:#fbeb59;
                                             text-transform:uppercase;
                                             letter-spacing:2px;
                                             padding-bottom:12px;"
                                      valign="top"
                                      align="center">

                                      FEELING GOOD ABOUT MAKING A DIFFERENCE.
                									</td>
              									</tr>
            								</tbody>
            							</table>
            						</td>
        						</tr>

        					<!--//Content Text Section Ends-->

        					<!--Footer Section. Change the FB, Twitter, LinkedIn links for your own, and it is best to use your own images that
                  you host for the social media buttons so you control the links to the images, also then you can use different
                  or alternate images if you don't like these. Jpegs and PNG work best-->
        						<tr>
          							<td style="padding:38px 30px;" class="em_padd" valign="top" bgcolor="#f6f7f8" align="center">
          								<table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
              								<tbody>
                                <!--Social Media links row -->
              									<tr>
                									<td style="padding-bottom:16px;" valign="top" align="center">
                										<table cellspacing="0" cellpadding="0" border="0" align="center">
                    										<tbody>
                    											<tr>
                                              <!--Facebook Link -->
                      												<td valign="top" align="center">
                      													<a href="https://www.facebook.com/"
                                                   target="_blank"
                                                   style="text-decoration:none;">
                      														<img src="https://i2.lensdump.com/i/ZBA8wH.png"
                                                       alt="fb"
                                                       style="display:block;
                                                              font-family:Arial,
                                                              sans-serif;
                                                              font-size:14px;
                                                              line-height:14px;
                                                              color:#ffffff;
                                                              max-width:26px;"
                                                       width="26"
                                                       border="0"
                                                       height="26">
                      													</a>
                      												</td>

                                              <!--Spacing <td> -->
                      												<td style="width:6px;" width="6">&nbsp;</td>

                                              <!--Twitter Link -->
                      												<td valign="top" align="center">
                      													<a href="https://twitter.com/TexPosse"
                                                   target="_blank"
                                                   style="text-decoration:none;">
                      														<img src="https://i.lensdump.com/i/ZBAiKc.png"
                                                       alt="twitter"
                                                       style="display:block;
                                                              font-family:Arial,
                                                              sans-serif;
                                                              font-size:14px;
                                                              line-height:14px;
                                                              color:#ffffff;
                                                              max-width:27px;"
                                                       width="27"
                                                       border="0"
                                                       height="26">
                      													</a>
                      												</td>

                                              <!--Spacing <td> -->
                      												<td style="width:6px;" width="6">&nbsp;</td>

                                              <!--LinkedIn Link -->
                      												<td valign="top" align="center">
                      													<a href="https://linkedin.com/in/chris-muster-832b57a1"
                                                   target="_blank"
                                                   style="text-decoration:none;">
                      														<img src="https://i3.lensdump.com/i/ZBAW11.png"
                                                       alt="linkedin"
                                                       style="display:block;
                                                              font-family:Arial,
                                                              sans-serif;
                                                              font-size:14px;
                                                              line-height:14px;
                                                              color:#ffffff;
                                                              max-width:26px;"
                                                       width="26"
                                                       border="0"
                                                       height="26">
                      													</a>
                      												</td>
                    											</tr>
                  											</tbody>
                  										</table>
                  									</td>
              									</tr>
                                <!--Other links and info row -->
              									<tr>
                									<td style="font-family:'Open Sans', Arial, sans-serif;
                                             font-size:11px;
                                             line-height:18px;
                                             color:#999999;"
                                      valign="top"
                                      align="center">
                										<a href="http://chrismuster.co.uk/#Home"
                                       target="_blank"
                                       style="color:#999999;
                                              text-decoration:underline;">
                                          ABOUT CHRIS
                                    </a> |
                										<a href="https://codepen.io/chrismuster/"
                                       target="_blank"
                                       style="color:#999999;
                                              text-decoration:underline;">
                                          CODEPEN
                                    </a> |
                										<a href="https://chrismuster.co.uk/#Contact"
                                       target="_blank"
                                       style="color:#999999;
                                              text-decoration:underline;">
                                          CONTACT
                                    </a>
                										<br>
                  										© 2020 American Lender. All Rights Reserved.
                  										<br>
                  										FEELING GOOD ABOUT MAKING A DIFFERENCE.
                                      <a href="#"
                                         target="_blank"
                                         style="text-decoration:underline;
                                                color:#999999;
                                                font-weight: bold;">Unsubscribe</a>
                  								</td>
              									</tr>
            								</tbody>
            							</table>
            						</td>
        						</tr>
      						</tbody>
      					</table>
      				</td>
  				</tr>
			</tbody>
		</table>

		<!-- extra spacing to force the desktop layout in Gmail, using non-breaking spacing &nbsp; -->
		<div class="em_hide" style="white-space: nowrap;
                                display: none;
                                font-size:0px;
                                line-height:0px;">
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    </div>

	</body>

</html>
