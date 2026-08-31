import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

const statuses = ["New", "Contacted", "Follow Up", "Won", "Lost"] as const;

export default async function Analytics() {
  const supabase = createClient(await cookies());

  const { data: leads, error } = await supabase
    .from("leads")
    .select("status, created_at");

  const records = leads || [];
  const total = records.length;
  const won = records.filter((lead) => lead.status === "Won").length;
  const conversion = total
    ? `${Math.round((won / total) * 100)}%`
    : "0%";

  return (
    <main className="min-h-screen bg-black p-5 text-white md:p-10">
      <p className="text-sm uppercase tracking-widest text-blue-300">
        Analytics
      </p>

      <h1 className="mt-3 text-4xl font-bold">
        Sales performance
      </h1>

      <p className="mt-2 text-gray-400">
        Your metrics from the live lead pipeline.
      </p>

      {error ? (
        <p className="mt-10 rounded-xl bg-red-950 p-5 text-red-200">
          Unable to load analytics: {error.message}
        </p>
      ) : (
        <>
          <section className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Total leads", String(total)],
              ["Won deals", String(won)],
              ["Conversion rate", conversion],
            ].map(([label, value]) => (
              <div
                className="rounded-xl bg-gray-900 p-6"
                key={label}
              >
                <p className="text-gray-400">{label}</p>
                <strong className="mt-4 block text-3xl">
                  {value}
                </strong>
              </div>
            ))}
          </section>

          <section className="mt-6 rounded-xl bg-gray-900 p-6">
            <h2 className="text-xl font-semibold">
              Pipeline by stage
            </h2>

            <div className="mt-6 space-y-5">
              {statuses.map((status) => {
                const count = records.filter(
                  (lead) => lead.status === status
                ).length;

                const width = total
                  ? Math.round((count / total) * 100)
                  : 0;

                return (
                  <div key={status}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{status}</span>
                      <span className="text-gray-400">
                        {count}
                      </span>
                    </div>

                    <div className="h-2 rounded bg-gray-800">
                      <div
                        className="h-2 rounded bg-blue-500"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}
    </main>
  );
}