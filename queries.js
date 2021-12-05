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
        id
        status
        videoURI
        desc
        userId
        user {
          id
          username
          email
          ppURI
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
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
          id
          status
          videoURI
          desc
          userId
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
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      status
      videoURI
      desc
      userId
      user {
        id
        username
        email
        ppURI
        posts {
          id
          status
          videoURI
          desc
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
        userId
        user {
          id
          username
          email
          ppURI
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
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      desc
      links
      tags
      projectID
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        desc
        links
        tags
        projectID
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
      pinderID
      pingMessage
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
        pinderID
        pingMessage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
