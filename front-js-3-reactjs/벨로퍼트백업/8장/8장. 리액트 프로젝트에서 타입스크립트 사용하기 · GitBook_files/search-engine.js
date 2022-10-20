require(['gitbook','jquery'],function(gitbook,$){var engine=null;var initialized=false;function setEngine(Engine,config){initialized=false;engine=new Engine(config);init(config);}
function init(config){if(!engine)throw new Error('No engine set for research. Set an engine using gitbook.research.setEngine(Engine).');return engine.init(config).then(function(){initialized=true;gitbook.events.trigger('search.ready');});}
function query(q,offset,length){if(!initialized)throw new Error('Search has not been initialized');return engine.search(q,offset,length);}
function getEngine(){return engine?engine.name:null;}
function isInitialized(){return initialized;}
gitbook.search={setEngine:setEngine,getEngine:getEngine,query:query,isInitialized:isInitialized};});