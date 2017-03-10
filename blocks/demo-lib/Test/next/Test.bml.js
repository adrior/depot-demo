import 'beast';

import 'css!demo-lib.Test';

Beast
.decl('Test', {
    expand: function() {
        this.append('Test is invoked');
    }
});
