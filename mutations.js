/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      fullName
      email
      ppURI
      posts {
        items {
          id
          status
          videoURI
          desc
          userID
          likes
          comment
          createdAt
          updatedAt
        }
        nextToken
      }
      location
      job
      bio
      skills
      dirName
      dirLink
      ssName
      ssLink
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      fullName
      email
      ppURI
      posts {
        items {
          id
          status
          videoURI
          desc
          userID
          likes
          comment
          createdAt
          updatedAt
        }
        nextToken
      }
      location
      job
      bio
      skills
      dirName
      dirLink
      ssName
      ssLink
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      fullName
      email
      ppURI
      posts {
        items {
          id
          status
          videoURI
          desc
          userID
          likes
          comment
          createdAt
          updatedAt
        }
        nextToken
      }
      location
      job
      bio
      skills
      dirName
      dirLink
      ssName
      ssLink
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      status
      videoURI
      desc
      userID
      user {
        id
        username
        fullName
        email
        ppURI
        posts {
          nextToken
        }
        location
        job
        bio
        skills
        dirName
        dirLink
        ssName
        ssLink
        createdAt
        updatedAt
      }
      likes
      comment
      pings {
        items {
          id
          pingerID
          pingMessage
          toID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          senderusername
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      status
      videoURI
      desc
      userID
      user {
        id
        username
        fullName
        email
        ppURI
        posts {
          nextToken
        }
        location
        job
        bio
        skills
        dirName
        dirLink
        ssName
        ssLink
        createdAt
        updatedAt
      }
      likes
      comment
      pings {
        items {
          id
          pingerID
          pingMessage
          toID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          senderusername
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      status
      videoURI
      desc
      userID
      user {
        id
        username
        fullName
        email
        ppURI
        posts {
          nextToken
        }
        location
        job
        bio
        skills
        dirName
        dirLink
        ssName
        ssLink
        createdAt
        updatedAt
      }
      likes
      comment
      pings {
        items {
          id
          pingerID
          pingMessage
          toID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          senderusername
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      senderusername
      postID
      post {
        id
        status
        videoURI
        desc
        userID
        user {
          id
          username
          fullName
          email
          ppURI
          location
          job
          bio
          skills
          dirName
          dirLink
          ssName
          ssLink
          createdAt
          updatedAt
        }
        likes
        comment
        pings {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      senderusername
      postID
      post {
        id
        status
        videoURI
        desc
        userID
        user {
          id
          username
          fullName
          email
          ppURI
          location
          job
          bio
          skills
          dirName
          dirLink
          ssName
          ssLink
          createdAt
          updatedAt
        }
        likes
        comment
        pings {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      senderusername
      postID
      post {
        id
        status
        videoURI
        desc
        userID
        user {
          id
          username
          fullName
          email
          ppURI
          location
          job
          bio
          skills
          dirName
          dirLink
          ssName
          ssLink
          createdAt
          updatedAt
        }
        likes
        comment
        pings {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPing = /* GraphQL */ `
  mutation CreatePing(
    $input: CreatePingInput!
    $condition: ModelPingConditionInput
  ) {
    createPing(input: $input, condition: $condition) {
      id
      pingerID
      pingMessage
      toID
      postID
      post {
        id
        status
        videoURI
        desc
        userID
        user {
          id
          username
          fullName
          email
          ppURI
          location
          job
          bio
          skills
          dirName
          dirLink
          ssName
          ssLink
          createdAt
          updatedAt
        }
        likes
        comment
        pings {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePing = /* GraphQL */ `
  mutation UpdatePing(
    $input: UpdatePingInput!
    $condition: ModelPingConditionInput
  ) {
    updatePing(input: $input, condition: $condition) {
      id
      pingerID
      pingMessage
      toID
      postID
      post {
        id
        status
        videoURI
        desc
        userID
        user {
          id
          username
          fullName
          email
          ppURI
          location
          job
          bio
          skills
          dirName
          dirLink
          ssName
          ssLink
          createdAt
          updatedAt
        }
        likes
        comment
        pings {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePing = /* GraphQL */ `
  mutation DeletePing(
    $input: DeletePingInput!
    $condition: ModelPingConditionInput
  ) {
    deletePing(input: $input, condition: $condition) {
      id
      pingerID
      pingMessage
      toID
      postID
      post {
        id
        status
        videoURI
        desc
        userID
        user {
          id
          username
          fullName
          email
          ppURI
          location
          job
          bio
          skills
          dirName
          dirLink
          ssName
          ssLink
          createdAt
          updatedAt
        }
        likes
        comment
        pings {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
