module.exports = {


  friendlyName: 'View chat-window',


  description: 'Display "Chat Window" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/chat-window/chat-window'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
