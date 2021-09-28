import React, { Component } from "react";
import FileUploadIcon from "@material-ui/icons/FileUpload";
import "./NewPostForm.css";

export class NewPostForm extends Component {
  state = {
    uploadImage:
      "https://sweetnitro.com/public/uploads/avatars/5030947003039744.jpg",
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ uploadImage: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { uploadImage } = this.state;
    return (
      <div className="newPostContainer">
        <form className="postForm" onSubmit>
          <div className="postInputs">
            <div className="postTitle" htmlFor="albumtitle">
              Album title *
            </div>
            <input type="text" required name="text" className="post-input" />
            <div className="postTitle" htmlFor="artistname">
              Artist name *
            </div>
            <input type="text" required name="text" className="post-input" />
            <div className="postTitle" htmlFor="catalog number">
              Catalog number *
            </div>
            <input type="text" required name="text" className="post-input" />
            <button type="submit" className="share-btn">
              Share
            </button>
          </div>
          <div className="fileUploadContainer">
            <img src={uploadImage} alt="" className="imgholder" />
            <div className="items">
              <FileUploadIcon className="uploadIcon" />
              <input
                type="file"
                name="image-upload"
                accept="image/*"
                className="custom-file-input"
                onChange={this.imageHandler}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPostForm;
