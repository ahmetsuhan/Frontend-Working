$(document).ready(function() {

    const user = {
        password: "123456",
        firstName: "Ahmet Suhan",
        lastName: "Oka",
        phoneNumber: "55555555555"
    };


    const lockScreen = document.querySelector("#lockScreen");
    const lockScreenCenterDate = document.querySelector("#lockScreenCenterDate");
    const lockScreenBottom = document.querySelector("#lockScreenBottom");
    const passwordScreen = document.querySelector("#passwordScreen");
    const mainButton = document.querySelector("#mainButton");
    const passwordScreenCancel = document.querySelector(".passwordScreenBottomRightText");
    let = passwordScreenButtons = document.querySelectorAll(".btnPasswordNumberContainer");
    const passwordScreenButtonsValue = {
        zero: passwordScreenButtons[0],
        one: passwordScreenButtons[1],
        two: passwordScreenButtons[2],
        three: passwordScreenButtons[3],
        four: passwordScreenButtons[4],
        five: passwordScreenButtons[5],
        six: passwordScreenButtons[6],
        seven: passwordScreenButtons[7],
        eight: passwordScreenButtons[8],
        nine: passwordScreenButtons[9],
    }

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

        lockScreenCenterDate.style.display = "none"; //sonra flexe çekilecek
        lockScreenBottom.style.display = "none"; //sonra flexe çekilecek
        passwordScreen.style.display = "flex"; // sonra display none 
    }

    function LockScreen(e) {
        document.getElementById("lockScreen").style.display = "none";
        $("#lockScreenBottomText").css({
            opacity: "0"
        });
        lockScreenCenterDate.style.display = "flex"; //sonra flexe çekilecek
        lockScreenBottom.style.display = "flex"; //sonra flexe çekilecek
        passwordScreen.style.display = "none"; // sonra display none 
    }



    /*Burada kaldın password kontrolü yap */
    let passwordScreenNumberClickCounter = 0;
    const PasswordScreenNumberClick = () => {
        passwordScreenNumberClickCounter++;
        if (passwordScreenNumberClickCounter >= user.password.length) {
            passwordScreenNumberClickCounter = 0;
        }
    }






























});
