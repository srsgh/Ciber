/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        ppURI
        posts {
          nextToken
        }
        location
        bio
        skills
        dirName
        dirLink
        ssName
        ssLink
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      status
      videoURI
      desc
      userID
      user {
        id
        username
        email
        ppURI
        posts {
          nextToken
        }
        location
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        videoURI
        desc
        userID
        user {
          id
          username
          email
          ppURI
          location
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
          email
          ppURI
          location
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          likes
          comment
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPing = /* GraphQL */ `
  query GetPing($id: ID!) {
    getPing(id: $id) {
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
          email
          ppURI
          location
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
export const listPings = /* GraphQL */ `
  query ListPings(
    $filter: ModelPingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          likes
          comment
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
