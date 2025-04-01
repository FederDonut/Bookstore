

console.table(books)
let bookname = books[0].name;
function renderBookInfo(){
    let bookInfo = document.getElementById('content');
    
    for (let i = 0;i < books.length; i++) {
       
        bookInfo.innerHTML += htmlTemplate(i);
    }
    
}


function renderLikeButton(i){
    let likeStatus = books[i].liked;
    let likecss;
    if(likeStatus == true)
        likecss= 'heart love';
    else{
        likecss='heart';
    }
    return likecss; // Ansatz war richtig --> wichtig return beachten 
    
}

function likeButton(i){
    let likeButton = document.getElementById('like'+i);        
    likeButton.classList.toggle('love');
    if(likeButton.classList.contains == ""){
        likeButton.classList.add('heart');
    }
    
}


function htmlTemplate(i,){
    

    return `<div class="content">
                <div class="name">
                    <h2>${books[i].name}</h2>
                </div>
                <div class="separator"></div>
                <div class="imgContainer" id="bookImg">
                    <img src="./img/${bookImgs[i]}" class="bookPic" alt="BookLayout">
                </div>
                <div class="separator"></div>
                <div class="bookStats" id="bookinfo">
                    <section class="one">
                        <h3>${books[i].price} €</h3>
                        <p id="like-counter">${books[i].likes}<button onclick = "likeButton(${i})" class ="${renderLikeButton(i)}" id="like${i}">
                            
                        </button></p>
                    </section>
                    <section class="two">
                        <h4>Author</h4><p>:${books[i].author}</p>
                        <h4>Erscheinungsjahr</h4><p>:${books[i].publishedYear}</p>
                        <h4>Genre</h4><p>:${books[i].genre}</p>
                    </section>
                </div>
            </div>`
}
//console.log(bookname);




//<img src="./icon/herz.png" alt="herz" class="heartPng">