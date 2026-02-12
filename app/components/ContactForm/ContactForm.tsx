"use client";

import { useState } from "react";
import Logo from "./Logo";
import GoogleButton from "./GoogleButton";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Введите email");
      return;
    }
    if (!validateEmail(email)) {
      setError("Неверный формат email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        setError("Ошибка при отправке");
        setLoading(false);
        return;
      }

      setSuccess("Спасибо! Я свяжусь с вами.");
      setEmail("");
    } catch {
      setError("Ошибка сети");
    }

    setLoading(false);
  };

  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
      <div className="relative px-4 py-10 bg-black mx-4 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto text-white">

          <Logo />

          <form onSubmit={handleSubmit} className="mt-5">
            {/* Email */}
            <label className="font-semibold text-sm text-gray-400 pb-1 block">
              Ваш e-mail
            </label>

            <input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full bg-gray-700 text-white"
            />

            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 mt-2 rounded-lg bg-accent text-black font-semibold disabled:opacity-50 w-full"
            >
              {loading ? "Отправка..." : "Отправить заявку"}
            </button>
          </form>

          <GoogleButton />
        </div>
      </div>
    </div>
  );
}
