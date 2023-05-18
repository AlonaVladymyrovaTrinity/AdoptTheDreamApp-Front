import "./NotFound.css";
import StyledBackButton from "../BackButton/StyledBackButton";
import imgPageNotFound from "../../../images/404-error.jpg";

function PageNotFound() {
  return (
    <>
      <div>
        <h1 className={"header"}>Page not found</h1>
      </div>
      {/* Renders a custom StyledBackButton component with a link to the home page, 
      styled by default with a className "link-color" color, and text "Go to home page" 
      which passed to the component as a child */}
      <StyledBackButton linkName={"/"} children className={"link-color"}>
        <span>Go to home page</span>
      </StyledBackButton>
      <div className={"container"}>
        <div className={["not-found-wrapper"]}>
          <div>
            {/* Header with error message "The requested page does not exist." and an image of a 404 Error to indicate 
        that the requested page could not be found. */}
            <h2>The requested page does not exist.</h2>
            <img
              className={["img-page-not-found"]}
              src={imgPageNotFound}
              alt="Page not found"
            />
            {/* Renders a custom StyledBackButton component with a link to the home page, 
             styled by default with a className "link-color" color, and text "Go to home page" 
             which passed to the component as a child */}
            <StyledBackButton linkName={"/"} children className={"link-color"}>
              <span>Go to home page</span>
            </StyledBackButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
