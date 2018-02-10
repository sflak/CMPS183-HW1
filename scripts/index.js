$(document).ready(function() {
    $("#all").click(function() {
        
        $("input:checked").siblings().removeClass("u-invisible");
        $("input:not(:checked)").siblings().removeClass("u-invisible");
        
    });
    $("#todo").click(function() {
        
        $("input:not(:checked)").siblings().removeClass("u-invisible");
        $("input:checked").siblings().addClass("u-invisible");
    });
    $("#complete").click(function() {
        
        $("input:checked").siblings().removeClass("u-invisible");
        $("input:not(:checked)").siblings().addClass("u-invisible");
    });
});