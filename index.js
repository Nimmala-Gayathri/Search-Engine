let data = []
let resultRootElement = document.querySelector('.results')


fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>{
                data= json;
                console.log(data)
            })

document.querySelector('#searchInput').addEventListener('keyup',()=>{
    // console.log(document.querySelector('#searchInput').value);
    let searchInput =  document.querySelector('#searchInput').value;
    let resultArray =  [];
    resultArray = data.filter(product => String(product.title).includes(searchInput));
    // console.log(resultArray)
    renderProducts(resultArray)
})
function renderProducts(products){
    document.querySelectorAll('.result').forEach(prod=>{
        prod.remove()
    })
    products.forEach(product=>{
        renderSingleProduct(product);
    })
}
function renderSingleProduct(product){
    // console.log(product)
    let resultDiv = document.createElement('div')
    let resultImg = document.createElement('img');
    let resultTitle = document.createElement('h4');
    let resultPrice = document.createElement('p');
    let purchaseeButton = document.createElement('button');

    resultImg.src = product.image
    resultTitle.innerText = product.title;
    resultPrice.innerText = product.price;
    purchaseeButton.innerText = 'Purchese';

    resultDiv.appendChild(resultImg);
    resultDiv.appendChild(resultTitle);
    resultDiv.appendChild(resultPrice);
    resultDiv.appendChild(purchaseeButton);

    resultRootElement.appendChild(resultDiv);
}