//Specific code V1.0
var config = ['MED','Mkp Octopia','https://octopia.com/wp-content/themes/octopia/img/logo-white.svg','#001944','#FFFFFF'];
var clientname;
var clientlogo;
var clientcolor;
var clientfont;
var framedone = false;
var count = 0;
var order = 'Xyz';
var client = 'Xyz';
var channel = 'Mkp2';
var content;
var portal;
var vendor;
var timer;
var frame;
var run = true;
var icons = ["https://logopond.com/avatar/13871/avatar.png",
 "https://logopond.com/avatar/13946/avatar200.jpg"];

window.addEventListener("DOMContentLoaded", (event) => {
	timerAlert();
	event.preventDefault;
	event.stopPropagation();
    if(localStorage.getItem("clientName")){
        clientname = localStorage.getItem("clientName");
        if(localStorage.getItem("clientLogo")) clientlogo = localStorage.getItem("clientLogo");
        else clientlogo = config[2];
        if(localStorage.getItem("clientColor")) clientcolor = localStorage.getItem("clientColor");
        else clientcolor = config[3];
        if(localStorage.getItem("clientFont")) clientfont = localStorage.getItem("clientFont");
        else clientfont = config[4];
        if(document.querySelector('#pbiAppPlaceHolder')){
            portal = 'pbi';
        }else if(document.querySelector('main.internal')){
            portal = 'osp';
        }else portal = 'osm';
        insertStyle();
        replaceData();
        document.body.addEventListener('DOMSubtreeModified', timerData);
    }
    document.addEventListener('keydown', catchKey);
});

function insertStyle(){
	content = document.body.innerText; 
	var style;
	if(portal == 'pbi'){
	    //changeProperty('.appLogo', 'src'); 
	    style = '#navBar{display:none;}' +
	    '#discussInTeamsBtn{display:none;}' +
	    '#appNavPane, .appBarContent{background:' + clientcolor + '!important;}' +
	    '.backBtn{display:none !important;}' +
	    '.appDescription{display:none !important;}' +
	    '.appThemeable{background:#FFFFFF !important;}' +
	    '.appThemeable button:hover{background:#FFFFFF !important;}' +
	    '.appThemeable button span, .appThemeable .mat-icon::before{color:' + clientfont + ' !important;}' +
	    '.appLogo{position: absolute; left: 10px; top: 0; width: 100px !important;}' +
	    'button span{color:' + clientfont + ' !important;}' +
	    '.appNav.appThemeable .itemRow{color:' + clientfont + ' !important; border-radius: 0 20px 20px 0; margin: 0 !important; margin-right:20px !important; height: 30px; padding:0 !important; padding-top:5px !important;}' +
	    '.appNav.appThemeable .itemRow.selected{background:#FFFFFF !important; color:' + clientfont + ' !important; border-radius: 0 20px 20px 0; margin: 0 !important; margin-right:20px !important; height: 30px; padding:0 !important; padding-top:5px !important;}' +
	    '.appNav.appThemeable .itemRow:hover{background:#FFFFFF !important; color:' + clientfont + ' !important; border-radius: 0 20px 20px 0; margin: 0 !important; margin-right:20px !important; height: 30px; padding:0 !important; padding-top:5px !important;}'
	    ;
	}else if(portal == 'osp'){
        style='iframe{display:none;} ' +
        'header .header{background:' + clientcolor + '!important; color:'+ clientfont +' !important;}' +
        '.hTop a{color:'+ clientfont +' !important;}' +
        '.hNav{background:#F5F5F5 !important; height:35px;}' +
        '.dropdown-menu-right{background:#F5F5F5 !important;}' +
        '.dropdown-menu-right a{color:#000000 !important;}' +
        '.subNav .dropdown-menu a:hover{background:'+ clientcolor + '; color:'+ clientfont +' !important;}' +
        '.navbar-default .navbar-nav > li > a{color:#000000 !important; line-height:35px; border-radius: 0 0 10px 10px;}' +
        '.navbar-default .navbar-nav > .open > a{background:' + clientcolor + '!important; color:#FFFFFF !important;}' +
        '.navbar-default .navbar-nav > li > a:hover{background:' + clientcolor + '!important; color:#FFFFFF !important;}' +
		'main.internal, #discussion-form{min-height: calc(100vh - 166px);}' +
		'#Recommendation-alert-div{opacity:0;}' +
		'.sale-channel-logo{display:none;}' +
		'#ads-header-container{display:none;}' +
		'.hNavOptions{display:none;} ' +
		'.m_log{position:fixed; top:20px; left:5px; width:25px; overflow:hidden; height:23px}' +
		'.usabilla_live_button_container, #userlane-react-root, .usabilla_live_button_container{display:none!important;} ' +
		'#card-nb-views{visibility:hidden} ' + 
		'.panel-collapse .row .col-xs-6.text-bold{filter:blur(5px);}' +
		'section .container .row .col-md-6>h2{visibility:hidden;margin:10px;}' +
		'.discussion-thread-header-info-actions img{display:none;} ' +
		'.logoCDS:first-letter{color:#293847};' +
		'.sale-channel-logo{display:none;}';  
		vendor = document.querySelector('.hWelcome strong').childNodes[0].textContent.trim();
		var logout = document.querySelector('.hNavOptions .navbar a');
		logout.className = "m_log";
		document.querySelector('.header').appendChild(logout); 
		changeTexte('#orderListId .tXLarge .tablePdtTitle a', 'XYZDemo1', 'Demo');
		changeTexte("#orderListId .tXLarge .tablePdtTitle div", 'Nom du client : Client Demo', 'Demo', 'Nom du client');
		changeTexte("#orderListId .tXLarge .tablePdtTitle div", 'Customer name : Client Demo', 'Demo', 'Customer name');
		changeProperty('.salesChannelContent .logo', 'src');
	}else if(portal == 'osm'){
		changeProperty('.logo', 'src'); 
		style = '.header{background:' + clientcolor + '; height:50px; padding-top:0;}' +
		'.forceCommunityGlobalNavigation .slds-list__item a{color:' + clientfont + '}' +
		'#pick-language{background:' + clientcolor + '; color:' + clientfont + ' !important;}' +
		'.logo{height:40px; margin-top: 5px;}' +
		'.nav-pills > li{display:inline-block; width:22%; margin:0px 15px;}' +
		'.nav > li > a {color:#012060 !important; margin:0; border: 1px solid #012060; border-radius:50px;}' +
		'.nav-pills > li.success > a{background: #FFFFFF url("https://www.icone-png.com/png/16/16237.png") right 10px center no-repeat !important;color:#000000 !important;}' +
		'.nav-pills > li.active > a{background:' + clientcolor +' !important; border:0; color:' + clientfont + ' !important; font-weight: bold;}' +
		'.nav > li > a:hover{background:' + clientcolor +' !important; border:0; color:' + clientfont + ' !important;}' +
		'.progress-bar{background:#fb9730 !important;}' +
		'.col-xs-12 span b{color:#fb9730 !important;}' +
		'.col-md-12 .btn-default, .col-md-12 .btn-primary, .bg-light-grey .btn-primary{background:' + clientcolor + ' !important; color:' + clientfont + ' !important; border-radius: 50px; border: 0;}' +
		'.cHeaderTop{position: absolute; right:0; background:transparent !important;height: 50px;}' +
		'.cLogo{display:none;}' +
		'div[data-item-id="9a301c0c-bf2e-4ee1-90e0-58daeb5bdfd4"]{display:none;}' +
		'div[data-aura-rendered-by="299:0"]{display:none;}' +
		'.pipelineHeader{background:' + clientcolor + ' !important; color:' + clientfont + ' !important;}' +
		'.forceCommunityGlobalNavigation{background-color:' + clientcolor +' !important;}' +
		'.cCenterPanel{margin-top:-10px;}';
	}
    var elt = document.createElement('style');
    elt.innerHTML = style;
    document.body.appendChild(elt);
}

function timerAlert(){
	if(window.parent === window && ! document.getElementById('m_alertbox')){
	    var elt = document.createElement('div');
		elt.style='cursor:pointer;position:fixed;bottom:10px;right:10px;width:330px;border-radius:10px;background:red;color:#FFFFFF;padding:10px;';
		elt.innerHTML = '<b>Le mode personnalisé est activé !</b><br><br>Ctrl+Y pour appliquer le mode par défaut.<br>Ctrl+M pour appliquer un mode personnalisé.<br>Ctrl+B pour copier la personnalisation actuelle.<br>Ctrl+I pour appliquer la personnalisation copiée.<br>Ctrl+Q pour quitter le mode personnalisé.';
		elt.onclick = function() {this.remove();}
		elt.id='m_alertbox';
		window.document.body.appendChild(elt);
		setTimeout(()=>{elt.remove();}, 15000);
	}
}

function timerData(){
	count++;
    clearTimeout(timer);
    timer = setTimeout(replaceData, 100);
}

function replaceData(){
	//var run = false;
	var filters = [];
    if(content != document.body.innerText){
        content = document.body.innerText;
        run = true;
    }else run = false;
    if(run){
    	console.log('replaceData loop : ' + count);
    	if(portal == 'osp'){
    		changeTexte('#react-app .discussion-table-item .discussion-table-item-row1 span.discussion-table-item-ellipsis', 'Client Demo', 'Demo');
            changeTexte('.discussion-table-container .cell-sender span', 'Client Demo', 'Demo');
    	    client = findText('c');
    	    order = findText('o');
    	    console.log('client' + client);
    	    filters = [[['CDiscount France','Cdiscount'], clientname],
    	    [['Géant Casino France','Géant Casino','Casino'], 'Mkp2'],
    	    [['Cdon', 'Cdon.com'], 'Mkp3'],
    	    [[vendor], 'Demo VENDOR'],
    	    [[client], 'Client Demo'],
    	    [[order], 'XYZDemo123456']];
    	}else if(portal == 'osm'){
            checkFrames();
            filters = [[['Mkp Octopia','Octopia'], clientname]];
    	}else if(portal == 'pbi'){
    	    changeProperty('.appLogo', 'src'); 
    	    filters = [[['Casino'], clientname]];
    	}
    	for (var i = 0; i < filters.length; i++){
    		var filter = filters[i];
    		var regex = new RegExp(filter[0].join('|'), 'gi');
			if(regex.test(document.body.innerText)){
				replace(document.body, new RegExp(filter[0].join('|'), 'gi'), filter[1]);
			}
    	}
    }
}

function findText(type){
	if(type == 'c'){
		if(document.querySelector('.sender-client')){
		    return client = document.querySelector('.sender-client').textContent;
		}else if(document.querySelector('.message-sender-client')){
		    return document.querySelector('.message-sender-client').textContent;
		}else return 'xyz123';
	}else if (type == 'o'){
        if(document.querySelector('.order-detail')){
		    return document.querySelector('.order-detail div:first-child div:nth-child(2)').textContent;
	    }else if (document.querySelector('.order-detail-content')){
		    return document.querySelector('.order-detail-content div:first-child div:nth-child(2) .info-value').textContent;
	    }else return 'xyz123';
	}
}

function checkFrames(){
    var frames = document.getElementsByTagName('iframe');
	for (var i = 0; i < frames.length; i++) {
	  //frames[i].document.addEventListener('load', test, true);
	  var iframe = frames[i].contentWindow;
	  if(iframe && iframe.document.body) changeFrame(iframe);
	}  
}

function changeFrame(iframe){
	var style = '.fileUpload{background:' + clientcolor +' !important; color:' + clientfont + ' !important; border-radius:50px;border:0;}' +
	'canvas{filter:invert(0.3); border-radius:20px; border:0;}' +
	'.dashGridItem{background:#f3f2f2 !important; border:1px solid #dddbda !important;}' +
	'.dashGridItem .gridHeader{color:#000000 !important;}' +
	'.dashGridItem .enabledLink{color:#54698d !important;}' +
	'.wave-table-cell-text{color:#54698d !important;}' +
	'.wave-table-cell-text a{color:#000000 !important;}' +
	'.data-grid-4{border:1px solid #dddbda !important;}' +
	'.data-grid-table-ctr .data-grid-header-row{background:#505765 !important}';
	var elt = iframe.document.createElement('style');
	elt.innerHTML = style;
	iframe.document.body.appendChild(elt);
}

function replace(element, from, to) {
    if (element.childNodes.length) {
        element.childNodes.forEach(child => replace(child, from, to));
    }else{
        const cont = element.textContent;
        if(cont) element.textContent = cont.replace(from, to);
    }
}

function changeTexte(css, txt, test, check){
    if(document.querySelector(css)){
        const elts = document.querySelectorAll(css);
        for (i = 0; i < elts.length; ++i) {
            if(check  && ! elts[i].textContent.includes(check)) continue;            
            if(test){
                if(! elts[i].textContent.includes(test)){
                    elts[i].textContent = txt + (i+10);
                }
            }else{
                elts[i].textContent = txt + (i+10);
            }
        } 
    }
}

function changeProperty(css, type){
    if(document.querySelector(css)){
        const elts = document.querySelectorAll(css);
        for (i = 0; i < elts.length; ++i) {
            var source = (clientlogo && i==0) ?  clientlogo : icons[i];
            elts[i].setAttribute(type, source);
        } 
    }
}

function insertConfig(conf){
	if(conf == 'del'){
        localStorage.removeItem("clientName");
        localStorage.removeItem("clientLogo"); 
        localStorage.removeItem("clientColor");
        localStorage.removeItem("clientFont");   
        location.reload(true);
	}else{
        if(typeof conf === 'string'){
        	if(conf.substring(0, 3) == 'MED') conf = conf.split(';');
	    }
	    if(typeof conf === 'object'){
            localStorage.setItem("clientName", conf[1]);
			localStorage.setItem("clientLogo", conf[2]);
			localStorage.setItem("clientColor", conf[3]);
			localStorage.setItem("clientFont", conf[4]);
			location.reload(true);
	    }
	}
}


function catchKey(e){
    if ((e.key == 'm' || e.key == 'M' ) && (e.ctrlKey || e.metaKey)){
        e.preventDefault();
        let name = prompt("Avez-vous un nom pour le prospect ?");
        if (name) localStorage.setItem("clientName", name);
        else localStorage.removeItem("clientName");  
        let logo = prompt("Avez-vous un logo pour le prospect ?");
        if (logo) localStorage.setItem("clientLogo", logo);
        else localStorage.removeItem("clientLogo"); 
        let color = prompt("Avez-vous une couleur pour le prospect ?");
        if (color) localStorage.setItem("clientColor", color);
        else localStorage.removeItem("clientColor");  
        let font = confirm('La couleur de fond est elle claire ?');
        if (font) localStorage.setItem("clientFont", '#000000');
		else localStorage.removeItem("clientFont"); 		
        location.reload(true);              
    }else if((e.key == 'y' || e.key == 'Y' ) && (e.ctrlKey || e.metaKey)){ 
        insertConfig(config);  
    }else if((e.key == 'q' || e.key == 'Q' ) && (e.ctrlKey || e.metaKey)){
        insertConfig('del');
    }else if((e.key == 'b' || e.key == 'B' ) && (e.ctrlKey || e.metaKey)){
        var conf = 'MED;' + clientname + ';' + clientlogo + ';' + clientcolor + ';' + clientfont;
	navigator.clipboard.writeText(conf).then(
		function() {alert("La configuration est enregistrée !");}, 
		function() {alert("La configuration n'est pas enregistrée !");});
    }else if((e.key == 'i' || e.key == 'I' ) && (e.ctrlKey || e.metaKey)){
    	navigator.clipboard.readText().then(clipText =>insertConfig(clipText));
    }
}

function checkFrames2(){
    var frames = ['ENT','IDT','RIB'];
    for(var i=0; i<3; i++){
        if(document.getElementById('frame_'  +frames[i])){
            frame = document.getElementById('frame_'+frames[i]).contentWindow;
            var elt = frame.document.getElementsByClassName('fileUpload')[0];
            if(elt) elt.style.cssText = 'background:' + clientcolor +' !important;border-radius:50px;border:0;';
        }
    }
}