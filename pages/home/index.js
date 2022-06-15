window.onload = () => {
  setInterval(() => {
    let emojis = ['🌴', '⭐', '💫', '🐸', '🌱', '🍃', '🍃'];

    document.title = `frogdude1123 ${emojis[Math.floor(Math.random() * (emojis.length + 1))]}`;
  }, 5000);
};

const socials = {
  links: {
    youtube: 'https://www.youtube.com/channel/UCNTeMcd7BDOuNrVf1yRGZlA',
    github: 'https://github.com/frog1123',
    spotify: 'https://open.spotify.com/user/ckenvyd4xokwet9bbir3hfxn9?si=bbda1b6ab230463b',
    steam: 'https://steamcommunity.com/id/frogdude1123'
  }
};

document.getElementById('_github').onclick = () => window.open(socials.links.github, '_blank');
document.getElementById('_youtube').onclick = () => window.open(socials.links.youtube, '_blank');
document.getElementById('_spotify').onclick = () => window.open(socials.links.spotify, '_blank');
document.getElementById('_steam').onclick = () => window.open(socials.links.steam, '_blank');
