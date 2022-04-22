document.querySelector('button').addEventListener('click', getFetch)

function getFetch (){
    let inputVal = document.querySelector('#barcode').value
    
    const url = `https://world.openfoodfacts.org/api/v0/product/${inputVal}.sjon`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.status === 1){
                const item = new ProductInfo(data.product)
                item.testCase()     
            }else if(data.status === 0){
                alert(`Product ${inputVal} not found. Please enter a correct barcode`)
            }
            document.querySelector('#product-img').src = data.product.image_url
            document.querySelector('#product-name').innerText = data.product.product_name 
        })
        .catch(err =>{
        console.log(`error ${err}`)
    })
}

class ProductInfo{
    constructor(productData){
        this.name = productData.product_name
        this.ingredient = productData.ingredients
        this.image = productData.image_url
    }
    testCase(){
        console.log(this.ingredient)
    }
}
