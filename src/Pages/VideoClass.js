import React from "react";
import "./Gallery.css";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      isModalOpen: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovering: true });
  };

  handleMouseLeave = () => {
    this.setState({
      isHovering: false,
    });
  };

  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  // Add a handler for clicking outside of the modal to close it
  handleOutsideClick = (event) => {
    const modalBG = document.querySelector(".modal-bg");
    if (event.target === modalBG) {
      this.handleModalClose();
    }
  };

  render() {
    const { isHovering, isModalOpen } = this.state;
    const { imgs, projectNames } = this.props;

    return (
      <div
        className="image-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="image-wrapper ">
          <div>
            {/* <video autoPlay muted loop> */}
            <video
              src={imgs}
              style={{ margin: "0" }}
              className={`carouselImage ${isHovering ? "active" : ""}`}
              alt="static"
              autoPlay
              muted
              loop
              onClick={this.handleModalOpen}
            />
            {this.state.isHovering && (
              <div className=" img-name animate__animated animate__zoomIn animate__faster">
                {projectNames}
              </div>
            )}
            {/* </video> */}
          </div>
        </div>

        {/* Clicking and Enlarging */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-bg" onClick={this.handleOutsideClick}></div>
            <video autoPlay muted loop src={imgs} alt="static" />
          </div>
        )}
      </div>
    );
  }
}

export default Video;
