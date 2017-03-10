import 'beast';

import 'css!demo-lib.Page';

Beast
.decl('Page', {
    expand: function() {
        this.append('Page is invoked');
    }
});
