let posts = [
  {
    id: 1,
    title: "title1",
    content: "content1",
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
  },
  {
    id: 3,
    title: "title3",
    content: "content3",
  },
];

// 삽입
let add = {
  id: 4,
  title: "title4",
  content: "content4",
};

let post = [...posts, add];

console.log(post);

// 삭제
let id = 2;

let del = posts.filter((post) => post.id !== id);

console.log(del);

// 수정
let update = {
  id: 2,
  title: "title123",
  content: "content123",
};

post = [...posts, update];

console.log(post);

let updateOne = [
  posts.map((post) => {
    if (post.id === update.id) {
      return { id: 2, title: "title123", content: "content123" };
    } else {
      return post;
    }
  }),
];

console.log(updateOne);
