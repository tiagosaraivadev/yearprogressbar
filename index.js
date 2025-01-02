var percentageElement = document.getElementById('percentage');
var progressElement = document.getElementById('myProgress');

function updateTime() {
   var currentDate = new Date;

   const startDate = new Date(currentDate.getFullYear(), 0, 1);
   var diffInMs = currentDate - startDate;
   const totalMsInYear = calculateTotalMsInYear(currentDate.getFullYear());
   const percentage = (diffInMs / totalMsInYear) * 100;
   
   if (percentage <= 100 ) {
    percentageElement.innerText = currentDate.getFullYear() + " está " + percentage.toFixed(7) + '%' + " completo";
    progressElement.style.width = percentage.toFixed(7) + '%';
   }
   else {
      percentageElement.innerText = (currentDate.getFullYear() -1) + " está 100% completo!!";
      clearInterval(intervalIdpercentage);
   }
}

function calculateTotalMsInYear(year) {
   const firstDay = new Date(year, 0, 1);
   const lastDay = new Date(year, 11, 31, 23, 59, 59, 999);

   const timeDifferenceInMilliseconds = lastDay.getTime() - firstDay.getTime();

   return timeDifferenceInMilliseconds + 1;
}

function startPercentageUpdate() {
   intervalIdpercentage = setInterval(updateTime, 300);
}

startPercentageUpdate();

document.getElementById('footerYear').textContent = new Date().getFullYear();
