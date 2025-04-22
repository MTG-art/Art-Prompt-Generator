const prompts = {
    anime: [
        "Draw a warrior princess with neon armor.",
        "Sketch a shy dragon boy in school uniform.",
        "Create a cat-girl baker at work.",
        "Design a ninja giving a speech at The White House.",
        "Draw Gojo as a runway model.",
        "Draw a space pirate with a robotic arm.",
        "Sketch a magical forest guardian.",
        "Design an anime character with glowing eyes.",
        "Create a character who can control time.",
        "Illustrate a superhero with a mechanical wing.",
        "Design an ancient warrior in futuristic armor.",
        "Sketch a ninja on a rainy night.",
        "Create a floating samurai in a windstorm.",
        "Draw someone with headphones on, completely lost in their own world.",
        "Draw a scientist turning into a werewolf.",
        "Design an android with emotions.",
        "Sketch a sweet demon girl in full streetwear aesthetic.",
        "Sketch an anime villian as a barista.",
        "Draw your favourite characters outfit for a war",
        "Design a magical healer with forest roots.",
        "Draw a time-traveling detective.",
        "Create a space explorer finding an alien artifact.",
        "Draw what the main character and villian would look like with each others' styling sense",
        "Sketch a dragon with cybernetic enhancements.",
        "Create a character who can turn invisible.",
        "Illustrate hero and villian doing a couples TikTok challenge.",
        "Design a sorceress summoning a storm.",
        "Draw your favourite character picking at their fingernails out of nervousness.",
        "Draw a girl with a painful look, holding back a breakdown with a fake smile."
    ],
    abstract: [
        "Create an artwork showing 'Time Melting'.",
        "Illustrate 'Dreams vs Reality' in abstract form.",
        "Design a world made of sound waves.",
        "Sketch a maze without exits.",
        "Draw emotions as colorful explosions.",
        "Create a piece representing freedom using only shapes.",
        "Illustrate the concept of chaos and order.",
        "Design a surreal, floating object in space.",
        "Sketch an abstract interpretation of silence.",
        "Create an illusion of movement using colors.",
        "Design a space with no gravity.",
        "Draw an abstract world made of mirrors.",
        "Illustrate the journey of self-discovery.",
        "Design a digital abstract cityscape.",
        "Sketch the concept of memory in abstract form.",
        "Draw a surreal landscape of a mind's eye.",
        "Create a piece that expresses infinity.",
        "Illustrate an abstract form of love.",
        "Design a concept of time using geometric shapes.",
        "Sketch the feeling of hope through colors.",
        "Create an abstract art piece inspired by music.",
        "Design an organic shape that seems to grow.",
        "Illustrate emotions through blurred lines.",
        "Draw an abstract interpretation of light.",
        "Design an abstract interpretation of energy.",
        "Sketch the blending of past, present, and future.",
        "Illustrate a dreamscape using vivid colors.",
        "Create a swirling vortex of contrasting colors.",
        "Design a disorienting space using only triangles."
    ],
    scenery: [
        "Paint a floating island above the clouds.",
        "Draw an enchanted hidden waterfall.",
        "Illustrate a cozy snowy village at night.",
        "Create a bustling alien marketplace.",
        "Sketch a sunset beach with glowing sand.",
        "Design a futuristic city on Mars.",
        "Draw a mountain range at sunrise.",
        "Illustrate a desert oasis under a golden sun.",
        "Create a magical forest with bioluminescent trees.",
        "Sketch a deep forest path in the autumn.",
        "Design a castle floating in the sky.",
        "Draw a stormy ocean with crashing waves.",
        "Illustrate a bustling medieval town square.",
        "Create a tropical island surrounded by coral reefs.",
        "Sketch a misty mountain range at dawn.",
        "Design a field of lavender under a golden sun.",
        "Draw a futuristic spaceport at night.",
        "Illustrate a serene countryside under a sunset.",
        "Create a starry sky with a glowing moon.",
        "Sketch a hidden waterfall in a jungle.",
        "Design a peaceful garden with koi fish ponds.",
        "Draw a deserted city overtaken by nature.",
        "Illustrate a bustling street in an Asian city.",
        "Create a rainy street scene at night.",
        "Sketch a vast canyon with bright sunset colors.",
        "Design an ice cave with glowing ice crystals.",
        "Draw a tranquil lake surrounded by mountains.",
        "Illustrate a cityscape with neon lights.",
        "Create an underwater world with vibrant sea life."
    ],
    fantasy: [
        "Design a palace made of crystals.",
        "Draw a phoenix soaring across galaxies.",
        "Sketch a witch's secret potion shop.",
        "Illustrate a sleeping giant in a forest.",
        "Create an underwater mermaid city.",
        "Design a flying dragon with glowing scales.",
        "Draw a magical tree with glowing fruit.",
        "Sketch a wizard casting a powerful spell.",
        "Illustrate a unicorn in a hidden meadow.",
        "Design a fairy village hidden in a tree.",
        "Create a knight on a quest for a mystical artifact.",
        "Draw a fantasy creature that is part animal, part machine.",
        "Sketch a pirate ship sailing through the stars.",
        "Design a powerful artifact with ancient runes.",
        "Illustrate a hidden kingdom under the ocean.",
        "Create a dragon slayer facing a massive beast.",
        "Sketch a magical portal in an ancient ruin.",
        "Design a battle between light and dark forces.",
        "Draw a mystical forest where time moves differently.",
        "Illustrate a knight riding a griffin.",
        "Create a fairy queen surrounded by butterflies.",
        "Design a magical sword that glows with power.",
        "Draw a fantastical battle between different realms.",
        "Sketch a magical library with endless books.",
        "Illustrate an enchanted mountain that never stops growing.",
        "Design a character who can control the weather.",
        "Draw a celestial warrior descending from the stars.",
        "Create a mystical beast guarding a hidden treasure."
    ],
    designing: [
        "Design a futuristic car with sleek, glowing lines.",
        "Create a logo for a space exploration company.",
        "Sketch a modern, minimalistic living room.",
        "Design a concept for a futuristic city park.",
        "Illustrate a sustainable eco-home in a forest.",
        "Create a fashion design inspired by cyberpunk.",
        "Design a retro video game console.",
        "Sketch a cutting-edge smartwatch interface.",
        "Create a product packaging for a tech gadget.",
        "Design a stylish, multifunctional backpack.",
        "Sketch an innovative kitchen appliance.",
        "Design a futuristic, ergonomic chair.",
        "Create a conceptual design for a smart mirror.",
        "Illustrate a fashion collection based on nature.",
        "Design a concept for a high-tech, smart house.",
        "Create a futuristic drone with sleek curves.",
        "Sketch a minimalistic city bus design.",
        "Design a modern, energy-efficient bicycle.",
        "Illustrate an eco-friendly transportation system.",
        "Create a modular, portable workspace design.",
        "Design a luxury watch with minimalist features.",
        "Sketch a futuristic mobile phone concept.",
        "Design a futuristic space suit for astronauts.",
        "Design an outfit inspired by a zodiac sign.",
        "Illustrate a luxury hotel lobby with modern furniture.",
        "Design a futuristic tech hub office space.",
        "Create a branding concept for a gaming company.",
        "Design a modern airport terminal with advanced technology.",
        "Sketch a compact, portable smart home device."
    ],
    random: [
        "Design a character who can teleport.",
        "Sketch a time-traveling scientist in the past.",
        "Create a scene with floating, glowing crystals.",
        "Design a robot that can mimic human emotions.",
        "Draw a zombie apocalypse hideout space.",
        "Create a character who can manipulate dreams.",
        "Sketch a futuristic car with wings.",
        "Design a floating city above the ocean.",
        "Illustrate a giant tree growing in the middle of a city.",
        "Create a magical creature that can shapeshift.",
        "Design a spaceship made entirely of light.",
        "Sketch a character who can communicate with animals.",
        "Illustrate a stormy night with lightning striking a mountain.",
        "Create a robot that can change its appearance.",
        "Design a magical creature that protects the forest.",
        "Sketch a scientist experimenting with new technology.",
        "Illustrate a world where humans and animals coexist.",
        "Create a futuristic city built on a giant mountain.",
        "Design a mechanical animal with intricate details.",
        "Sketch a scene where the sky is filled with floating islands.",
        "Illustrate a desert where time moves slower.",
        "Create a character with the ability to read minds.",
        "Design a futuristic hoverboard that can travel on water.",
        "Sketch a giant, ancient tree with magical properties.",
        "Illustrate a surreal world where everything is upside down.",
        "Create a floating island made of ice.",
        "Design a concept for a personal flying vehicle.",
        "Sketch a peaceful alien planet.",
        "Create a scene where plants can walk and talk."
    ]
};

const featuredPrompts = [
    "A phoenix rising from the ashes",
    "An underwater city",
    "A time traveler lost in the jungle",
    "A fantasy map of an unknown world",
    "A garden on Mars",
    "A castle floating in the sky"
];

function generatePrompt() {
    const category = document.getElementById('category').value;
    let prompt;
    if (category === 'random') {
        const allPrompts = Object.values(prompts).flat();
        prompt = allPrompts[Math.floor(Math.random() * allPrompts.length)];
    } else {
        const selectedPrompts = prompts[category];
        prompt = selectedPrompts[Math.floor(Math.random() * selectedPrompts.length)];
    }

    
    const promptBox = document.getElementById("promptBox");
    const promptText = document.getElementById("promptText");

    // Light flash background
    document.body.style.backgroundColor = "#ffe6ed";
    setTimeout(() => {
        document.body.style.backgroundColor = "#ffd1dc";
    }, 200);

    promptText.innerText = prompt;
    promptBox.classList.remove("hidden");
    
    // Confetti pastel burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function copyPrompt() {
    const text = document.getElementById("promptText").innerText;
    navigator.clipboard.writeText(text)
        .then(() => alert("Prompt copied to clipboard!"))
        .catch(err => console.error('Error copying text:', err));
}

function sharePrompt() {
    const text = document.getElementById("promptText").innerText;
    if (navigator.share) {
        navigator.share({
            title: 'Art Prompt',
            text: text,
            url: window.location.href
        });
    } else {
        alert("Sharing not supported. Copy the prompt instead!");
    }
}


// ---------- Featured Prompt of the Day ----------
function setDailyPrompt() {
    const today = new Date().toISOString().slice(0, 10); // format YYYY-MM-DD
    const savedPromptDate = localStorage.getItem('promptDate');
    const savedPrompt = localStorage.getItem('dailyPrompt');

    if (savedPromptDate === today && savedPrompt) {
        document.getElementById('dailyPrompt').textContent = savedPrompt;
    } else {
        const randomPrompt = featuredPrompts[Math.floor(Math.random() * featuredPrompts.length)];
        document.getElementById('dailyPrompt').textContent = randomPrompt;
        localStorage.setItem('dailyPrompt', randomPrompt);
        localStorage.setItem('promptDate', today);
        updateStreak();
    }
}

// ---------- Streak Feature ----------
function updateStreak() {
    const lastVisit = localStorage.getItem('lastVisit');
    const today = new Date().toISOString().slice(0, 10);
    let streak = parseInt(localStorage.getItem('streak')) || 0;

  if (lastVisit) {
        const last = new Date(lastVisit);
        const now = new Date(today);
        const diffTime = now.getTime() - last.getTime();
        const diffDays = diffTime / (1000 * 3600 * 24);

        if (diffDays === 1) {
            streak += 1;
        } else if (diffDays > 1) {
            streak = 1; // reset streak
        }
    } else {
        streak = 1; // first visit
    }


    localStorage.setItem('streak', streak);
    localStorage.setItem('lastVisit', today);

    showStreak(streak);
}

function showStreak(streak) {
    let streakSpan = document.getElementById('streakCount');
    if (streakSpan) {
        streakSpan.textContent= streak;
       
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateStreak();
    setDailyPrompt();
});




