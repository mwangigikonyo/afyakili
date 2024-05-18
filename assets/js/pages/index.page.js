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

    _popupWindow: async function(_window_id){
      console.log(' @ _popupWindow  _window_id-> [', _window_id, '], @Index.page, Time:: ->', (new Date()).toLocaleTimeString()); 
      //Hide all others
      $('.popup-window').hide();
      $('#'+_window_id).fadeIn();
    },

    _testBtn: async function(btn){
      this._toggleChatWindow(); 
      this._toggleLandingPageDivVisibility();    
    },

    _toggleLandingPageDivVisibility: async function(){
      const landingpageDiv = $('#landingpageDiv');
      if(landingpageDiv.css('display')==='none'){
        landingpageDiv.fadeIn();
      }else{
        landingpageDiv.fadeOut();
      }
    },

    _toggleChatWindow: async function(){
      const chatWindow = $('#chat-window-contaier');
      console.log('chatWindow.css(\'display\')',chatWindow.css('display'));
      if(chatWindow.css('display')==='none'){
        chatWindow.fadeIn();
      }else{
        chatWindow.fadeOut();
      }
    },

    begoneDemon: async function(){
      console.log('demon is gone!');
    }


  }
});
