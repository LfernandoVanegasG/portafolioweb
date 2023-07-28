import styles from "./FolderContent.module.css";


import  * as S from "../../../components/Projects/Projects.styles";
import {projectsPortfolio} from "../../../components/Projects/ProjectsData";
import logoGithub from "../../../svg/github.svg";
import logoWebsite from "../../../svg/website.svg";
const FolderContentp = ({ isFolderOpenp, closeFolderContentp }) => {

  
  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          visibility: isFolderOpenp ? "visible" : "hidden",
        }}
      >
        <div className={styles.left_inner_wrapper}>
          <div className={styles.left_corner_buttons}>
            <img
              onClick={closeFolderContentp}
              className={styles.left_corner_button_img}
              src="/images/icons/close.png"
              alt="icns"
            />
            <img
              className={styles.left_corner_button_img}
              src="/images/icons/minimise.png"
              alt="icns"
            />
            <img
              className={styles.left_corner_button_img}
              src="/images/icons/zoom.png"
              alt="icns"
            />
          </div>
          <div className={styles.left_menu_wrapper}>
            <h5 className={styles.menu_title}>Favourites</h5>
            <ul className={styles.left_ul}>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/star.png"
                  alt="star"
                />
                <p className={styles.left_li_text}>Inbox</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/file.png"
                  alt="file"
                />
                <p className={styles.left_li_text}>AirDrop</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/clock.png"
                  alt="clock"
                />
                <p className={styles.left_li_text}>Recents</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/file.png"
                  alt="file"
                />
                <p className={styles.left_li_text}>Applications</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/files.png"
                  alt="files"
                />
                <p className={styles.left_li_text}>Documents</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/folder.png"
                  alt="folder"
                />
                <p className={styles.left_li_text}>Folder</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/download.png"
                  alt="download"
                />
                <p className={styles.left_li_text}>Downloads</p>
              </li>
            </ul>
            <h5 className={styles.menu_title}>iCloud</h5>
            <ul className={styles.left_ul}>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/cloud.png"
                  alt="cloud"
                />
                <p className={styles.left_li_text}>iCloud Drive</p>
              </li>
            </ul>
            <h5 className={styles.menu_title}>Tags</h5>
            <ul className={styles.left_ul}>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/orangeTag.png"
                  alt="orangeTag"
                />
                <p className={styles.left_li_text}>Orange Tag</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/blueTag.png"
                  alt="blueTag"
                />
                <p className={styles.left_li_text}>Blue Tag</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/greenTag.png"
                  alt="greenTag"
                />
                <p className={styles.left_li_text}>Green Tag</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/allTags.png"
                  alt="allTags"
                />
                <p className={styles.left_li_text}>All Tags</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right_inner_wrapper}>
          <div className={styles.right_top_bar}>
            <div className={styles.right_top_bar_left}>
              <img src="/images/icons/left_arrow.png" alt="left_arrow" />
              <img src="/images/icons/right_arrow.png" alt="right_arrow" />
              <p className={styles.left_text}>Email</p>
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
