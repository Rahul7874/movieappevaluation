// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page



let movie_box =document.getElementById("movies");

let id;

    async function getMovies(){
    try{
    const search = document.getElementById("search").value;

    const res =await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=75a1f7a4&s=${search}`);

    const data =await res.json();

    const movies =data.Search;

    return movies;
    }

    catch(err){
        console.log("err:",err);
    }
}

function appendMovies(data){
     
    movie_box.innerHTML= null;

    data.forEach(function(el){

        let box =document.createElement("div");
        
        let p =document.createElement("p")
        p.innerText=el.Title;

        let image =document.createElement("img")
        image.src=el.Poster;

        let button =document.createElement("button")
        button.innerText="book now";
        button.setAttribute=("class","book_now")
        button.addEventListener("click" ,function(){
            gotocheckout(el)
        })

        box.append(image,p,button);
        movie_box.append(box)
    });
}

function gotocheckout() {
    console.log(el)
    data.push(el)
    localStorage.setItem("data",JSON.stringify(data));

}

async function main(){
    let data =await getMovies();

    if(data === undefined)
    {
        return false;
    }
    appendMovies(data);
}

function debounce(func,delay){
    if(id)
    {
        clearTimeout(id);
    }
    id =setTimeout(function(){
        func();

    },delay);
}