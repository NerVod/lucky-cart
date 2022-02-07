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


     // test condition 1 shopper id
     let shopperId
     if(cartTest.shopperId === criteriaTest.shopperId ) {
       shopperId = true
     } else {
       shopperId = false;
     } 
     console.log(cartTest.shopperId)
     console.log(criteriaTest.shopperId)
     console.log(shopperId)
   


      // test condition 2 : total articles
    let totalAti; 
    if(cartTest.totalAti >= criteriaTest.totalAti.gt ) {
      totalAti = true;
    } else {
       totalAti = false;
    }
    console.log(cartTest.totalAti)
    console.log(criteriaTest.totalAti.gt)
    console.log(totalAti)



    // test condition 3 product id
    let productId = false;
    for(let i=0; i<cartTest.products.length; i++){
      console.log('cartest product i :',cartTest.products[i].productId)
      console.log('criteria product id :', criteriaTest["products.productId"].in.toString())
      if(criteriaTest["products.productId"].in.toString() === cartTest.products[i].productId) {
       productId = true;
      }
    }
    console.log('product id :',productId)


    // test condition 4 dates valides
    let date = false;
    console.log('datecriteria début:',criteriaTest.date.and.gt )
    console.log('date carteTest :',cartTest.date )
    console.log('datecriteria fin:',criteriaTest.date.and.lt )
    if(criteriaTest.date.and.gt<cartTest.date &&  cartTest.date<criteriaTest.date.and.lt){
       date = true
    } 
    console.log('date : ', date)


     // vérification de toutes les conditions d'éligibilité 
    if(totalAti && shopperId && productId && date ){
      return true
    }else {
      return false;
    }
  }
}

module.exports = {
  EligibilityService,
};
