var userState;
var id;
var logout;

$(document).ready(function() {
    userState = $("#userState");

    $.ajax({
        url : "http://localhost:7070/book/memberState",
        type : "GET",
        dataType : "jsonp",
        jsonp : "callback",
        data : {
            state : "state"
        },
        success : function(result){

            if(result.ID==null){
                $("#userli").hide();
            }else{

                userState.text(result.ID);
                $("#login").hide();
            }
        },
        error : function() {
            alert("로그인 상태 에러 발생");
        }
    });


});

function out() {
    $.ajax({
        url: "http://localhost:7070/book/memberLogout",
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        data: {
            id: "id"
        },
        success: function (result) {
            $("#userli").hide();
            $("#login").show();
        },
        error: function () {
            alert("로그아웃 상태 에러 발생");
        }
    });
}