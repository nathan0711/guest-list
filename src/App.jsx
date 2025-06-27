import { useState } from "react";
import useQuery from "./useQuery";
import GuestList from "../components/GuestList";
import GuestDetails from "../components/GuestDetails";

export default function App() {
  const { data: guests, loading, error } = useQuery("/guests");
  const [selectedGuest, setSelectedGuest] = useState(null);

  const handleGuestSelect = (guest) => {
    setSelectedGuest(guest);
  };

  if (loading) return <p>Loading guests...</p>;
  if (error || !guests) return <p>{error?.message || "Error loading guests."}</p>;

  return (
    <>
      <h1>Guest List</h1>
      <GuestList guests={guests} onGuestSelect={handleGuestSelect} />
      <GuestDetails guest={selectedGuest} />
    </>
  );
}