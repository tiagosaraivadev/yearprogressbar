var porcentageElement = document.getElementById('porcentage');
var progressElement = document.getElementById('myProgress');

function updateTime() {
   var currentDate = new Date;
   const startDate = new Date(currentDate.getFullYear(), 0, 1);
   var diffInMs = currentDate - startDate;
   const totalMsInYear = 31622400000;
   const porcentage = (diffInMs / totalMsInYear) * 100;

   if (porcentage < 100 ) {
    porcentageElement.innerText = currentDate.getFullYear() + " está " + porcentage.toFixed(7) + '%' + " completo";
    progressElement.style.width = porcentage.toFixed(7) + '%';
   }
   else {
      porcentageElement.innerText = (currentDate.getFullYear() -1) + " está 100% completo!!";
      clearInterval(intervalIdPorcentage);
   }
}

var intervalIdPorcentage = setInterval(updateTime, 300);