/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreatePing = /* GraphQL */ `
  subscription OnCreatePing {
    onCreatePing {
      id
      pinderID
      pingMessage
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePing = /* GraphQL */ `
  subscription OnUpdatePing {
    onUpdatePing {
      id
      pinderID
      pingMessage
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePing = /* GraphQL */ `
  subscription OnDeletePing {
    onDeletePing {
      id
      pinderID
      pingMessage
      createdAt
      updatedAt
    }
  }
`;
