import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { doDelete } from "../store";
import { Button, Card, Container } from "react-bootstrap";

const DetailPage = (props) => {
  const id = props.match.params.id;
  const { posts } = useSelector((store) => store);
  const dispatcher = useDispatch();

  const post = posts.filter((post) => post.id === Number(id));

  const delOne = (e) => {
    e.preventDefault();
    dispatcher(doDelete(post[0].id));
    //console.log(3, post[0].id);
    props.history.push("/");
  };

  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {post[0].id}. {post[0].title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>{post[0].content}</Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Link to={`/post/${post[0].id}/update`}>
        <Button>수정하기</Button>
      </Link>{" "}
      &nbsp;
      <Button onClick={delOne}>삭제하기</Button>
    </Container>
  );
};

export default DetailPage;
