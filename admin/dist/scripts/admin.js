!function(e,t){e.fn.wp_editor=function(t){if(e(this).is("textarea")||console.warn("Element must be a textarea"),"undefined"!=typeof tinyMCEPreInit&&"undefined"!=typeof QTags&&"undefined"!=typeof wizhi_vars||console.warn("js_wp_editor( $settings ); must be loaded"),!e(this).is("textarea")||"undefined"==typeof tinyMCEPreInit||"undefined"==typeof QTags||"undefined"==typeof wizhi_vars)return this;var i={mode:"tmce",mceInit:{theme:"modern",skin:"lightgray",language:"zh",formats:{alignleft:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"left"},deep:!1,remove:"none"},{selector:"img,table,dl.wp-caption",classes:["alignleft"],deep:!1,remove:"none"}],aligncenter:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"center"},deep:!1,remove:"none"},{selector:"img,table,dl.wp-caption",classes:["aligncenter"],deep:!1,remove:"none"}],alignright:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"right"},deep:!1,remove:"none"},{selector:"img,table,dl.wp-caption",classes:["alignright"],deep:!1,remove:"none"}],strikethrough:{inline:"del",deep:!0,split:!0}},relative_urls:!1,remove_script_host:!1,convert_urls:!1,browser_spellcheck:!0,fix_list_elements:!0,entities:"38,amp,60,lt,62,gt",entity_encoding:"raw",keep_styles:!1,paste_webkit_styles:"font-weight font-style color",preview_styles:"font-family font-size font-weight font-style text-decoration text-transform",wpeditimage_disable_captions:!1,wpeditimage_html5_captions:!1,plugins:"charmap,hr,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpemoji,wpeditimage,wpgallery,wptextpattern,wplink,wpdialogs,wpview,image,wpembed",content_css:wizhi_vars.includes_url+"css/dashicons.css,"+wizhi_vars.includes_url+"js/mediaelement/mediaelementplayer.min.css,"+wizhi_vars.includes_url+"js/mediaelement/wp-mediaelement.css,"+wizhi_vars.includes_url+"js/tinymce/skins/wordpress/wp-content.css"+wizhi_vars.cms_url+"wizhi-cms/front/dist/styles/main.css",wp_lang_attr:"zh-CN",selector:"#wid",resize:"vertical",menubar:!1,wpautop:!0,indent:!1,toolbar1:"bold,italic,strikethrough,bullist,numlist,blockquote,hr,alignleft,aligncenter,alignright,link,unlink,wp_more,spellchecker,fullscreen,wp_adv",toolbar2:"formatselect,underline,alignjustify,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help",toolbar3:"",toolbar4:"",tabfocus_elements:":prev,:next",body_class:"typo wizhi wid",wp_autoresize_on:!0}},n=new RegExp("wid","g");tinyMCEPreInit.mceInit.wid&&(i.mceInit=tinyMCEPreInit.mceInit.wid);var s=e.extend(!0,i,t);return this.each(function(){if(e(this).is("textarea")){var t=e(this).attr("id");e.each(s.mceInit,function(i,a){"string"==e.type(a)&&(s.mceInit[i]=a.replace(n,t))}),s.mode="tmce"==s.mode?"tmce":"html",tinyMCEPreInit.mceInit[t]=s.mceInit,e(this).addClass("wp-editor-area").show();var i=this;if(e(this).closest(".wp-editor-wrap").length){var a=e(this).closest(".wp-editor-wrap").parent();e(this).closest(".wp-editor-wrap").before(e(this).clone()),e(this).closest(".wp-editor-wrap").remove(),i=a.find('textarea[id="'+t+'"]')}var r=e('<div id="wp-'+t+'-wrap" class="wp-core-ui wp-editor-wrap '+s.mode+'-active" />'),o=e('<div id="wp-'+t+'-editor-tools" class="wp-editor-tools hide-if-no-js" />'),d=e('<div class="wp-editor-tabs" />'),l=e('<a id="'+t+'-html" class="wp-switch-editor switch-html" data-wp-editor-id="'+t+'">Text</a>'),c=e('<a id="'+t+'-tmce" class="wp-switch-editor switch-tmce" data-wp-editor-id="'+t+'">Visual</a>'),p=e('<div id="wp-'+t+'-media-buttons" class="wp-media-buttons" />'),h=e('<a href="#" id="insert-media-button" class="button insert-media add_media" data-editor="'+t+'" title="Add Media"><span class="wp-media-buttons-icon"></span> Add Media</a>'),m=e('<div id="wp-'+t+'-editor-container" class="wp-editor-container" />'),w=!1;h.appendTo(p),p.appendTo(o),l.appendTo(d),c.appendTo(d),d.appendTo(o),o.appendTo(r),m.appendTo(r),m.append(e(i).clone().addClass("wp-editor-area")),0!=w&&e.each(w,function(){e('link[href="'+this+'"]').length||e(i).before('<link rel="stylesheet" type="text/css" href="'+this+'">')}),e(i).before('<link rel="stylesheet" id="editor-buttons-css" href="'+wizhi_vars.includes_url+'css/editor.css" type="text/css" media="all">'),e(i).before(r),e(i).remove(),new QTags(t),QTags._buttonsInit(),switchEditors.go(t,s.mode),e(r).on("click",".insert-media",function(t){var i=e(t.currentTarget),n=i.data("editor"),s={frame:"post",state:"insert",title:wp.media.view.l10n.addMedia,multiple:!0};t.preventDefault(),i.blur(),i.hasClass("gallery")&&(s.state="gallery",s.title=wp.media.view.l10n.createGalleryTitle),wp.media.editor.open(n,s)})}else console.warn("Element must be a textarea")})}}(jQuery,window),jQuery(document).ready(function(e){e(".tinymce").wp_editor(),e("#frm-abdesc").wp_editor(),e("#frm-abc").wp_editor(),e(".add-row").on("click",function(){var t=e(this).parent().find("input:last").clone(!0);return t.addClass("new-row"),t.insertAfter(e(this).parent().find("input:last")),!1}),e(".remove-row").on("click",function(){return e(this).parent().find("input:last").remove(),!1});var t=!0,i=wp.media.editor.send.attachment;e(".wizhi_upload_button").click(function(n){var s=(wp.media.editor.send.attachment,e(this));return t=!0,wp.media.editor.send.attachment=function(e,n){return t?void s.parent().parent().find("input[type=text]").val(n.url):i.apply(this,[e,n])},wp.media.editor.open(s),!1}),e(".add_media").on("click",function(){t=!1})}),jQuery(document).ready(function(e){e("body").on("click",".wizhi_modal_tab[data-for]",function(){var t=e(this).parents(".mce-container:eq(0)"),i=e(this).parents(".wizhi_modal_tabs:eq(0)");i.siblings().hide(),t.find("#"+e(this).attr("data-for")).show(),i.find(".wizhi_modal_tab").removeClass("active"),e(this).addClass("active")}),e("body").on("hover",'.shortcode-list-item[data-shortcode="wizhi_get_more_shortcodes"]',function(t){e(this).attr("data-shortcode","__wizhi_get_more_shortcodes")})});
//# sourceMappingURL=admin.js.map
