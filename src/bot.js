import TelegramBot from 'node-telegram-bot-api';
import process from "node:process";
import * as dotenv from "dotenv";

const env = dotenv.config({path: `.env.${process.env.NODE_ENV}`}).parsed;

const token = env.TELEGRAMM_ACCESS_TOKEN;

const bot = new TelegramBot(token, {polling: true});

const url = env.TELEGRAM_APP_DOMAIN;

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Welcome to my bot', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'start', web_app: {url: `https://${url}`}}],
                ],
            }
        });
    }
});