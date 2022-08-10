require(['gitbook','jquery'],function(gitbook,$){var MAX_SIZE=4,MIN_SIZE=0,BUTTON_ID;var fontState;var THEMES=[{config:'white',text:'White',id:0},{config:'sepia',text:'Sepia',id:1},{config:'night',text:'Night',id:2}];var FAMILIES=[{config:'serif',text:'Serif',id:0},{config:'sans',text:'Sans',id:1}];function getThemes(){return THEMES;}
function setThemes(themes){THEMES=themes;updateButtons();}
function getFamilies(){return FAMILIES;}
function setFamilies(families){FAMILIES=families;updateButtons();}
function saveFontSettings(){gitbook.storage.set('fontState',fontState);update();}
function enlargeFontSize(e){e.preventDefault();if(fontState.size>=MAX_SIZE)return;fontState.size++;saveFontSettings();}
function reduceFontSize(e){e.preventDefault();if(fontState.size<=MIN_SIZE)return;fontState.size--;saveFontSettings();}
function changeFontFamily(configName,e){if(e&&e instanceof Event){e.preventDefault();}
var familyId=getFontFamilyId(configName);fontState.family=familyId;saveFontSettings();}
function changeColorTheme(configName,e){if(e&&e instanceof Event){e.preventDefault();}
var $book=gitbook.state.$book;if(fontState.theme!==0)
$book.removeClass('color-theme-'+fontState.theme);var themeId=getThemeId(configName);fontState.theme=themeId;if(fontState.theme!==0)
$book.addClass('color-theme-'+fontState.theme);saveFontSettings();}
function getFontFamilyId(configName){var configFamily=$.grep(FAMILIES,function(family){return family.config==configName;})[0];return(!!configFamily)?configFamily.id:0;}
function getThemeId(configName){var configTheme=$.grep(THEMES,function(theme){return theme.config==configName;})[0];return(!!configTheme)?configTheme.id:0;}
function update(){var $book=gitbook.state.$book;$('.font-settings .font-family-list li').removeClass('active');$('.font-settings .font-family-list li:nth-child('+(fontState.family+1)+')').addClass('active');$book[0].className=$book[0].className.replace(/\bfont-\S+/g,'');$book.addClass('font-size-'+fontState.size);$book.addClass('font-family-'+fontState.family);if(fontState.theme!==0){$book[0].className=$book[0].className.replace(/\bcolor-theme-\S+/g,'');$book.addClass('color-theme-'+fontState.theme);}}
function init(config){var configFamily=getFontFamilyId(config.family),configTheme=getThemeId(config.theme);fontState=gitbook.storage.get('fontState',{size:config.size||2,family:configFamily,theme:configTheme});update();}
function updateButtons(){if(!!BUTTON_ID){gitbook.toolbar.removeButton(BUTTON_ID);}
BUTTON_ID=gitbook.toolbar.createButton({icon:'fa fa-font',label:'Font Settings',className:'font-settings',dropdown:[[{text:'A',className:'font-reduce',onClick:reduceFontSize},{text:'A',className:'font-enlarge',onClick:enlargeFontSize}],$.map(FAMILIES,function(family){family.onClick=function(e){return changeFontFamily(family.config,e);};return family;}),$.map(THEMES,function(theme){theme.onClick=function(e){return changeColorTheme(theme.config,e);};return theme;})]});}
gitbook.events.bind('start',function(e,config){var opts=config.fontsettings;updateButtons();init(opts);});gitbook.fontsettings={enlargeFontSize:enlargeFontSize,reduceFontSize:reduceFontSize,setTheme:changeColorTheme,setFamily:changeFontFamily,getThemes:getThemes,setThemes:setThemes,getFamilies:getFamilies,setFamilies:setFamilies};});