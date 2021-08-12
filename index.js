function login(){
    if($(".login").css("display")==="none"){
            $(".login").css({"display":"flex","z-index":1});
            $("#login").text("CLOSE");
            $("#signup").css({"display":"none"});
        }
    else if($(".login").css("display")==="flex"){
        $(".login").css({"display":"none"});
        $("#login").text("login");
        $("#signup").css({"display":"flex"});
    };
}
function signup(){
    if($(".signup").css("display")==="none"){
            $(".signup").css({"display":"flex"});
            $("#signup").text("CLOSE");
            $("#login").css({"display":"none"});
        }
    else if($(".signup").css("display")==="flex"){
        $(".signup").css({"display":"none"});
        $("#signup").text("signup");
        $("#login").css({"display":"flex"});
    };
}

function verify(){ 
    if($(".loem").val()==="admin"&&$(".lops").val()==="password"){
        alert("logged in successfully");
    }
}
function reg(){
    if($(".pas1").val()!==$(".pas2").val()){
        alert("please enter same password");
    }
}
var modal = document.getElementById("id01");
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $(".mview").show();
        $(".moo").text("This Is Modal Login Page And Login Button Also Hides After Clicking It");
    }
}
function loginn() {
    $(".mview").hide();
    $(".moo").text("you got modal login page click anywhere to close it");
    document.getElementById('id01').style.display='block';
}
