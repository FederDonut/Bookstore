
function renderBookInfo(){
    let contentRef = document.getElementById('content');
    for (let i = 0;i < books.length; i++) {
        const book = books[i];
        contentRef.innerHTML += htmlTemplate(i,book);
        renderComments(i);
    }
}

function renderComments(i){
    const comments = books[i].comments;
    let input = document.getElementById(`comment-${i}`);
    input.innerHTML="";
    for(index=0;index<books[i].comments.length;index++){
        input.innerHTML += htmlComments(comments,index);
    }   
}

function renderLikeButton(book){
    let likeStatus = book.liked;
    let likecss;
    if(likeStatus == true)
        likecss= 'heart love';
    else{
        likecss='heart';
    }
    return likecss; // Ansatz war richtig --> wichtig return beachten 
}

function likeButton(i){
    let heartButton = document.getElementById('like'+i);
    let counterRef = document.getElementById('like-counter'+i);
    let likeCounter = books[i].likes;
    let likeSwitch = books[i].liked;    
    heartButton.classList.toggle('love')
    likeSwitch = heartButton.classList.contains('love');
    if(likeSwitch){
        likeCounter +=1;
        books[i].likes +=1;   
    }else{
        likeCounter --;
        books[i].likes -=1;        
    }
     counterRef.innerText = likeCounter;
}  


function newComment(i){
    let newcomment = document.getElementById('addcomment-'+i);
    if(newcomment.value ==""){
        alert("Komentar ist leer");
    }else{
        books[i].comments.push({name: "Raphael",comment: newcomment.value}); 
    }
    renderComments(i);
}





