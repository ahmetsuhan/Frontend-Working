   //JS Document

   $(document).ready(function() {



       /*For Small Devices menu open button process >>>>>>>>>>*/
       $("#headerMenuOpenButtonArea").click(function() {

           $("#headerMenuOpenButtonMenuLimitArea").slideToggle("slow");
       });
       /*For Small Devices menu open button process <<<<<<<<<<*/


       /*For Main and Footer  area top height calculation >>>>>>>>>>*/
       var documentWidth = $(window).outerWidth();

       if (!($("#headerMessageArea").length)) {
           if (documentWidth >= 1200) { /* XL Device */
               var offSetValue = 161;
           } else if (documentWidth >= 992 && documentWidth <= 1199) { /* L Device */
               var offSetValue = 390;
           } else if (documentWidth >= 768 && documentWidth <= 991) { /* M device */
               var offSetValue = 320;
           } else if (documentWidth >= 576 && documentWidth <= 767) { /* S device */
               var offSetValue = 193;
           } else { /* XS Device*/
               var offSetValue = 150;
           }
       } else {
           if (documentWidth >= 1200) { /* XL Device */
               var offSetValue = 273;
           } else if (documentWidth >= 992 && documentWidth <= 1199) { /* L Device */
               var offSetValue = 503;
           } else if (documentWidth >= 768 && documentWidth <= 991) { /* M device */
               var offSetValue = 433;
           } else if (documentWidth >= 576 && documentWidth <= 767) { /* S device */
               var offSetValue = 283;
           } else { /* XS Device*/
               var offSetValue = 228;
           }
       }
       $("main").css("top", offSetValue);
       $("footer").css("top", offSetValue);

       $(window).resize(function() {
           var documentWidth = $(window).outerWidth();

           if (!($("#headerMessageArea").length)) {
               if (documentWidth >= 1200) { /* XL Device */
                   var offSetValue = 161;
               } else if (documentWidth >= 992 && documentWidth <= 1199) { /* L Device */
                   var offSetValue = 390;
               } else if (documentWidth >= 768 && documentWidth <= 991) { /* M device */
                   var offSetValue = 320;
               } else if (documentWidth >= 576 && documentWidth <= 767) { /* S device */
                   var offSetValue = 193;
               } else { /* XS Device*/
                   var offSetValue = 150;
               }
           } else {
               if (documentWidth >= 1200) { /* XL Device */
                   var offSetValue = 273;
               } else if (documentWidth >= 992 && documentWidth <= 1199) { /* L Device */
                   var offSetValue = 503;
               } else if (documentWidth >= 768 && documentWidth <= 991) { /* M device */
                   var offSetValue = 433;
               } else if (documentWidth >= 576 && documentWidth <= 767) { /* S device */
                   var offSetValue = 283;
               } else { /* XS Device*/
                   var offSetValue = 228;
               }
           }
           $("main").css("top", offSetValue);
           $("footer").css("top", offSetValue);
       });
       /*For Main and Footer  area top height calculation <<<<<<<<<<*/


       /*For FAQ  area content show-hide >>>>>>>>>>*/
       $.FAQContentShow = function(elementID) {
               var questionId = elementID;
               var selectedArea = "#" + elementID;

               //alert(questionId);
               $(".allPageWindowAreaInnerFAQQuestionContentArea").slideUp();
               $(selectedArea).parent().find(".allPageWindowAreaInnerFAQQuestionContentArea").slideToggle();

           }
           /*For FAQ area content show-hide <<<<<<<<<<*/



   });
