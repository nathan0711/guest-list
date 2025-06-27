import useQuery from "../src/useQuery";

export default function GuestDetails({ guest, onBack }) {
  if (!guest) {
    return (
      <section className="details">
        <p>Select a guest for more details:</p>
      </section>
    );
  }

  const { data, loading, error } = useQuery(`/guests/${guest.id}`);

  if (loading) return <p>Loading details...</p>;
  if (error || !data) return <p>Error loading details.</p>;

  return (
    <section className="details">
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Occupation: {data.job}</p>
      <p>Bio: {data.bio}</p>
      <p>Phone: {data.phone}</p>
      <button onClick={onBack}>Back</button>
    </section>
  );
}