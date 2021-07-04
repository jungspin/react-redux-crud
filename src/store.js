// 상태와 액션이 있어야함
// 상태가 하나가 아닐 수 있기때문에 {}

// 글쓰기, 글수정, 글삭제
const DO_POST = "DO_POST";
const DO_UPDATE = "DO_UPDATE";
const DO_DELETE = "DO_DELETE";

// 액션 -> 타입을 리턴
// export 붙으면 외부에서 접근 가능
export const doPost = (post) => {
  return {
    type: DO_POST,
    payload: post,
  };
};

export const doUpdate = (post) => {
  console.log("update???!!");
  //console.log(post.id);
  //console.log(2, initstate.posts);

  return {
    type: DO_UPDATE,
    payload: post,
  };
};

// let updatePost = [
//   initstate.posts.filter((p) => {
//     if (p.id === Number(post.id)) {
//       return {
//         id: post.id,
//         titile: post.title,
//         content: post.content,
//       };
//     } else {
//       return post;
//     }
//   }),
// ];

export const doDelete = (id) => {
  console.log("delete?!");
  console.log(1, id);
  console.log(2, initstate.posts); // 여기서 부터 오류가 나는거같애
  // console.log("delete?!" + id);
  return {
    type: DO_DELETE,
    payload: id,
  };
};

// 상태

const initstate = {
  posts: [
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
  ],
};

// 외부에서는 결국 얘만 때림
// 얘는 직접 호출 못함. 다른걸 통해서 때릴거임
// 얘를 직접 호출하면 상태만 변경되고 동기화는 안됨
// 상태 만들고 -> 액션 만들고 (타입 만들기) -> reducer
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case DO_POST:
      return {
        posts: [...state.posts, action.payload],
      };
    case DO_UPDATE:
      return {
        posts: [
          // ...state.posts,
          ...state.posts.map((post) => {
            if (post.id === Number(action.payload.id)) {
              return {
                id: Number(action.payload.id),
                title: action.payload.title,
                content: action.payload.content,
              };
            } else {
              return post;
            }
          }),
        ],
      };
    case DO_DELETE:
      return {
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

// 외부에서 때릴 수 있음
export default reducer;
