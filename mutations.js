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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createPing = /* GraphQL */ `
  mutation CreatePing(
    $input: CreatePingInput!
    $condition: ModelPingConditionInput
  ) {
    createPing(input: $input, condition: $condition) {
      id
      pinderID
      pingMessage
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
      pinderID
      pingMessage
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
      pinderID
      pingMessage
      createdAt
      updatedAt
    }
  }
`;
