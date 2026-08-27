export default function Products(){

const products = [
{
name:"OMODA C5",
category:"Automotive",
price:"From R329 900",
description:"Premium compact crossover with smart technology and modern design."
},

{
name:"Luxury Property Package",
category:"Property",
price:"R2 500 000",
description:"Premium residential property listing."
},

{
name:"Vehicle Insurance",
category:"Insurance",
price:"From R499/month",
description:"Comprehensive vehicle insurance solution."
}

];


return(

<main className="min-h-screen bg-black text-white p-10">


<h1 className="text-4xl font-bold">
SalesSphere Product Catalogue
</h1>

<p className="text-gray-400 mt-2">
Manage and showcase your products or services
</p>



<div className="grid md:grid-cols-3 gap-6 mt-10">


{products.map((product,index)=>(

<div 
key={index}
className="bg-gray-900 rounded-xl p-6"
>


<div className="h-40 bg-gray-800 rounded-lg mb-5 flex items-center justify-center">

Product Image

</div>


<h2 className="text-2xl font-bold">
{product.name}
</h2>


<p className="text-blue-400 mt-2">
{product.category}
</p>


<p className="text-xl mt-3">
{product.price}
</p>


<p className="text-gray-400 mt-3">
{product.description}
</p>



<button className="bg-green-600 px-5 py-3 rounded mt-5">

WhatsApp Enquiry

</button>


</div>

))}


</div>


</main>

)

}