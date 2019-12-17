const Shopify = require('shopify-api-node'); //npm shopify api
const dotenv = require('dotenv').config();
const apiKeyshop = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const storeName = 'boardgamebliss-dev.myshopify.com';

const shopify = new Shopify({
    shopName: storeName,
    apiKey: apiKeyshop,
    password: apiSecret,
    autoLimit: { calls: 2, interval: 1000, bucketSize: 35 }
});

getCurrentTag = async (id) =>{
    let getTag = await
    shopify.product
        .get(id, {fields: 'tags'})
        .then((tags)=>{
           return tags
        })
        .catch((err)=>{
            return false
        })
    return getTag
}

// getCurrentTag(3847109083214)
3847109083214
module.exports = getCurrentTag