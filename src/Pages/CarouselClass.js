import React from "react";
import "./Gallery.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      isHovering: false,
      isModalOpen: false, // Add a state for tracking whether the modal is open
    };
    this.intervalId = null;
  }

  startInterval = () => {
    const { imgs } = this.props;
    const { isHovering } = this.state;
    if (isHovering) {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({
          currentImageIndex: (prevState.currentImageIndex + 1) % imgs.length,
        }));
      }, 1500);
    } else {
      this.setState({
        currentImageIndex: 0,
        isHovering: false,
      });
      clearInterval(this.intervalId);
    }
  };

  handleMouseEnter = () => {
    this.setState({ isHovering: true }, () => {
      this.startInterval();
    });
  };

  handleMouseLeave = () => {
    this.setState({
      currentImageIndex: 0,
      isHovering: false,
    });
    clearInterval(this.intervalId);
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
      this.setState({
        currentImageIndex: 0,
        isHovering: false,
      });
      clearInterval(this.intervalId);
    }
  };

  render() {
    const { currentImageIndex, isModalOpen } = this.state;
    const { imgs, projectNames } = this.props;

    return (
      <div
        className="image-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="image-wrapper">
          {imgs.map((image, index) => (
            <div>
              <img
                key={index}
                src={image}
                className={`carouselImage ${
                  index === currentImageIndex ? "active" : ""
                }`}
                alt="carousel"
                onClick={this.handleModalOpen}
              />
              {this.state.isHovering && (
                <div className=" img-name animate__animated animate__zoomIn animate__faster">
                  {projectNames}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Clicking and Enlarging */}
        <div>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-bg" onClick={this.handleOutsideClick}></div>
              <img
                src={imgs[currentImageIndex]}
                alt="modal"
                // onClick={this.handleOutsideClick}
              />
              {/* <p>A wireframe made in 2023 UBC NwHacks</p> */}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Carousel;
