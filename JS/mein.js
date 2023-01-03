const infoButton = document.querySelector(".infoImage")
const infoSection = document.querySelector(".infoSection")

const comeBackBtn = document.querySelector(".comeBack")

const dropList = document.querySelectorAll(".dropLi")
const choosed = document.querySelector(".showChoosed")
const characterName = document.querySelector(".title")

const aboutText = document.querySelector(".aboutText")

// Anime Data
const animeData = [
    {
        id: 1,
        name: "Naruto Uzumaki",
        image: "../Images/naruto.png",
        about: `
        Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure (Hidden Leaf Village). The villagers ridicule and ostracize Naruto on account of the Nine-Tailed Demon Fox—a malevolent creature that attacked Konohagakure—that was sealed away in Naruto's body. Despite this, he aspires to become his village's leader, the Hokage, in order to receive their approval. His carefree, optimistic, and boisterous personality enables him to befriend other Konohagakure ninja, as well as ninja from other villages. Naruto appears in the series' films and in other media related to the franchise, including video games and original video animations (OVA), as well as the sequel Boruto: Naruto Next Generations, where he is the Hokage, and his son, Boruto Uzumaki, is the protagonist.
        `
    },

    {
        id: 2,
        name: "Sasuke Uchiha",
        image: "../Images/sasuke.png",
        about: `
        Sasuke Uchiha  is a fictional character in the Naruto manga and anime franchise created by Masashi Kishimoto. Sasuke belongs to the Uchiha clan, a notorious ninja family, and one of the most powerful, allied with Konohagakure (木ノ葉隠れの里, English version: "Hidden Leaf Village"). Most of its members were massacred by Sasuke's older brother, Itachi Uchiha, before the series began, leaving Sasuke one of the few living. Despite becoming empathetic toward his teammates Naruto Uzumaki and Sakura Haruno, Sasuke's feelings of powerlessness force him to abandon his friends and his home in his quest to become stronger, and to find Orochimaru. Sasuke appears in several of the series' animated feature films and related media, including video games, original video animations (OVAs), and Boruto: Naruto the Movie (2015) and its manga sequel, Boruto: Naruto Next Generations (2016), in which he is depicted as a vigilante supporting his village and a mentor to Naruto's son Boruto Uzumaki.
        `
    },

    {
        id: 3,
        name: "Itachi Uchiha",
        image: "../Images/itachi.png",
        about: `
        Itachi Uchiha is a character in the Naruto manga and anime series created by Masashi Kishimoto. Itachi is the older brother of Sasuke Uchiha, and is responsible for killing all the members of their clan, sparing only Sasuke. He appears working as a terrorist from the organisation Akatsuki and serves as Sasuke's greatest enemy. During the second part of the manga, Itachi becomes involved in attacks to ninjas possessing tailed-beast creatures until facing Sasuke in a one-on-one battle. Although Itachi perishes during the final duel, it is later revealed that Itachi had a secret reason for assassinating the Uchiha clan. Itachi is a playable character in most of the video games from the series.
        `
    },

    {
        id: 4,
        name: "Kakashi Hatake",
        image: "../Images/kakashi.png",
        about: `
        Kakashi Hatake is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. In the story, Kakashi is the teacher of Team 7, consisting of the series' primary characters, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno. He is initially portrayed as a detached and apathetic figure, but as the series progresses, his loyalty to his friends and students becomes increasingly apparent. Kakashi's past has been extensively explored in the series, resulting in a gaiden being devoted to his past experiences. Kakashi has appeared in several pieces of Naruto media, the featured films in the series, the original video animations, and the video games.
        `
    },

    {
        id: 5,
        name: "Obito Uchiha",
        image: "../Images/obito.png",
        about: `
        Obito Uchiha is a character in Masashi Kishimoto's manga Naruto. He is first introduced in a "Kakashi Chronicle" side story as a young ninja who sacrifices himself to save his friends (Kakashi Hatake and Rin Nohara, led by Minato Namikaze) from an adversary group of ninjas. Although he was believed to have died in the 3rd Great Ninja War, Obito is later revealed as the real leader of the terrorist organization known as the Akatsuki, mainly acting behind the scenes for a majority of the group's tenure. He uses the alias of his benefactor, Madara Uchiha, and conceals his true identity with masks as one of the main antagonists of the series' second half. Obito and his varied personas have appeared in Naruto video games and animated adaptations.
        `
    },

    {
        id: 6,
        name: "Orochimaru",
        image: "../Images/orochimaru.png",
        about: `
        Orochimaru is a fictional character from Naruto, a manga series created by Masashi Kishimoto. Orochimaru is a former ninja from the village of Konohagakure who is well known for work in wars which earned him the title of Sannin and becomes a terrorist as a means to cheat death, and built his own ninja village Otogakure. He succeeds to some extent in obtaining immortality by transferring between different host bodies, which became one of his driving motivations throughout the series as he targets Sasuke Uchiha for his genetic heritage. By the events of Boruto: Naruto Next Generations, he has seemingly redeemed himself and has sent his experiment Mitsuki to Konoha to become a ninja. Orochimaru has appeared in media outside the Naruto anime and manga, including several video games.
        `
    },
]

// Functions
function infoBtn(item, index) {
    item.addEventListener("click", () => {
        infoSection.style.visibility = "visible"
        infoSection.style.opacity = 1
    })
    index.addEventListener("click", () => {
        infoSection.style.visibility = "hidden"
        infoSection.style.opacity = 0
    })
}


function showChoosed(item) {
    item.forEach((element, id) => {
        element.addEventListener("click", () => {
            choosed.src = animeData[id].image
            characterName.innerText = animeData[id].name
            aboutText.innerText = animeData[id].about
        })
    });
}



// Calls function
infoBtn(infoButton, comeBackBtn)
showChoosed(dropList)