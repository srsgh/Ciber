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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createPing = /* GraphQL */ `
  mutation CreatePing(
    $input: CreatePingInput!
    $condition: ModelPingConditionInput
  ) {
    createPing(input: $input, condition: $condition) {
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
export const updatePing = /* GraphQL */ `
  mutation UpdatePing(
    $input: UpdatePingInput!
    $condition: ModelPingConditionInput
  ) {
    updatePing(input: $input, condition: $condition) {
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
export const deletePing = /* GraphQL */ `
  mutation DeletePing(
    $input: DeletePingInput!
    $condition: ModelPingConditionInput
  ) {
    deletePing(input: $input, condition: $condition) {
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
export const createSocials = /* GraphQL */ `
  mutation CreateSocials(
    $input: CreateSocialsInput!
    $condition: ModelSocialsConditionInput
  ) {
    createSocials(input: $input, condition: $condition) {
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
export const updateSocials = /* GraphQL */ `
  mutation UpdateSocials(
    $input: UpdateSocialsInput!
    $condition: ModelSocialsConditionInput
  ) {
    updateSocials(input: $input, condition: $condition) {
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
export const deleteSocials = /* GraphQL */ `
  mutation DeleteSocials(
    $input: DeleteSocialsInput!
    $condition: ModelSocialsConditionInput
  ) {
    deleteSocials(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createPostCategories = /* GraphQL */ `
  mutation CreatePostCategories(
    $input: CreatePostCategoriesInput!
    $condition: ModelPostCategoriesConditionInput
  ) {
    createPostCategories(input: $input, condition: $condition) {
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
export const updatePostCategories = /* GraphQL */ `
  mutation UpdatePostCategories(
    $input: UpdatePostCategoriesInput!
    $condition: ModelPostCategoriesConditionInput
  ) {
    updatePostCategories(input: $input, condition: $condition) {
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
export const deletePostCategories = /* GraphQL */ `
  mutation DeletePostCategories(
    $input: DeletePostCategoriesInput!
    $condition: ModelPostCategoriesConditionInput
  ) {
    deletePostCategories(input: $input, condition: $condition) {
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
export const createProjectTags = /* GraphQL */ `
  mutation CreateProjectTags(
    $input: CreateProjectTagsInput!
    $condition: ModelProjectTagsConditionInput
  ) {
    createProjectTags(input: $input, condition: $condition) {
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
export const updateProjectTags = /* GraphQL */ `
  mutation UpdateProjectTags(
    $input: UpdateProjectTagsInput!
    $condition: ModelProjectTagsConditionInput
  ) {
    updateProjectTags(input: $input, condition: $condition) {
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
export const deleteProjectTags = /* GraphQL */ `
  mutation DeleteProjectTags(
    $input: DeleteProjectTagsInput!
    $condition: ModelProjectTagsConditionInput
  ) {
    deleteProjectTags(input: $input, condition: $condition) {
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
