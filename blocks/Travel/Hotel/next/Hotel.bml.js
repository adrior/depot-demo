import 'beast';

import 'css!Travel.Hotel';

Beast
.decl('Hotel__photo', {
    tag: 'img',
    expand: function() {
        this.domAttr('src', this.text());
    }
});
