// https://graphql.contentful.com/content/v1/spaces/bzoc6ticc5do/explore?access_token=mtQ05hd5YQlN5FXExPckMgWPfqOviFRzAgWQMQUKuLo

// CONTENFUL_SPACE_ID= bzoc6ticc5do
// CONTENFUL_ACCESS_KEY= mtQ05hd5YQlN5FXExPckMgWPfqOviFRzAgWQMQUKuLo

// /utils/ContentfulApi.js

export default class ContentfulApi {

   static async callContentful(query) {
     const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
 
     const fetchOptions = {
       method: "POST",
       headers: {
         Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ query }),
     };
 
     try {
       const data = await fetch(fetchUrl, fetchOptions).then((response) =>
         response.json(),
       );
       return data;
     } catch (error) {
       throw new Error("Could not fetch data from Contentful!");
     }
   }
 }


 export default class ContentfulApi {

   static async callContentful(query) { /* GQL call described above */ }
 
   static async getTotalPostsNumber() {
     // Build the query
     const query = `
       {
         blogPostCollection {
           total
         }
       }
     `;
 
     // Call out to the API
     const response = await this.callContentful(query);
     const totalPosts = response.data.blogPostCollection.total
       ? response.data.blogPostCollection.total
       : 0;
 
     return totalPosts;
   }
 }