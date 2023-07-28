import styles from "./FolderContentWin.module.css";
import emailjs from 'emailjs-com';
import React, {useState, useRef} from "react";
import  * as S from "../../../components/Contact/Contact.styles";

const FolderContent = ({ isFolderOpen, closeFolderContent }) => {

  const [contactDates, setContactDates] = useState({
    name:"",
    email:"",
    message:"",
    checkedTerms:false,
});
const [emptyInputs, setEmptyInputs] = useState(false);
const [successSendForm, setsuccessSendForm] = useState(false);
const [errorSendForm, setErrorSendForm] = useState(false);

const form= useRef();

const onSubmit = (e) => {
    //evitar el recargo de la página
    e.preventDefault();

    //validar formulario
    if(contactDates.name==="" || 
       contactDates.email==="" || 
       contactDates.message==="" || 
       contactDates.checkedTerms===false){
        setEmptyInputs(true);
    }
    else{
        emailjs.sendForm(
            'service_iks3e0w',//AQUí va su ID DE SERVICIO EMAILJS
            'template_za6m6hj',//AQUÍ VA EL TEMPLATE ID
            form.current,
            'vawdrhDYOY0zyaFlD'//AQUÍ VA LA PUBLIC KEY
        ).then(
            (result) =>{
                setsuccessSendForm(true);
            },
            (error) =>{
                setErrorSendForm(true);
            }
        );
    }

};


  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          visibility: isFolderOpen ? "visible" : "hidden",
        }}
      >
        <div className={styles.left_inner_wrapper}>
          <div className={styles.left_corner_buttons}>
            <img
              onClick={closeFolderContent}
              className={styles.left_corner_button_img}
              src="/images/icons/left_arrow.png"
              alt="icns"
            />
          
          </div>
          <div className={styles.left_menu_wrapper}>
         <br></br>
            <ul className={styles.left_ul}>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/star.png"
                  alt="star"
                />
                <br></br>
                <p className={styles.left_li_text}></p>
              </li>
              
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/file.png"
                  alt="file"
                />
                <br></br>
                <p className={styles.left_li_text}></p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/clock.png"
                  alt="clock"
                />
                <br></br>
                <p className={styles.left_li_text}></p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/file.png"
                  alt="file"
                />
                <br></br>
                <p className={styles.left_li_text}></p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/files.png"
                  alt="files"
                />
                <br></br>
                <p className={styles.left_li_text}></p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/folder.png"
                  alt="folder"
                />
                <br></br>
                <p className={styles.left_li_text}></p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/download.png"
                  alt="download"
                />
                <br></br>
                <p className={styles.left_li_text}></p>
              </li>
            </ul>
            
            <ul className={styles.left_ul}>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/cloud.png"
                  alt="cloud"
                />
                <p className={styles.left_li_text}></p>
              </li>
            </ul>
           
            <ul className={styles.left_ul}>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/orangeTag.png"
                  alt="orangeTag"
                />
                <br></br>
                <p className={styles.left_li_text}></p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/blueTag.png"
                  alt="blueTag"
                />
                <br></br>
                <p className={styles.left_li_text}></p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/greenTag.png"
                  alt="greenTag"
                />
                <br></br>
                <p className={styles.left_li_text}></p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/images/blueicons/allTags.png"
                  alt="allTags"
                />
                <br></br>
                <p className={styles.left_li_text}></p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right_inner_wrapper}>
          <div className={styles.right_top_bar}>
            <div className={styles.right_top_bar_left}>
           
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
          <S.ContainerContact id="contact">
            <S.Title>👋🏽 Contact with me</S.Title>
            <S.ContainerForm>
                {successSendForm ? (
                    <S.SuccessMessage>The form was sent succesfully</S.SuccessMessage>
                ) : (
                    <S.Form onSubmit = {onSubmit} ref={form}>
                        <S.InputForm
                            placeholder="Your name"
                            type="text"
                            name="name"
                            onChange={(e) =>
                                setContactDates({...contactDates, name: e.target.value})
                            }
                            value={contactDates.name}
                        />
                        <S.InputForm
                            placeholder="email"
                            type="email"
                            name="email"
                            onChange={(e) =>
                                setContactDates({...contactDates, email: e.target.value})
                            }
                            value={contactDates.email}
                        />
                        <S.TextArea
                            placeholder="Write your message"
                            name="message"
                            onChange={(e) =>
                                setContactDates({...contactDates, message:e.target.value})
                            }
                            value={contactDates.message}
                        />
                        <S.ContainerConditions>
                            <input
                                type="checkbox"
                                onChange={(e) =>
                                    setContactDates({
                                        ...contactDates,
                                        checkedTerms: e.target.checked,
                                    })
                                }
                            />
                            
                            <span> Accept the terms and conditions</span>
                        </S.ContainerConditions>
                        <S.Button type="submit">Send</S.Button>
                    </S.Form>
                )}
                {emptyInputs && (
                    <p>You should fill all the inputs and accept the terms</p>
                )}
                {errorSendForm && (
                    <S.TextError>There was an error, try it later</S.TextError>
                )}
                        
            </S.ContainerForm>
        </S.ContainerContact>

        </div>
      </div>
    </>
  );
};

export default FolderContent;
