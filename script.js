

//console.table(books)

function renderBookInfo(){
    let contentRef = document.getElementById('content');
    
    for (let i = 0;i < books.length; i++) {
        const book = books[i];
        contentRef.innerHTML += htmlTemplate(i,book);
        renderComments(i);
    }
    
}

function renderComments(i){
   
    //console.log('jetzt werden die komments angezeigt ')
    const comments = books[i].comments;
    //console.log(`Kommntare für das ${i} Buch ${comments}`);
    let input = document.getElementById(`comment-${i}`);
    input.innerHTML="";
    for(index=0;index<books[i].comments.length;index++){
        console.log(comments[index].name);
        console.log(comments[index].comment);
        
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
    let likeButton = document.getElementById('like'+i);        
    likeButton.classList.toggle('love');
    if(likeButton.classList.contains == ""){
        likeButton.classList.add('heart');
    }
}


//console.log(bookname);




//<img src="./icon/herz.png" alt="herz" class="heartPng">