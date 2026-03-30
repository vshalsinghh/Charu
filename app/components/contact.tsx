"use client";
import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert("Please fill all required fields");
            return;
        }

        const subject = "Contact Form";
        const body = `Name: ${name}
                    Mobile: ${mobile}
                    Email: ${email}
                    Message: ${message}`;

        window.location.href = `mailto:someone@example.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="flex justify-center items-center w-full p-6">
            <div className="rounded-lg max-w-2xl w-full p-8">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
                    Contact Us
                </h1>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        />

                        <input
                            type="text"
                            placeholder="Mobile No."
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                    />

                    <textarea
                        rows={5}
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition resize-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#151515] hover:bg-blue-400 text-white font-semibold py-3 rounded-full transition-colors max-w-2xs block m-auto cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;