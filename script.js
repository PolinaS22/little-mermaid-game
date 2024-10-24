const video = document.querySelector("#myVideo");
const textOne = document.querySelector("#par");
const textTwo = document.querySelector("#parTwo");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");

btnOne.addEventListener("click", savePrince);
btnTwo.addEventListener("click", noStory);

function noStory(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/video5309927141025003618.mp4?v=1698043448054");
    textOne.innerHTML = "The story of a beautiful nd spirited young mermaid with a thirst for adventure. Ariel, a mermaid, falls in love with Eric, a prince. She strikes a deal with Ursula, a witch, to make her human. However, she loses her voice and the spell is only meant to last for three days.";
    textTwo.innerHTML = "Would you like to set her future?";
    btnOne.innerHTML = "Yes";
    btnTwo.innerHTML = "No";
    btnOne.removeEventListener("click", savePrince);
    btnTwo.removeEventListener("click", noStory);
    btnOne.addEventListener("click", savePrince);
    btnTwo.addEventListener("click", futureNo);
}
function futureNo(){
    textOne.innerHTML = "Alright! Just remember: you are the only person who can set your own future! Don't let anyone decide for yourself!";
    textTwo.style = "display: none";
    btnOne.style = "display: none";
    btnTwo.style = "display: none"; 
}
function savePrince(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/IMG_9318.MP4?v=1698043321559");
    textOne.innerHTML = "You are a mermaid who's obsessed with human world. Once you saw a guy drowning in the ocean and decided to save him no matter what."
    textTwo.innerHTML = "Will you fall in love with the stranger?";
    btnOne.removeEventListener("click", savePrince);
    btnTwo.removeEventListener("click", noStory);
    btnOne.addEventListener("click", fallPrince);
    btnTwo.addEventListener("click", noFallPrince);
}
function fallPrince(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/IMG_9336.MOV?v=1698043599690");
    textOne.innerHTML = "You were so impressed by a beautiful stranger that you decided to find a way to be with him. But... you're a mermaid and he's a human. There's no other option but to go to the sea witch Ursula."
    textTwo.innerHTML = "Ursula offers you a chance to become a human if you give up your voice. Will you agree?";
    btnOne.removeEventListener("click", fallPrince);
    btnTwo.removeEventListener("click", noFallPrince);
    btnOne.addEventListener("click", giveVoice);
    btnTwo.addEventListener("click", refuseVoice);
}
function giveVoice(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/IMG_9337.MOV?v=1698043679153");
    textOne.innerHTML = "The witch warns if the prince chooses another girl to marry, the little mermaid will immediately turn into sea foam. You have 3 days to charm him.";
    textTwo.innerHTML = "Now you need to find your prince because you're running out of time. What would you do?";
    btnOne.innerHTML = "Stay on the beach and wait for him";
    btnTwo.innerHTML = "Just keep walking somewhere";
    btnOne.removeEventListener("click", giveVoice);
    btnTwo.removeEventListener("click", refuseVoice);
    btnOne.addEventListener("click", waitPrince);
    btnTwo.addEventListener("click", goPrince);
}
function waitPrince(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/IMG_9340.MOV?v=1698043742628");
    textOne.innerHTML = "The prince found you on the shore and took you to the palace. He quickly became attached to the silent stranger.";
    textTwo.innerHTML = "It took him a while but he finally falls in love with you! The Little Mermaid and prince got married and lived a long and happy life together.";
    btnOne.style = "display: none";
    btnTwo.style = "display: none"; 
}
function goPrince(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/IMG_9339.MOV?v=1698043787917");
    textOne.innerHTML = "As you walked along the shore, you caught a glimpse of a majestic castle on the horizon. Curious, you set off to explore, wondering what adventures awaited you inside. By accident you ran into your stranger and he was a prince.";
    textTwo.innerHTML = "He was immediately drawn to your kind eyes and charming demeanor, and you two struck up a conversation that lingered long into the night.";
    btnOne.innerHTML = "Finish";
    btnTwo.style = "display: none";
    btnOne.removeEventListener("click", giveVoice);
    btnOne.addEventListener("click", endStoryWithPrince);
}
function refuseVoice(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/IMG_9334.MOV?v=1698044735397");
    textOne.innerHTML = "Ursula threatened to harm you or your family if you refused to give up your voice.";
    textTwo.innerHTML = "To protect your family you need take actions. Will you stand up against Ursula's terror?";
    btnOne.innerHTML = "Live happily in the ocean";
    btnTwo.innerHTML = "Fight the Ursula's terror";
    btnOne.removeEventListener("click", giveVoice);
    btnTwo.removeEventListener("click", refuseVoice);
    btnOne.addEventListener("click", endOceanAlone);
    btnTwo.addEventListener("click", fightUrsula);
}
function noFallPrince(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/video5309927141025003662.mp4?v=1698044509788");
    textOne.innerHTML = "You saved the guy but ultimately decided to return to your ocean kingdom. The desire to become a human was strong and to become one, you need to visit the sea witch Ursula.";
    textTwo.innerHTML = "Ursula's term to give up your voice was too harsh and you refused her offer.";
    btnOne.innerHTML = "Live happily in the ocean";
    btnTwo.innerHTML = "Fight the Ursula's terror";
    btnOne.removeEventListener("click", fallPrince);
    btnTwo.removeEventListener("click", noFallPrince);
    btnOne.addEventListener("click", endOceanAlone);
    btnTwo.addEventListener("click", fightUrsula);
}
function fightUrsula(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/IMG_9333.MOV?v=1698044225579");
    textOne.innerHTML = "Ursula is a highly cunning and dangerous villain, and the ocean is not safe as long as she remains in control. The Little Mermaid is so brave to stand up against her.";
    textTwo.innerHTML = "Will you ask for your friend's help or your powerful father?";
    btnOne.innerHTML = "Friends";
    btnTwo.innerHTML = "Father";
    btnOne.removeEventListener("click", endOceanAlone);
    btnTwo.removeEventListener("click", fightUrsula);   
    btnOne.addEventListener("click", friendsHelp);
    btnTwo.addEventListener("click", fatherHelp);
}
function friendsHelp(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/IMG_9342.MOV?v=1698043888803");
    textOne.innerHTML = "You had to rely on your cunning, courage, and resilience to overcome the challenges of standing up to Ursula's terror. Together, you worked as a team, each bringing their own strengths to the table, in order to stand a chance against Ursula and her power. You and your friends have successfully defeated Ursula and all the souls she kept captive have been set free.";
    textTwo.innerHTML = " The ocean can finally know peace once again!";
    btnOne.innerHTML = "Finish";
    btnTwo.style = "display: none";
    btnOne.removeEventListener("click", friendsHelp)
    btnOne.addEventListener("click", endOfTheStory);
}
function fatherHelp(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/IMG_9341.MOV?v=1698043939059");
    textOne.innerHTML = "Your father, Triton, is the ruler of the ocean, and he has immense power and influence. You worked together to gather support from other sea creatures and merpeople who were outraged by Ursula's tyranny.";
    textTwo.innerHTML = "The Little Mermaid and Triton bravely faced off against Ursula, the mighty sea witch who terrified the ocean with an iron fist. You managed to defeat her and release all the souls she had kept captive for so many years. The ocean finally knew peace once more!";
    btnOne.innerHTML = "Finish";
    btnOne.removeEventListener("click", friendsHelp)
    btnTwo.style = "display: none";
    btnOne.addEventListener("click", endOfTheStory);
}
function endOfTheStory(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/IMG_9315.MP4?v=1698043974153");
    textOne.innerHTML = "After a long and challenging journey to defeat the evil sea witch, Ursula, the ocean was finally free, and a new era of peace and prosperity began. The Little Mermaid's father, King Triton, was extremely proud of his daughter's bravery and determination in protecting the ocean kingdom. He saw the potential in Ariel, and with her newfound confidence and leadership skills, he decided to make her co-ruler of the ocean kingdom.";
    textTwo.innerHTML = "The Little Mermaid and King Triton ruled over the ocean kingdom together, with you bringing your unique perspective as a mermaid to the throne. The two worked together to guide the kingdom towards a bright and prosperous future, and you proved yourself to be a wise and capable leader. The kingdom flourished under their rule, and the ocean was at peace for many years to come.";
    btnOne.style = "display: none";
    btnTwo.style = "display: none"; 
}
function endStoryWithPrince(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/IMG_9343.MOV?v=1698043836628");
    textOne.innerHTML = "The prince and the Little Mermaid discover a shared passion for exploring new lands and learning about different cultures. Together they set off on expeditions to far-flung corners of the earth, facing dangers and overcoming obstacles along the way. As they journey, they fall deeply in love, and their shared experiences deepen their bond.";
    textTwo.innerHTML = "You spend your days exploring the realm, uncovering ancient artifacts and forgotten secrets, and bringing joy and peace to all the people under your charge.";
    btnOne.style = "display: none";
    btnTwo.style = "display: none"; 
}
function endOceanAlone(){
    video.setAttribute("src", "https://cdn.glitch.global/974efe6d-0caa-4cfa-994f-6ff269ba5bac/video5309927141025003653.mp4?v=1698044154299");
    textOne.innerHTML = "The Little Mermaid's life wasn't always smooth sailing, but in the end, you found contentment and happiness living with your sisters and father in the ocean.";
    textTwo.style = "display: none";
    btnOne.style = "display: none";
    btnTwo.style = "display: none"; 
}
