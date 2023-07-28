import styles from "./FoldersWin.module.css";
import React from "react";

const Folders = ({ openFolderContent, handleClick, openFolderContentProjects }) => {
  const handleFullscreen = () => {
    // Verifica si el navegador es compatible con el modo fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari y Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // Internet Explorer / Edge
      document.documentElement.msRequestFullscreen();
    }
  };
  const handleOpenLink = () => {
    // URL que deseas abrir
  const url = 'https://www.linkedin.com/in/luis-fernando-vanegas/';

  // Abrir la URL en una nueva ventana o pestaña del navegador
  window.open(url, '_blank');
   
  };

  const handleOpenGitHub = () => {
      // URL que deseas abrir
  const url = 'https://github.com/LfernandoVanegasG';

  // Abrir la URL en una nueva ventana o pestaña del navegador
  window.open(url, '_blank');
   
   
  };

  const handleOpenPDF = () => {
    // URL del archivo PDF que deseas abrir desde el proyecto
  const pdfUrl = '/images/windows/CVLuisV.pdf';

  // Abrir el PDF en una nueva ventana o pestaña del navegador
  window.open(pdfUrl, '_blank');
   
  };


  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.folderWrapper}>
          <img
            onClick={openFolderContent}
            src="/images/windows/icons8-email-open-48.png"
            alt="folder"
          />
          
          <span className={styles.folderText}>Contact with me</span>
        </div>

        <div className={styles.marginBottom20}></div>

        <div className={styles.folderWrapper}>
          <img
            onClick={openFolderContentProjects}
            src="/images/windows/windows-explorer.png"
            alt="folder"
          />
          
          <span className={styles.folderText}>Projects</span>
        </div>

        <div className={styles.marginBottom20}></div>
        
        
        <div className={styles.folderWrapper}>
          <img src="/images/windows/macosmode.png" alt="folder"  onClick={handleClick}/>
          <span className={styles.folderText}>MacOS Mode</span>

        </div>

        <div className={styles.marginBottom20}></div>

        <div className={styles.folderWrapper}>
          <img 
          onClick={handleFullscreen}
          src="/images/windows/maximizarventana.png" 
          alt="folder" />
          <span className={styles.folderText}>Fullscreen</span>
        </div>

        <div className={styles.marginBottom20}></div>
        
        <div className={styles.folderWrapper}>
          <img 
          onClick={handleOpenPDF}
          src="/images/windows/pdf.png" 
          alt="folder" />
          <span className={styles.folderText}>CV Luis Vanegas</span>
        </div>
        <div className={styles.marginBottom20}></div>
        
        <div className={styles.folderWrapper}>
          <img 
          onClick={handleOpenGitHub}
          src="/images/windows/icons8-github-48.png" 
          alt="folder" />
          <span className={styles.folderText}>Github</span>
        </div>

        <div className={styles.marginBottom20}></div>
        
        <div className={styles.folderWrapper}>
          <img 
          onClick={handleOpenLink}
          src="/images/windows/icons8-linkedin-48.png" 
          alt="folder" />
          <span className={styles.folderText}>Linkedln</span>
        </div>

      </div>
    </>
  );
};

export default Folders;
