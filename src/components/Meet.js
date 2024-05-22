import { InlineWidget } from "react-calendly";
import { Container } from "theme-ui";

const Meet = () => {
  return (
    <Container>
      <div className="lg:flex my-40 gap-x-3">
        <div className="lg:w-2/4">
          {" "}
          <InlineWidget url="https://calendly.com/fahimmuntashir07/30min" />
        </div>

        <div className="w-2/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor
          laboriosam delectus omnis sint, consectetur recusandae rerum tempora
          provident illum harum cupiditate, aperiam itaque molestiae alias!
          Facere enim excepturi soluta alias distinctio porro quaerat, pariatur
          animi, ipsa laboriosam esse eligendi odio quod neque reiciendis
          laborum sed quas dolorem accusantium! Mollitia?
        </div>
      </div>
    </Container>
  );
};

export default Meet;
