CKEDITOR.plugins.add( 'status_ok', {
    icons: 'ok',
    init: function( editor ) {
        editor.addCommand( 'status ok', {
            
                exec: function( editor ) {

                editor.insertHtml( '<div class="messages status">&nbspЗамените&nbspтекст&nbspсообщения&nbsp</div>' );
            }
        });
        editor.ui.addButton( 'status ok', {
            label: 'Insert status ok',
			icon : this.path + 'icons/ok.png',
            command: 'status ok',
            toolbar: 'insert'
        });
    }
});