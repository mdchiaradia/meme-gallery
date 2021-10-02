var gallery = document.querySelector('main');

var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1cb0a6e5-1973-4e85-8781-3cb74c59cdee/d259e76-c0c8ccf0-531d-47e1-844d-07b8a9b35352.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFjYjBhNmU1LTE5NzMtNGU4NS04NzgxLTNjYjc0YzU5Y2RlZVwvZDI1OWU3Ni1jMGM4Y2NmMC01MzFkLTQ3ZTEtODQ0ZC0wN2I4YTliMzUzNTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pHKYfTzEbBbB7FgepDyjcg-cfiAZ9TEACKVjptsOV_k',
  'https://64.media.tumblr.com/0bb423550a6c994246d44dc42f6b7ae2/8ded2b9a12c1de12-fa/s1280x1920/2fb4255af9e9e3db1b58d853a932447afa269a62.png',
  'https://memegenerator.net/img/instances/66064291/let-them-fight.jpg'
];

var imageUrlInput = document.querySelector('input');

var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event) {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = ''
  updateGallery();
  });

  function updateGallery() {
    gallery.innerHTML = '';
    for (var i = 0; i < imageUrls.length; i++) {
      var imageElement = document.createElement('img');
      imageElement.className = "gallery-image";
      imageElement.src = imageUrls[i];
      gallery.appendChild(imageElement);
    }
  }

  updateGallery();
