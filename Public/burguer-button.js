let nav;

document.addEventListener('DOMContentLoaded', function() {
    const burguer = document.getElementById("burguer");
    const article = document.querySelector("article");
    nav = document.querySelector("nav").classList;

    burguer.addEventListener("click", OpenBurguer);
    article.addEventListener("mousedown", () =>
    {
        if (!nav.contains("hidden"))
        {
            nav.add("hidden");
        }
    })
});

function OpenBurguer() {
    console.log("Burguer");
    console.log(nav.contains("hidden"));
    if (nav.contains("hidden"))
    {
        nav.remove("hidden");
    }
    else
    {
        nav.add("hidden");
    }
}