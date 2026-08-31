export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="px-8 py-20 max-w-7xl mx-auto">

        <p className="text-blue-400 font-semibold tracking-widest">
          SALESPHERE™
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-5">
          The Sales Intelligence
          <br />
          Platform
        </h1>


        <p className="text-gray-400 text-xl mt-6 max-w-2xl">
          A complete sales operating system for automotive,
          property, insurance, technology and financial
          professionals.
        </p>


        <div className="flex gap-5 mt-10">

          <button className="bg-blue-600 px-8 py-4 rounded-xl font-semibold">
            Start Selling Smarter
          </button>


          <button className="border border-gray-700 px-8 py-4 rounded-xl">
            View Demo
          </button>

        </div>


      </section>



      <section className="grid md:grid-cols-4 gap-6 px-8 pb-20 max-w-7xl mx-auto">


        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-bold">
            CRM
          </h2>
          <p className="text-gray-400 mt-2">
            Manage leads and customers.
          </p>
        </div>


        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-bold">
            Catalogue
          </h2>
          <p className="text-gray-400 mt-2">
            Showcase products and services.
          </p>
        </div>


        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-bold">
            WhatsApp
          </h2>
          <p className="text-gray-400 mt-2">
            Convert enquiries faster.
          </p>
        </div>


        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-bold">
            Analytics
          </h2>
          <p className="text-gray-400 mt-2">
            Track sales performance.
          </p>
        </div>


      </section>


    </main>
  );
}