
/* =========================================
   A LITTLE GLIMPSE TOWARDS...
   Interactive Romantic Story
========================================= */

const openingScreen = document.getElementById("opening-screen");
const menuScreen = document.getElementById("menu-screen");
const chapterScreen = document.getElementById("chapter-screen");
const letterScreen = document.getElementById("letter-screen");

const enterHeart = document.getElementById("enter-heart");
const chapterButtons = document.querySelectorAll(".chapter-heart");

const chapterNumber = document.getElementById("chapter-number");
const chapterTitle = document.getElementById("chapter-title");
const chapterMessage = document.getElementById("chapter-message");
const chapterDecoration = document.getElementById("chapter-decoration");

const backButton = document.getElementById("back-button");
const letterBackButton = document.getElementById("letter-back-button");

const envelope = document.getElementById("envelope");
const openLetterButton = document.getElementById("open-letter");
const finalLetter = document.getElementById("final-letter");
const finalLetterMessage = document.getElementById("final-letter-message");

const particles = document.getElementById("particles");

let visitedChapters = new Set();
let typingTimer = null;
let currentMessage = "";
let currentPosition = 0;

/* =========================================
   CHAPTER CONTENT
========================================= */

const chapters = [

  {
    title: "A Little World, Just for You",
    decoration: "♡",
    message: `Hey, Shajie Baa...

I don't really know how to begin this.

Maybe because there are so many things I have kept inside my heart, and finding the right words has never been easy.

This little website is something I made especially for you.

It isn't just a birthday surprise. It is a small collection of memories, feelings, moments, and words that I never got to express completely.

You don't have to read everything at once. Take your time.

I just wanted to give you a little glimpse of a story that once meant the world to me.

So, here we go... ❤️`
  },

  {
    title: "July 30 – Your Special Day",
    decoration: "🎂",
    message: `July 30...

A day that will always have a special place in my heart.

Your birthday.

I know this wish is late, but some wishes deserve to be said even if they arrive after the day has passed.

I hope this new year of your life brings you countless reasons to smile.

May you achieve everything you have been working towards. May your efforts bring you success, and may life give you the happiness you truly deserve.

I hope you stay healthy, peaceful, and surrounded by people who genuinely care about you.

Happy Belated Birthday, Shajie Baa.

Once again, from the bottom of my heart. ❤️`
  },

  {
    title: "Why You Will Always Be Special",
    decoration: "💗",
    message: `Do you know what made you special to me?

It wasn't just the way you spoke to me or the time you spent with me.

It was the little things.

You listened to me. You cared about my feelings. You rarely said no when I needed you. Even when things were difficult, you had your own way of making me feel important.

You were someone I could share my thoughts with without thinking twice.

I still remember how you used to spend time with me, how you listened to my little stories, and how even ordinary conversations became special.

Maybe those moments seemed simple to you.

But to me, they became memories I still carry.`
  },

  {
    title: "From Friends to My Favourite Person",
    decoration: "🌹",
    message: `We didn't begin as strangers who suddenly fell in love.

We began as friends.

Slowly, conversations became longer. Familiarity became comfort. And somewhere along the way, you became someone I never wanted to lose.

Our friendship slowly turned into something deeper.

More than four years of knowing you gave me so many little memories.

We had conversations, laughter, misunderstandings, happiness, and difficult moments too.

But through all of it, I genuinely valued what we shared.

You were not just someone I loved.

You were also my friend.

And sometimes, I think that is what makes those memories even more special.`
  },

  {
    title: "A Bond I Never Wanted to Lose",
    decoration: "💞",
    message: `I never entered this relationship thinking that one day we would become strangers.

I imagined us growing together, understanding each other, and standing beside each other through different stages of life.

I wanted to stay even when things became difficult.

I tried to hold on because what we shared meant so much to me.

I never wanted our story to end with silence and distance.

I wanted conversations, understanding, and another chance to make things right.

But sometimes, even when two people have memories together, life takes them in different directions.

And that is something I had to slowly learn to accept.`
  },

  {
    title: "When Everything Started Changing",
    decoration: "🥀",
    message: `Somewhere along the way, things began to change.

The trust we once shared became difficult to hold on to.

You started believing things that other people said about me, and I felt hurt because I wished you had trusted me enough to hear my side.

I kept wondering why the words of others became more important than the person you had known for so long.

I am not saying either of us was perfect.

We both had our moments, our mistakes, and our misunderstandings.

But I wish things had been handled differently.

I wish we had spoken to each other instead of allowing distance and doubts to grow between us.

That change hurt me more than I could ever properly explain.`
  },

  {
    title: "I Tried, More Than You Know",
    decoration: "❤️‍🩹",
    message: `I want you to know that I genuinely tried.

There were so many times when I wanted to give up, but I stayed because I still believed we could understand each other.

I tried to explain. I tried to hold on. I tried to make things better.

I never wanted to walk away from someone who had once meant so much to me.

But eventually, I reached a point where I didn't know what else I could do.

Sometimes, loving someone also means accepting that you cannot force them to understand your heart.

I didn't stop trying because my feelings disappeared.

I stepped back because I was tired of hurting and didn't know how to fix things anymore.`
  },

  {
    title: "Two Years of Giving You Time",
    decoration: "⏳",
    message: `There is something I want you to understand about my silence.

I wanted you to focus on your studies, clear your exams, get a good job, and build the future you had always dreamed of.

I knew you had responsibilities and goals.

I didn't want my messages or our arguments to become another distraction in your life.

So I gave you space.

I stopped texting, even when I wanted to talk.

I waited, thinking that maybe time would make things easier and that you would get the opportunity to focus on yourself.

Those two years were not easy for me.

But I wanted you to move forward without feeling that you had to carry my worries too.

My silence was never proof that I had stopped caring.`
  },

  {
    title: "Things You Never Knew",
    decoration: "📷",
    message: `There are little things you probably never knew.

Sometimes, I secretly visited your Instagram profile and even looked through your relatives' profiles.

I especially remember looking at your mother's Facebook profile and seeing your childhood pictures.

Seeing those little pictures made me smile.

I would look at your childhood face and wonder how that little boy had grown into someone who became so special in my life.

And whenever I dressed beautifully or wore a saree, a small thought would cross my mind.

I wish you could see me like this.

I never said these things to you.

They were just little moments I kept to myself.

Maybe you will never know how many ordinary moments reminded me of you.`
  },

  {
    title: "Ramzan – The Words I Couldn't Say",
    decoration: "🌙",
    message: `I remember Ramzan.

Even during those beautiful days, somewhere in my heart, I wanted to talk to you.

I thought about sending you a message. I wanted to ask how you were doing and whether everything was going well in your life.

I even gathered the courage to message Anisha. I wished her on Eid, secretly hoping that maybe somehow I could feel a little closer to you or know how you were doing.

But there was no reply.

I don't know whether my message was noticed or simply left unanswered. I just quietly accepted it and stepped back.

There were so many moments when I wanted to reach out to you directly, but I kept stopping myself.

It wasn't because I didn't miss you. It was because I didn't know whether I still had a place in your life.

Sometimes, the heart wants to speak, but the mind keeps reminding it of everything that happened.

I tried finding even the smallest way to reach you, but eventually, I learned to keep those feelings to myself.`
  },

  {
    title: "All the Messages I Never Sent",
    decoration: "💌",
    message: `There were so many moments when I opened our chat just to look at it.

I wanted to type something, anything, just to start a conversation with you again.

Your birthday came, and I thought about wishing you. I wondered whether you would be happy to receive my message or whether it would disturb your peace.

And then there was June 5 — our anniversary.

I remembered that date. I kept thinking about how we once had a special day of our own, a day that meant so much to me.

This time, we didn't celebrate it together. There was no wish, no conversation, no little moment to make the day feel special. I felt really sad knowing that a day we once shared had quietly passed like any other day.

Eventually, I deleted our chats and pictures. I thought removing them from my phone would make it easier to forget everything.

But I was wrong.

I could delete pictures, conversations, and saved memories, but I couldn't delete the feelings attached to them.

Some nights, I missed our old conversations more than I could explain.

I deleted our chats from my phone, but I couldn't delete the place you occupied in my heart.`
  },

  {
    title: "I Never Stopped Caring",
    decoration: "❤️",
    message: `Maybe we don't talk anymore. Maybe our lives have taken different paths. But please don't think that my silence means I stopped loving you or caring about you.

I stepped away because I wanted you to focus on your studies, achieve your dreams, get a good job, and build the future you always wanted.

I genuinely believed you would do great things even without my presence.

But there was something I never expected.

I thought I could handle your absence. I thought I would be okay knowing that you were moving forward with your life.

But whenever that thought crossed my mind, my heart felt unbearably heavy.

I would wonder how you could continue your life without me while I was still finding it difficult to imagine mine without you.

Sometimes, I cried because I felt like my absence didn't matter anymore. I don't know whether you ever missed me the way I missed you.

But I know one thing: even when I wasn't beside you, I never stopped wishing good things for you.

I still remember our friendship, our love, our conversations, and every little moment that made these four years special.

My absence from your life never meant your absence from my heart.

I may have stopped texting you, but I never stopped caring about you.`
  },

  {
    title: "I Forgive, and I Let Life Be",
    decoration: "🕊️",
    message: `I won't pretend that everything was easy to forget.

Some things hurt deeply. Some memories still make me emotional.

But I don't want to carry anger forever.

I don't want the difficult parts of our story to erase all the beautiful things that came before them.

We were once two people who shared a special bond.

We laughed together, cared for each other, and created memories that will always be a part of my life.

I choose to remember those moments with kindness.

I am learning to accept what happened, forgive where I can, and allow life to move forward.

Not every story ends the way we imagined.

But that doesn't mean every moment in it was meaningless.`
  },

  {
    title: "I Wish You Everything Beautiful",
    decoration: "🌹",
    message: `More than anything, I genuinely wish good things for you.

I hope you achieve your dreams.

I hope you get the job you want, build the home you have always imagined, and make your parents proud.

I hope your hard work brings you the success you deserve.

I hope you find peace in your life and have reasons to smile even on difficult days.

Take care of yourself. Never stop believing in your abilities.

And if someone comes into your life who loves you deeply and makes you happy, I hope you cherish that happiness.

You deserve a beautiful life.

Even if I am no longer a part of it, I will always wish that life treats you kindly.`
  },

  {
    title: "One Last Thing, Shajie Baa…",
    decoration: "💌",
    message: `Some feelings are difficult to put into words.

So I wrote you one final letter.

There are things I still wish I could say, and a little hope I have never completely hidden from myself.

Take your time with this one.

These words are simply from my heart. ❤️`
  }

];

/* =========================================
   SCREEN NAVIGATION
========================================= */

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach(item => {
    item.classList.remove("active");
  });

  screen.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function enterMenu() {
  showScreen(menuScreen);
}

enterHeart.addEventListener("click", enterMenu);

openingScreen.addEventListener("click", function(event) {
  if (event.target === openingScreen ||
      event.target.classList.contains("opening-content") ||
      event.target.classList.contains("opening-description") ||
      event.target.classList.contains("tap-hint") ||
      event.target.classList.contains("small-heading")) {
    enterMenu();
  }
});

/* =========================================
   TYPEWRITER EFFECT
========================================= */

function stopTyping() {
  if (typingTimer) {
    clearTimeout(typingTimer);
    typingTimer = null;
  }
}

function typeMessage(message) {
  stopTyping();

  currentMessage = message;
  currentPosition = 0;
  chapterMessage.textContent = "";

  function writeCharacter() {
    if (currentPosition < currentMessage.length) {
      chapterMessage.textContent += currentMessage.charAt(currentPosition);
      currentPosition++;

      const delay = currentMessage.charAt(currentPosition - 1) === "\n"
        ? 110
        : 22;

      typingTimer = setTimeout(writeCharacter, delay);
    } else {
      typingTimer = null;
    }
  }

  writeCharacter();
}

/* =========================================
   OPEN CHAPTER
========================================= */

function openChapter(number) {
  const chapter = chapters[number - 1];

  if (!chapter) return;

  visitedChapters.add(number);

  chapterButtons.forEach(button => {
    if (Number(button.dataset.chapter) === number) {
      button.classList.add("visited");
    }
  });

  if (number === 15) {
    openFinalLetter();
    return;
  }

  chapterNumber.textContent =
    "CHAPTER " + String(number).padStart(2, "0");

  chapterTitle.textContent = chapter.title;
  chapterDecoration.textContent = chapter.decoration;

  showScreen(chapterScreen);
  typeMessage(chapter.message);
}

chapterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const number = Number(button.dataset.chapter);
    openChapter(number);
  });
});

/* =========================================
   RETURN TO MENU
========================================= */

backButton.addEventListener("click", () => {
  stopTyping();
  enterMenu();
});

letterBackButton.addEventListener("click", () => {
  enterMenu();
});

/* =========================================
   FINAL LETTER
========================================= */

const finalLetterText = `Sometimes, I still wish you would come back.

That little wish is somewhere inside me, and I won't pretend it isn't there.

If life ever gave us another chance, a part of me would still want to talk to you, understand you, and see whether we could find our way back to each other.

But I don't want you to return out of guilt, pressure, or sympathy.

I once imagined a lifetime with you. I imagined so many things that we never got to experience.

Maybe we won't get to celebrate birthdays together. Maybe we won't build the home we once could have imagined. Maybe we will remain just a beautiful memory in each other's lives.

But I have one genuine wish.

Please achieve your dreams. Get the job you want. Build your dream home. Make your parents proud. Live peacefully. Smile freely. Take care of yourself.

And if someone comes into your life who loves you deeply and makes you happy, I hope you cherish that happiness.

Thank you for being my friend before becoming my love.

Thank you for being a part of more than four years of my life.

I don't know whether you will ever understand how much you meant to me, but I hope these words give you a little glimpse of it.

I wanted a lifetime with you, but more than anything, I want you to have a beautiful life.

Take care, Shajie Baa.

With love,
The girl who once wished for forever with you.`;

function openFinalLetter() {
  stopTyping();

  showScreen(letterScreen);

  envelope.classList.remove("open");
  finalLetter.classList.add("hidden");
  openLetterButton.classList.remove("hidden");
  finalLetterMessage.textContent = finalLetterText;
}

openLetterButton.addEventListener("click", () => {
  envelope.classList.add("open");

  openLetterButton.classList.add("hidden");

  setTimeout(() => {
    finalLetter.classList.remove("hidden");
  }, 750);
});

/* =========================================
   FLOATING HEART PARTICLES
========================================= */

function createParticle() {
  const particle = document.createElement("span");

  const symbols = ["♥", "♡", "✦", "·"];

  particle.className = "particle";
  particle.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  particle.style.left = Math.random() * 100 + "%";
  particle.style.fontSize = (10 + Math.random() * 18) + "px";
  particle.style.animationDuration = (8 + Math.random() * 12) + "s";
  particle.style.animationDelay = Math.random() * 4 + "s";

  particles.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 22000);
}

for (let i = 0; i < 18; i++) {
  createParticle();
}

setInterval(createParticle, 1200);

/* =========================================
   CHAPTER 15 MENU GLOW
========================================= */

chapterButtons.forEach(button => {
  button.addEventListener("mouseenter", () => {
    button.style.setProperty("--hover-glow", "1");
  });

  button.addEventListener("mouseleave", () => {
    button.style.setProperty("--hover-glow", "0");
  });
});

/* =========================================
   MUSIC BUTTON PLACEHOLDER
========================================= */

const musicButton = document.getElementById("music-button");

musicButton.addEventListener("click", () => {
  alert("A little music will be added here later. ♡");
});

/* =========================================
   START
========================================= */

showScreen(openingScreen);

console.log("A Little Glimpse Towards... is ready ❤️");
