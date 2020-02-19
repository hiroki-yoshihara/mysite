var showTab = function(selector){
	console.log('showtab : ' + selector);
  
  $('.tabs-menu div').removeClass('active');
  $("div[id="+`${selector}`+"]").addClass('active');

  $('.tabs-content > div').hide();
  
  //IF文
  let tabContentId = ''
  if(selector === 'tab-menu-a') {
      tabContentId = 'tabs-a'
  } else if(selector === 'tab-menu-b') {
  	 tabContentId = 'tabs-b'
  } else {
  	 tabContentId = 'tabs-c'
  }
  
  $('#' + tabContentId).show()
}

$('.tabs-menu div').on('click', (e) => {
  e.preventDefault();
  const selector = $(e.target).attr('id');
  console.log('event : ' + selector);
  showTab(selector);
});

showTab('tab-menu-a');