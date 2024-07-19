var customerName='bob';

function upperCaseCustomerName() {
customerName=customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer='not bob';
    
}
setBestCustomer();

function overwriteBestCustomer(newBestCustomer) {
    window.bestCustomer=newBestCustomer;
    
}
overwriteBestCustomer();


function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer='Assignment to constant variable';
 leastFavoriteCustomer='Assignment to constant variable.';

}
changeLeastFavoriteCustomer();



