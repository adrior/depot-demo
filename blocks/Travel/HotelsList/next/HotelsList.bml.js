import 'beast';
import 'Travel.Hotel';

import 'css!Travel.HotelsList';

Beast
.decl('HotelsList', {
    expand: function() {
        console.log('asfdg');
        this.append('hhh')
    }
})

.decl('HotelsList__hotel', {
    expand: function() {
        this.implementWith(<Hotel/>)
    }
})
