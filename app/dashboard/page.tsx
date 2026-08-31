export default function Dashboard(){

return (

<main className="min-h-screen bg-black text-white p-10">


<h1 className="text-4xl font-bold">
SalesSphere Dashboard
</h1>


<p className="text-gray-400 mt-3">
Your sales command centre
</p>



<div className="grid md:grid-cols-4 gap-5 mt-10">


<div className="bg-gray-900 p-6 rounded-xl">
<p className="text-gray-400">
Leads
</p>

<h2 className="text-4xl font-bold">
0
</h2>

</div>



<div className="bg-gray-900 p-6 rounded-xl">
<p className="text-gray-400">
Follow Ups
</p>

<h2 className="text-4xl font-bold">
0
</h2>

</div>



<div className="bg-gray-900 p-6 rounded-xl">
<p className="text-gray-400">
Deals
</p>

<h2 className="text-4xl font-bold">
0
</h2>

</div>



<div className="bg-gray-900 p-6 rounded-xl">
<p className="text-gray-400">
Revenue
</p>

<h2 className="text-4xl font-bold">
R0
</h2>

</div>


</div>


</main>

)

}