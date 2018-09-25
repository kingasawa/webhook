 /**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
  // Define changes to default configuration here.
  // For complete reference see:
  // http://docs.ckeditor.com/#!/api/CKEDITOR.config

  // The toolbar groups arrangement, optimized for two toolbar rows.
  config.toolbarGroups = [
    { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
    { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
    { name: 'links' },
    { name: 'insert' },
    { name: 'forms' },
    { name: 'tools' },
    { name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
    { name: 'others' },
    '/',
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
    { name: 'styles' },
    { name: 'colors' },
    { name: 'about' }
  ];

  // Remove some buttons provided by the standard plugins, which are
  // not needed in the Standard(s) toolbar.
  config.removeButtons = 'Underline,Subscript,Superscript';

  // Set the most common block elements.
  config.format_tags = 'p;h1;h2;h3;pre';

  // Simplify the dialog windows.
  config.removeDialogTabs = 'images:advanced;link:advanced';

  config.filebrowserUploadUrl = '/uploader'
};

CKEDITOR.on('instanceReady', function( ev ) {
  var blockTags = ['div','h1','h2','h3','h4','h5','h6','p','pre','li','blockquote','ul','ol',
    'table','thead','tbody','tfoot','td','th'];

  for (var i = 0; i < blockTags.length; i++)
  {
    ev.editor.dataProcessor.writer.setRules( blockTags[i], {
      indent : false,
      breakBeforeOpen : true,
      breakAfterOpen : false,
      breakBeforeClose : false,
      breakAfterClose : true
    });
  }
});

CKEDITOR.on('instanceReady', function(){
  $.each( CKEDITOR.instances, function(instance) {
    CKEDITOR.instances[instance].on("change", function(e) {
      for ( instance in CKEDITOR.instances )
        CKEDITOR.instances[instance].updateElement();
    });
  });
});
