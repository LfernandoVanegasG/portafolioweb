import { useState, useEffect  } from "react";
import './../../App.css';
import MenuBar from "./../../components/menuBar/MenuBarWin";
import styles from './../../SplashScreen.module.css';
import FolderContentWin from "./../../components/content/folderContentWin/FolderContentWin";
import FolderContentWinProjects from "./../../components/content/folderContentWin/FolderContentWinProjects";
import FoldersWin from "./../../components/content/foldersWin/FoldersWin";




const WinPage = ({handleClick}) => {

    const [showSplash, setShowSplash] = useState(true);
    const [isFolderOpen, setIsFolderOpen] = useState(false);
    const [isFolderOpenp, setIsFolderOpenp] = useState(false);
  
    useEffect(() => {
      // Simula un tiempo de espera para ocultar la pantalla de inicio
      setTimeout(() => {
        setShowSplash(false);
      }, 3000); // Cambia el valor de 3000 a la cantidad de tiempo que desees mostrar el splash screen en milisegundos.
    }, []);
  
    const openFolderContent = () => {
      setIsFolderOpen(true);
    };

    const openFolderContentProjects = () => {
      setIsFolderOpenp(true);
    };
  
    const closeFolderContent = () => {
      setIsFolderOpen(false);
    };

    const closeFolderContentp = () => {
      setIsFolderOpenp(false);
    };


    
  
    return (
      <>
       
        {showSplash ? (
          <div className={styles.splashWrapper}>
          <div className={styles.splashImage}>
            <img src="/images/WindowsSp.png" alt="folder" />
            
          </div>
        </div>
        ) : (
          // Renderiza el contenido principal de tu aplicación aquí
          <div className="wrapperWin">
        
          <div className="inner_wrapper">
            <FoldersWin openFolderContent={openFolderContent} openFolderContentProjects={openFolderContentProjects} handleClick={handleClick} />
           
            <FolderContentWin
              isFolderOpen={isFolderOpen}
              closeFolderContent={closeFolderContent}
            />
            <FolderContentWinProjects
              isFolderOpenp={isFolderOpenp}
              closeFolderContentp={closeFolderContentp}
            />
              </div>
            
          <MenuBar />
          </div>
          
        )}
        
      </>
    );
  };
  
  export default WinPage;