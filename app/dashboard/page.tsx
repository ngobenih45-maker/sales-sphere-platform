export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold">
        SalesSphere Dashboard
      </h1>

      <p className="text-gray-400 mt-2">
        Welcome back, Sales Executive 👋
      </p>


      <section className="grid md:grid-cols-4 gap-5 mt-10">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-gray-400">
            New Leads
          </h2>
          <p className="text-4xl font-bold">
            24
          </p>
        </div>


        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-gray-400">
            Follow Ups
          </h2>
          <p className="text-4xl font-bold">
            12
          </p>
        </div>


        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-gray-400">
            Deals
          </h2>
          <p className="text-4xl font-bold">
            8
          </p>
        </div>


        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-gray-400">
            Revenue
          </h2>
          <p className="text-4xl font-bold">
            R850k
          </p>
        </div>

      </section>


      <section className="mt-10 bg-gray-900 p-6 rounded-xl">

        <h2 className="text-2xl font-bold">
          Recent Leads
        </h2>


        <div className="mt-5 space-y-4">

          <div className="border-b border-gray-700 pb-3">
            <strong>John Smith</strong>
            <p className="text-gray-400">
              Interested in OMODA C5
            </p>
          </div>


          <div className="border-b border-gray-700 pb-3">
            <strong>Sarah Jacobs</strong>
            <p className="text-gray-400">
              Finance enquiry
            </p>
          </div>

        </div>

      </section>


      <section className="mt-10">

        <h2 className="text-2xl font-bold">
          Quick Actions
        </h2>

        <div className="flex gap-4 mt-5 flex-wrap">

          <button className="bg-blue-600 px-5 py-3 rounded">
            Add Lead
          </button>

          <button className="bg-green-600 px-5 py-3 rounded">
            WhatsApp
          </button>

          <button className="bg-purple-600 px-5 py-3 rounded">
            Analytics
          </button>

        </div>

      </section>


    </main>
  );
}