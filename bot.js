const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '1babapiro2beta.aternos.me;
  port: 53782,         
  username: 'tahakadarbetasıyok',      
  version: '1.21.4'           
})

bot.on('spawn', () => {
  console.log('Bot bulut sunucuda aktif ve oyuna girdi!')
})

bot.on('end', () => {
  console.log('Bağlantı koptu, yeniden bağlanılıyor...')
  setTimeout(() => {}, 5000)
})

bot.on('error', (err) => {
  console.log('Hata:', err)
})
