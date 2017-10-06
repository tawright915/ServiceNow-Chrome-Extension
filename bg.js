function mySearch(){
    
    var search = document.getElementById("searchQ").innerText;
    alert(search);
    if (search != "")
    {
        window.location.href("https://www.google.com/search?safe=active&source=hp&q=" + search);
    }
    else{
        alert("Kinda hard for search for nothin");
    }

}
