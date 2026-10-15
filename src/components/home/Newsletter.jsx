"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "../../lib/store";
import { db } from "../../lib/firebase";
import { useToast } from "../../context/ToastContext";

// Newsletter sign-up, shown in the footer. Emails land in the dashboard's Subscribers list.
export default function NewsletterForm() {
  const { addToast } = useToast();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return addToast("Please enter a valid email", "error");
    setStatus("loading");
    try {
      await addDoc(collection(db, "subscribers"), { email: email.trim().toLowerCase(), createdAt: serverTimestamp() });
      setEmail("");
      setStatus("done");
      addToast("You're subscribed! Look out for our latest offers.");
    } catch (err) {
      console.error("Subscribe failed:", err);
      setStatus("idle");
      addToast("Could not subscribe right now. Please try again.", "error");
    }
  }

  return (
    <form id="newsletter" onSubmit={handleSubmit} className="scroll-mt-28 space-y-2.5">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={status === "done" ? "You are subscribed!" : "Your email address"}
        aria-label="Email address"
        className="w-full rounded-lg bg-white px-4 py-3 text-[13px] text-ink outline-none placeholder:text-muted focus:ring-2 focus:ring-accent"
      />
      <button type="submit" disabled={status === "loading"} className="btn-accent w-full py-3 text-[13px]">
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
