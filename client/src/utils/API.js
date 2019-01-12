import axios from "axios";

//Api query database

export default {
  // Gets all books
  getHome: function() {
    return axios.get("/api/home");
  },
  // // Gets the book with the given id
  // getHome: function(id) {
  //   return axios.get("/api/home/" + id);
  // },
  // Deletes the book with the given id
  deleteHome: function(id) {
    return axios.delete("/api/home/" + id);
  },
  // Saves a book to the database
  saveHome: function(bookData) {
    return axios.post("/api/home", bookData);
  },

  

  // Gets all Blogs
  getBlogs: function() {
    return axios.get("/api/blog");
  },
  // Gets the book with the given id
  getBlog: function(id) {
    return axios.get("/api/blog/" + id);
  },
  // Deletes the book with the given id
  deleteBlog: function(id) {
    return axios.delete("/api/blog/" + id);
  },
  // Saves a book to the database
  saveBlog: function(blogData) {
    return axios.post("/api/blog", blogData);
  },


 
  //Get all forums
getForums: function() {
  return axios.get("/api/forum");
},
// Gets the book with the given id
getForum: function(id) {
  return axios.get("/api/forum/" + id);
},
// Deletes the book with the given id
deleteForum: function(id) {
  return axios.delete("/api/forum/" + id);
},
// Saves a book to the database
saveForum: function(forumData) {
  return axios.post("/api/forum", forumData);
},


  // Gets all Meetups
  getMeetups: function() {
    return axios.get("/api/meetups");
  },
  // Gets the book with the given id
  getMeetup: function(id) {
    return axios.get("/api/meetups/" + id);
  },
  // Deletes the book with the given id
  deleteMeetup: function(id) {
    return axios.delete("/api/meetups/" + id);
  },
  // Saves a book to the database
  saveMeetup: function(meetupData) {
    return axios.post("/api/meetups", meetupData);
  },

 
  // Gets all Resources
  getResources: function() {
    return axios.get("/api/resources");
  },
  // Gets the book with the given id
  getResource: function(id) {
    return axios.get("/api/resources/" + id);
  },
  // Deletes the book with the given id
  deleteResource: function(id) {
    return axios.delete("/api/resources/" + id);
  },
  // Saves a book to the database
  saveResource: function(resourceData) {
    return axios.post("/api/resources", resourceData);
  }

  
};