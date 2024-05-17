parasails.registerPage('index', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    //…
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    //…
    console.log('::index:::AT---> beforeMount');
  },
  mounted: async function(){
    //this._setHeroHeight();
    console.log('::index:::AT---> mounted');
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    _testBtn: async function(btn){
      console.log(' Btn ', btn, ', @Index.page, Time:: ->', (new Date()).toLocaleTimeString()); 
      this._toggleChatWindow();     
    },

    _toggleChatWindow: async function(){
      let chatWindow = $('#chat-window-contaier');
      if(chatWindow.attr('class')==='chat-window-hidden'){
        chatWindow.attr('class', 'chat-window');
      }else{
        chatWindow.attr('class', 'chat-window-hidden');
      }
    },

    begoneDemon: async function(){
      console.log('demon is gone!');
    }


  }
});
