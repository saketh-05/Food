const {MongoClient,ServerApiVersion} = require('mongodb')

const uri =
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@merncluster.c3k9g.mongodb.net/?retryWrites=true&w=majority&appName=MernCluster`;

  const client = new MongoClient(uri,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
  });

async function run(){
    try{
        await client.connect()
        await client.db('admin').command({ping:1})
        console.log("connected successfully")
        
    } finally {
        await client.close()
    }
}
run().catch(console.dir)