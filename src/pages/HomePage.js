import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

const HomePage = () => {
  const { posts } = useSelector((store) => store);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <Container key={post.id}>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <Link to={`/post/${post.id}`}>
                    {" "}
                    {post.id}. {post.title}{" "}
                  </Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              </Card.Body>
            </Card>
            <br />
          </div>
        </Container>
      ))}
    </div>
  );
};

export default HomePage;
