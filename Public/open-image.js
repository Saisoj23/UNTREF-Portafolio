let imageElement;
let imageConteiner;

document.addEventListener('DOMContentLoaded', function() {
    imageElement = document.getElementById('image-full');
    imageConteiner = document.getElementById('image-overlay').classList;
});

function OpenImageView(image)
{
    imageElement.src = image;
    imageConteiner.remove('invisible');
}

function CloseImageView()
{
    imageConteiner.add('invisible');
    imageElement.src = "";
}