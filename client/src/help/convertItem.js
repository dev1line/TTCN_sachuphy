import _ from "lodash";
import {convert} from "./convert"
import store from "../store"


function convertItem(list, action) {
    console.log(action)
    const products = store.getState().products.all_products;
    console.log(store.getState().products.all_products);
    // console.log(slug);
    console.log(products)
    var listItemAfter = [];
    if (products.length) {
      action.cart.products.map(el => {
        const productDefault = products.find((o) => o.default_spec.slug === el.slug);
        if (!productDefault) {
            const productOptionDetail = products.find((o) =>
            o.options.some((o) => o.slug === el.slug)
            );
            const optionBySlug = productOptionDetail.options.find(
            (o) => o.slug === el.slug
            );
            const option = _.pickBy(optionBySlug, o => o === 0 || (o && !_.isArray(o)) || (_.isArray(o) && o.length));
            const product = productOptionDetail.default_spec;
            console.log(product);
            console.log(option);
            const productOption = _.assign({}, product, option);
            console.log(productOption);
            if (productOption) {
              console.log(productOption)
                listItemAfter ={...convert(list, productOption)};
            } 
        }else if (productDefault) {
                console.log(productDefault)
                listItemAfter ={...convert(list, productDefault)};
              }
          return null;
        })
       } 
       return listItemAfter;
}

export { convertItem }