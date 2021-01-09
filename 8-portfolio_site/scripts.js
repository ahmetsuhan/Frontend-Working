  /*document ready?*/
  $(function() {

      var scrollSettings = {
          animationDuration: 2000
      }

      /*Header content starting pos >>>>>>>> */
      var headerContentOffset = $("#position-fixed-cont").innerHeight();
      $("#headerContentArea").css("top", headerContentOffset);
      /*Header content starting pos <<<<<<<< */

      /*For Small Devices menu open button process >>>>>>>>>>*/
      $("#headerMenuOpenButtonArea").click(function() {
          $("#headerMenuOpenButtonMenuLimitArea").slideToggle("slow");
      });
      /*For Small Devices menu open button process <<<<<<<<<<*/

      /*For giving ofset value to header-content div starting pos >>>>>>>>*/
      $(window).scroll(function() {
          if (window.scrollY > 0) {
              $("#position-fixed-cont").css({
                  position: "fixed",
                  top: 0,
                  left: 0
              });
              /*if scroll vertically up arrow will be displayed in screen >>>>>>>> */
              $("#returnTop").css("display", "inline-block");
              /*if scroll vertically up arrow will be displayed in screen <<<<<<<< */
          } else {
              $("#position-fixed-cont").css({
                  position: "static",
                  top: 0,
                  left: 0
              });

              $("#returnTop").css("display", "none");
          }
      });
      /*For giving ofset value to header-content div starting pos <<<<<<<<*/

      /*When the return top arrow clicked go to top slowly >>>>>>>> */
      $("#returnTop").click(function() {
          $("html, body").animate({
              scrollTop: 0
          }, "slow");
          return false;
      });
      /*When the return top arrow clicked go to top slowly <<<<<<<<*/

      /*Scrool page between section >>>>>>>>*/
      $('a[href="#hakkimda"]').click(function() {
          $('html, body').animate({
              scrollTop: $("#mainAuthorInfo").offset().top - 113 //to set element top 
          }, scrollSettings.animationDuration);
      });
      $('a[href="#works"]').click(function() {
          $('html, body').animate({
              scrollTop: $("#mainAuthorWorks").offset().top - 68
          }, scrollSettings.animationDuration);
      });
      $('a[href="#comments"]').click(function() {
          $('html, body').animate({
              scrollTop: $("#commentSection").offset().top - 100
          }, scrollSettings.animationDuration);
      });
      $('a[href="#contact"]').click(function() {
          $('html, body').animate({
              scrollTop: $("#contactSection").offset().top
          }, scrollSettings.animationDuration);
      });
      /*Scrool page between section <<<<<<<<*/


      /*For slider >>>>>>>> */
      // for no scroll  when a element is clicked
      $("#worksSliderIcon a").click(function(e) {
          e.preventDefault();
      });
      var sliderImages = [

          {
              header: "Work 1",
              src: "img/1.jpg"
          },

          {
              header: "Work 2",
              src: "img/2.jpg"
          },

          {
              header: "Work 3",
              src: "img/3.jpg"
          },

          {
              header: "Work 4",
              src: "img/4.jpg"
          }
      ];
      var sliderSettings = {
          animationDuration: 5000,
          random: true // set false to change images just manually with using left-right arrow
      };
      var sliderCounter = 0; // To count images which is changed in slider area
      var sliderInterval;
      var sliderLeftButton = $(".fa-arrow-left");
      var sliderRightButton = $(".fa-arrow-right");


      SliderInit(sliderSettings);

      sliderLeftButton.click(function() {
          sliderCounter--;
          ShowSlide(sliderCounter);
      });

      sliderRightButton.click(function() {
          sliderCounter++;
          ShowSlide(sliderCounter);
      });

      //when mouse enter slide area slide show will be stopped
      $("#mainAuthorWorksSliderArea").mouseover(function() {
          clearInterval(sliderInterval);
      });
      //when mouse leave slide area slide show will be played
      $("#mainAuthorWorksSliderArea").mouseleave(function() {
          SliderInit(sliderSettings);
      });

      function SliderInit(sliderSettings) {
          var prev;
          sliderInterval = setInterval(function() {
              if (sliderSettings.random) {
                  //generate random index
                  do {
                      sliderCounter = Math.floor(Math.random() * sliderImages.length);
                  } while (sliderCounter == prev)
                  prev = sliderCounter;
              } else {
                  //generate increasing index
                  if (sliderImages.length == sliderCounter) {
                      sliderCounter = 0;
                  }
                  sliderCounter++;
              }
              ShowSlide(sliderCounter);
          }, sliderSettings.animationDuration);
      }

      function ShowSlide(i) {

          sliderCounter = i;
          if (i < 0) {
              sliderCounter = sliderImages.length - 1;
          }
          if (i > sliderImages.length - 1) {
              sliderCounter = 0;
          }
          document.querySelector("#workHeader h3").textContent = sliderImages[sliderCounter].header;
          document.querySelector('#mainAuthorWorksSliderContentImage img').setAttribute("src", sliderImages[sliderCounter].src);
      }

      /*For slider <<<<<<<< */


      /* For Comment Section >>>>>>>>*/
      const btnSendComment = $("#btnAddComment");
      const textArea = $("#writeNewComment form textarea");
      const btnDeleteAll = $("#btnDeleteAll");
      const commentLimitArea = $("#commentLimitArea");

      EventListeners();

      function EventListeners() {
          //add new Comment
          btnSendComment.click(AddNewComment);

          //delete a comment
          commentLimitArea.click(DeleteComment)

          //delete All comments
          btnDeleteAll.click(DeleteAllComments);
      }
      //AddNewComment
      function AddNewComment(e) {
          //console.log((textArea.val()));
          if (textArea.val() === "") {
              alert("Göndermek için önce bir yorum yazmalısınız!");

          } else {
              const commentsLi = document.createElement("li");
              commentsLi.className = "comments";
              const commentsInfoDiv = document.createElement("div");
              commentsInfoDiv.className = "commentsInfo";
              const btnCommentDelete = document.createElement("button");
              btnCommentDelete.className = "btnCommentDelete";
              btnCommentDelete.innerHTML = "&times";
              const commentsTextP = document.createElement("p");
              commentsTextP.className = "commentsText";
              //textareadan aldığım değeri p etkitene ekledim.
              commentsTextP.appendChild(document.createTextNode(textArea.val()));
              //add commentsInfoDiv to commentsLi
              commentsLi.appendChild(commentsInfoDiv);
              //add btnCommentDelete to commentsLi
              commentsLi.appendChild(btnCommentDelete);
              //add commentsTextP to commentsInfoDiv
              commentsInfoDiv.appendChild(commentsTextP);

              //add commentsLi to  commentLimitAreaUl
              /*Note: append--> lastchild .... prepend-->firstchild  */
              commentLimitArea.prepend(commentsLi);

              //clearTextarea
              textArea.val("");

              //save Comment to session Storage
              AddCommenToSessionStorage();
              e.preventDefault();
          }



      }

      //DeleteComment
      function DeleteComment(e) {
          if (e.target.className == ("btnCommentDelete")) {
              e.target.parentElement.remove();
              DeleteCommentFromSessionStorage(e.target.parentElement.children[0].children[0].textContent);
          }
          e.preventDefault();
      }

      //Delete All Comments
      function DeleteAllComments(e) {
          if (confirm("Silmek istediğinize Emin misiniz?")) {
              let arr = document.querySelectorAll("#commentLimitArea .comments");
              for (let i = 0; i < arr.length; i++) {
                  arr[i].remove();
              }
              DeleteAllCommentToSessionStorage();
          }

          e.preventDefault();
      }

      function AddCommenToSessionStorage() {
          //working with sessionStorage
          let storage = [];
          let allComments = $(".commentsText");

          for (let i = 0; i < allComments.length; i++) {
              storage.push(allComments[i].innerText);
              sessionStorage.setItem(`Comments`, JSON.stringify(storage));
          }
      }

      function DeleteAllCommentToSessionStorage() {
          sessionStorage.clear();
      }

      let comments; //to keep sessionStorage comments value

      //To get Comment from sessionstorage
      function GetCommentsFromSessionStorage() {
          if (sessionStorage.getItem("Comments") == null) {
              comments = [];
          } else {
              comments = JSON.parse(sessionStorage.getItem("Comments"));
          }
          return comments;
      }

      //To delete a comment from sessionstorage with given text parameter for function that is below
      function DeleteCommentFromSessionStorage(text) {
          comments = GetCommentsFromSessionStorage();
          for (let i = 0; i < comments.length; i++) {
              if (comments[i] == text) {
                  comments.splice(i, 1);
              }
          }
          sessionStorage.setItem("Comments", JSON.stringify(comments));
      }
      /* For Comment Section <<<<<<<*/

  });