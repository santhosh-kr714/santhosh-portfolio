"use client"

import { motion } from "framer-motion"

const certificates = [

{
title: "AWS Machine Learning Foundations",
issuer: "AWS Academy",
link: "/certificates/aws-ml.pdf"
},

{
title: "ChatGPT for Data Analytics",
issuer: "Analytics Training",
link: "/certificates/chatgpt-data.pdf"
},

{
title: "Graph Machine Learning",
issuer: "Professional Training",
link: "/certificates/graph-ml.pdf"
},

{
title: "Python Libraries for Data Science",
issuer: "Data Science Certification",
link: "/certificates/python-ds.pdf"
},

{
title: "Artificial Intelligence for All",
issuer: "AI Program",
link: "/certificates/ai-for-all.pdf"
},



]

export default function Certificates() {
return (

<section id="certificates" className="min-h-screen text-white py-24 px-10">

<h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
🏆 Certificates
</h2>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

{certificates.map((cert,index)=>(
<motion.div
key={index}
whileHover={{scale:1.08}}
className="bg-[#0f172a]/60 backdrop-blur-lg border border-cyan-400 p-8 rounded-xl shadow-lg hover:shadow-cyan-400/40 transition"
>

<h3 className="text-xl font-bold text-cyan-300 mb-3">
📜 {cert.title}
</h3>

<p className="text-gray-300 mb-4">
{cert.issuer}
</p>

<a
href={cert.link}
target="_blank"
className="text-cyan-400 hover:underline"
>

View Certificate 🔗

</a>

</motion.div>
))}

</div>

</section>

)
}