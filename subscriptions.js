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
      socials {
        items {
          id
          social
          link
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      projects {
        items {
          id
          name
          desc
          link
          userID
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      socials {
        items {
          id
          social
          link
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      projects {
        items {
          id
          name
          desc
          link
          userID
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      socials {
        items {
          id
          social
          link
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      projects {
        items {
          id
          name
          desc
          link
          userID
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
        socials {
          nextToken
        }
        projects {
          nextToken
        }
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
      categories {
        items {
          id
          postID
          categoryID
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
        socials {
          nextToken
        }
        projects {
          nextToken
        }
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
      categories {
        items {
          id
          postID
          categoryID
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
        socials {
          nextToken
        }
        projects {
          nextToken
        }
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
      categories {
        items {
          id
          postID
          categoryID
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      label
      posts {
        items {
          id
          postID
          categoryID
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      label
      posts {
        items {
          id
          postID
          categoryID
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      label
      posts {
        items {
          id
          postID
          categoryID
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
export const onCreatePing = /* GraphQL */ `
  subscription OnCreatePing {
    onCreatePing {
      id
      pingerID
      pingMessage
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
        categories {
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
export const onUpdatePing = /* GraphQL */ `
  subscription OnUpdatePing {
    onUpdatePing {
      id
      pingerID
      pingMessage
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
        categories {
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
export const onDeletePing = /* GraphQL */ `
  subscription OnDeletePing {
    onDeletePing {
      id
      pingerID
      pingMessage
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
        categories {
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
export const onCreateSocials = /* GraphQL */ `
  subscription OnCreateSocials {
    onCreateSocials {
      id
      social
      link
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
        socials {
          nextToken
        }
        projects {
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
export const onUpdateSocials = /* GraphQL */ `
  subscription OnUpdateSocials {
    onUpdateSocials {
      id
      social
      link
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
        socials {
          nextToken
        }
        projects {
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
export const onDeleteSocials = /* GraphQL */ `
  subscription OnDeleteSocials {
    onDeleteSocials {
      id
      social
      link
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
        socials {
          nextToken
        }
        projects {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      id
      name
      desc
      link
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
        socials {
          nextToken
        }
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      tags {
        items {
          id
          projectID
          tagID
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      id
      name
      desc
      link
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
        socials {
          nextToken
        }
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      tags {
        items {
          id
          projectID
          tagID
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      id
      name
      desc
      link
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
        socials {
          nextToken
        }
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      tags {
        items {
          id
          projectID
          tagID
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      label
      projects {
        items {
          id
          projectID
          tagID
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      label
      projects {
        items {
          id
          projectID
          tagID
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      label
      projects {
        items {
          id
          projectID
          tagID
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
        categories {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
        categories {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
        categories {
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
export const onCreatePostCategories = /* GraphQL */ `
  subscription OnCreatePostCategories {
    onCreatePostCategories {
      id
      postID
      categoryID
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
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      category {
        id
        label
        posts {
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
export const onUpdatePostCategories = /* GraphQL */ `
  subscription OnUpdatePostCategories {
    onUpdatePostCategories {
      id
      postID
      categoryID
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
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      category {
        id
        label
        posts {
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
export const onDeletePostCategories = /* GraphQL */ `
  subscription OnDeletePostCategories {
    onDeletePostCategories {
      id
      postID
      categoryID
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
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      category {
        id
        label
        posts {
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
export const onCreateProjectTags = /* GraphQL */ `
  subscription OnCreateProjectTags {
    onCreateProjectTags {
      id
      projectID
      tagID
      project {
        id
        name
        desc
        link
        userID
        user {
          id
          username
          email
          ppURI
          location
          bio
          skills
          createdAt
          updatedAt
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      tag {
        id
        label
        projects {
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
export const onUpdateProjectTags = /* GraphQL */ `
  subscription OnUpdateProjectTags {
    onUpdateProjectTags {
      id
      projectID
      tagID
      project {
        id
        name
        desc
        link
        userID
        user {
          id
          username
          email
          ppURI
          location
          bio
          skills
          createdAt
          updatedAt
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      tag {
        id
        label
        projects {
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
export const onDeleteProjectTags = /* GraphQL */ `
  subscription OnDeleteProjectTags {
    onDeleteProjectTags {
      id
      projectID
      tagID
      project {
        id
        name
        desc
        link
        userID
        user {
          id
          username
          email
          ppURI
          location
          bio
          skills
          createdAt
          updatedAt
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
      }
      tag {
        id
        label
        projects {
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
