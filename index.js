// // Dashboard Main Tabs

// function openCity(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     var dashboardNavText = document.getElementById('dashboardNavText');
//     var strategyNavText  = document.getElementById('strategyNavText');
//     var tdAmeritradeNavText = document.getElementById('tdAmeritradeNavText');

//     cityName === "Dashboard" ? dashboardNavText.style.display = 'block' : dashboardNavText.style.display = 'none';
//     cityName === "Strategy" ? strategyNavText.style.display = 'block' : strategyNavText.style.display = 'none';
//     cityName === "TD_Ameritrade" ? tdAmeritradeNavText.style.display = 'block' : tdAmeritradeNavText.style.display = 'none';

//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace("active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }
// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();


// // Inner Dashboard Tabs

// function managedParameters(evt, params) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent1");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("paramlinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace("active", "");
//     }
//     document.getElementById(params).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen1").click();


// Add active class to the current button (highlight it)
var header = document.getElementById("tabs");
var btns = header.getElementsByClassName("tablinks");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


(function() {
    var nav = document.getElementById('tabs'),
        anchor = nav.getElementsByTagName('a'),
        current = window.location.pathname.split('/')[1];
        for (var i = 0; i < anchor.length; i++) {
        if(anchor[i].href == current) {
            anchor[i].className = "active";
        }
    }
})();





// Console Closed
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}