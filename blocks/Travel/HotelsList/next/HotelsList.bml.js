import 'beast';
import 'Travel.Hotel';

import 'css!Travel.HotelsList';

Beast
.decl('HotelsList', {
    expand: function() {
    }
})

.decl('HotelsList__hotel', {
    expand: function() {
        this.implementWith(<Hotel>{this.get()}</Hotel>)
    }
})
