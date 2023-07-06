import React from "react";
import "./Gallery.css";

class Static extends React.Component {
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
            <img
              src={imgs}
              className={`carouselImage ${isHovering ? "active" : ""}`}
              alt="static"
              onClick={this.handleModalOpen}
            />
            {/* {this.state.isHovering && (
              <div className=" img-name animate__animated animate__zoomIn animate__faster">
                {projectNames}
              </div>
            )} */}
          </div>
        </div>

        {/* Clicking and Enlarging */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-bg" onClick={this.handleOutsideClick}></div>
            <img src={imgs} alt="static" />
          </div>
        )}
      </div>
    );
  }
}

export default Static;
