import * as contentful from 'contentful' 
console.log(process.env.REACT_APP_SPACE_ID, process.env.REACT_APP_CONTENT_DELIVERY_API_TOKEN)
export const client = contentful.createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENT_DELIVERY_API_TOKEN
    })

    /*space: process.env.Space_ID,
        accessToken: process.env.Content_Delivery_API_Token*/