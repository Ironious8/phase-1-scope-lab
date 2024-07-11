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

const leastFavoriteCustomer=ted;
const newLeastFavoriteCustomer=sam;
function changeLeastFavoriteCustomer(leastFavoriteCustomer, newLeastFavoriteCustomer) {
    leastFavoriteCustomer=newLeastFavoriteCustomer;

}
changeLeastFavoriteCustomer();



