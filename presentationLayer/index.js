
function makeNewProduct() {
   document.getElementsByClassName('makeProduct')[0].style.display ='block';
   document.getElementsByClassName('menu')[0].style.display ='none';
}

function seachProduct(){
    document.getElementsByClassName('viewProduct')[0].style.display ='block';
   document.getElementsByClassName('menu')[0].style.display ='none';
}

function updateProduct() {
   document.getElementsByClassName('updateProduct')[0].style.display ='block';
   document.getElementsByClassName('menu')[0].style.display ='none';
}

function deleteCredit() {
    document.getElementsByClassName('deleteProduct')[0].style.display ='block';
   document.getElementsByClassName('menu')[0].style.display ='none';
}

function deleteCredit2() {
    console.log("kjhgkj")
    let xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.open('POST', '/deleteProduct')
    xhr.send()
    xhr.onprogress = function(event) {
        console.log(event.target.response)
      
     } 
}

function searchInServer2() {
   document.getElementsByClassName('searchSer2')[0].style.display ='block';
   document.getElementsByClassName('menu')[0].style.display ='none';
}



function detailServ3(){
    document.getElementsByClassName('detailServ3')[0].style.display ='block';
   document.getElementsByClassName('menu')[0].style.display ='none';
}
