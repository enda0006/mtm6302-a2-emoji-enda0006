const emojiCodes = [
  128512, // Grinning face
  128514, // Laughing face
  128525, // Heart eyes
  128526, // Sunglasses face
  128077, // Thumbs up
  128079, // Clapping hands
  128293, // Fire
  127881, // Party popper
  127800, // Cherry blossom
  127774, // Sun
  128049, // Cat
  128054  // Dog
];

const gallery = document.querySelector("#gallery");

function showEmojis(count = emojiCodes.length) {
  gallery.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const code = emojiCodes[i];

    const card = document.createElement("div");
    card.classList.add("emoji-card");

    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = String.fromCodePoint(code);

    const emojiCode = document.createElement("p");
    emojiCode.classList.add("emoji-code");
    emojiCode.textContent = code;

    card.append(emoji, emojiCode);
    gallery.append(card);
  }
}

showEmojis();