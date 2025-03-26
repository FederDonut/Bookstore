
console.table(books)
let bookname = books[0].name;
function renderBookInfo(){
    let bookInfo = document.getElementById('content');
   
    for (let i = 0;i < books.length; i++) {
        bookInfo.innerHTML += htmlTemplate(i);
    }

}


function htmlTemplate(i){
    return `<div class="content">
                <div class="name">
                    <h2>${books[i].name}</h2>
                </div>
                <div class="separator"></div>

            </div>`
}
//console.log(bookname);




