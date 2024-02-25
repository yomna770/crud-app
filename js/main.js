var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDesc=document.getElementById("productDesc");
var btnProduct=document.getElementById("btnProduct");
var inputs=document.getElementsByClassName("form-control");
var alertMassage=document.getElementById("alert-massage");
var alertMassageNumber=document.getElementById("alert-massage-number");
var alertMassageCateg=document.getElementById("alert-massage-cate");
var alertMassageDesc=document.getElementById("alert-massage-desc");


var allProducts="";
 
if (JSON.parse(localStorage.getItem("productList"))==null){
   var allProducts=[];
}
else{
   var allProducts=JSON.parse(localStorage.getItem("productList"))
   displayProduct();
}

btnProduct.onclick= function(){ 
   if(btnProduct.innerHTML=="add product"){
      addProduct();
      displayProduct();
clearForm();

  }
else{
updateArray()
}                     

}
 function addProduct(){
   var product={
      name:productName.value,
      price:productPrice.value,
      category:productCategory.value,
      description:productDesc.value,
   }
  
   allProducts.push(product);
   localStorage.setItem("productList",JSON.stringify(allProducts));
   localStorage.getItem("productList")
 }
function displayProduct(){
   var cartonaa=""
for(var i=0 ; i<allProducts.length ; i++){
   cartonaa+=`<tr>
   <td>${allProducts[i].name}</td>
   <td>${allProducts[i].price}</td>
   <td>${allProducts[i].category}</td>
   <td>${allProducts[i].description}</td>
   <td><button type="button" class="btn btn-danger"  
   onclick="deleteProduct(${i})">delete</button></td>

   <td><button type="button" class="btn btn-warning up-date" 
   onclick="updateProduct(${i})">update</button></td>
</tr>`
}
document.getElementById("tbody").innerHTML=cartonaa;

}
function deleteProduct(index){
allProducts.splice(index,1);
displayProduct();
localStorage.setItem("productList",JSON.stringify(allProducts));
}
function search(searchText){
   console.log(searchText)
   cartonaa="";
for(var i=0 ; i<allProducts.length ;i++){
    if(allProducts[i].name.toLowerCase().includes(searchText.toLowerCase()))
    cartonaa+=`<tr>
    <td>${allProducts[i].name}</td> 
    <td>${allProducts[i].price}</td>
    <td>${allProducts[i].category}</td>
    <td>${allProducts[i].description}</td>
    <td><button type="button" class="btn btn-danger"  onclick="deleteProduct(${i})">delete</button></td>
    <td><button type="button" class="btn btn-warning" >update</button></td>
    </tr>`
}
document.getElementById("tbody").innerHTML= cartonaa

}
function clearForm(){
    for(var i=0 ; i<inputs.length ;i++){
       inputs[i].value="";
   }

}
var currentIndex="";
function updateProduct(index){
 console.log(index)
 productName.value=allProducts[index].name;
 productPrice.value=allProducts[index].price;
 productCategory.value=allProducts[index].category;
 productDesc.value=allProducts[index].description;
 btnProduct.innerHTML="update product";
 currentIndex=index
}

function updateArray(){
var newProduct={
   name:productName.value,
   price:productPrice.value,
   category:productCategory.value,
   description:productDesc.value
}
console.log(currentIndex)
}
productName.onkeyup=function(){
   var nameRejex=/^[A-Z][a-z]{2,8}$/;
   if(nameRejex.test(productName.value))
{
productName.classList.add("is-valid")
productName.classList.remove("is-invalid")
btnProduct.removeAttribute("disabled")
alertMassage.classList.add("d-none")


}
else{
   productName.classList.add("is-invalid")
   productName.classList.remove("is-valid")
   btnProduct.disabled="true";
   
   alertMassage.classList.remove("d-none")
   alertMassage.classList.add("d-block")

}
}


productPrice.onkeyup=function(){
   var priceRejex=/^[0-9]{2,8}$/;
   if(priceRejex.test(productPrice.value))
{    btnProduct.removeAttribute("disabled")
   productPrice.classList.add("is-valid")
   productPrice.classList.remove("is-invalid")
   alertMassageNumber.removeAttribute("disabled")
alertMassageNumber.classList.add("d-none")
}
else{
   productPrice.classList.add("is-invalid")
   productPrice.classList.remove("is-valid")

   btnProduct.disabled="true";
   alertMassageNumber.classList.remove("d-none")
   alertMassageNumber.classList.add("d-block")

}
}
productCategory.onkeyup=function(){
   var categRejex=/^([a-z]|[A-Z]|\s){2,15}(\s)?[0-9]{0,4}$/;
   if(categRejex.test(productCategory.value))
{
   productCategory.classList.add("is-valid")
   productCategory.classList.remove("is-invalid")
   alertMassageCateg.removeAttribute("disabled")
   alertMassageCateg.classList.add("d-none")
   btnProduct.removeAttribute("disabled")

}
else{
   productCategory.classList.add("is-invalid")
   productCategory.classList.remove("is-valid")
   btnProduct.disabled="true";
   
   alertMassageCateg.classList.remove("d-none")
   alertMassageCateg.classList.add("d-block")

}
}

productDesc.onkeyup=function(){
   var descRejex=/^([a-z]|[A-Z]|\s){2,100}$/;
   if(descRejex.test(productDesc.value))
{
   productDesc.classList.add("is-valid")
   productDesc.classList.remove("is-invalid")
   alertMassageDesc.removeAttribute("disabled")
   alertMassageDesc.classList.add("d-none")
   btnProduct.removeAttribute("disabled")

}
else{
   productDesc.classList.add("is-invalid")
   productDesc.classList.remove("is-valid")
   btnProduct.disabled="true";
   
   alertMassageDesc.classList.remove("d-none")
   alertMassageDesc.classList.add("d-block")

}
}
