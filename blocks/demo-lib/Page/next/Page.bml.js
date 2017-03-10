import 'beast';

import 'css!demo-lib.Page';

Beast
.decl('Page', {
    tag: 'span',
    expand: function() {
        this.append('Page is invoked');
    }
});
