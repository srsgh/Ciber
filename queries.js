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
        socials {
          nextToken
        }
        projects {
          nextToken
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
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        posts {
          nextToken
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
export const getSocials = /* GraphQL */ `
  query GetSocials($id: ID!) {
    getSocials(id: $id) {
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
export const listSocials = /* GraphQL */ `
  query ListSocials(
    $filter: ModelSocialsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSocials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        social
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
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        projects {
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
export const getPostCategories = /* GraphQL */ `
  query GetPostCategories($id: ID!) {
    getPostCategories(id: $id) {
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
export const listPostCategories = /* GraphQL */ `
  query ListPostCategories(
    $filter: ModelPostCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        categoryID
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
        category {
          id
          label
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
export const getProjectTags = /* GraphQL */ `
  query GetProjectTags($id: ID!) {
    getProjectTags(id: $id) {
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
export const listProjectTags = /* GraphQL */ `
  query ListProjectTags(
    $filter: ModelProjectTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectID
        tagID
        project {
          id
          name
          desc
          link
          userID
          createdAt
          updatedAt
        }
        tag {
          id
          label
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
