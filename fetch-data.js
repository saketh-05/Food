// const http = require('https');

// const options = {
// 	method: 'GET',
// 	hostname: 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
// 	port: null,
// 	path: '/recipes/random?tags=vegetarian%2Cdessert&number=1',
// 	headers: {
// 		'x-rapidapi-key': '7f262cc4d2msha4ff2e26319eed7p1c045ajsnceda92bfcc37',
// 		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on('data', function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on('end', function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://dsakethsurya:saketh1234@merncluster.c3k9g.mongodb.net/?retryWrites=true&w=majority&appName=MernCluster";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

fetch('https://www.edamam.com/results/recipe/?recipe=spinach-salad-with-blood-oranges-and-pistachios-recipe-0ec48df32629a4349a37af0fed9a6835/search=salad')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response;
  })
  .then(data => {
    console.log(data);
    // You can access meal information like this:
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
