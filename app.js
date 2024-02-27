const allImages = document.getElementsByTagName('img');
for (let img of allImages){
    img.src = 'https://img.freepik.com/free-vector/kawaii-fast-food-cookie-donut-illustration_24908-60628.jpg?w=1380&t=st=1708946937~exp=1708947537~hmac=adbafeacf36401d9b403d1b4c2627ea12cca9162f31ec2cf017a6201fe3701bf' ;
    //console.log(img);
}

let sqImages = document.getElementsByClassName("square"); 
for(let sqImg of sqImages) {
    sqImg.src = 'https://img.freepik.com/free-vector/set-bakery-stickers-with-pastries-bread_23-2147789161.jpg?w=1380&t=st=1708947269~exp=1708947869~hmac=0eec9f1d10f4e507bbb3d170dbda90a676bf2592789d958c330f4237501be9b6' ;
}

// let links = document.querySelectorAll('p a')
// for (let link of links){
//     console.log(link.href);
// }

let TLinks = document.querySelectorAll( '.toctext' );
for(let tlink of TLinks){
    tlink.innerText = 'Cookies are Yummm!';
    //tlink.style.textDecorationColor='red';
    
}

let allLinks = document.querySelectorAll( 'a' );
for(let alink of allLinks){
    alink.style.color = 'rgba(255,0,0,.3)';
    alink.style.textDecorationColor='red';
}