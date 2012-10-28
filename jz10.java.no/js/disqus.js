// Set to 1 for local debugging
var disqus_developer = 0;

(function() {
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = 'http://javazone.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

(function() {
	var links = document.getElementsByTagName('a');
	var query = '?';
	for(var i = 0; i < links.length; i++) {
  	if(links[i].href.indexOf('#disqus_thread') >= 0) {
	  	query += 'url' + i + '=' + encodeURIComponent(links[i].href) + '&';
	  }
	}
	document.write('<script charset="utf-8" type="text/javascript" src="http://disqus.com/forums/javazone/get_num_replies.js' + query + '"></script>');
})();
