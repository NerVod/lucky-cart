class EligibilityService {
  /**
   * Compare cart data with criteria to compute eligibility.
   * If all criteria are fulfilled then the cart is eligible (return true).
   *
   * @param cart
   * @param criteria
   * @return {boolean}
   */
  isEligible(cart, criteria) {
    // TODO: compute cart eligibility here.
    const cartTest = {
      "cartId": "cart-id",
      "shopperId": "shopper-id",
      "date": "2021-10-06T18:35:42.000Z",
      "totalAti": 99.80,
      "promoCode": "voucher-42",
      "products": [
        {
          "productId": "5449000054227",
          "quantity": 20,
          "unitPriceAti": 2.5,
          "totalPriceAti": 50
        },
        {
          "productId": "3099873045369",
          "quantity": 2,
          "unitPriceAti": 24.90,
          "totalPriceAti": 49.80
        }
      ]
    };

    const criteriaTest = {
      "shopperId": "shopper-id",
      "totalAti": {
        "gt": 50
      },
      "products.productId": {
        "in": ["5449000054227"]
      },
      "date": {
        "and": {
          "gt": "2021-01-01T00:00:00.000Z",
          "lt": "2021-12-31T23:59:59.000Z"
        }
      }
    }

    let totalAti; 
    if(cartTest.totalAti >= criteriaTest.totalAti.gt ) {
      totalAti = true;
    } else {
       totalAti = false;
    }
    console.log(cartTest.totalAti)
    console.log(criteriaTest.totalAti.gt)
    console.log(totalAti)



    
    let shopperId
    if(cartTest.shopperId === criteriaTest.shopperId ) {
      shopperId = true
    } else {
      shopperId = false;
    } 
    console.log(cartTest.shopperId)
    console.log(criteriaTest.shopperId)
    console.log(shopperId)
  



    let productId
    for(let i=0; i<cartTest.products.length; i++){
      console.log('cartest product i :',cartTest.products[i].productId)
      console.log('criteria product id :', criteriaTest["products.productId"].in.toString())
      if(criteriaTest["products.productId"].in.toString() === cartTest.products[i].productId) {
        return productId = true;
      } else {
        productId = false
      }
    }
    console.log(productId)




    
    return false;
  }
}

module.exports = {
  EligibilityService,
};
