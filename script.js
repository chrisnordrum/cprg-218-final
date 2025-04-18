// Hamburger Menu
const mainMenu = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    mainMenu.classList.toggle('active');
});

// Weather Widget
fetch("https://api.openweathermap.org/data/2.5/weather?q=cancun&appid=810758b254a02c8c3b0052a803ed2b31&units=metric")
.then (response => response.json())
.then(data => {
    console.log(data);
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherTemp.textContent = Math.round(data.main.temp) + "\u00b0C";
})

// Menu Tabs
function openTab(evt, roomName) {
    // Declare all variables
    var i;
  
    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    const tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(roomName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// Menu Tabs (2)
function openTab2(evt, roomName) {
  // Declare all variables
  var i;

  // Get all elements with class="tabcontent" and hide them
  const tabcontent2 = document.getElementsByClassName("tab-content2");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  const tablinks2 = document.getElementsByClassName("tab-links2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(roomName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen2").click();