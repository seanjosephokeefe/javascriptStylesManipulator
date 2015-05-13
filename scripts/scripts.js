//scripts
var numberOfDivs = 5;

$(document).ready(function () {
    $("#Div1").show();
});

//Change Divs that contain the 
$("#DivButtonsSelectDiv input[type=button]").click(function () {
    ManipulateDivs(this.name);
});
function ManipulateDivs(which) {
    for (var i = 1; i <= numberOfDivs; i++) {
        divToTest = "Div" + i;
        if (which == divToTest)
            $("#" + divToTest).show();
        else
            $("#" + divToTest).hide();
    }
}

//Change colors (background and font) of div when pressed
$("#DivChangeColor input[type=button]").click(function () {
    var result = ReturnFields(this.name);
    ChangeDivBGColor(result[0], result[1], result[2]);
});
$("#DivChangeFont input[type=button]").click(function () {
    var result = ReturnFields(this.name);
    ChangeFont(result[0], result[1], result[2], result[3]);
});
function ChangeDivBGColor(whichColor, whichBG, whichWay) {
    if (whichWay == "JS") {
        document.getElementById("Div1").style.color = whichColor;
        document.getElementById("Div1").style.backgroundColor = whichBG;
    } else {
        $("#Div1").css("background-color", whichBG);
        $("#Div1").css("color", whichColor);
    }
}
function ReturnFields(thisString) {
    return (thisString.split(","));
}

//Image Manipulation
$("#DivChangeImage input[type=button]").click(function () {
    ManipulateImages(this.name);
});
$(".manipulatePhotoImage").click(function () {
    var whichWay = this;
    var picNumber = $("#SpnCurrentFish").html = $("#ImgToChg")[0].href.split("/")[$("#ImgToChg")[0].href.split("/").length - 1].match(/\d/g)[0];
    if (whichWay.id == "DivMinus") {
        if (picNumber == 1) {
            ManipulateImages(5);
        }
        else
            ManipulateImages(parseInt(picNumber) - 1);
    }
    else
    {
        if (picNumber == 5) {
            ManipulateImages(1);
        }
        else
            ManipulateImages(parseInt(picNumber) + 1);
    }
});
function ManipulateImages(which) {
    if (which == 6)
        which = GetRandom(1, 6);
    $("#ImgToChg").attr("src", "images/Fish" + which + ".png");
    $("#SpnCurrentFish").html = $("#ImgToChg")[0].href.split("/")[$("#ImgToChg")[0].href.split("/").length - 1];
}
function GetRandom(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
}

//Change Font in Font Manipulation
function ChangeFont(family, size, weight, whichWay) {
    if (whichWay == "JS") {
        document.getElementById("PText").style.fontSize = size;
        document.getElementById("PText").style.fontWeight = weight;
        document.getElementById("PText").style.fontFamily = family;
    } else {
        $("#PText").css("font-weight", weight);
        $("#PText").css("font-size", size);
        $("#PText").css("font-family", family);
    }
    $("#SpnFontFamily").html(family);
    $("#SpnFontSize").html(size);
    $("#SpnFontWeight").html(weight);
}
$("#BtnCngFont").click(function () {
    ChangeFont($("#DDFontFamily").val(), $("#DDFontSize").val(), $("#DDFontWeight").val(), $("#DDFontChangeMethod").val());
})

//Change Div Font Color Randomly on mouseover
var colors = new Array('black', 'red', 'blue', 'white', 'maroon', 'green', 'pink', 'purple', 'orange');
$("#DivChangeDivTextColor").on("mouseover", function () {
    $(this).css("color", colors[GetRandom(0, colors.length - 1)]);
    $("#SpnCurrentDivColor").html(this.currentStyle.color);
});

//Grow or Shrink Div
var growOrShrink = 100;
$("#BtnGrow").click(function () {
    growOrShrink = 100;
    $("#DivGrowOrShrinkMessage").html("");
})
$("#BtnShrink").click(function () {
    growOrShrink = -100;
})
$("#DivGrowOrShrink").click(function () {
    $("#DivGrowOrShrinkMessage").html("");
    if ((this.currentStyle.width == "100px") && (growOrShrink == -100)) {
        growOrShrink = 0;
        $("#DivGrowOrShrinkMessage").html("You can't shrink any more!!!");
    }
    $(this).css("width", "+=" + growOrShrink);
    $(this).css("height", "+=" + growOrShrink);
})