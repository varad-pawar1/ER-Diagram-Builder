// import "./EditorNavCompo.css";

// const EditorNavCompo = () => {

//     function shareBtnClicked(){
//         print()
//     }


//   return (
//     <nav className="pNav">
//       <div className="pNavContainer">
//         <div className="pNavLogoFileShare">
//           <h3 style={{cursor:"default"}}>LOGO</h3>
//           <p style={{cursor:"pointer"}}>FILE</p>
//           <p style={{cursor:"pointer"}} onClick={shareBtnClicked}>SHARE</p>
//         </div>

//         <div className="pNavCenter">
//           <p>
//             <span className="lightGray">DIAGRAMS &gt; </span> NAME
//           </p>
//         </div>

//         <div className="pNavSave">
//           <select name="save" id="save" aria-placeholder="save">
//             <option value="" hidden>
//               SAVE
//             </option>
//             <option value="png">PNG</option>
//             <option value="svg">SVG</option>
//             <option value="jpeg">JPEG</option>
//           </select>

//           <p className="pNavProfileLogo">vv</p>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default EditorNavCompo;


import React, { useState } from 'react';
import "./EditorNavCompo.css";

const EditorNavCompo = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  function shareBtnClicked() {
    print();
  }

  function toggleDropdown() {
    setDropdownVisible(!isDropdownVisible);
  }

  return (
    <nav className="pNav">
      <div className="pNavContainer">
        <div className="pNavLogoFileShare">
          <h3 style={{cursor:"default"}}>LOGO</h3>
          <p style={{cursor:"pointer"}}>FILE</p>
          <p style={{cursor:"pointer"}} onClick={shareBtnClicked}>SHARE</p>
        </div>

        <div className="pNavCenter">
          <p>
            <span className="lightGray">DIAGRAMS &gt; </span> NAME
          </p>
        </div>

        <div className="pNavSave">
          <select name="save" id="save" aria-placeholder="save">
            <option value="" hidden>
              SAVE
            </option>
            <option value="png">PNG</option>
            <option value="svg">SVG</option>
            <option value="jpeg">JPEG</option>
          </select>

          <div className="profile-container">
            <p
              className="pNavProfileLogo"
              style={{ cursor: "pointer" }}
              onClick={toggleDropdown}
            >
              v
            </p>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <p>Profile</p>
                <p>Sign Out</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EditorNavCompo;


