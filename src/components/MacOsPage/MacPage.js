import { useState, useEffect  } from "react";
import './../../App.css';
import AppleMenu from "./../../components/content/appleMenu/AppleMenu";
import FolderContent from "./../../components/content/folderContent/FolderContent";
import FolderContentp from "./../../components/content/folderContent/FolderContentp";
import Folders from "./../../components/content/folders/Folders";
import MenuBar from "./../../components/menuBar/MenuBar";
import StatusBar from "./../../components/statusBar/StatusBar";
import styles from './../../SplashScreen.module.css';




const MacPage = ({handleClick}) => {

    const [showSplash, setShowSplash] = useState(true);
  
  
    useEffect(() => {
      // Simula un tiempo de espera para ocultar la pantalla de inicio
      setTimeout(() => {
        setShowSplash(false);
      }, 3000); // Cambia el valor de 3000 a la cantidad de tiempo que desees mostrar el splash screen en milisegundos.
    }, []);
  
    const [isAppleMenuOpen, setIsAppleMenuOpen] = useState(false);
    const [isFolderOpen, setIsFolderOpen] = useState(false);

    
    const [isFolderOpenp, setIsFolderOpenp] = useState(false);
  
    const toggleAppleMenu = () => {
      setIsAppleMenuOpen(!isAppleMenuOpen);
    };
  
    const closeAppleMenu = () => {
      if (isAppleMenuOpen) {
        setIsAppleMenuOpen(false);
      }
    };
    
    const openFolderContent = () => {
      setIsFolderOpen(true);
    };
  
    const closeFolderContent = () => {
      setIsFolderOpen(false);
    };

    const openFolderContentp = () => {
      setIsFolderOpenp(true);
    };
  
    const closeFolderContentp = () => {
      setIsFolderOpenp(false);
    };
  
    return (
      <>
       
        {showSplash ? (
          <div className={styles.splashWrapper}>
          <div className={styles.splashImage}>
            <img src="/images/apple.png" alt="folder" />
            
          </div>
        </div>
        ) : (
          // Renderiza el contenido principal de tu aplicación aquí
          <div className="wrapper">
          <StatusBar toggleAppleMenu={toggleAppleMenu} />
          <div className="inner_wrapper" onClick={closeAppleMenu}>
            <Folders openFolderContent={openFolderContent} openFolderContentp={openFolderContentp}handleClick={handleClick} />
            <FolderContent
              isFolderOpen={isFolderOpen}
              closeFolderContent={closeFolderContent}
            />

            <FolderContentp
              isFolderOpenp={isFolderOpenp}
              closeFolderContentp={closeFolderContentp}
            />
            <AppleMenu isAppleMenuOpen={isAppleMenuOpen} />
          </div>
          <MenuBar />
          </div>
          
        )}
        
      </>
    );
  };
  
  export default MacPage;