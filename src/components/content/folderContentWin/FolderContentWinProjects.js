import styles from "./FolderContentWin.module.css";
import React from "react";
import  * as S from "../../../components/Projects/Projects.styles";
import {projectsPortfolio} from "../../../components/Projects/ProjectsData";
import logoGithub from "../../../svg/github.svg";
import logoWebsite from "../../../svg/website.svg";



const FolderContentp = ({ isFolderOpenp, closeFolderContentp, }) => {

  


  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          visibility: isFolderOpenp ? "visible" : "hidden",
        }}
      >

        
       
         
     
        <div className={styles.right_inner_wrapper}>
          <div className={styles.right_top_bar}>
            <div className={styles.right_top_bar_left}>
            <img   onClick={closeFolderContentp} src="/images/icons/left_arrow.png" alt="left_arrow" />
              <p className={styles.left_text}>Projects By Luis Vanegas</p>
            </div>
          <div className={styles.right_top_bar_right}>
              <img src="/images/icons/windows.png" alt="windows" />
              <img src="/images/icons/menu.png" alt="menu" />
              <img src="/images/icons/cols.png" alt="cols" />
              <img src="/images/icons/dots.png" alt="dots" />
              <img src="/images/icons/exp.png" alt="exp" />
              <img src="/images/icons/badge.png" alt="badge" />
              <img src="/images/icons/right_arrow2.png" alt="right_arrow2" />
              <img src="/images/icons/search_icon.png" alt="search_icon" />
            </div>
          </div>
          <S.ContainerProjects id="projects">
                  
            <S.ContentProject>
                {projectsPortfolio.map((project, index) =>(
                    <S.ProjectContent key={index}>
                        <S.TitleProject>{project.title}</S.TitleProject>
                        <S.ContainerImage>
                            <img src={project.image} alt={project.title} loazy="true"/>
                        </S.ContainerImage>
                        <S.ContainerTechs>
                            {project.techs.map((tech, index)=>(
                                <div key={index}>
                                    <img src={tech.src} alt={tech.name}/>
                                    <p>{tech.name}</p>
                                </div>
                            ))}
                        </S.ContainerTechs>
                        <S.Description>
                            {project.description}
                        </S.Description>
                        <S.ContainerFooter>
                            {project.repository && (
                                <a href={project.repository} target="_blank" rel="noreferrer">
                                    <img src={logoGithub} alt={project.description}/>
                                </a>
                            )}
                            {project.website && (
                                <a href={project.website} target="_blank" rel="noreferrer">
                                    <img src={logoWebsite} alt={project.description}/>
                                </a>
                            )}
                        </S.ContainerFooter>
                    </S.ProjectContent>    
                ))}
            </S.ContentProject>
        </S.ContainerProjects>




         

        </div>
      </div>
    </>
  );
};

export default FolderContentp;
