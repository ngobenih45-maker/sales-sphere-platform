export default function Profile(){

return(

<main className="min-h-screen bg-black text-white p-10">

<h1 className="text-4xl font-bold">
SalesSphere Profile
</h1>

<p className="text-gray-400 mt-2">
Customize your professional sales identity
</p>


<div className="bg-gray-900 rounded-xl p-8 mt-10 max-w-2xl">


<label className="block mb-2">
Full Name
</label>

<input
className="w-full bg-black border border-gray-700 p-3 rounded mb-5"
placeholder="Enter your name"
/>



<label className="block mb-2">
Company
</label>

<input
className="w-full bg-black border border-gray-700 p-3 rounded mb-5"
placeholder="Company name"
/>



<label className="block mb-2">
Industry
</label>

<select
className="w-full bg-black border border-gray-700 p-3 rounded mb-5"
>

<option>
Automotive
</option>

<option>
Property
</option>

<option>
Insurance
</option>

<option>
Technology
</option>

<option>
Financial Services
</option>

</select>



<label className="block mb-2">
Brand / Products
</label>

<input
className="w-full bg-black border border-gray-700 p-3 rounded mb-5"
placeholder="Example: OMODA C5, C7, J7"
/>



<label className="block mb-2">
WhatsApp Number
</label>

<input
className="w-full bg-black border border-gray-700 p-3 rounded mb-5"
placeholder="Your WhatsApp number"
/>



<label className="block mb-2">
Location
</label>

<input
className="w-full bg-black border border-gray-700 p-3 rounded mb-5"
placeholder="City"
/>



<button
className="bg-blue-600 px-6 py-3 rounded-lg"
>
Save Profile
</button>


</div>

</main>

)

}