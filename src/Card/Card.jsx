import profilePic from '../assets/profilePic.jpg';
import styles from './Card.module.css';

function Card() {
    return(
        <div className={styles.card}>
            <img className={styles.cardImg} src={profilePic} alt='profile picture'></img>
            <h2 className={styles.cardName}>Aaron LaLiberty</h2>
            <h3 className={styles.cardTitle}>Web Developer</h3>
            <p className={styles.cardText}>Student @ <a href='https://code-you.org/'>Code:You</a></p>
        </div>
    );
}

export default Card;


// TO MAKE THIS A POPUP ***********************************************
// import React, { useState } from "react";

// const PopupExample = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       {/* Link to open the popup */}
//       <a href="#" onClick={(e) => { e.preventDefault(); togglePopup(); }}>
//         Open Popup
//       </a>

//       {/* Popup box */}
//       {isOpen && (
//         <div style={popupStyles}>
//           <div style={popupContentStyles}>
//             <h2>Popup Content</h2>
//             <p>This is the content inside the popup!</p>
//             <button onClick={togglePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Basic styles for the popup
// const popupStyles = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const popupContentStyles = {
//   backgroundColor: "#fff",
//   padding: "20px",
//   borderRadius: "8px",
//   textAlign: "center",
// };

// export default PopupExample;
