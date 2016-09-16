import React from 'react';

const cameraSvg = <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M64 96h64v64H64V96zM96 192c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32S113.7 192 96 192zM448 304c0 61.8-50.2 112-112 112s-112-50.2-112-112 50.2-112 112-112S448 242.2 448 304zM416 304c0-44.1-35.9-80-80-80s-80 35.9-80 80 35.9 80 80 80S416 348.1 416 304zM512 96v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64V0h64v32h320C483.3 32 512 60.7 512 96zM160 480V64H64c-17.6 0-32 14.4-32 32v352c0 17.7 14.4 32 32 32H160zM480 96c0-17.6-14.3-32-32-32H192v416h256c17.7 0 32-14.3 32-32V96zM416 96h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32S433.7 96 416 96z"/></svg>;

// .bebo-upload svg {
//     margin: auto;
//     height: 90%;
//     width: 90%;
// }
//
import styles from './styles.css';

class Upload extends React.Component {

  // fileUpload(e) {
  //   var that = this;
  //   var file = e.target.files[0];
  //   var reader = new FileReader();
  //   reader.onloadend = function () {
  //     var url = reader.result;
  //     that.setState({editState: "uploading",
  //                    image_url: url});
  //     that.props.uploadImage(url)
  //     .then(function() {
  //       that.setState({editState: false,
  //                      image_url: null});
  //     }).catch(function(err) {
  //       console.error("upload failed", err);
  //       that.setState({editState: false,
  //                      image_url: null});
  //     });
  //   }
  //   reader.onerror = function(err) {
  //     console.error("error reading file", err);
  //     that.setState({editState: false,
  //                    image_url: null});
  //   }
  //   reader.readAsDataURL(file);
  // }

  renderButton() {
    // var style = { backgroundImage: 'url(' + this.props.me.image_url + ')'};
    // var uploadImage = cameraSvg;
    
      // var cameraStyle = { backgroundImage: 'url(' + "assets/img/icCamera.png" + ')'};

    var className = styles.beboUploader + (this.props.className && " " + this.props.className || "");
    return <div className={className}>
            {cameraSvg}
           </div>;
  }

  render() {
    return <div ref="test"/>
    // return this.renderButton();
      // var style = { backgroundImage: 'url(' + this.props.me.image_url + ')'};
      // var cameraStyle = { backgroundImage: 'url(' + "assets/img/icCamera.png" + ')'};
      // var className = "bebo-upload" + (this.props.className && " " + this.props.className || "");
    // return 
      // image = (
      //   <div className={className}>
      //     <div className="image" style={style} />
      //     <input id="file" type="file" onChange={this.fileUpload} accept="image/*" />
      //     <div className="fileOverlay" style={cameraStyle} />
      //   </div>)
  }
}

Upload.displayName = 'Uploader';

export default Upload;
