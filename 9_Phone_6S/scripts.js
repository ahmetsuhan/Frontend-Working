$(document).ready(function() {




    const lockScreen = document.querySelector("#lockScreen");
    const mainButton = document.querySelector("#mainButton");
    var mainButtonClicked = false;
    var animationSettings = {
        animationDuration: "2000"
    }

    ScreenLoad();

    EventListener();

    // all event call into below funtion
    function EventListener() {
        mainButton.addEventListener("click", ScreenControll)
    }

    var mainButtonClickCounter = 0;




    function ScreenLoad() {
        lockScreen.style.display = "none";
        $("#lockScreenBottomText").css({
            opacity: "0"
        });
    }


    function ScreenControll(e) {
        if (e.target.id == "mainButton") {
            mainButtonClicked = true;
            mainButtonClickCounter++;
            if (mainButtonClickCounter % 2 != 0) {
                ScreenWakeUp(e);
            } else {
                LockScreen(e);
                mainButtonClickCounter = 0;
            }

        }
    }

    function ScreenWakeUp(e) {
        //console.log(e.target);
        $("#lockScreen").slideDown(animationSettings.animationDuration);
        $("#lockScreenBottomText").animate(1000, function() {
            $("#lockScreenBottomText").animate({
                opacity: "1"
            }, 3000);
        });
        OpenLockedScreen(e);
    }

    function OpenLockedScreen(e) {
        if ($("#center").mousedown(OpenPasswordScreen)) {
            console.log("mouse enter");
        } else {
            console.log("mouseleave");
        }
    }

    function OpenPasswordScreen() {
        console.log("Buraya ekran açma sayfasını yap kontrol et");
    }

    function LockScreen(e) {
        document.getElementById("lockScreen").style.display = "none";
        $("#lockScreenBottomText").css({
            opacity: "0"
        });
    }
































});