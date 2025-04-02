function htmlTemplate(i,book){
    

    return `<div class="content">
                <div class="name">
                    <h2>${book.name}</h2>
                </div>
                <div class="separator"></div>
                <div class="imgContainer" id="bookImg">
                    <img src="./img/${bookImgs[i]}" class="bookPic" alt="BookLayout">
                </div>
                <div class="separator"></div>
                <div class="bookStats" id="bookinfo">
                    <section class="one">
                        <h3>${book.price} €</h3>
                        <p id="like-counter">${book.likes}<button onclick = "likeButton(${i})" class ="${renderLikeButton(book)}" id="like${i}">
                            
                        </button></p>
                    </section>
                    <section class="two">
                        <h4>Author</h4><p>${book.author}</p>
                        <h4>Erscheinungsjahr</h4><p>${book.publishedYear}</p>
                        <h4>Genre</h4><p>${book.genre}</p>
                    </section>
                </div>
                <div class="separator"></div>
                <div class="comment-section">
                    <h3>Kommentare:</h3>    
                    <div id="comment-${i}" class="comments"></div>
                     <div id="newcomment-${i}" class="newcomment">
                        <input id="addcomment-${i}" type="text"><button onclick="newComment(${i})" class="send-comment"></button>
                    </div>
                </div>
            </div>`
}

function htmlComments(comments,index){
    return `
            <div><span class="name">${comments[index].name}</span><span class="usercoment">${comments[index].comment}</span></div>
            
    `
}