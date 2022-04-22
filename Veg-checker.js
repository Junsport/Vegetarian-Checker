document.querySelector('button').addEventListener('click', getFetch)

function getFetch (){
    let inputVal = document.querySelector('#barcode').value
    
    const url = `https://world.openfoodfacts.org/api/v0/product/${inputVal}.sjon`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#product-img').src = data.product.image_url
            document.querySelector('#product-name').innerText = data.product.product_name
        })
        .catch(err =>{
        console.log(`error ${err}`)
    })
}
