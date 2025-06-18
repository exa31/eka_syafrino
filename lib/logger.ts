import winston from 'winston';
import path from 'path';
import fs from 'fs';

const logDir = 'logs';

// Cek apakah dijalankan di Vercel
const isVercel = process.env.VERCEL === '1';

// Buat folder log hanya kalau bukan di Vercel (lokal)
if (!isVercel && !fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({level, message, timestamp}) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports: [
        // Tambahkan file logger hanya kalau lokal
        ...(!isVercel ? [
            new winston.transports.File({filename: path.join(logDir, 'error.log'), level: 'error'}),
            new winston.transports.File({filename: path.join(logDir, 'combined.log')}),
        ] : []),

        // Console logger tetap ditambahkan (baik di lokal maupun di Vercel)
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
});

export default logger;
