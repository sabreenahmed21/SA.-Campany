//navbar
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.height = "25px";
    document.getElementById("navbar").style.padding = "8px 0px";
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("navbar").style.padding = "15px 0px";
    document.getElementById("logo").style.height = "35px";
    document.getElementById("myBtn").style.display = "none";
  }
  if (document.body.scrollTop > 471 || document.documentElement.scrollTop > 471) {
    document.getElementById("navbar").classList.add('scrolled');
    document.getElementById("navbar").classList.remove('transparent');
  }
  else {
    document.getElementById("navbar").classList.remove('scrolled');
    document.getElementById("navbar").classList.add('transparent');
  }
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("navbar").classList.add('transparent');
});
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }
  
//scroll out 
ScrollOut({
  targets: ".skill-progress, .counter-skills"
});

//progress
const progressDiv = document.querySelector(".skill-progress"),
      progressBar = document.querySelectorAll(".progress-bar");
//counter
const counterDiv = document.querySelector(".counter-skills "),
      counterTag = document.querySelectorAll(".counter-skills h3");

window.addEventListener("scroll", function (){
  if(progressDiv.dataset.scroll  == "in") {
    progressBar.forEach(el => {
      let valueNow = el.getAttribute("aria-valuenow")
      el.style.width = valueNow + "%";
      let CounterSpan = el.parentElement.parentElement.querySelector(".progress-value span");
      let timer = this.setInterval(() => {
        if(Number(CounterSpan.textContent) < valueNow) {
          CounterSpan.textContent = Number(CounterSpan.textContent) + 1;
        }
        else {
          clearInterval(timer)
        }
      }, 500)
    })
  } else {
    progressBar.forEach(el => {
      el.style.width = 0 + "%";
      el.parentElement.parentElement.querySelector(".progress-value span").textContent = 0;
    })
  }
  //counter
  if(counterDiv.dataset.scroll  == "in") {
    counterTag.forEach(el => {
      let time = setInterval(() => {
        if(Number(el.innerText) < el.dataset.counter) {
          el.innerText = Number(el.innerText) + 1;
        }
        else {
          clearInterval(time)
        }
      }, 1000)
    })
  } else {
    counterTag.forEach(el => {
      el.innerText = 0;
    })
  }
})

//filter
const filterListItems = document.querySelectorAll(".list-group li"),
      filteredItems = document.querySelectorAll(".filtered-items a");

filterListItems.forEach(list => {
  list.addEventListener("click", () => {
    document.querySelector(".list-group li.active").classList.remove("active");
    list.classList.add("active");
    let filteredValue = list.dataset.filter;
    filteredItems.forEach(item => {
      if(item.classList.contains(filteredValue))
      {
        item.classList.remove("hidden");
        item.classList.add("active");
      }
      else 
      {
        item.classList.remove("active");
        item.classList.add ("hidden");
      }
    })
  })
});

//validation-form
let form = document.querySelector(".needs-validation");
form.addEventListener("submit", (event) => {
  if(form.checkVisibility() === true) {
    event.preventDefault();
    form.classList.add("was-validated")
  }
})

//light Gallery
lightGallery(document.getElementById('lightgallery'), {
});

//Aos js 
AOS.init();

