/**
 * Created by sun on 5/9/16.
 *
 * A float sidebar.
 */

$(function() {
    var $sidebar    = $("#sidebar"),
        $window     = $(window),
        $topPadding = 15;
    var $func       = function() {
        var $pos = $sidebar.position();
        if ($window.scrollTop() > $pos.top - $topPadding)
            $sidebar.css({ marginTop: $window.scrollTop() - $pos.top + $topPadding });
        else
            $sidebar.css({ marginTop: 0 });
    };
    $window.scroll($func);
    $window.resize($func);
});
