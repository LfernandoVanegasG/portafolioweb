import reactBootstrapImage from "../../images/techs/react-bootstrap.png";


import reactImage from "../../images/techs/react.png";

import styledImage from "../../images/techs/styled-logo.png";

import cssImage from "../../images/techs/css.png";
import simpsonProject from "../../images/projects/sim.PNG";
import dynamicFormProject from "../../images/projects/dy.PNG";

import rickMorty from "../../images/projects/r.PNG";
import tlist from "../../images/projects/tlist.PNG";



export const projectsPortfolio = [
    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs: [
            {name:"React", src:reactImage},
            {name:"CSS",   src:cssImage  },
        ],
        description: "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
        repository: "https://github.com/LfernandoVanegasG/rickyandmorty",
        website:"https://rickyandmorty-nu.vercel.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    
    {
        title: "Simpsons API",
        image: simpsonProject,
        techs: [
            {name:"React JS", src:reactImage},
            {name:"Styled Components",   src:styledImage  },
        ],
        description: "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
        repository: "https://github.com/LfernandoVanegasG/simpson",
        website:"https://main--serene-paletas-a6447b.netlify.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },
   
    {
        title: "Dynamic Form",
        image: dynamicFormProject,
        techs: [
            {name:"React JS", src:reactImage},
            {name:"React Bootstrap",   src:reactBootstrapImage  },
        ],
        description: "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
        repository: "https://github.com/LfernandoVanegasG/dynamic-form",
        website:"https://dynamic-form-beta.vercel.app/https://dynamic-form-beta.vercel.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Todo List",
        image: tlist,
        techs: [
            {name:"React JS", src:reactImage},
            {name:"React Bootstrap",   src:reactBootstrapImage  },
        ],
        description: "Application created with React JS and to make a list of tasks where you can add or remove it.",
        repository: "https://github.com/LfernandoVanegasG/todolist",
        website:"https://todolist-seven-coral.vercel.app/" //ustedes deben colocar aquí el link del enlace público de netlify
    },

    
];