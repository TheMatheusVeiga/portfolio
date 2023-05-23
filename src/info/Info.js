import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(255,153,51)", "rgb(51,255,153)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Matheus",
    lastName: "Veiga",
    initials: "Mv", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Backend Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the São Paulo, Brazil'
        },
        {
            emoji: "💼",
            text: "Application Engineer at Dell Technologies"
        },
        {
            emoji: "📧",
            text: "matheuzuchoas@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/matheusuchoas.veiga/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/itz.matheuz/?next=%2F",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/TheMatheusVeiga",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/dev-matheus-uchoas/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Matheus. I'm a application engineer for Dell. I studied Computer Engineering at ETEP Colleges, I enjoy play/listen music, play videogames and go out with my dog. You should hire me!",
    skills:
        {
            proficientWith: ['C#', '.Net', 'git', 'Sql', 'react', 'html5', 'css3', 'javascript'],
            exposedTo: ['nodejs', 'react native', 'devops']
        }
    ,
    hobbies: [
        {
            label: 'Music',
            emoji: '🎹'
        },
        {
            label: 'Games',
            emoji: '🎮'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Animals',
            emoji: '🐕‍🦺'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "TBD"
        }
    ]
}