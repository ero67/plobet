// src/app/contact/page.tsx
"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_pbjs3dn",
        "template_xvrbu78",
        e.currentTarget,
        "V3DVpTPT2UA_ek2gI"
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Kontaktuj nás</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Kontaktné detaily</h2>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-blue-600" />
                  <span>+421 948 550 767 </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-blue-600" />
                  <span>+421 948 534 001 </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3 text-blue-600" />
                  <span>plobetsro@gmail.sk</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                  <span>Hlavná 71/28, 044 23 Jasov, Slovensko</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">
                Pošli nám správu !
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-gray-700 mb-2"
                  >
                    Vaše Meno
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name" // Important for EmailJS
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email" // Important for EmailJS
                    required
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Správa
                  </label>
                  <textarea
                    id="message"
                    name="message" // Important for EmailJS
                    required
                    rows={5}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                  {status === "sending" ? "Odosiela sa..." : "Poslať správu"}
                </button>

                {status === "success" && (
                  <p className="text-green-600 mt-2">Správa bola odoslaná !</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 mt-2">
                    Správu sa nepodarilo odoslať, skúste znovu !
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
