import path from 'path';
import pkg from 'youtube-dl-exec';
import yts from 'yt-search';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const { exec } = pkg;
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let limit1 = 100;
let limit2 = 400;
let limit_a1 = 50;
let limit_a2 = 400;
const handler = async (m, { conn, command, args, text, usedPrefix }) => {
try {
  if (!text) throw `*💥 Hace falta el título o enlace del video de YouTube.*\n\n*𔔢 𝗘𝗷𝗲𝗺𝗽𝗹𝗼: _${usedPrefix + command} Goku sexo*`;
  const yt_play = await search(args.join(' '));
    if (!yt_play || !yt_play[0]?.title) return m.reply('> *[❗] Error: Audio/Video not found.*`');
  let additionalText = '';
  if (['play', 'play3', 'playdoc'].includes(command)) {
    additionalText = 'audio';
  } else if (['play2', 'play4', 'playdoc2'].includes(command)) {
    additionalText = 'vídeo';
  }
  const texto1 = `*𖹭.╭╭ִ╼࣪━ִﮩ٨ـﮩ♡̫𝗆𝖾𝗀֟፝𝗎꯭𝗆𝗂꯭𝗇𖦹ׅ♡ִ̫ﮩ٨ـﮩ━ִ╾࣪╮╮.𖹭*\n> ♡ *Título:* ${yt_play[0].title}\n*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*\n> ♡ *Publicado:* ${yt_play[0].ago}\n*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*\n> ♡ *Duración:* ${secondString(yt_play[0].duration.seconds)}\n*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*\n> ♡ *Vistas:* ${MilesNumber(yt_play[0].views)}\n*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*\n> ♡ *Autor:* ${yt_play[0].author.name}\n*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*\n> ♡ *ID:* ${yt_play[0].videoId}\n*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*\n> ♡ *Tipo:* ${yt_play[0].type}\n*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*\n> ♡ *Enlace:* ${yt_play[0].url}\n*°.⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸⎯ܴ⎯̶᳞͇ࠝ⎯⃘̶⎯̸.°*\n> ♡ *Canal:* ${yt_play[0].author.url}\n*⏝ּׅ︣︢ۛ۫۫۫۫۫۫ۜ⏝ּׅ︣︢ۛ۫۫۫۫۫۫ۜ⏝ּׅ︣︢ۛ۫۫۫۫۫۫ۜ⏝ּׅ︣︢ۛ۫۫۫۫۫۫ۜ⏝ּׅ︢︣ۛ۫۫۫۫۫۫ۜ⏝ּׅ︢︣ۛ۫۫۫۫۫۫ۜ⏝ּׅ︢︣ۛ۫۫۫۫۫۫ۜ⏝ּׅ︣︢ۛ۫۫۫۫۫۫ۜ⏝ּׅ︢︣ׄۛ۫۫۫۫۫۫ۜ⏝*\n> *[ ℹ️ ] Se está enviando el ${additionalText}, espere...`.trim();
let sentMessage = await conn.sendMessage(m.chat, {
image: { url: yt_play[0].thumbnail }, caption: texto1, contextInfo: { externalAdReply: { title: '♡  ͜ ۬︵࣪᷼⏜݊᷼𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨⏜࣪᷼︵۬ ͜ ', body: '<(✿◠‿◠)> 𝙈𝙚𝙜𝙪𝙢𝙞𝙣🔥', sourceUrl: cn, thumbnail: logo7 }}, quoted: estilo});

  if (['play', 'ytmp3doc', 'playdoc'].includes(command)) {
    try {
      const buff_aud = await downloadMedia(yt_play[0].url, 'audio');
      const fileSizeInBytes = buff_aud.byteLength;
      const fileSizeInKB = fileSizeInBytes / 1024;
      const fileSizeInMB = fileSizeInKB / 1024;
      const size = fileSizeInMB.toFixed(2);

      if (size >= limit_a2) {
        await conn.sendMessage(m.chat, { text: `*💥 Descargue su audio en: _${yt_play[0].url}_` }, { quoted: m });
        await conn.sendMessage(m.chat, { delete: sentMessage.key });
        return;
      }
      if (size >= limit_a1 && size <= limit_a2) {
        await conn.sendMessage(m.chat, { document: buff_aud, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m });
        conn.sendMessage(m.chat, {delete: sentMessage.key});
        return;
      } else {
        if (['playdoc', 'play'].includes(command)) await conn.sendMessage(m.chat, { audio: buff_aud, mimetype: 'audio/mpeg', fileName: `${yt_play[0].title}.mp3` }, { quoted: m }) 
        await conn.sendMessage(m.chat, { delete: sentMessage.key });
        return 
      }
    } catch (error) {
      conn.reply(m.chat, `*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*\nDetalles: ${error}`, m, rcanal) 
     await conn.sendMessage(m.chat, { delete: sentMessage.key });
     return
    }
  }

  if (['play2', 'ytmp4doc', 'playdoc2'].includes(command)) {
    try {
      const buff_vid = await downloadMedia(yt_play[0].url, 'video');
      const fileSizeInBytes2 = buff_vid.byteLength;
      const fileSizeInKB2 = fileSizeInBytes2 / 1024;
      const fileSizeInMB2 = fileSizeInKB2 / 1024;
      const size2 = fileSizeInMB2.toFixed(2);
      const duration = secondString(yt_play[0].duration.seconds);

      if (size2 >= limit2) {
        await conn.sendMessage(m.chat, { text: `*💥 Descargue su audio en:* _${yt_play[0].url}_` }, { quoted: m });
        await conn.sendMessage(m.chat, { delete: sentMessage.key });
        return;
      }
      if (size2 >= limit1 && size2 <= limit2) {
        await conn.sendMessage(m.chat, { document: buff_vid, mimetype: 'video/mp4', fileName: `${yt_play[0].title}.mp4`, caption: `🎥 Aquí está el video ` }, { quoted: m }) 
        await conn.sendMessage(m.chat, { delete: sentMessage.key });
        return;
      } else {
        if (['playdoc2', 'ytmp4doc'].includes(command)) return await conn.sendMessage(m.chat, { document: buff_vid, mimetype: 'video/mp4', fileName: `${yt_play[0].title}.mp4`, caption: `🎥 Aquí está el video ` }, { quoted: m })
         await conn.sendMessage(m.chat, { delete: sentMessage.key });
        await conn.sendMessage(m.chat, { video: buff_vid, mimetype: 'video/mp4', fileName: `${yt_play[0].title}.mp4`, caption: `🎥 Aquí está el video ` }, { quoted: m })
         await conn.sendMessage(m.chat, { delete: sentMessage.key });
        return;
      }
    } catch (error) {
       conn.reply(m.chat, `*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*\nDetalles: ${error}`, m, rcanal) 
      await conn.sendMessage(m.chat, { delete: sentMessage.key });
      return 
    }
  }
} catch (error) {
       conn.reply(m.chat, `*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*\nDetalles: ${error}`, m, rcanal)
        await conn.sendMessage(m.chat, { delete: sentMessage.key });
        return 
};
}
handler.command = /^(play|play2|ytmp3doc|ytmp4doc|playdoc|playdoc2)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

async function downloadMedia(url, type) {
  return new Promise((resolve, reject) => {
    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }

    const outputFilePath = path.join(tempDir, `media.${type === 'audio' ? 'mp3' : 'mp4'}`);
    const options = {
      noPlaylist: true,
      output: outputFilePath,
      format: type === 'video' ? 'bestvideo[height<=480]+bestaudio' : 'bestaudio', // Reducir calidad de video a 480p
      mergeOutputFormat: type === 'video' ? 'mp4' : undefined
    };

    if (type === 'audio') {
      options.extractAudio = true;
      options.audioFormat = 'mp3';
    }

    const process = exec(url, options, { stdio: ['ignore', 'pipe', 'pipe'] });
    const errors = [];

    process.stderr.on('data', chunk => errors.push(chunk));
    process.on('close', (code) => {
      if (code !== 0 || errors.length > 0) {
        reject(Buffer.concat(errors).toString());
      } else {
        if (type === 'video') {
          const convertedFilePath = path.join(tempDir, `converted_media.mp4`);
          ffmpeg(outputFilePath)
            .output(convertedFilePath)
            .on('end', () => {
              fs.readFile(convertedFilePath, (err, data) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(data);
                  fs.unlink(outputFilePath, (unlinkErr) => {
                    if (unlinkErr) console.error('Error deleting temp file:', unlinkErr);
                  });
                  fs.unlink(convertedFilePath, (unlinkErr) => {
                    if (unlinkErr) console.error('Error deleting converted temp file:', unlinkErr);
                  });
                }
              });
            })
            .on('error', reject)
            .run();
        } else {
          fs.readFile(outputFilePath, (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
              fs.unlink(outputFilePath, (unlinkErr) => {
                if (unlinkErr) console.error('Error deleting temp file:', unlinkErr);
              });
            }
          });
        }
      }
    });
    process.on('error', reject);
  });
}
function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}
function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? 'd ' : 'd ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? 'h ' : 'h ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? 'm ' : 'm ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? 's' : 's') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}
function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}
const getBuffer = async (url, options) => {
    options ? options : {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1,}, ...options, responseType: 'arraybuffer'});
    return res.data;
};