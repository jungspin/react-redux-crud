import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doUpdate } from "../store";
import { Container, Form, Button } from "react-bootstrap";

const UpdatePage = (props) => {
  //console.log(props);
  const { posts } = useSelector((store) => store);
  const id = props.match.params.id;
  const dispatcher = useDispatch();

  const post = posts.filter((post) => post.id === Number(id));

  const [postDto, setPostDto] = useState({
    id: Number(id),
    title: post[0].title,
    content: post[0].content,
  });

  const changeValue = (e) => {
    setPostDto({
      ...postDto,
      [e.target.name]: e.target.value,
    });
  };

  const update = (e) => {
    e.preventDefault();
    dispatcher(doUpdate(postDto));
    //console.log(5, posts);
    props.history.push("/");
  };

  //console.log(1, postDto);

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>id</Form.Label>
          <Form.Control
            name="id"
            type="text"
            value={postDto.id}
            readOnly="readOnly"
            onChange={changeValue}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={postDto.title}
            onChange={changeValue}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            name="content"
            type="text"
            value={postDto.content}
            onChange={changeValue}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={update}>
          수정하기
        </Button>
      </Form>
    </Container>
  );
};

export default UpdatePage;
