"use client";

import { useState } from "react";

type Lead = {
  id: number;
  name: string;
  phone: string;
  email: string;
  product: string;
  status: string;
  notes: string;
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState("New");
  const [notes, setNotes] = useState("");

  function addLead(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !phone || !product) {
      alert("Please enter the customer's name, phone and product.");
      return;
    }

    const newLead: Lead = {
      id: Date.now(),
      name,
      phone,
      email,
      product,
      status,
      notes,
    };

    setLeads([newLead, ...leads]);

    setName("");
    setPhone("");
    setEmail("");
    setProduct("");
    setStatus("New");
    setNotes("");

    setShowForm(false);
  }

  function openWhatsApp(lead: Lead) {
    const number = lead.phone.replace(/\D/g, "");

    const message = `Hi ${lead.name}, this is your Sales Executive. I'm following up regarding your interest in ${lead.product}. How can I assist you?`;

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  const totalLeads = leads.length;
  const newLeads = leads.filter((lead) => lead.status === "New").length;
  const followUps = leads.filter(
    (lead) => lead.status === "Follow Up"
  ).length;
  const wonLeads = leads.filter(
    (lead) => lead.status === "Won"
  ).length;

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">

          <div>
            <p className="text-blue-400 font-semibold tracking-wider">
              SALESPHERE CRM
            </p>

            <h1 className="text-4xl font-bold mt-2">
              Lead Management
            </h1>

            <p className="text-gray-400 mt-2">
              Capture, manage and convert your sales prospects.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold"
          >
            + Add Lead
          </button>

        </div>


        {/* STATS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-400">
              Total Leads
            </p>

            <p className="text-3xl font-bold mt-2">
              {totalLeads}
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-400">
              New
            </p>

            <p className="text-3xl font-bold mt-2">
              {newLeads}
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-400">
              Follow Ups
            </p>

            <p className="text-3xl font-bold mt-2">
              {followUps}
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-400">
              Won
            </p>

            <p className="text-3xl font-bold mt-2">
              {wonLeads}
            </p>
          </div>

        </div>


        {/* FORM */}

        {showForm && (
          <form
            onSubmit={addLead}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 mt-8"
          >

            <h2 className="text-2xl font-bold">
              Add New Lead
            </h2>

            <p className="text-gray-400 mt-1">
              Add a customer or sales opportunity.
            </p>


            <div className="grid md:grid-cols-2 gap-5 mt-6">

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Customer name *"
                className="bg-black border border-gray-700 rounded-lg p-3"
              />

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone / WhatsApp *"
                className="bg-black border border-gray-700 rounded-lg p-3"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="bg-black border border-gray-700 rounded-lg p-3"
              />

              <input
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="Product / Service *"
                className="bg-black border border-gray-700 rounded-lg p-3"
              />

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="bg-black border border-gray-700 rounded-lg p-3"
              >
                <option>New</option>
                <option>Contacted</option>
                <option>Follow Up</option>
                <option>Won</option>
                <option>Lost</option>
              </select>

            </div>


            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Sales notes"
              className="w-full bg-black border border-gray-700 rounded-lg p-3 mt-5 min-h-28"
            />


            <div className="flex gap-3 mt-5">

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg font-semibold"
              >
                Save Lead
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg"
              >
                Cancel
              </button>

            </div>

          </form>
        )}


        {/* LEADS */}

        <section className="bg-gray-900 border border-gray-800 rounded-xl mt-8">

          <div className="p-6 border-b border-gray-800">

            <h2 className="text-2xl font-bold">
              Lead Pipeline
            </h2>

            <p className="text-gray-400 mt-1">
              Your sales opportunities
            </p>

          </div>


          {leads.length === 0 ? (

            <div className="p-10 text-center">

              <p className="text-gray-400">
                No leads yet.
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="text-blue-400 mt-3"
              >
                Create your first lead →
              </button>

            </div>

          ) : (

            <div className="divide-y divide-gray-800">

              {leads.map((lead) => (

                <div
                  key={lead.id}
                  className="p-6 flex flex-col md:flex-row md:justify-between gap-5"
                >

                  <div>

                    <h3 className="text-xl font-bold">
                      {lead.name}
                    </h3>

                    <p className="text-gray-400">
                      {lead.phone}
                    </p>

                    {lead.email && (
                      <p className="text-gray-400">
                        {lead.email}
                      </p>
                    )}

                    <p className="text-blue-400 mt-2">
                      {lead.product}
                    </p>

                    {lead.notes && (
                      <p className="text-gray-400 text-sm mt-2">
                        {lead.notes}
                      </p>
                    )}

                  </div>


                  <div className="flex items-center gap-3">

                    <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
                      {lead.status}
                    </span>

                    <button
                      onClick={() => openWhatsApp(lead)}
                      className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg"
                    >
                      WhatsApp
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

      </div>

    </main>
  );
}