// src/components/ContactForm.tsx
"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  productName?: string; // Optional - if sending from product page
}

export default function ContactForm({ productName }: ContactFormProps) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_pbjs3dn", // Replace with your Service ID
        "template_xvrbu78", // Replace with your Template ID
        e.currentTarget,
        "V3DVpTPT2UA_ek2gI" // Replace with your Public Key
      );

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="user_name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Meno
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="user_email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="user_phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Telefón
        </label>
        <input
          type="tel"
          name="user_phone"
          id="user_phone"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Hidden input for product name if provided */}
      {productName && (
        <input type="hidden" name="product_name" value={productName} />
      )}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Správa
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
      >
        {status === "sending" ? "Odosielam..." : "Odoslať správu"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-center">
          Správa bola úspešne odoslaná!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center">
          Chyba pri odosielaní. Skúste prosím znova.
        </p>
      )}
    </form>
  );
}
