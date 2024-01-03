var percentageElement = document.getElementById('percentage');
var progressElement = document.getElementById('myProgress');

function updateTime() {
   var currentDate = new Date;
   const startDate = new Date(currentDate.getFullYear(), 0, 1);
   var diffInMs = currentDate - startDate;
   const totalMsInYear = 31622400000;
   const percentage = (diffInMs / totalMsInYear) * 100;

   if (percentage <= 100 ) {
    percentageElement.innerText = currentDate.getFullYear() + " está " + percentage.toFixed(7) + '%' + " completo";
    progressElement.style.width = percentage.toFixed(7) + '%';
   }
   else {
      percentageElement.innerText = (currentDate.getFullYear()) + " está 100% completo!!";
      clearInterval(intervalIdpercentage);
   }
}

var intervalIdpercentage = setInterval(updateTime, 300);
