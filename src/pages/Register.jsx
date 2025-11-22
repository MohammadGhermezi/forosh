import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default  function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
    e.preventDefault();
    };


    return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4"
    dir="rtl"
    >
    <motion.div
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7 }}
    className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/40"
    >
    <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">ثبت‌نام</h2>
    <p className="text-center text-gray-600 mb-6">لطفا اطلاعات خود را وارد کنید.</p>


    <form onSubmit={handleSubmit} className="space-y-6">
    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
    <label className="block mb-2 font-medium">نام و نام خانوادگی</label>
    <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full p-3 border rounded-xl focus:ring-4 focus:ring-pink-300 outline-none shadow-sm"
    placeholder="نام کامل"
    required
    />
    </motion.div>


    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
    <label className="block mb-2 font-medium">ایمیل</label>
    <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full p-3 border rounded-xl focus:ring-4 focus:ring-pink-300 outline-none shadow-sm"
    placeholder="ایمیل"
    required
    />
    </motion.div>


    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
    <label className="block mb-2 font-medium">رمز عبور</label>
    <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full p-3 border rounded-xl focus:ring-4 focus:ring-pink-300 outline-none shadow-sm"
    placeholder="رمز عبور"
    required
    />
    </motion.div>


    <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    type="submit"
    className="w-full bg-pink-500 text-white py-3 rounded-xl text-xl font-semibold hover:bg-pink-600 transition shadow-lg"
    >
    ثبت‌نام
    </motion.button>
    </form>


    <p className="text-center mt-6 text-gray-700">
    قبلا حساب ساختی؟
    <Link to="/login" className="text-pink-600 font-bold mr-1 hover:underline">ورود</Link>
    </p>
    </motion.div>
    </motion.div>
    );
}