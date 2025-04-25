const prompts = {
    anime: [
        "Draw a warrior princess in armor.",
        "Sketch a shy dragon boy in school uniform.",
        "Create a cat-girl baker at work.",
        "Design a ninja giving a speech at The White House.",
        "Draw Gojo as a runway model.",
        "Sketch any character of your choice as a runway model.",
        "Sketch a magical forest guardian.",
        "Design an anime character with glowing eyes.",
        "Create an anime character like one you've never seen before.",
        "Illustrate a superhero with a mechanical wing.",
        "Design an ancient warrior in futuristic armor.",
        "Sketch a ninja on a rainy night.",
        "Create a floating samurai in a windstorm.",
        "Draw someone with headphones on, completely lost in their own world.",
        "Draw your anime alter ego's bedroom.",
        "Create your own anime opening scene.",
        "Sketch a sweet demon girl in full streetwear aesthetic.",
        "Sketch an anime villian as a barista.",
        "Draw your favourite characters outfit for a war",
        "Design a magical healer with forest roots.",
        "Draw what an anime character would look like after a glow up.",
        "Mash up two anime characters to create a fusion charcter.",
        "Draw what the main character and villian would look like with each others styling sense.",
        "Sketch a dragon with cybernetic enhancements.",
        "Create a character who can turn invisible.",
        "Illustrate hero and villian doing a couples TikTok challenge.",
        "Draw an epic anime crossover between polar opposite characters.",
        "Draw your favourite character picking at their fingernails out of nervousness.",
        "Draw a girl with a painful look, holding back a breakdown with a fake smile."
    ],
    abstract: [
        "Create an visual showing 'Time Melting'.",
        "Draw the visual illustration of a scene from your memory you vividly remember.",
        "Design a world made of sound waves.",
        "Paint an illustration of a loophole.",
        "Draw emotions as colorful explosions.",
        "Create a piece representing the vibe of your favourite song.",
        "Illustrate the concept of calm and chaos existing in harmony.",
        "Blend two opposite emotions in one abstract painting..",
        "Sketch an abstract interpretation of silence.",
        "Draw the visuals from a dream you remember.",
        "Design a space with no gravity.",
        "Draw an abstract world made of mirrors.",
        "Draw the merging of two opposite forces like fire and water.",
        "Draw a city in motion, viewed through the blur of rain on a window.",
        "Draw childhood nostalgia.",
        "PAaint a piece using only 3 brushstrokes.",
        "Create a piece that expresses infinity.",
        "Illustrate an abstract form of love.",
        "Sketch what it looks like when thoughts are tangled according to you.",
        "Sketch the feeling of hope through colors.",
        "Create an abstract art piece inspired by music.",
        "Illustrate the feeling of overwhelming rush of information, like notifications popping up all at once.",
        "Draw peace in solitude.",
        "Draw an abstract interpretation of light.",
        "Let your hands move without thinking- then turn that into a finished abstract piece.",
        "Sketch the blending of past, present, and future.",
        "Paint the vibe of any zodiac sign.",
        "Design the inside of the human brain in your style.",
        "Design a disorienting space using only triangles."
    ],
    scenery: [
        "Show a treehouse in the woods.",
        "Draw a scene from a busy Middle Eastern market.",
        "Illustrate a cozy snowy village at night.",
        "Create a bustling alien marketplace.",
        "Sketch a sunset scene at a beach.",
        "Design a city on Mars.",
        "Draw a foggy morning in the mountains.",
        "Illustrate a desert under a golden sun.",
        "Paint a scene from a mountain peak at sunrise after a full night trek.",
        "Show the changing colors of autumn in a forest trail.",
        "Show a mountain reflected perfectly in a still lake.",
        "Draw a stormy ocean with crashing waves.",
        "Draw a scene from a post apocalyptic world.",
        "Create a scene of a tropical island.",
        "Sketch a misty mountain range at dawn.",
        "Design a field of lavender under a golden sun.",
        "Draw a spaceport at night.",
        "Illustrate a serene countryside under a sunset.",
        "Create a starry sky with a crescent moon.",
        "Sketch a waterfall in a jungle.",
        "Design a peaceful garden with fish ponds.",
        "Draw a deserted city overtaken by nature.",
        "Illustrate a bustling street in an Asian city.",
        "Create a rainy street scene at night.",
        "Sketch a vast canyon with bright sunset colors.",
        "Design an ice cave with glowing ice crystals.",
        "Paint a huge picturesque field full of flowers.",
        "Paint a city skyline at golden hour.",
        "Create an underwater world with vibrant sea life."
    ],
    fantasy: [
        "Create a map of a fantasy land with mysterious landmarks.",
        "Draw a phoenix soaring across galaxies.",
        "Sketch a witch's secret potion shop.",
        "Draw a place that doesn't exist in your style.",
        "Create an underwater mermaid city.",
        "Design a flying dragon with scales.",
        "Draw a magical tree with a unique fruit.",
        "Sketch a wizard casting a powerful spell.",
        "Illustrate a unicorn in a hidden meadow.",
        "Draw a secet pathway to an unknown land.",
        "Design the outfit of an underwater mermaid queen.",
        "Depict a fantasy sky with more than one moon or sun.",
        "Sketch a pirate ship sailing through the stars.",
        "Design a powerful artifact with ancient runes.",
        "Illustrate a hidden kingdom under the ocean.",
        "Create a dragon slayer facing a massive beast.",
        "Create a new Disney princess with a unique quality.",
        "Design a battle between light and dark forces.",
        "Create a mythical credature combining 3 animals.",
        "Draw a cursed artifact and its aura.",
        "Create a fairy queen surrounded by butterflies.",
        "Draw what an enchanted object would look like based on its book accurate description.",
        "Illustrate a scene of coronation ceremony.",
        "Sketch a magical library with endless books.",
        "Illustrate an enchanted mountain that never stops growing.",
        "Design a character who can control the weather.",
        "Draw a celestial warrior descending from the stars.",
        "Create a mystical beast guarding a hidden treasure."
    ],
    designing: [
        "Design a flying car model.",
        "Create a logo for a coffee brand.",
        "Sketch a modern, minimalistic living room.",
        "Re-design a book/movie cover in your style.",
        "Re-design a company logo in your style.",
        "Create a fashion design inspired by natural elements.",
        "Design anything of your choice using only shapes.",
        "Create a journal cover for someone healing their inner child.",
        "Design an album cover for a lo-fi artist.",
        "Design a stylish, multifunctional backpack.",
        "Sketch an innovative kitchen appliance.",
        "Draw the most comfortable chair ever.",
        "Create a conceptual design for a smart mirror.",
        "Illustrate a fashion collection based on nature.",
        "Draw a trendy tshirt design.",
        "Sketch a maze without exits.",
        "Design a sticker sheet inspired by moods.",
        "Design the Eiffiel Tower in your style.",
        "Design a dress for a royal ball.",
        "Create a modular, portable workspace design.",
        "Sketch the layout for your dream home.",
        "Sketch a futuristic mobile phone concept.",
        "Design a crown for a prince who's the future king.",
        "Design an outfit inspired by a zodiac sign.",
        "Illustrate a luxury hotel lobby with modern furniture.",
        "Design a futuristic tech hub office space.",
        "Sketch the design of a tote bag inspired from a fruit.",
        "Design a bookmark for your favourite book in the theme of that book.", 
        "Sketch a compact, portable smart home device."
    ],
    random: [
        "Design your dream room.",
        "Sketch a time-traveling scientist in the past.",
        "Draw your mood as a weather scene.",
        "Design an emoji that should be added to the official list of emojis.",
        "Draw a zombie apocalypse hideout space.",
        "Create a character who can manipulate dreams.",
        "Paint a scene inspired by the ocean.",
        "Design a floating city above the ocean.",
        "Illustrate a giant tree growing in the middle of a city.",
        "Create a magical creature that can shapeshift.",
        "Paint a famous painting but in a complete different style (cubism, pop art, impressionism, surrealism).",
        "Sketch a Disney princess in your style.",
        "Illustrate a stormy night with lightning striking a mountain.",
        "What's in your bag right now? Draw it in your style.",
        "If today was a color, what would it be? Create something with that color.",
        "What's your favourite time of the day? Capture it's vibe.",
        "Draw your favourite snack as a cute character.",
        "Create an outfit in retro style.",
        "Draw a doodle with only disoriented cirles and lines.",
        "Sketch a scene where the sky is filled with floating flowers.",
        "Illustrate a desert where time moves slower.",
        "Draw a stray pet abandoned on the street in a box.",
        "Design a hoverboard that can travel on water.",
        "Sketch a giant, ancient tree with magical properties.",
        "Draw a world where everything is upside down.",
        "Create a floating island with elements unknown to mankind.",
        "Design a concept for a personal flying vehicle.",
        "Invent a new map or a landscape.",
        "Create a scene where plants can walk and talk."
    ]
};

const featuredPrompts = [
    "Paint a color explosion for an emotion.",
    "An underwater civilisation.",
    "Make a piece using only 5 brush strokes.",
    "Create a design for a badge or pin for introverts at a party.",
    "Create a map of a fantasy land with unique landmarks.",
    "Paint a sunset scene at a beach."
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
    const today = new 
    Date().toISOString().slice(0, 10);
    let streak = parseInt(localStorage.getItem('streak')) || 0;

  if (lastVisit) {
        const lastDate = new Date(lastVisit);
        const todayDate = new Date(today);
        const diffTime = todayDate.getTime() - lastDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

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
        streakSpan.textContent = streak;
       
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateStreak();
    setDailyPrompt();
});




