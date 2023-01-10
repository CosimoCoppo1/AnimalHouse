import React, { useState, useRef } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { uploadImage, uploadPost } from "../ActionsPost/UploadAction";

const PostShare = ({setShared}) => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const serverPublic = "http://localhost:8000/images/";

  // handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };


  // handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();
    
    const newPost = {
      userId: localStorage.userName,
      desc: desc.current.value,
    };

    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      try {
       
        uploadImage(data)

        if(newPost.desc == ""){
          newPost.desc = " "
        }

      } catch (err) {
        console.log(err);
      }
    }

    
    uploadPost(newPost);

    setShared(true)
    
    resetShare();
  };

  
  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };

  
  return (
    <div className="PostShare">
      <img
        src={ serverPublic + "defaultProfile.png"}
        alt="Profile"
      />
      <div>
        <input
          type="text"
          placeholder="what's about animals?"
          required
          ref={desc}
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>

          <button
            className="buttonF ps-button"
            onClick={handleUpload}
          >
          Share
          </button>

          <div style={{ display: "none" }}>
            <input type="file" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
