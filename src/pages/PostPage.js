import { useState } from "react";
import { useDispatch } from "react-redux";
import { doPost } from "../store";
import { Container, Form, Button } from "react-bootstrap";

const PostPage = (props) => {
  const dispatcher = useDispatch();

  //console.log(1, posts);

  const [postDto, setPostDto] = useState({
    id: Number(""),
    title: "",
    content: "",
  });

  console.log(postDto);

  const changeValue = (e) => {
    setPostDto({
      ...postDto,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatcher(doPost(postDto));
    props.history.push("/");
  };

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>id</Form.Label>
          <Form.Control
            name="id"
            type="text"
            placeholder="Enter id"
            onChange={changeValue}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Enter title"
            onChange={changeValue}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            name="content"
            type="text"
            placeholder="Enter content"
            onChange={changeValue}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={submit}>
          글쓰기
        </Button>
      </Form>
    </Container>
  );
};

export default PostPage;
