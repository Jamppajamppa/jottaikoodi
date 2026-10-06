function searchPosts() {

    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let items =
        document.querySelectorAll(".post");

    items.forEach(post => {

        let text =
            post.innerText.toLowerCase();

        if(text.includes(input)){
            post.style.display="block";
        } else {
            post.style.display="none";
        }
    });
}