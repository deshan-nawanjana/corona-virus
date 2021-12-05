function getScrollPos() {
	var pos = document.documentElement.scrollTop || document.body.scrollTop;

	var rbn = document.getElementsByClassName('ribbon')[0];
	var btn = document.getElementsByClassName('r_log')[0];

	if(pos == 0) {
		rbn.setAttribute('class', 'ribbon ribbon_top');
		btn.setAttribute('class', 'r_log r_log_top');
	}
	else {
		rbn.setAttribute('class', 'ribbon ribbon_alt');
		btn.setAttribute('class', 'r_log r_log_alt');
	}
}