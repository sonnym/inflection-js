if(!String.prototype.pluralize)String.prototype.pluralize=function(plural)
{
  var str=this;
  if(plural)str=plural;
  else
  {
    var uncountable_words=['equipment','information','rice','money','species','series','fish','sheep','moose','deer'];
    var uncountable=false;
    for(var x=0;!uncountable&&x<uncountable_words.length;x++)uncountable=(uncountable_words[x].toLowerCase()==str.toLowerCase());
    if(!uncountable) 
    {
      var rules=[
        [new RegExp('(m)an$','gi'),'$1en'],
        [new RegExp('(pe)rson$','gi'),'$1ople'],
        [new RegExp('(child)$','gi'),'$1ren'],
        [new RegExp('(ax|test)is$','gi'),'$1es'],
        [new RegExp('(octop|vir)us$','gi'),'$1i'],
        [new RegExp('(alias|status)$','gi'),'$1es'],
        [new RegExp('(bu)s$','gi'),'$1ses'],
        [new RegExp('(buffal|tomat)o$','gi'),'$1oes'],
        [new RegExp('([ti])um$','gi'),'$1a'],
        [new RegExp('sis$','gi'),'ses'],
        [new RegExp('(?:([^f])fe|([lr])f)$','gi'),'$1$2ves'],
        [new RegExp('(hive)$','gi'),'$1s'],
        [new RegExp('([^aeiouy]|qu)y$','gi'),'$1ies'],
        [new RegExp('(x|ch|ss|sh)$','gi'),'$1es'],
        [new RegExp('(matr|vert|ind)ix|ex$','gi'),'$1ices'],
        [new RegExp('([m|l])ouse$','gi'),'$1ice'],
        [new RegExp('^(ox)$','gi'),'$1en'],
        [new RegExp('(quiz)$','gi'),'$1zes'],
        [new RegExp('s$','gi'),'s'],
        [new RegExp('$','gi'),'s']
      ];
      var matched=false;
      for(var x=0;!matched&&x<=rules.length;x++)
      {
        matched=str.match(rules[x][0]);
        if(matched)str=str.replace(rules[x][0],rules[x][1]);
      }
    }
  }
  return str;
};
