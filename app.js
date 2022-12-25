const listAddButton = document.getElementsByClassName("add-shop-button");

listAddButton[0].addEventListener("click", function () {
    increaseCart();
});
listAddButton[1].addEventListener("click", function () {
    increaseCart();
});
listAddButton[2].addEventListener("click", function () {
    increaseCart();
});
listAddButton[3].addEventListener("click", function () {
    increaseCart();
});
function increaseCart() {
    var cart = document.getElementById("cart").innerText;
    var intCart = parseInt(cart);
    intCart++;
    document.getElementById("cart").innerText = intCart;
}

const loginFrom = document.getElementById("form-login");
const userNameRight = "admin";
const phoneRight = "admin";
const emailRight = "admin";

loginFrom.addEventListener("submit", function(){
    const username = document.getElementById ("username").value;
    const phone = document.getElementById 
    ("phone").value;
    const email = document.getElementById 
    ("email").value;
    checkUser(username, phone, email);
    // alert(username + " " + password + " " + phone + " " + email);
});

function checkUser(username, phone, email ) {
    if (username != userNameRight || phone != phoneRight || email != emailRight){
        alert("Login Success !!");
    } else {
        alert("Login Fail !!");
    }

}
