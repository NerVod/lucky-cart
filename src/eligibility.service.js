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
    let shopperIdExists = false;
    let totalAti = false;
    let productIdExists = false;
    let dateIsValid = false;
    let cartIsValid = false;

    // test condition 1 shopper id

    if (cart.shopperId === criteria.shopperId) {
      shopperIdExists = true;
    }
    console.log(cart.shopperId);
    console.log(criteria.shopperId);
    console.log(shopperIdExists);

    // test condition 2 : total articles
    if (cart.totalAti >= criteria.totalAti.gt) {
      totalAti = true;
    }

    console.log(cart.totalAti);
    console.log(criteria.totalAti.gt);
    console.log(totalAti);

    // test condition 3 product id
    for (let i = 0; i < cart.products.length; i++) {
      console.log("cartest product i :", cart.products[i].productId);
      console.log(
        "criteria product id :",
        criteria["products.productId"].in.toString()
      );
      if (
        criteria["products.productId"].in.toString() ===
        cart.products[i].productId
      ) {
        productIdExists = true;
      }
    }
    console.log("product id :", productIdExists);

    // test condition 4 dates valides
    console.log("datecriteria début:", criteria.date.and.gt);
    console.log("date carteTest :", cart.date);
    console.log("datecriteria fin:", criteria.date.and.lt);
    if (criteria.date.and.gt < cart.date && cart.date < criteria.date.and.lt) {
      dateIsValid = true;
    }
    console.log("dateIsValid : ", dateIsValid);

    // vérification de toutes les conditions d'éligibilité
    if (totalAti && shopperIdExists && productIdExists && dateIsValid) {
      cartIsValid = true;
    }

    return cartIsValid;
  }
}

module.exports = {
  EligibilityService,
};
