// Gerador de Senhas

function generateUserAndPassword(passwordLength) {
    const adjectives = ["happy", "smart", "brave", "kind", "funny", "friendly", "creative", "diligent", "charming", "witty"];
    const nouns = ["cat", "dog", "bird", "fish", "rabbit", "explorer", "musician", "scientist", "traveler", "artist", "dreamer", "engineer", "adventurer", "gardener", "chef"];
    
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    
    const username = randomAdjective + randomNoun;
    
    let password = '';
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';

    for (let i = 0; i < passwordLength; i++) {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        password += randomChar;
    }
    
    document.getElementById('username').textContent = username;
    document.getElementById('password').textContent = password;
}

