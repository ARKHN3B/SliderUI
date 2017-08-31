/**
 * name: SliderUI
 * by: Melvin, Ben
 * version: 1.0.0
 * Github: 
 *   - zoukilama
 *   - ARKHN3B
 * mail:
 *   - zouki.dev@gmail.com
 */
class SliderUI {
    constructor(config=null) {
        this.config = config;
        this.style(this.config);
        this.action(config);
    }
    style(config=null) {
        $(config.sliderDiv).css(config.theme);
        $(config.imageSelector).css({
            "width": "100%",
            "height": config.theme.height
        });
    }
    action(config) {
        var $currentItem = $(config.imageSelector).first();
        var mouse_flag = true;
        $(config.imageSelector).hide();
        $currentItem.show();
        

        $(config.imageSelector).click(function() {
            if(mouse_flag==false) {
                return;
            }
            mouse_flag=false;
            $currentItem.fadeOut(300, function(){
                
                $currentItem = $currentItem.next();
                if( $currentItem.length == 0 ) {
                    $currentItem = $(config.imageSelector).first();
                }
                
                $currentItem.fadeIn(300, function(){
                    mouse_flag = true;
                });
                
            })
        });
    }
}