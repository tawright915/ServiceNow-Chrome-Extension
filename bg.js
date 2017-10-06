var search = document.getElementById("searchQuery").innerText;
if (search != "")
{
    window.location.href("https://www.google.com/search?safe=active&source=hp&q=" + search);
}
else{
    alert("Kinda hard for search for nothin");
}