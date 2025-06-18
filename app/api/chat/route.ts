// app/api/chat/route.ts
import {NextRequest, NextResponse} from "next/server";
import {GoogleGenerativeAI} from "@google/generative-ai"; // ganti ke SDK yang benar
import logger from "@/lib/logger";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY!);

export async function POST(req: NextRequest) {
    try {
        const {message} = await req.json();

        logger.info(`Received chat message: ${message}`);

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash", // bisa diganti ke 1.5-pro
        });

        const prompt = `
Eka Syafrino Nazhifan adalah seorang Fullstack Developer dengan latar belakang pendidikan dari SMK Negeri 1 Dukuhturi jurusan Teknik Komputer dan Jaringan. Ia memiliki pengalaman membangun aplikasi web dan mobile, serta telah menyelesaikan berbagai proyek dengan teknologi modern.

Saat ini, Eka bekerja sebagai Fullstack Developer di PT Horus Teknologi. Di sana, ia menangani sistem berbasis arsitektur microservices, mengoptimalkan performa backend dengan Redis caching dan custom JWT payload, serta memproses data skala besar menggunakan Google BigQuery dan Bigtable. Ia juga mengimplementasikan real-time data streaming ke berbagai layanan frontend dan backend menggunakan kombinasi teknologi Google Pub/Sub dan WebSocket, serta mengeksplorasi fitur analitik berbasis prompt untuk kebutuhan internal.

Eka telah mengikuti berbagai bootcamp dan pelatihan intensif di bidang MERN Stack, Golang Backend Development, Flutter, dan TypeScript. Ia menguasai berbagai teknologi dan tools, termasuk:

- **Frontend**: React.js, Next.js, Vue.js, Nuxt.js, Tailwind CSS, Bootstrap, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js, Laravel, NestJS, Golang, PHP, Spring Boot, REST API, JWT, Redis
- **Mobile**: Flutter, Dart
- **Database**: MongoDB, MySQL, PostgreSQL, BigQuery, Bigtable
- **Infrastruktur & Tools**: Docker, Google Pub/Sub, WebSocket, Git/GitHub, Midtrans
- **Konsep & Format**: OOP, JSON
- **Bahasa Pemrograman**: JavaScript, TypeScript, Dart, PHP, Go, Python, Java

Proyek-proyek yang telah dikerjakan meliputi:
- **Finance Tracker**: aplikasi pelacak keuangan berbasis Nuxt 3 dan MongoDB
- **Cyber Mobile**: aplikasi e-commerce mobile menggunakan Flutter dan GetX
- **Eblog**: platform blogging dengan Laravel dan Vue 3
- **Cyber Apple Store** & **Exa Store**: e-commerce online dengan Next.js, MongoDB, Midtrans, dll
- Berbagai landing page, UI slicing, dan sistem POS/e-commerce berbasis React, Nuxt, dan Laravel

Eka dikenal sebagai developer yang menyukai clean code, scalable architecture, dan cepat beradaptasi dengan teknologi baru. Ia terbuka untuk peluang sebagai Frontend, Backend, Mobile, maupun Fullstack Developer.

User bertanya:
"${message}"

Jawablah secara profesional, jelas, dan sesuai dengan bahasa pertanyaan. Jangan ulangi deskripsi profil jika tidak diminta langsung.
`.trim();


        const result = await model.generateContent(prompt);

        const text = result.response.text();

        return NextResponse.json({
            success: true,
            message: "Gemini responded",
            data: text,
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        // Log the error using the logger
        logger.error(`Error in chat API: ${error instanceof Error ? error.message : String(error)}`);
        if (error instanceof Error) {
            logger.error(`Error in chat API: ${error.message}`);
            return NextResponse.json(
                {
                    success: false,
                    message: error.message ?? "Terjadi kesalahan",
                    data: null,
                    timestamp: new Date().toISOString(),
                },
                {status: 500}
            );
        } else {
            return NextResponse.json(
                {
                    success: false,
                    message: "Terjadi kesalahan tidak terduga",
                    data: null,
                    timestamp: new Date().toISOString(),
                },
                {status: 500}
            );
        }
    }
}
