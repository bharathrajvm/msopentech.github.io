/*jshint devel:true, smarttabs:true */jQuery(document).ready(function(){function e(e){var t=e.length;return t>=1&&t<10?"font-size : 24px":t>=10&&t<12?"font-size : 18px":t>=12&&t<30?"font-size : 14px":t>=30&&t<40?"font-size : 11px":"font-size : 12px"}function t(e){var t=e.length;return t>=1&&t<10?"padding-top : 14px":"padding-top: 5px"}function n(){var e=["#e84523","#a92e8c","#d77bae","#b92625","#fdb800","#de5e21","#f6e800"],t="";t=e[Math.round(Math.random()*6)];return t}function r(){var e=["left","top","right","bottom"],t=e[Math.round(Math.random()*3)];return t}function i(e){a=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(e);if(a)return new Date(Date.UTC(+a[1],+a[2]-1,+a[3],+a[4],+a[5],+a[6]));if(e.slice(0,5)==="Date("&&e.slice(-1)===")"){var t=new Date(e.slice(5,-1));if(t)return t}return new Date}$.ajax({type:"GET",url:"https://api.github.com/users/msopentech/repos",dataType:"json",success:function(n){for(var r in n){var i=n[r],s=e(n[r].name),o=t(n[r].name);$(".repository-thumbs").append("<div class='repo-single-thumb'><p>Watchers: <span>"+n[r].watchers+"</span></p><p>Forks: <span>"+n[r].forks+"</span></p><p>Language: <span>"+n[r].language+"</span></p><h2 style=' "+o+"'><a href='"+n[r].html_url+"' target='_blank' style='"+s+";'>"+n[r].name+"</a></h2></div>")}$("#repo_count").append("Total Repos: "+n.length)}})});