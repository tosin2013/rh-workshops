//==========================================================================
// Cookies2 Init

if (typeof Cookies2 !== 'function') {
  var Cookies2 = Cookies.noConflict();
}

//==========================================================================
// cleanArray fn Init

if (typeof cleanArray !== 'function') {
  function cleanArray(actual) {
    const newArray = new Array();
    for (let i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  }
}

//==========================================================================
// Gravatar Processing

function getGravatarLink(email, size = 70) {
  const md5Email = md5(email.toLowerCase()).toString();
  return `https://www.gravatar.com/avatar/${md5Email}?s=${size}`;
}
function setGravatar(link) {
  if (link) {
    return jQuery('.pf-c-avatar').attr('src', link);
  }
  return jQuery('.pf-c-avatar').attr('src', '/img/img_avatar.svg');
}
function processGravatar(email) {
  if (email) {
    return setGravatar(getGravatarLink(email));
  }
  return setGravatar();
}

//==========================================================================
// User Name Processing

function setUserName(name = 'Student User') {
  return jQuery('.userNameData').text(name);
}

function showLoadingScreen(spinner = true) {
  jQuery('#loadingScreen').removeClass('pf-u-display-none');
  if (spinner) {
    jQuery('#loadingScreen .pf-c-spinner').removeClass('pf-u-display-none');
  }
}
function hideLoadingScreen() {
  setTimeout(function() {
    jQuery('#loadingScreen').addClass('pf-u-display-none');
  }, 250);
}

//==========================================================================
// Cookie Processing

function templateBakedCookies() {
  // Template out other Cookies...
  // console.log('templating cookies...');
  const bakedCookies = JSON.parse(Cookies2.get('bakedCookies', { path: '/' }));
  for (const key of Object.keys(bakedCookies)) {
    const cookieValStr = String(bakedCookies[key].cookie_value);
    if (cookieValStr.startsWith('[[') && cookieValStr.endsWith(']]')) {
      const findKey = bakedCookies[key].cookie_value.slice(2, -2);
      const newCookieVal = Cookies2.get(findKey, {
        path: Cookies2.get('active_workshop_path', { path: '/' }),
      });
      /*
      console.log(
        `found templated cookie ${
          bakedCookies[key].cookie_key
        }: ${findKey} with value ${newCookieVal} at path ${Cookies2.get(
          'active_workshop_path',
          { path: '/' }
        )}`
      );
      console.log(
        `resetting cookie: ${bakedCookies[key].cookie_key} - ${newCookieVal}`
      );
      */
      Cookies2.set(bakedCookies[key].cookie_key, newCookieVal, {
        expires: parseInt(bakedCookies[key].cookie_expiration),
        path: bakedCookies[key].cookie_path,
        // domain: bakedCookies[key].cookie_domain,
      });
    }
  }
  if (typeof pageLoadWorkshopFooterTest === 'function') {
    pageLoadWorkshopFooterTest();
  }
}

function readCookiesAndSetVisual() {
  if (Cookies2.get('student_email')) {
    processGravatar(Cookies2.get('student_email'));
  }
  if (Cookies2.get('student_name')) {
    setUserName(Cookies2.get('student_name'));
  }
  if (Cookies2.get('student_id')) {
    jQuery('#logoutBtn, #eventIDModalBtn').removeClass('pf-u-hidden');
    jQuery('#loginBtn').addClass('pf-u-hidden');
  }
  if (Cookies2.get('active_workshop_path', { path: '/' })) {
    templateBakedCookies();
    const wPath = cleanArray(window.location.pathname.split('/'));
    const basePath = `/${wPath[0]}/${wPath[1]}/`;
    if (Cookies2.get('active_workshop_path', { path: '/' }) === basePath) {
      jQuery('#workshopFooterDetails')
        .next()
        .addClass('pf-u-hidden');
    }

    jQuery('#eventIDModalBtn').addClass('pf-u-hidden');
    jQuery('#gotoWorkshopBtn').removeClass('pf-u-hidden');

    // Hide Workshop Setup nav if already configured
    jQuery("#page-expandable-nav-example-expandable-nav li a:contains('Workshop Setup & Configuration')").parent().addClass('pf-u-hidden');
    // Pagination Link Skip fix
    var prevSetupLinkText = jQuery("#page-expandable-nav-example-expandable-nav li a:contains('Workshop Setup & Configuration')").parent().prev().find('a').text();
    var prevSetupLink = jQuery("#page-expandable-nav-example-expandable-nav li a:contains('Workshop Setup & Configuration')").parent().prev().find('a');
    var nextSetupLink = jQuery("#page-expandable-nav-example-expandable-nav li a:contains('Workshop Setup & Configuration')").parent().next().find('a');
    const prevSetupLinkClass = jQuery("#page-expandable-nav-example-expandable-nav li a:contains('Workshop Setup & Configuration')").parent().prev().find('a').hasClass('pf-m-current');
    const nextSetupLinkClass = jQuery("#page-expandable-nav-example-expandable-nav li a:contains('Workshop Setup & Configuration')").parent().next().find('a').hasClass('pf-m-current');
    prevSetupLinkText = prevSetupLinkText.trim();
    if (prevSetupLinkClass) {
      jQuery('.pagination-toolbar .pf-u-float-right a').attr('href', nextSetupLink.attr('href'));
      jQuery('.pagination-toolbar .pf-u-float-right a span').html("Next: " + nextSetupLink.text() + " &rarr;");
    }
    if (nextSetupLinkClass) {
      jQuery('.pagination-toolbar .pf-u-float-left a').attr('href', prevSetupLink.attr('href'));
      jQuery('.pagination-toolbar .pf-u-float-left a span').html("&larr; Previous: " + prevSetupLink.text());
    }
    console.log(prevSetupLinkText);
  }
}
function navigateToActiveWorkshop() {
  window.location.href = Cookies2.get('active_workshop_path', { path: '/' });
}
function resetVisuals() {
  setUserName();
  processGravatar();
  jQuery('#logoutBtn, #eventIDModalBtn, #gotoWorkshopBtn').addClass(
    'pf-u-hidden'
  );
  jQuery('#loginBtn').removeClass('pf-u-hidden');
  if (typeof setWorkshopFooterData === 'function') {
    setWorkshopFooterData();
  }
}
function logStudentOut() {
  Cookies2.remove('student_email');
  Cookies2.remove('student_name');
  Cookies2.remove('student_name_id');
  Cookies2.remove('student_id');
  const workshop_path = Cookies2.get('active_workshop_path', { path: '/' });
  console.log(`found workshop_path: ${workshop_path}`);
  Cookies2.remove('seat_number');
  Cookies2.remove('seat_number', { path: '/' });
  Cookies2.remove('seat_number', { path: workshop_path });
  Cookies2.remove('userid');
  Cookies2.remove('userid', { path: '/' });
  Cookies2.remove('userid', { path: workshop_path });
  Cookies2.remove('domain');
  Cookies2.remove('domain', { path: '/' });
  Cookies2.remove('domain', { path: workshop_path });
  Cookies2.remove('prefix');
  Cookies2.remove('prefix', { path: '/' });
  Cookies2.remove('prefix', { path: workshop_path });
  Cookies2.remove('gitlab_fqdn');
  Cookies2.remove('gitlab_fqdn', { path: '/' });
  Cookies2.remove('gitlab_fqdn', { path: workshop_path });
  Cookies2.remove('studentPassword');
  Cookies2.remove('studentPassword', { path: '/' });
  Cookies2.remove('studentPassword', { path: workshop_path });
  Cookies2.remove('active_workshop_path');
  Cookies2.remove('active_workshop_path', { path: '/' });
  Cookies2.remove('active_workshop_path', { path: workshop_path });
  Cookies2.remove('bakedCookies');
  Cookies2.remove('bakedCookies', { path: '/' });
  Cookies2.remove('bakedCookies', { path: workshop_path });
  resetVisuals();
  if (typeof resetWorkshopFooter === 'function') {
    resetWorkshopFooter();
  }
}

function replaceClassText() {
  console.log('Replacing span text for seat configuration...');
  console.log('Setting Student Number: ' + Cookies2.get("userid"));
  console.log('Setting Workshop Domain: ' + Cookies2.get("domain"));
  console.log('Setting Workshop ID: ' + Cookies2.get("prefix"));
  console.log('Setting GitLab FQDN: ' + Cookies2.get("gitlab_fqdn"));
  console.log('Setting Student Password: ' + Cookies2.get("studentPassword"));
  jQuery("span.domain").html(Cookies2.get("domain"));
  jQuery("span.userid").html(Cookies2.get("userid"));
  jQuery("span.prefix").html(Cookies2.get("prefix"));
  jQuery("span.prefix").html(Cookies2.get("gitlab_fqdn"));
  if (Cookies2.get("studentPassword")){
    jQuery("span.studentPassword").html(Cookies2.get("studentPassword"));
  }
  else {
    jQuery("span.studentPassword").html('Password provided by Workshop Proctor');
  }
}

function replacementSwitch(inputTxt) {
  switch (inputTxt) {
    case "VAR_REP_WORKSHOP_ID":
      return Cookies2.get("prefix");
    case "VAR_REP_WORKSHOP_DOMAIN":
      return Cookies2.get("domain");
    case "VAR_REP_STUDENT_NUMBER":
      return Cookies2.get("userid");
    case "VAR_REP_GITLAB_FQDN":
      return Cookies2.get("gitlab_fqdn");
    case "VAR_REP_STUDENT_PASSWORD":
      return Cookies2.get("studentPassword");
  }
}

//==========================================================================
// Figure Group Image Processing

function generatedFigureGroups() {
  jQuery('.figureImageSet.unbuilt').each(function(index, element) {
    //var figureCount = jQuery(element).find('figure.kemo-figure').length;

    jQuery(element).find('figure.kemo-figure').each(function (iindex, eelement) {
      jQuery(eelement).attr('data-fc-index-num', index);
      jQuery(eelement).attr('data-f-index-num', iindex);
      jQuery(element).find('.figCountHolder').append('<div data-fig-id="' + iindex +'"></div>');
    });
    jQuery(element).find('figure.kemo-figure').first().addClass('active');
    jQuery('.figureImageSet .figCountHolder').find(">:first-child").addClass('active');
    
    jQuery(element).removeClass('unbuilt');
  });
  jQuery('.figureImageSet .figCountHolder').on('click', 'div', function(e) {
    e.preventDefault();
    jQuery(this).parent().parent().parent().parent().find('.figCountHolder div, .figureImageSet figure').removeClass('active');
    jQuery(this).addClass('active');
    var fID = jQuery(this).attr('data-fig-id');
    jQuery(this).parent().parent().parent().find('.figImageHolder figure[data-f-index-num="' + fID +'"]').addClass('active');
  });
}

//==========================================================================
// Tab Generation Processing

function generatedTabs() {
  jQuery('.tabcontainer.unbuilt').each(function(index, element) {
    jQuery(element).find('.tab_item').each(function (iindex, eelement) {
      jQuery(eelement).attr('data-tc-index-num', index);
      jQuery(eelement).attr('data-t-index-num', iindex);
      var tab_title = jQuery(eelement).attr('data-title');
      jQuery(element).find('.tabbuttons').append('<button class="w3-bar-item w3-button" data-t-id="' + iindex + '" data-tc-id="' + index + '">' + tab_title + '</button>');
    });
    jQuery(element).find('.tabbuttons').append('<button class="w3-bar-item w3-button w3-close-button">X</button>');
    jQuery(element).removeClass('unbuilt');
  });
  jQuery('.tabcontainer').on('click', '.tabbuttons button', function(e) {
    e.preventDefault();
    var tID = jQuery(this).attr('data-t-id');
    var tcID = jQuery(this).attr('data-tc-id');
    jQuery(this).parent().addClass('hasOpen');
    jQuery('.tabcontainer .tabbuttons button[data-tc-id="'+ tcID +'"]').removeClass('active');
    jQuery(this).addClass('active');
    jQuery('.tabcontainer .tabcontent .tab_item[data-tc-index-num="'+ tcID +'"]').removeClass('open');
    jQuery('.tabcontainer .tabcontent .tab_item[data-tc-index-num="'+ tcID +'"][data-t-index-num="'+ tID +'"]').addClass('open');
  });
  jQuery('.tabcontainer').on('click', '.w3-close-button', function(e) {
    e.preventDefault();
    jQuery(this).parent().children().removeClass('active');
    jQuery(this).parent().parent().find('.tabcontent .tab_item.open').removeClass('open');
    jQuery(this).parent().removeClass('hasOpen');
    jQuery(this).removeClass('active');
  });
}

//==========================================================================
// Activity Processing

jQuery(document).ready(function() {
  //showLoadingScreen();
  readCookiesAndSetVisual();
  replaceClassText();
  generatedFigureGroups();
  generatedTabs();
  jQuery('.mainWorkshopListing .pf-l-grid__item').click(function(event) {
    window.location.href = jQuery('a.view-workshop-url', this).attr('href');
  });
  
  jQuery(".generatedText, .generatedLink, code").each(function(index, element) {
    var searchBody = jQuery(element).html();
    var searchHref = jQuery(element).attr('data-original-href');
    var searchText = jQuery(element).attr('data-original-text');
    var searchInnerText = jQuery(element).text();
    jQuery(element).html(searchBody.replace(/VAR_REP_WORKSHOP_ID|VAR_REP_WORKSHOP_DOMAIN|VAR_REP_STUDENT_NUMBER|VAR_REP_GITLAB_FQDN|VAR_REP_STUDENT_PASSWORD/gi, function(x) {
      return replacementSwitch(x);
    }));
    if (searchHref) {
      jQuery(element).attr('href', searchHref.replace(/VAR_REP_WORKSHOP_ID|VAR_REP_WORKSHOP_DOMAIN|VAR_REP_STUDENT_NUMBER|VAR_REP_GITLAB_FQDN|VAR_REP_STUDENT_PASSWORD/gi, function(x) {
        return replacementSwitch(x);
      }));
    }
    if (searchText) {
      jQuery(element).text(searchText.replace(/VAR_REP_WORKSHOP_ID|VAR_REP_WORKSHOP_DOMAIN|VAR_REP_STUDENT_NUMBER|VAR_REP_GITLAB_FQDN|VAR_REP_STUDENT_PASSWORD/gi, function(x) {
        return replacementSwitch(x);
      }));
    }
    if (searchInnerText) {
      jQuery(element).text(searchInnerText.replace(/VAR_REP_WORKSHOP_ID|VAR_REP_WORKSHOP_DOMAIN|VAR_REP_STUDENT_NUMBER|VAR_REP_GITLAB_FQDN|VAR_REP_STUDENT_PASSWORD/gi, function(x) {
        return replacementSwitch(x);
      }));
    }
  });

  jQuery(function() {
    // matchHeight the contents of each .card-pf and then the .card-pf itself
    jQuery(
      '.mainWorkshopListing .pf-l-grid__item > .pf-c-card .card-pf-title'
    ).matchHeight();
    jQuery(
      '.mainWorkshopListing .pf-l-grid__item > .pf-c-card > .card-pf-body'
    ).matchHeight();
    jQuery(
      '.mainWorkshopListing .pf-l-grid__item > .pf-c-card > .card-pf-footer'
    ).matchHeight();
    jQuery('.mainWorkshopListing .pf-l-grid__item > .pf-c-card').matchHeight();
  });

  jQuery(document)
    .on('hide.bs.modal', function() {
      hideLoadingScreen();
    })
    .on('show.bs.modal', function() {
      showLoadingScreen(false);
    });
  jQuery(document).on('click', '.pf-c-modal-box>.pf-c-button', function(e) {
    jQuery(this)
      .parent()
      .modal('hide');
  });

  $('.pf-c-page__sidebar-body').slimScroll({
    height: '100%',
    width: 'var(--pf-c-page__sidebar--Width)',
  });

  // clipboard
  var clipInit = false;
  jQuery('code').each(function() {
      var code = $(this),
          text = code.text();

      if (text.length > 5) {
          if (!clipInit) {
              var text, clip = new ClipboardJS('.copy-to-clipboard', {
                  text: function(trigger) {
                      text = $(trigger).prev('code').text();
                      return text.replace(/^\$\s/gm, '');
                  }
              });

              var inPre;
              clip.on('success', function(e) {
                  e.clearSelection();
                  inPre = $(e.trigger).parent().prop('tagName') == 'PRE';
                  $(e.trigger).attr('aria-label', 'Copied to clipboard!').addClass('tooltipped tooltipped-' + (inPre ? 'w' : 's'));
              });

              clip.on('error', function(e) {
                  inPre = $(e.trigger).parent().prop('tagName') == 'PRE';
                  $(e.trigger).attr('aria-label', fallbackMessage(e.action)).addClass('tooltipped tooltipped-' + (inPre ? 'w' : 's'));
                  $(document).one('copy', function(){
                      $(e.trigger).attr('aria-label', 'Copied to clipboard!').addClass('tooltipped tooltipped-' + (inPre ? 'w' : 's'));
                  });
              });

              clipInit = true;
          }

          code.after('<span class="copy-to-clipboard" title="Copy to clipboard" />');
          code.next('.copy-to-clipboard').on('mouseleave', function() {
              $(this).attr('aria-label', null).removeClass('tooltipped tooltipped-s tooltipped-w');
          });
      }
  });

  hideLoadingScreen();
});
