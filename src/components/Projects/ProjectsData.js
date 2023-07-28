import reactBootstrapImage from "../../images/techs/react-bootstrap.png";


import reactImage from "../../images/techs/react.png";

import styledImage from "../../images/techs/styled-logo.png";

import cssImage from "../../images/techs/css.png";
import simpsonProject from "../../images/projects/sim.PNG";
import dynamicFormProject from "../../images/projects/dy.PNG";

import rickMorty from "../../images/projects/rick-morty.jpeg";


export const projectsPortfolio = [
    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs: [
            {name:"React", src:reactImage},
            {name:"CSS",   src:cssImage  },
        ],
        description: "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
        repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
        website:"#!" //ustedes deben colocar aquí el link del enlace público de netlify
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
        website:"#!" //ustedes deben colocar aquí el link del enlace público de netlify
    },

    
];